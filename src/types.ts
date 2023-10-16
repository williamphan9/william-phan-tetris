/** Constants */
import {State} from "./state.ts";

/**
 * @constant {Constants}
 * @default
 */
const Constants = {
    TICK_RATE_MS: 500,
    GRID_WIDTH: 10,
    GRID_HEIGHT: 20,
    PREVIEW_X : 2.5,
    PREVIEW_Y : 1,
    HOLD_X : 2.5,
    HOLD_Y : 1.5,
    START_X : 4,
    START_Y : 0,
    MULTIPLIER : 10,
} as const;

/**
 * @typedef TetrominoShape
 * @type {number[][]}
 */
type TetrominoShape = number[][];


/**
 * @typedef GridCell
 * @type {string|null}
 */
type GridCell = string | null;


/**
 * @typedef Tetromino
 * @type {object}
 * @property {TetrominoShape[]} shapes - The different shapes of the Tetromino.
 * @property {{ x: number, y: number }} position - The reference point, typically the rotation center.
 * @property {string} color - The color of the Tetromino.
 * @property {number} rotation - The rotation of the Tetromino.
 */

type Tetromino = {
    shapes: TetrominoShape[];
    position: { x: number, y: number }; // Reference point, typically the rotation center
    color: string;
    rotation : number
};

/**
 * @constant {Tetromino}
 * @default
 */
const O_TETROMINO = {
    shapes: [[
        [1, 1],
        [1, 1]
    ]],
    position: { x: Constants.START_X, y: Constants.START_Y }, // Starting near the top-middle of the grid
    color: "yellow",
    rotation : 0
};

/**
 * @constant {Tetromino}
 * @default
 */const T_TETROMINO: Tetromino = {
    shapes: [
        [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],
        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 1, 0]
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]
        ],
        [
            [0, 1, 0],
            [1, 1, 0],
            [0, 1, 0]
        ]
    ],
    position: { x: Constants.START_X, y: Constants.START_Y }, // Starting near the top-middle of the grid
    color: "purple",
    rotation: 0
};

const I_TETROMINO: Tetromino = {
    shapes: [
        [
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
        ],
        [
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
        ],
    ],
    position: { x: Constants.START_X, y: Constants.START_Y },
    color: "cyan",
    rotation: 0,
};

const S_TETROMINO: Tetromino = {
    shapes: [
        [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0],
        ],
        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 0, 1],
        ],
        [
            [0, 0, 0],
            [0, 1, 1],
            [1, 1, 0],
        ],
        [
            [1, 0, 0],
            [1, 1, 0],
            [0, 1, 0],
        ],
    ],
    position: { x: Constants.START_X, y: Constants.START_Y },
    color: "green",
    rotation: 0,
};

const Z_TETROMINO: Tetromino = {
    shapes: [
        [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0],
        ],
        [
            [0, 0, 1],
            [0, 1, 1],
            [0, 1, 0],
        ],
        [
            [0, 0, 0],
            [1, 1, 0],
            [0, 1, 1],
        ],
        [
            [0, 1, 0],
            [1, 1, 0],
            [1, 0, 0],
        ],
    ],
    position: { x: Constants.START_X, y: Constants.START_Y },
    color: "red",
    rotation: 0,
};

const L_TETROMINO: Tetromino = {
    shapes: [
        [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0],
        ],
        [
            [0, 1, 1],
            [0, 1, 0],
            [0, 1, 0],
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 1],
        ],
        [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0],
        ],
    ],
    position: { x: Constants.START_X, y: Constants.START_Y },
    color: "orange",
    rotation: 0,
};

const J_TETROMINO: Tetromino = {
    shapes: [
        [
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 0],
        ],
        [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1],
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [1, 0, 0],
        ],
        [
            [1, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ],
    ],
    position: { x: Constants.START_X, y: Constants.START_Y },
    color: "blue",
    rotation: 0,
};


/**
 * @typedef Viewport
 * @type {object}
 * @property {number} CANVAS_WIDTH - The width of the canvas.
 * @property {number} CANVAS_HEIGHT - The height of the canvas.
 * @property {number} PREVIEW_WIDTH - The width of the preview.
 * @property {number} PREVIEW_HEIGHT - The height of the preview.
 */

/**
 * @constant {Viewport}
 * @default
 */
const Viewport = {
    CANVAS_WIDTH: 200,
    CANVAS_HEIGHT: 400,
    PREVIEW_WIDTH: 160,
    PREVIEW_HEIGHT: 80,
} as const;

/**
 * @typedef Constants
 * @type {object}
 * @property {number} TICK_RATE_MS - The tick rate in milliseconds.
 * @property {number} GRID_WIDTH - The width of the grid.
 * @property {number} GRID_HEIGHT - The height of the grid.
 * @property {number} PREVIEW_X - The X coordinate of the preview.
 * @property {number} PREVIEW_Y - The Y coordinate of the preview.
 * @property {number} HOLD_X - The X coordinate of the hold.
 * @property {number} HOLD_Y - The Y coordinate of the hold.
 * @property {number} MULTIPLIER - The multiplier.
 */



/**
 * @typedef Block
 * @type {object}
 * @property {number} WIDTH - The width of a block.
 * @property {number} HEIGHT - The height of a block.
 */

/**
 * @constant {Block}
 * @default
 */
const Block = {
    WIDTH: Viewport.CANVAS_WIDTH / Constants.GRID_WIDTH,
    HEIGHT: Viewport.CANVAS_HEIGHT / Constants.GRID_HEIGHT,
};

/** User input */

/**
 * @typedef Key
 * @type {"KeyS"|"KeyA"|"KeyD"|"KeyW"|"Space"|"KeyC"}
 */
type Key = "KeyS" | "KeyA" | "KeyD" | "KeyW" | "Space" | "KeyC";

/**
 * @typedef Event
 * @type {"keydown"|"keyup"|"keypress"}
 */

type Event = "keydown" | "keyup" | "keypress";


/**
 * @interface Action
 * @method
 * @param {State} s - The current state.
 * @return {State} - The new state after the action is applied.
 */
interface Action {
    apply(s: State) : State;
}

// Export the constants and types
export {Constants, Block, Viewport, O_TETROMINO, T_TETROMINO, I_TETROMINO, J_TETROMINO, L_TETROMINO, S_TETROMINO, Z_TETROMINO}
export type {Key, Event, Action, TetrominoShape, Tetromino, GridCell}
