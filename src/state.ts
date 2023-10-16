/**
 * State processing
 */
import {Action, Block, GridCell, Tetromino, Viewport} from "./types.ts";
import {Direction, initialiseGrid, moveTetrominoDown, placeTetrominoOnGrid, RNG, Tetrominos} from "./util.ts";

/**
 * @typedef {Object} State
 * @property {Tetromino} currentTetromino - The currently active Tetromino.
 * @property {Tetromino} nextTetromino - The next Tetromino that will be active.
 * @property {(Tetromino|null)} heldElement - The Tetromino that is currently held.
 * @property {GridCell[][]} grid - The grid of the game.
 * @property {number} score - The current score of the game.
 * @property {number} level - The current level of the game.
 * @property {number} highScore - The highest score achieved in the game.
 * @property {boolean} gameEnd - Whether the game has ended or not.
 * @property {number} speedMultiplier - The speed multiplier of the game.
 * @property {number} speedCount - The current speed count of the game.
 * @property {number} rowsCleared - The number of rows cleared in the game.
 * @property {boolean} usedHold - Whether the hold function has been used or not.
 */
type State = Readonly<{
    currentTetromino: Tetromino,
    nextTetromino: Tetromino,
    heldElement : Tetromino | null,
    grid: GridCell[][],
    score: number,
    level: number,
    highScore: number,
    gameEnd: boolean;
    speedMultiplier: number
    speedCount: number,
    rowsCleared: number,
    usedHold : boolean
}>;

/**
 * The initial state of the game.
 * @type {State}
 */
const initialState: State = {
    currentTetromino: Tetrominos[RNG.randomInt(0, Tetrominos.length - 1)],
    nextTetromino : Tetrominos[RNG.randomInt(0, Tetrominos.length - 1)],
    heldElement : null,
    grid: initialiseGrid(Viewport.CANVAS_WIDTH / Block.WIDTH, Viewport.CANVAS_HEIGHT / Block.HEIGHT),
    score: 0,
    level: 1,
    highScore: 0,
    gameEnd: false,
    speedMultiplier : 10,
    speedCount : 0,
    rowsCleared : 0,
    usedHold : false
} as const;

/**
 * Class representing the game flow.
 * @implements {Action}
 */
class GameFlow implements Action {
    /**
     * Apply the game flow logic to the current state.
     * @param {State} s - The current state of the game.
     * @return {State} The new state of the game.
     */
    apply(s: State): State {
        // Check if the game has ended
        if (s.gameEnd)
            return {
                ...initialState,
                highScore : s.score > s.highScore ? s.score : s.highScore
            }
        // Check if the speed count is greater than or equal to the speed multiplier
        if (s.speedCount >= s.speedMultiplier)
            return moveTetrominoDown(s);

        // Increment the speed countÍ
        return {
            ...s,
            speedCount : s.speedCount + 1
        }
    }
}

/**
 * Class representing the down movement of a Tetromino.
 * @implements {Action}
 */
class Down implements Action {
    /**
     * Apply the down movement to the current state.
     * @param {State} s - The current state of the game.
     * @return {State} The new state of the game.
     */
    apply(s: State): State {
        return moveTetrominoDown(s);
    }
}

/**
 * Class representing the horizontal movement of a Tetromino.
 * @implements {Action}
 */
class Move implements Action {
    /**
     * @param {Direction} direction - The direction of movement.
     */
    constructor(public readonly direction: Direction) {}

    /**
     * Apply the horizontal movement to the current state.
     * @param {State} s - The current state of the game.
     * @return {State} The new state of the game.
     */
    apply(s: State): State {
        // Check for wall collision
        if (collisionDetection(s, this.direction)) return s;

        // Determine the new position
        const newPosition = {
            x: s.currentTetromino.position.x + (this.direction === Direction.RIGHT ? 1 : -1),
            y: s.currentTetromino.position.y
        };

        // Return the new state
        return {
            ...s,
            currentTetromino: {
                ...s.currentTetromino,
                position: newPosition,
            },
        };
    }
}

/**
 * Class representing the rotation of a Tetromino.
 * @implements {Action}
 */
class Rotate implements Action {

    /**
     * Apply the rotation to the current state.
     * @param {State} s - The current state of the game.
     * @return {State} The new state of the game.
     */
    apply(s: State): State {
        const currentRotation = s.currentTetromino.rotation
        const newRotation = currentRotation + 1 < s.currentTetromino.shapes.length ? currentRotation + 1 : 0;

        const newState : State =  {...s,
            currentTetromino : {
                ...s.currentTetromino,
                rotation : newRotation
            }
        };

        return !collisionDetection(newState, Direction.ROTATE) ? newState : s
    }

}

