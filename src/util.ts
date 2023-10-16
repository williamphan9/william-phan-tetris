import {
    Constants,
    GridCell,
    I_TETROMINO,
    J_TETROMINO,
    L_TETROMINO,
    O_TETROMINO,
    S_TETROMINO,
    T_TETROMINO,
    Tetromino,
    Z_TETROMINO
} from "./types.ts";
import {collisionDetection, State} from "./state.ts";


/** Utility functions */

const MULTIPLIER = 10;
const Tetrominos : Tetromino[] = [O_TETROMINO, S_TETROMINO, L_TETROMINO, Z_TETROMINO, J_TETROMINO, I_TETROMINO, T_TETROMINO];

/**
 * @class
 * @classdesc A random number generator.
 */
abstract class RNG {
    // LCG using GCC's constants
    private static m = 0x80000000; // 2**31
    private static a = 1103515245;
    private static c = 12345;

    /**
     * Call `hash` repeatedly to generate the sequence of hashes.
     * @param {number} seed - A seed value.
     * @returns {number} - A hash of the seed.
     */
    public static hash = (seed: number) => (RNG.a * seed + RNG.c) % RNG.m;

    /**
     * Generate a random integer between min and max.
     * @param {number} min - The minimum value.
     * @param {number} max - The maximum value.
     * @returns {number} - A random integer between min and max.
     */
    public static randomInt = (min: number, max: number) => {
        const hash = RNG.hash(Date.now());
        const scale = hash / (RNG.m - 1);
        return Math.floor(min + scale * (max - min + 1));
    }
}

/**
 * @enum
 * @readonly
 */
enum Direction {
    LEFT,
    RIGHT,
    DOWN,
    ROTATE
}

/**
 * Create a 2D grid of the given width and height.
 * @param {number} width - The width of the grid.
 * @param {number} height - The height of the grid.
 * @returns {GridCell[][]} - A 2D grid of the specified width and height.
 */
const initialiseGrid = (width: number, height: number): GridCell[][] => {
    const createRow = (width: number): GridCell[] =>
        Array(width).fill(null);

    const createGrid = (width: number, height: number): GridCell[][] =>
        Array(height).fill(null).map(() => createRow(width));

    return createGrid(width, height);
}

/**
 * Place the given Tetromino on the grid.
 * @param {GridCell[][]} grid - The current grid.
 * @param {Tetromino} tetromino - The Tetromino to place on the grid.
 * @returns {GridCell[][]} - A new grid with the Tetromino placed on it.
 */
const placeTetrominoOnGrid = (grid: GridCell[][], tetromino: Tetromino): GridCell[][] => {
    return grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
            const relativeY = rowIndex - tetromino.position.y;
            const relativeX = colIndex - tetromino.position.x;

            if (
                relativeY >= 0 && relativeY < tetromino.shapes[tetromino.rotation].length &&
                relativeX >= 0 && relativeX < tetromino.shapes[tetromino.rotation][0].length &&
                tetromino.shapes[tetromino.rotation][relativeY][relativeX] === 1
            ) {
                return tetromino.color;  // Return the color of the tetromino
            }
            return cell;
        })
    );
};

/**
 * Remove full rows from the grid and return the new grid and the number of rows cleared.
 * @param {GridCell[][]} grid - The current grid.
 * @returns {object} - An object containing the new grid and the number of rows cleared.
 */
const lineClear = (grid : GridCell[][]) => {
    const newGrid = grid.filter(
        row => !row.every(cell => cell !== null))
    const newRow : GridCell[] = new Array(grid[0].length).fill(null);
    const newRows : GridCell[][] = Array(grid.length - newGrid.length).fill(newRow);

    return {newGrid : newRows.concat(newGrid), rowsCleared: grid.length - newGrid.length};
}

/**
 * Check if there is a Tetromino in the top row of the grid.
 * @param {GridCell[][]} grid - The current grid.
 * @returns {boolean} - True if there is a Tetromino in the top row of the grid, otherwise false.
 */
const topOut = (grid : GridCell[][]) => {
    return grid[0].some(cell => cell !== null);
}

/**
 * Calculate the score for clearing a number of rows.
 * @param {number} level - The current level.
 * @param {number} rowsCleared - The number of rows cleared.
 * @returns {number} - The score for clearing the specified number of rows at the current level.
 */
const calculateScore = (level: number, rowsCleared: number) => {
    if (!rowsCleared)
        return rowsCleared;
    const scores = [40, 100, 300, 1200]; // 1, 2, 3, 4 rows cleared respectively
    return (level + 1) * scores[rowsCleared - 1];
}

/**
 * Move the current Tetromino down by one position, or place it on the grid and generate a new Tetromino if it can't be moved down.
 * @param {State} state - The current state.
 * @returns {State} - The new state after moving the Tetromino down by one position or placing it on the grid and generating a new Tetromino.
 */
const moveTetrominoDown = (state: State): State => {
    // Check for collisions or if the tetromino is at the bottom of the grid
    // If there's a collision, or it's at the bottom, return the original state
    if (collisionDetection(state, Direction.DOWN)) {
        const {newGrid, rowsCleared} = lineClear(placeTetrominoOnGrid(state.grid, state.currentTetromino));
        const newRowsCleared = state.rowsCleared + rowsCleared;
        const newLevel = 1 + Math.floor(newRowsCleared / 3);
        return {
            ...state,
            currentTetromino: state.nextTetromino,
            nextTetromino: Tetrominos[RNG.randomInt(0, Tetrominos.length - 1)],
            grid: newGrid,
            gameEnd: topOut(newGrid),
            score: state.score + calculateScore(state.level, rowsCleared),
            speedCount : 0,
            speedMultiplier : Constants.MULTIPLIER - newLevel,
            level : newLevel,
            rowsCleared : newRowsCleared,
            usedHold : false,
        };
    }

    // Otherwise, return a new state with the tetromino moved down by one position
    return {
        ...state,
        currentTetromino: {
            ...state.currentTetromino,
            position: {
                x: state.currentTetromino.position.x,
                y: state.currentTetromino.position.y + 1
            }
        },
        speedCount : 0,
    };
};


export {Direction, initialiseGrid, placeTetrominoOnGrid, RNG, Tetrominos, lineClear, topOut, calculateScore, moveTetrominoDown};
