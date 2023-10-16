/** Rendering (side effects) */
import {Block, GridCell, Tetromino} from "./types.ts";

/**
 * Displays a SVG element on the canvas. Brings to foreground.
 * @param {SVGGraphicsElement} elem - SVG element to display
 */
const show = (elem: SVGGraphicsElement) => {
    elem.setAttribute("visibility", "visible");
    elem.parentNode!.appendChild(elem);
};

/**
 * Hides an SVG element on the canvas.
 * @param {SVGGraphicsElement} elem - SVG element to hide
 */
const hide = (elem: SVGGraphicsElement) =>
    elem.setAttribute("visibility", "hidden");

/**
 * Creates an SVG element with the given properties.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/SVG/Element for valid
 * element names and properties.
 *
 * @param {string | null} namespace - Namespace of the SVG element
 * @param {string} name - SVGElement name
 * @param {Record<string, string>} props - Properties to set on the SVG element
 * @returns {SVGElement} - SVG element
 */
const createSvgElement = (
    namespace: string | null,
    name: string,
    props: Record<string, string> = {}
) => {
    const elem = document.createElementNS(namespace, name) as SVGElement;
    Object.entries(props).forEach(([k, v]) => elem.setAttribute(k, v));
    return elem;
};

/**
 * Renders a Tetromino on the SVG canvas at a given position.
 * @param {Tetromino} tetromino - The Tetromino to render.
 * @param {SVGElement} svg - The SVG canvas to render the Tetromino on.
 * @param {number} x_pos - The x-coordinate at which to render the Tetromino.
 * @param {number} y_pos - The y-coordinate at which to render the Tetromino.
 */
const renderTetromino = (tetromino: Tetromino, svg: SVGElement, x_pos: number, y_pos: number) => {
    tetromino.shapes[tetromino.rotation].forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (cell === 1) {
                const rect = createSvgElement(svg.namespaceURI, "rect", {
                    x: `${(x_pos + colIndex) * Block.WIDTH}`,
                    y: `${(y_pos + rowIndex) * Block.HEIGHT}`,
                    width: `${Block.WIDTH}`,
                    height: `${Block.HEIGHT}`,
                    fill: tetromino.color
                });
                svg.appendChild(rect);
            }
        });
    });
}

/**
 * Clears the SVG canvas and displays the game over screen.
 * @param {SVGElement} svg - The SVG canvas to clear.
 * @param {SVGGraphicsElement} gameOver - The game over screen to display.
 */
const clearSvgCanvas = (svg: SVGElement, gameOver: SVGGraphicsElement) => {
    if (svg.lastChild) {
        svg.removeChild(svg.lastChild);
        clearSvgCanvas(svg, gameOver);
    } else {
        svg.appendChild(gameOver);
    }
};

/**
 * Renders the grid on the SVG canvas.
 * @param {GridCell[][]} grid - The grid to render.
 * @param {SVGElement} svg - The SVG canvas to render the grid on.
 */
const renderGrid = (grid : GridCell[][], svg : SVGElement) => {
    grid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (cell) {
                const rect = createSvgElement(svg.namespaceURI, "rect", {
                    x: `${(colIndex) * Block.WIDTH}`,
                    y: `${(rowIndex) * Block.HEIGHT}`,
                    width: `${Block.WIDTH}`,
                    height: `${Block.HEIGHT}`,
                    fill: cell
                });
                svg.appendChild(rect);
            }
        })
    })
}


export {show, hide, createSvgElement, renderTetromino, clearSvgCanvas, renderGrid}