/**
 * Class representing the drop of a Tetromino.
 * @implements {Action}
 */
class Drop implements Action {
    /**
     * Apply the drop to the current state.
     * @param {State} s - The current state of the game.
     * @return {State} The new state of the game.
     */
    apply(s: State): State {
        if (collisionDetection(s, Direction.DOWN)) {
            return moveTetrominoDown(s)
        }
        return this.apply(moveTetrominoDown(s));
    }

}

/**
 * Class representing the hold of a Tetromino.
 * @implements {Action}
 */
class Hold implements Action {
    /**
     * Apply the hold to the current state.
     * @param {State} s - The current state of the game.
     * @return {State} The new state of the game.
     */
    apply(s: State): State {

        if (s.usedHold) return s

        if (!s.heldElement)
            return {
                ...s,
                currentTetromino: s.nextTetromino,
                nextTetromino : Tetrominos[RNG.randomInt(0, Tetrominos.length - 1)],
                heldElement: s.currentTetromino,
                usedHold : true
            };

        return {
            ...s,
            currentTetromino: s.heldElement,
            heldElement: s.currentTetromino,
            usedHold : true

        };
    }

}

/**
 * Detects if there is a collision in the specified direction.
 * @param {State} state - The current state of the game.
 * @param {Direction} direction - The direction of movement.
 * @return {boolean} True if there is a collision, false otherwise.
 */
const collisionDetection = (state: State, direction: Direction) : boolean => {
    const currentRotation = state.currentTetromino.rotation;
    const tetrominoShape = state.currentTetromino.shapes[currentRotation];
    const tetrominoPosition = state.currentTetromino.position;

    switch (direction) {
        case Direction.DOWN:
            // Check for collision when moving down
            // For each row and cell in the tetromino shape,
            // calculate the new Y position, then check if the new position
            // is out of bounds or collides with another cell on the grid.
            return tetrominoShape.some((row, y) => {
                return row.some((cell, x) => {
                    if (cell) {
                        const newY = tetrominoPosition.y + y + 1;
                        return (
                            newY * Block.HEIGHT >= Viewport.CANVAS_HEIGHT ||
                            state.grid[newY][tetrominoPosition.x + x]
                        );
                    }
                    return false;
                });
            });

        case Direction.LEFT:
            // Check for collision when moving left
            // Similar to moving down, but we calculate the new X position
            // and check for out-of-bounds or collision on the grid.
            return tetrominoShape.some((row, y) => {
                return row.some((cell, x) => {
                    if (cell) {
                        const newX = tetrominoPosition.x + x - 1;
                        return (
                            newX < 0 ||
                            state.grid[tetrominoPosition.y + y][newX]
                        );
                    }
                    return false;
                });
            });

        case Direction.RIGHT:
            // Check for collision when moving right
            // Similar to moving left, but we add instead of subtract to the X position.
            return tetrominoShape.some((row, y) => {
                return row.some((cell, x) => {
                    if (cell) {
                        const newX = tetrominoPosition.x + x + 1;
                        return (
                            newX >= Viewport.CANVAS_WIDTH / Block.WIDTH ||
                            state.grid[tetrominoPosition.y + y][newX]
                        );
                    }
                    return false;
                });
            });

        case Direction.ROTATE:
            // Check for collision when rotating
            // For each cell in the tetromino shape, calculate the new X and Y positions
            // then check for out-of-bounds or collision on the grid.
            return tetrominoShape.some((row, y) => {
                return row.some((cell, x) => {
                    if (cell) {
                        const newY = tetrominoPosition.y + y;
                        const newX = tetrominoPosition.x + x;
                        return (
                            newY < 0 ||
                            newY >= Viewport.CANVAS_HEIGHT / Block.HEIGHT ||
                            newX < 0 ||
                            newX >= Viewport.CANVAS_WIDTH / Block.WIDTH ||
                            state.grid[newY][newX]
                        );
                    }
                    return false;
                });
            });
    }
}



/**
 * Reduce the current state by applying the specified action.
 * @param {State} s - The current state of the game.
 * @param {Action} action - The action to apply.
 * @return {State} The new state of the game.
 */
const reduceState = (s: State, action: Action) : State => action.apply(s);

export type { State }
export { reduceState, initialState, Move, Rotate, Drop, collisionDetection, moveTetrominoDown, placeTetrominoOnGrid, Down, GameFlow, Hold}
