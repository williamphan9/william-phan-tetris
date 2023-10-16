
import "./style.css";

import {fromEvent, interval, merge} from "rxjs";
import { map, filter, scan } from "rxjs/operators";
import {
    Constants,
    Viewport,
    Key,
} from "./types.ts";
import {
    State,
    initialState,
    Move,
    Rotate,
    Drop,
    reduceState, moveTetrominoDown, Down, GameFlow, Hold
} from "./state.ts";
import {show, hide, renderTetromino, clearSvgCanvas, renderGrid} from "./view.ts";
import {Direction} from "./util.ts";

/**
 * This is the function called on page load. Your main game loop
 * should be called here.
 */
export function main() {
    // Canvas elements
    const svg = document.querySelector("#svgCanvas") as SVGGraphicsElement &
        HTMLElement;
    const preview = document.querySelector("#svgPreview") as SVGGraphicsElement &
        HTMLElement;
    const gameover = document.querySelector("#gameOver") as SVGGraphicsElement &
        HTMLElement;
    const hold = document.querySelector("#svgHold") as SVGGraphicsElement &
        HTMLElement
    const container = document.querySelector("#main") as HTMLElement;
    const score = document.getElementById("scoreText");
    const level = document.getElementById("levelText");
    const highScore = document.getElementById("highScoreText");

    if (!score || !level || !highScore) return

    svg.setAttribute("height", `${Viewport.CANVAS_HEIGHT}`);
    svg.setAttribute("width", `${Viewport.CANVAS_WIDTH}`);
    preview.setAttribute("height", `${Viewport.PREVIEW_HEIGHT}`);
    preview.setAttribute("width", `${Viewport.PREVIEW_WIDTH}`);

    // Text fields
    const levelText = document.querySelector("#levelText") as HTMLElement;
    const scoreText = document.querySelector("#scoreText") as HTMLElement;
    const highScoreText = document.querySelector("#highScoreText") as HTMLElement;

    /** User input */

    const key$ = fromEvent<KeyboardEvent>(document, "keypress");

    const fromKey = (keyCode: Key) =>
        key$.pipe(
            filter(({ code }) => code === keyCode)
        );

    const left$ = fromKey("KeyA").pipe(map(_ => new Move(Direction.LEFT)));
    const right$ = fromKey("KeyD").pipe(map(_ => new Move(Direction.RIGHT)));
    const down$ = fromKey("KeyS").pipe(map(_ => new Down()));
    const up$ = fromKey("KeyW").pipe(map(_ => new Rotate()));
    const space$ = fromKey("Space").pipe(map(_ => new Drop()));
    const hold$ = fromKey("KeyC").pipe(map(_ => new Hold()))

    const action$ = merge(left$, right$, down$, up$, space$, hold$);
    /** Observables */

    /** Determines the rate of time steps */
    const tick$ = interval(Constants.TICK_RATE_MS / 10).pipe(map(_ => new GameFlow()));

    /**
     * Renders the current state to the canvas.
     *
     * In MVC terms, this updates the View using the Model.
     *
     * @param s Current state
     */
    const render = (s: State) => {
        clearSvgCanvas(preview, gameover);
        clearSvgCanvas(hold, gameover);
        clearSvgCanvas(svg, gameover);

        score.innerHTML = String(s.score);
        level.innerHTML = String(s.level);
        highScore.innerHTML = String(s.highScore);

        renderTetromino(s.currentTetromino, svg, s.currentTetromino.position.x, s.currentTetromino.position.y);
        renderTetromino(s.nextTetromino, preview, Constants.PREVIEW_X , Constants.PREVIEW_Y);
        if (s.heldElement)
            renderTetromino(s.heldElement, hold, Constants.HOLD_X , Constants.HOLD_Y);

        renderGrid(s.grid, svg);

    };

    const source$ = merge(tick$, action$)
        .pipe(
            scan(reduceState, initialState))
        .subscribe((s: State) => {
            render(s);

            if (s.gameEnd) {
                show(gameover)
            } else {
                hide(gameover)
            }

        });

}


if (typeof window !== "undefined") {
    window.onload = () => {
        main();
    };
}
