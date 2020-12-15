'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var point = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
/**
 * A `Point` represents a point in the text editor.
 */
class Point {
    /**
     * Creates a new `Point` object.
     *
     * @param row - Row of the point, starts from 0.
     * @param column - Column of the point, starts from 0.
     */
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
    /**
     * Checks if the point is equal to another point.
     */
    equals(point) {
        return this.row === point.row && this.column === point.column;
    }
}
exports.Point = Point;
});

var range = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = void 0;
/**
 * A `Range` object represents a range in the text editor.
 */
class Range {
    /**
     * Creates a new `Range` object.
     *
     * @param start - The start point of the range.
     * @param end - The end point of the range.
     */
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
exports.Range = Range;
});

var focus = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Focus = void 0;
/**
 * A `Focus` object represents which cell is focused in the table.
 *
 * Note that `row` and `column` properties specifiy a cell's position in the
 * table, not the cursor's position in the text editor as {@link Point} class.
 *
 * @private
 */
class Focus {
    /**
     * Creates a new `Focus` object.
     *
     * @param row - Row of the focused cell.
     * @param column - Column of the focused cell.
     * @param offset - Raw offset in the cell.
     */
    constructor(row, column, offset) {
        this.row = row;
        this.column = column;
        this.offset = offset;
    }
    /**
     * Checks if two focuses point the same cell.
     * Offsets are ignored.
     */
    posEquals(focus) {
        return this.row === focus.row && this.column === focus.column;
    }
    /**
     * Creates a copy of the focus object by setting its row to the specified value.
     *
     * @param row - Row of the focused cell.
     * @returns A new focus object with the specified row.
     */
    setRow(row) {
        return new Focus(row, this.column, this.offset);
    }
    /**
     * Creates a copy of the focus object by setting its column to the specified value.
     *
     * @param column - Column of the focused cell.
     * @returns A new focus object with the specified column.
     */
    setColumn(column) {
        return new Focus(this.row, column, this.offset);
    }
    /**
     * Creates a copy of the focus object by setting its offset to the specified value.
     *
     * @param offset - Offset in the focused cell.
     * @returns A new focus object with the specified offset.
     */
    setOffset(offset) {
        return new Focus(this.row, this.column, offset);
    }
}
exports.Focus = Focus;
});

var alignment = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderAlignment = exports.DefaultAlignment = exports.Alignment = void 0;
/**
 * Represents column alignment.
 *
 * - `Alignment.NONE` - Use default alignment.
 * - `Alignment.LEFT` - Align left.
 * - `Alignment.RIGHT` - Align right.
 * - `Alignment.CENTER` - Align center.
 *
 */
var Alignment;
(function (Alignment) {
    Alignment["NONE"] = "none";
    Alignment["LEFT"] = "left";
    Alignment["RIGHT"] = "right";
    Alignment["CENTER"] = "center";
})(Alignment = exports.Alignment || (exports.Alignment = {}));
/**
 * Represents default column alignment
 *
 * - `DefaultAlignment.LEFT` - Align left.
 * - `DefaultAlignment.RIGHT` - Align right.
 * - `DefaultAlignment.CENTER` - Align center.
 *
 */
var DefaultAlignment;
(function (DefaultAlignment) {
    DefaultAlignment["LEFT"] = "left";
    DefaultAlignment["RIGHT"] = "right";
    DefaultAlignment["CENTER"] = "center";
})(DefaultAlignment = exports.DefaultAlignment || (exports.DefaultAlignment = {}));
/**
 * Represents alignment of header cells.
 *
 * - `HeaderAlignment.FOLLOW` - Follow column's alignment.
 * - `HeaderAlignment.LEFT` - Align left.
 * - `HeaderAlignment.RIGHT` - Align right.
 * - `HeaderAlignment.CENTER` - Align center.
 *
 */
var HeaderAlignment;
(function (HeaderAlignment) {
    HeaderAlignment["FOLLOW"] = "follow";
    HeaderAlignment["LEFT"] = "left";
    HeaderAlignment["RIGHT"] = "right";
    HeaderAlignment["CENTER"] = "center";
})(HeaderAlignment = exports.HeaderAlignment || (exports.HeaderAlignment = {}));
});

var tableCell = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCell = void 0;

/**
 * A `TableCell` object represents a table cell.
 *
 * @private
 */
class TableCell {
    /**
     * Creates a new `TableCell` object.
     *
     * @param rawContent - Raw content of the cell.
     */
    constructor(rawContent) {
        this.rawContent = rawContent;
        this.content = rawContent.trim();
        this.paddingLeft =
            this.content === ''
                ? this.rawContent === ''
                    ? 0
                    : 1
                : this.rawContent.length - this.rawContent.trimLeft().length;
        this.paddingRight =
            this.rawContent.length - this.content.length - this.paddingLeft;
    }
    /**
     * Convers the cell to a text representation.
     *
     * @returns The raw content of the cell.
     */
    toText() {
        return this.rawContent;
    }
    /**
     * Checks if the cell is a delimiter i.e. it only contains hyphens `-` with optional one
     * leading and trailing colons `:`.
     *
     * @returns `true` if the cell is a delimiter.
     */
    isDelimiter() {
        return /^\s*:?-+:?\s*$/.test(this.rawContent);
    }
    /**
     * Returns the alignment the cell represents.
     *
     * @returns The alignment the cell represents; `undefined` if the cell is not a delimiter.
     */
    getAlignment() {
        if (!this.isDelimiter()) {
            return undefined;
        }
        if (this.content[0] === ':') {
            if (this.content[this.content.length - 1] === ':') {
                return alignment.Alignment.CENTER;
            }
            return alignment.Alignment.LEFT;
        }
        if (this.content[this.content.length - 1] === ':') {
            return alignment.Alignment.RIGHT;
        }
        return alignment.Alignment.NONE;
    }
    /**
     * Computes a relative position in the trimmed content from that in the raw content.
     *
     * @param rawOffset - Relative position in the raw content.
     * @returns - Relative position in the trimmed content.
     */
    computeContentOffset(rawOffset) {
        if (this.content === '') {
            return 0;
        }
        if (rawOffset < this.paddingLeft) {
            return 0;
        }
        if (rawOffset < this.paddingLeft + this.content.length) {
            return rawOffset - this.paddingLeft;
        }
        return this.content.length;
    }
    /**
     * Computes a relative position in the raw content from that in the trimmed content.
     *
     * @param contentOffset - Relative position in the trimmed content.
     * @returns - Relative position in the raw content.
     */
    computeRawOffset(contentOffset) {
        return contentOffset + this.paddingLeft;
    }
}
exports.TableCell = TableCell;
});

var tableRow = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = void 0;
/**
 * A `TableRow` object represents a table row.
 *
 * @private
 */
class TableRow {
    /**
     * Creates a new `TableRow` objec.
     *
     * @param cells - Cells that the row contains.
     * @param marginLeft - Margin string at the left of the row.
     * @param marginRight - Margin string at the right of the row.
     */
    constructor(cells, marginLeft, marginRight) {
        this._cells = cells.slice();
        this.marginLeft = marginLeft;
        this.marginRight = marginRight;
    }
    /**
     * Gets the number of the cells in the row.
     */
    getWidth() {
        return this._cells.length;
    }
    /**
     * Returns the cells that the row contains.
     */
    getCells() {
        return this._cells.slice();
    }
    /**
     * Gets a cell at the specified index.
     *
     * @param index - Index.
     * @returns The cell at the specified index if exists; `undefined` if no cell is found.
     */
    getCellAt(index) {
        return this._cells[index];
    }
    /**
     * Convers the row to a text representation.
     */
    toText() {
        if (this._cells.length === 0) {
            return this.marginLeft;
        }
        const cells = this._cells.map((cell) => cell.toText()).join('|');
        return `${this.marginLeft}|${cells}|${this.marginRight}`;
    }
    /**
     * Checks if the row is a delimiter or not.
     *
     * @returns `true` if the row is a delimiter i.e. all the cells contained are delimiters.
     */
    isDelimiter() {
        return this._cells.every((cell) => cell.isDelimiter());
    }
}
exports.TableRow = TableRow;
});

var table = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;



/**
 * A `Table` object represents a table.
 *
 * @private
 */
class Table {
    /**
     * Creates a new `Table` object.
     *
     * @param rows - An array of rows that the table contains.
     */
    constructor(rows) {
        this._rows = rows.slice();
    }
    /**
     * Gets the number of rows in the table.
     *
     * @returns The number of rows.
     */
    getHeight() {
        return this._rows.length;
    }
    /**
     * Gets the maximum width of the rows in the table.
     *
     * @returns The maximum width of the rows.
     */
    getWidth() {
        return this._rows
            .map((row) => row.getWidth())
            .reduce((x, y) => Math.max(x, y), 0);
    }
    /**
     * Gets the width of the header row.
     * Assumes that it is called on a valid table with a header row.
     *
     * @returns The width of the header row
     */
    getHeaderWidth() {
        return this._rows[0].getWidth();
    }
    /**
     * Gets the rows that the table contains.
     *
     * @returns An array of the rows.
     */
    getRows() {
        return this._rows.slice();
    }
    /**
     * Gets the delimiter row of the table.
     *
     * @returns The delimiter row; `undefined` if there is not delimiter row.
     */
    getDelimiterRow() {
        const row = this._rows[1];
        if (row === undefined) {
            return undefined;
        }
        if (row.isDelimiter()) {
            return row;
        }
        return undefined;
    }
    /**
     * Gets a cell at the specified index.
     *
     * @param rowIndex - Row index of the cell.
     * @param columnIndex - Column index of the cell.
     * @returns The cell at the specified index; `undefined` if not found.
     */
    getCellAt(rowIndex, columnIndex) {
        const row = this._rows[rowIndex];
        if (row === undefined) {
            return undefined;
        }
        return row.getCellAt(columnIndex);
    }
    /**
     * Gets the cell at the focus.
     *
     * @param focus - Focus object.
     * @returns The cell at the focus; `undefined` if not found.
     */
    getFocusedCell(focus) {
        return this.getCellAt(focus.row, focus.column);
    }
    /**
     * Converts the table to an array of text representations of the rows.
     *
     * @returns An array of text representations of the rows.
     */
    toLines() {
        return this._rows.map((row) => row.toText());
    }
    /**
     * Computes a focus from a point in the text editor.
     *
     * @param pos - A point in the text editor.
     * @param rowOffset - The row index where the table starts in the text editor.
     * @returns A focus object that corresponds to the specified point;
     * `undefined` if the row index is out of bounds.
     */
    focusOfPosition(pos, rowOffset) {
        const rowIndex = pos.row - rowOffset;
        const row = this._rows[rowIndex];
        if (row === undefined) {
            return undefined;
        }
        if (pos.column < row.marginLeft.length + 1) {
            return new focus.Focus(rowIndex, -1, pos.column);
        }
        const cellWidths = row.getCells().map((cell) => cell.rawContent.length);
        let columnPos = row.marginLeft.length + 1; // left margin + a pipe
        let columnIndex = 0;
        for (; columnIndex < cellWidths.length; columnIndex++) {
            if (columnPos + cellWidths[columnIndex] + 1 > pos.column) {
                break;
            }
            columnPos += cellWidths[columnIndex] + 1;
        }
        const offset = pos.column - columnPos;
        return new focus.Focus(rowIndex, columnIndex, offset);
    }
    /**
     * Computes a position in the text editor from a focus.
     *
     * @param focus - A focus object.
     * @param rowOffset - The row index where the table starts in the text editor.
     * @returns A position in the text editor that corresponds to the focus;
     * `undefined` if the focused row  is out of the table.
     */
    positionOfFocus(focus, rowOffset) {
        const row = this._rows[focus.row];
        if (row === undefined) {
            return undefined;
        }
        const rowPos = focus.row + rowOffset;
        if (focus.column < 0) {
            return new point.Point(rowPos, focus.offset);
        }
        const cellWidths = row.getCells().map((cell) => cell.rawContent.length);
        const maxIndex = Math.min(focus.column, cellWidths.length);
        let columnPos = row.marginLeft.length + 1;
        for (let columnIndex = 0; columnIndex < maxIndex; columnIndex++) {
            columnPos += cellWidths[columnIndex] + 1;
        }
        return new point.Point(rowPos, columnPos + focus.offset);
    }
    /**
     * Computes a selection range from a focus.
     *
     * @param focus - A focus object.
     * @param rowOffset - The row index where the table starts in the text editor.
     * @returns A range to be selected that corresponds to the focus;
     * `undefined` if the focus does not specify any cell or the specified cell is empty.
     */
    selectionRangeOfFocus(focus, rowOffset) {
        const row = this._rows[focus.row];
        if (row === undefined) {
            return undefined;
        }
        const cell = row.getCellAt(focus.column);
        if (cell === undefined) {
            return undefined;
        }
        if (cell.content === '') {
            return undefined;
        }
        const rowPos = focus.row + rowOffset;
        const cellWidths = row.getCells().map((cell) => cell.rawContent.length);
        let columnPos = row.marginLeft.length + 1;
        for (let columnIndex = 0; columnIndex < focus.column; columnIndex++) {
            columnPos += cellWidths[columnIndex] + 1;
        }
        columnPos += cell.paddingLeft;
        return new range.Range(new point.Point(rowPos, columnPos), new point.Point(rowPos, columnPos + cell.content.length));
    }
}
exports.Table = Table;
});

var parser = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTable = exports._marginRegex = exports.marginRegexSrc = exports._readRow = exports._splitCells = void 0;



/**
 * Splits a text into cells.
 *
 * @private
 */
exports._splitCells = (text) => {
    const cells = [];
    let buf = '';
    let rest = text;
    while (rest !== '') {
        switch (rest[0]) {
            case '`':
                // read code span
                {
                    const startMatch = rest.match(/^`*/);
                    if (startMatch === null) {
                        // case statement ensures first char is a ` and we cannot get here.
                        // This just satisfies the compiler.
                        break;
                    }
                    const start = startMatch[0];
                    let buf1 = start;
                    let rest1 = rest.substr(start.length);
                    let closed = false;
                    while (rest1 !== '') {
                        if (rest1[0] === '`') {
                            const endMatch = rest1.match(/^`*/);
                            if (endMatch === null) {
                                // case statement ensures first char is a ` and we cannot get here.
                                // This just satisfies the compiler.
                                break;
                            }
                            const end = endMatch[0];
                            buf1 += end;
                            rest1 = rest1.substr(end.length);
                            if (end.length === start.length) {
                                closed = true;
                                break;
                            }
                        }
                        else {
                            buf1 += rest1[0];
                            rest1 = rest1.substr(1);
                        }
                    }
                    if (closed) {
                        buf += buf1;
                        rest = rest1;
                    }
                    else {
                        buf += '`';
                        rest = rest.substr(1);
                    }
                }
                break;
            case '\\':
                // escape next character
                if (rest.length >= 2) {
                    buf += rest.substr(0, 2);
                    rest = rest.substr(2);
                }
                else {
                    buf += '\\';
                    rest = rest.substr(1);
                }
                break;
            case '|':
                // flush buffer
                cells.push(buf);
                buf = '';
                rest = rest.substr(1);
                break;
            default:
                buf += rest[0];
                rest = rest.substr(1);
        }
    }
    cells.push(buf);
    return cells;
};
/**
 * Reads a table row.
 *
 * @private
 * @param text - A text.
 * @param [leftMarginRegex=/^\s*$/] - A regular expression object that matches left margin.
 */
exports._readRow = (text, leftMarginRegex = /^\s*$/) => {
    let cells = exports._splitCells(text);
    let marginLeft;
    if (cells.length > 0 && leftMarginRegex.test(cells[0])) {
        marginLeft = cells[0];
        cells = cells.slice(1);
    }
    else {
        marginLeft = '';
    }
    let marginRight;
    if (cells.length > 1 && /^\s*$/.test(cells[cells.length - 1])) {
        marginRight = cells[cells.length - 1];
        cells = cells.slice(0, cells.length - 1);
    }
    else {
        marginRight = '';
    }
    return new tableRow.TableRow(cells.map((cell) => new tableCell.TableCell(cell)), marginLeft, marginRight);
};
/**
 * Creates a regex source string of margin character class.
 *
 * @private
 * @param chars - A set of additional margin characters.
 * A pipe `|`, a backslash `\`, and a backquote will be ignored.
 * @return A regex source string.
 */
exports.marginRegexSrc = (chars) => {
    let cs = '';
    // for (const c chars.values()) {
    chars.forEach((c) => {
        if (c !== '|' && c !== '\\' && c !== '`') {
            cs += `\\u{${c.codePointAt(0).toString(16)}}`;
        }
    });
    return `[\\s${cs}]*`;
};
/**
 * Creates a regular expression object that matches margin of tables.
 *
 * @private
 * @param chars - A set of additional margin characters.
 * A pipe `|`, a backslash `\`, and a backquote will be ignored.
 * @return An regular expression object that matches margin of tables.
 */
exports._marginRegex = (chars) => new RegExp(`^${exports.marginRegexSrc(chars)}$`, 'u');
/**
 * Reads a table from lines.
 *
 * @private
 * @param lines - An array of texts, each text represents a row.
 * @param options - An object containing options for parsing.
 * @returns The table read from the lines.
 */
exports.readTable = (lines, options) => {
    const leftMarginRegex = exports._marginRegex(options.leftMarginChars);
    return new table.Table(lines.map((line) => exports._readRow(line, leftMarginRegex)));
};
});

/*
 * Generated by script. DO NOT EDIT!
 *
 * This part is derived from Unicode Data Files and provided under Unicode, Inc. License Agreement.
 */

/* BEGIN */
const defs = [
  { start: 0, end: 31, prop: "N" },
  { start: 32, end: 126, prop: "Na" },
  { start: 127, end: 160, prop: "N" },
  { start: 161, end: 161, prop: "A" },
  { start: 162, end: 163, prop: "Na" },
  { start: 164, end: 164, prop: "A" },
  { start: 165, end: 166, prop: "Na" },
  { start: 167, end: 168, prop: "A" },
  { start: 169, end: 169, prop: "N" },
  { start: 170, end: 170, prop: "A" },
  { start: 171, end: 171, prop: "N" },
  { start: 172, end: 172, prop: "Na" },
  { start: 173, end: 174, prop: "A" },
  { start: 175, end: 175, prop: "Na" },
  { start: 176, end: 180, prop: "A" },
  { start: 181, end: 181, prop: "N" },
  { start: 182, end: 186, prop: "A" },
  { start: 187, end: 187, prop: "N" },
  { start: 188, end: 191, prop: "A" },
  { start: 192, end: 197, prop: "N" },
  { start: 198, end: 198, prop: "A" },
  { start: 199, end: 207, prop: "N" },
  { start: 208, end: 208, prop: "A" },
  { start: 209, end: 214, prop: "N" },
  { start: 215, end: 216, prop: "A" },
  { start: 217, end: 221, prop: "N" },
  { start: 222, end: 225, prop: "A" },
  { start: 226, end: 229, prop: "N" },
  { start: 230, end: 230, prop: "A" },
  { start: 231, end: 231, prop: "N" },
  { start: 232, end: 234, prop: "A" },
  { start: 235, end: 235, prop: "N" },
  { start: 236, end: 237, prop: "A" },
  { start: 238, end: 239, prop: "N" },
  { start: 240, end: 240, prop: "A" },
  { start: 241, end: 241, prop: "N" },
  { start: 242, end: 243, prop: "A" },
  { start: 244, end: 246, prop: "N" },
  { start: 247, end: 250, prop: "A" },
  { start: 251, end: 251, prop: "N" },
  { start: 252, end: 252, prop: "A" },
  { start: 253, end: 253, prop: "N" },
  { start: 254, end: 254, prop: "A" },
  { start: 255, end: 256, prop: "N" },
  { start: 257, end: 257, prop: "A" },
  { start: 258, end: 272, prop: "N" },
  { start: 273, end: 273, prop: "A" },
  { start: 274, end: 274, prop: "N" },
  { start: 275, end: 275, prop: "A" },
  { start: 276, end: 282, prop: "N" },
  { start: 283, end: 283, prop: "A" },
  { start: 284, end: 293, prop: "N" },
  { start: 294, end: 295, prop: "A" },
  { start: 296, end: 298, prop: "N" },
  { start: 299, end: 299, prop: "A" },
  { start: 300, end: 304, prop: "N" },
  { start: 305, end: 307, prop: "A" },
  { start: 308, end: 311, prop: "N" },
  { start: 312, end: 312, prop: "A" },
  { start: 313, end: 318, prop: "N" },
  { start: 319, end: 322, prop: "A" },
  { start: 323, end: 323, prop: "N" },
  { start: 324, end: 324, prop: "A" },
  { start: 325, end: 327, prop: "N" },
  { start: 328, end: 331, prop: "A" },
  { start: 332, end: 332, prop: "N" },
  { start: 333, end: 333, prop: "A" },
  { start: 334, end: 337, prop: "N" },
  { start: 338, end: 339, prop: "A" },
  { start: 340, end: 357, prop: "N" },
  { start: 358, end: 359, prop: "A" },
  { start: 360, end: 362, prop: "N" },
  { start: 363, end: 363, prop: "A" },
  { start: 364, end: 461, prop: "N" },
  { start: 462, end: 462, prop: "A" },
  { start: 463, end: 463, prop: "N" },
  { start: 464, end: 464, prop: "A" },
  { start: 465, end: 465, prop: "N" },
  { start: 466, end: 466, prop: "A" },
  { start: 467, end: 467, prop: "N" },
  { start: 468, end: 468, prop: "A" },
  { start: 469, end: 469, prop: "N" },
  { start: 470, end: 470, prop: "A" },
  { start: 471, end: 471, prop: "N" },
  { start: 472, end: 472, prop: "A" },
  { start: 473, end: 473, prop: "N" },
  { start: 474, end: 474, prop: "A" },
  { start: 475, end: 475, prop: "N" },
  { start: 476, end: 476, prop: "A" },
  { start: 477, end: 592, prop: "N" },
  { start: 593, end: 593, prop: "A" },
  { start: 594, end: 608, prop: "N" },
  { start: 609, end: 609, prop: "A" },
  { start: 610, end: 707, prop: "N" },
  { start: 708, end: 708, prop: "A" },
  { start: 709, end: 710, prop: "N" },
  { start: 711, end: 711, prop: "A" },
  { start: 712, end: 712, prop: "N" },
  { start: 713, end: 715, prop: "A" },
  { start: 716, end: 716, prop: "N" },
  { start: 717, end: 717, prop: "A" },
  { start: 718, end: 719, prop: "N" },
  { start: 720, end: 720, prop: "A" },
  { start: 721, end: 727, prop: "N" },
  { start: 728, end: 731, prop: "A" },
  { start: 732, end: 732, prop: "N" },
  { start: 733, end: 733, prop: "A" },
  { start: 734, end: 734, prop: "N" },
  { start: 735, end: 735, prop: "A" },
  { start: 736, end: 767, prop: "N" },
  { start: 768, end: 879, prop: "A" },
  { start: 880, end: 912, prop: "N" },
  { start: 913, end: 929, prop: "A" },
  { start: 930, end: 930, prop: "N" },
  { start: 931, end: 937, prop: "A" },
  { start: 938, end: 944, prop: "N" },
  { start: 945, end: 961, prop: "A" },
  { start: 962, end: 962, prop: "N" },
  { start: 963, end: 969, prop: "A" },
  { start: 970, end: 1024, prop: "N" },
  { start: 1025, end: 1025, prop: "A" },
  { start: 1026, end: 1039, prop: "N" },
  { start: 1040, end: 1103, prop: "A" },
  { start: 1104, end: 1104, prop: "N" },
  { start: 1105, end: 1105, prop: "A" },
  { start: 1106, end: 4351, prop: "N" },
  { start: 4352, end: 4447, prop: "W" },
  { start: 4448, end: 8207, prop: "N" },
  { start: 8208, end: 8208, prop: "A" },
  { start: 8209, end: 8210, prop: "N" },
  { start: 8211, end: 8214, prop: "A" },
  { start: 8215, end: 8215, prop: "N" },
  { start: 8216, end: 8217, prop: "A" },
  { start: 8218, end: 8219, prop: "N" },
  { start: 8220, end: 8221, prop: "A" },
  { start: 8222, end: 8223, prop: "N" },
  { start: 8224, end: 8226, prop: "A" },
  { start: 8227, end: 8227, prop: "N" },
  { start: 8228, end: 8231, prop: "A" },
  { start: 8232, end: 8239, prop: "N" },
  { start: 8240, end: 8240, prop: "A" },
  { start: 8241, end: 8241, prop: "N" },
  { start: 8242, end: 8243, prop: "A" },
  { start: 8244, end: 8244, prop: "N" },
  { start: 8245, end: 8245, prop: "A" },
  { start: 8246, end: 8250, prop: "N" },
  { start: 8251, end: 8251, prop: "A" },
  { start: 8252, end: 8253, prop: "N" },
  { start: 8254, end: 8254, prop: "A" },
  { start: 8255, end: 8307, prop: "N" },
  { start: 8308, end: 8308, prop: "A" },
  { start: 8309, end: 8318, prop: "N" },
  { start: 8319, end: 8319, prop: "A" },
  { start: 8320, end: 8320, prop: "N" },
  { start: 8321, end: 8324, prop: "A" },
  { start: 8325, end: 8360, prop: "N" },
  { start: 8361, end: 8361, prop: "H" },
  { start: 8362, end: 8363, prop: "N" },
  { start: 8364, end: 8364, prop: "A" },
  { start: 8365, end: 8450, prop: "N" },
  { start: 8451, end: 8451, prop: "A" },
  { start: 8452, end: 8452, prop: "N" },
  { start: 8453, end: 8453, prop: "A" },
  { start: 8454, end: 8456, prop: "N" },
  { start: 8457, end: 8457, prop: "A" },
  { start: 8458, end: 8466, prop: "N" },
  { start: 8467, end: 8467, prop: "A" },
  { start: 8468, end: 8469, prop: "N" },
  { start: 8470, end: 8470, prop: "A" },
  { start: 8471, end: 8480, prop: "N" },
  { start: 8481, end: 8482, prop: "A" },
  { start: 8483, end: 8485, prop: "N" },
  { start: 8486, end: 8486, prop: "A" },
  { start: 8487, end: 8490, prop: "N" },
  { start: 8491, end: 8491, prop: "A" },
  { start: 8492, end: 8530, prop: "N" },
  { start: 8531, end: 8532, prop: "A" },
  { start: 8533, end: 8538, prop: "N" },
  { start: 8539, end: 8542, prop: "A" },
  { start: 8543, end: 8543, prop: "N" },
  { start: 8544, end: 8555, prop: "A" },
  { start: 8556, end: 8559, prop: "N" },
  { start: 8560, end: 8569, prop: "A" },
  { start: 8570, end: 8584, prop: "N" },
  { start: 8585, end: 8585, prop: "A" },
  { start: 8586, end: 8591, prop: "N" },
  { start: 8592, end: 8601, prop: "A" },
  { start: 8602, end: 8631, prop: "N" },
  { start: 8632, end: 8633, prop: "A" },
  { start: 8634, end: 8657, prop: "N" },
  { start: 8658, end: 8658, prop: "A" },
  { start: 8659, end: 8659, prop: "N" },
  { start: 8660, end: 8660, prop: "A" },
  { start: 8661, end: 8678, prop: "N" },
  { start: 8679, end: 8679, prop: "A" },
  { start: 8680, end: 8703, prop: "N" },
  { start: 8704, end: 8704, prop: "A" },
  { start: 8705, end: 8705, prop: "N" },
  { start: 8706, end: 8707, prop: "A" },
  { start: 8708, end: 8710, prop: "N" },
  { start: 8711, end: 8712, prop: "A" },
  { start: 8713, end: 8714, prop: "N" },
  { start: 8715, end: 8715, prop: "A" },
  { start: 8716, end: 8718, prop: "N" },
  { start: 8719, end: 8719, prop: "A" },
  { start: 8720, end: 8720, prop: "N" },
  { start: 8721, end: 8721, prop: "A" },
  { start: 8722, end: 8724, prop: "N" },
  { start: 8725, end: 8725, prop: "A" },
  { start: 8726, end: 8729, prop: "N" },
  { start: 8730, end: 8730, prop: "A" },
  { start: 8731, end: 8732, prop: "N" },
  { start: 8733, end: 8736, prop: "A" },
  { start: 8737, end: 8738, prop: "N" },
  { start: 8739, end: 8739, prop: "A" },
  { start: 8740, end: 8740, prop: "N" },
  { start: 8741, end: 8741, prop: "A" },
  { start: 8742, end: 8742, prop: "N" },
  { start: 8743, end: 8748, prop: "A" },
  { start: 8749, end: 8749, prop: "N" },
  { start: 8750, end: 8750, prop: "A" },
  { start: 8751, end: 8755, prop: "N" },
  { start: 8756, end: 8759, prop: "A" },
  { start: 8760, end: 8763, prop: "N" },
  { start: 8764, end: 8765, prop: "A" },
  { start: 8766, end: 8775, prop: "N" },
  { start: 8776, end: 8776, prop: "A" },
  { start: 8777, end: 8779, prop: "N" },
  { start: 8780, end: 8780, prop: "A" },
  { start: 8781, end: 8785, prop: "N" },
  { start: 8786, end: 8786, prop: "A" },
  { start: 8787, end: 8799, prop: "N" },
  { start: 8800, end: 8801, prop: "A" },
  { start: 8802, end: 8803, prop: "N" },
  { start: 8804, end: 8807, prop: "A" },
  { start: 8808, end: 8809, prop: "N" },
  { start: 8810, end: 8811, prop: "A" },
  { start: 8812, end: 8813, prop: "N" },
  { start: 8814, end: 8815, prop: "A" },
  { start: 8816, end: 8833, prop: "N" },
  { start: 8834, end: 8835, prop: "A" },
  { start: 8836, end: 8837, prop: "N" },
  { start: 8838, end: 8839, prop: "A" },
  { start: 8840, end: 8852, prop: "N" },
  { start: 8853, end: 8853, prop: "A" },
  { start: 8854, end: 8856, prop: "N" },
  { start: 8857, end: 8857, prop: "A" },
  { start: 8858, end: 8868, prop: "N" },
  { start: 8869, end: 8869, prop: "A" },
  { start: 8870, end: 8894, prop: "N" },
  { start: 8895, end: 8895, prop: "A" },
  { start: 8896, end: 8977, prop: "N" },
  { start: 8978, end: 8978, prop: "A" },
  { start: 8979, end: 8985, prop: "N" },
  { start: 8986, end: 8987, prop: "W" },
  { start: 8988, end: 9000, prop: "N" },
  { start: 9001, end: 9002, prop: "W" },
  { start: 9003, end: 9192, prop: "N" },
  { start: 9193, end: 9196, prop: "W" },
  { start: 9197, end: 9199, prop: "N" },
  { start: 9200, end: 9200, prop: "W" },
  { start: 9201, end: 9202, prop: "N" },
  { start: 9203, end: 9203, prop: "W" },
  { start: 9204, end: 9311, prop: "N" },
  { start: 9312, end: 9449, prop: "A" },
  { start: 9450, end: 9450, prop: "N" },
  { start: 9451, end: 9547, prop: "A" },
  { start: 9548, end: 9551, prop: "N" },
  { start: 9552, end: 9587, prop: "A" },
  { start: 9588, end: 9599, prop: "N" },
  { start: 9600, end: 9615, prop: "A" },
  { start: 9616, end: 9617, prop: "N" },
  { start: 9618, end: 9621, prop: "A" },
  { start: 9622, end: 9631, prop: "N" },
  { start: 9632, end: 9633, prop: "A" },
  { start: 9634, end: 9634, prop: "N" },
  { start: 9635, end: 9641, prop: "A" },
  { start: 9642, end: 9649, prop: "N" },
  { start: 9650, end: 9651, prop: "A" },
  { start: 9652, end: 9653, prop: "N" },
  { start: 9654, end: 9655, prop: "A" },
  { start: 9656, end: 9659, prop: "N" },
  { start: 9660, end: 9661, prop: "A" },
  { start: 9662, end: 9663, prop: "N" },
  { start: 9664, end: 9665, prop: "A" },
  { start: 9666, end: 9669, prop: "N" },
  { start: 9670, end: 9672, prop: "A" },
  { start: 9673, end: 9674, prop: "N" },
  { start: 9675, end: 9675, prop: "A" },
  { start: 9676, end: 9677, prop: "N" },
  { start: 9678, end: 9681, prop: "A" },
  { start: 9682, end: 9697, prop: "N" },
  { start: 9698, end: 9701, prop: "A" },
  { start: 9702, end: 9710, prop: "N" },
  { start: 9711, end: 9711, prop: "A" },
  { start: 9712, end: 9724, prop: "N" },
  { start: 9725, end: 9726, prop: "W" },
  { start: 9727, end: 9732, prop: "N" },
  { start: 9733, end: 9734, prop: "A" },
  { start: 9735, end: 9736, prop: "N" },
  { start: 9737, end: 9737, prop: "A" },
  { start: 9738, end: 9741, prop: "N" },
  { start: 9742, end: 9743, prop: "A" },
  { start: 9744, end: 9747, prop: "N" },
  { start: 9748, end: 9749, prop: "W" },
  { start: 9750, end: 9755, prop: "N" },
  { start: 9756, end: 9756, prop: "A" },
  { start: 9757, end: 9757, prop: "N" },
  { start: 9758, end: 9758, prop: "A" },
  { start: 9759, end: 9791, prop: "N" },
  { start: 9792, end: 9792, prop: "A" },
  { start: 9793, end: 9793, prop: "N" },
  { start: 9794, end: 9794, prop: "A" },
  { start: 9795, end: 9799, prop: "N" },
  { start: 9800, end: 9811, prop: "W" },
  { start: 9812, end: 9823, prop: "N" },
  { start: 9824, end: 9825, prop: "A" },
  { start: 9826, end: 9826, prop: "N" },
  { start: 9827, end: 9829, prop: "A" },
  { start: 9830, end: 9830, prop: "N" },
  { start: 9831, end: 9834, prop: "A" },
  { start: 9835, end: 9835, prop: "N" },
  { start: 9836, end: 9837, prop: "A" },
  { start: 9838, end: 9838, prop: "N" },
  { start: 9839, end: 9839, prop: "A" },
  { start: 9840, end: 9854, prop: "N" },
  { start: 9855, end: 9855, prop: "W" },
  { start: 9856, end: 9874, prop: "N" },
  { start: 9875, end: 9875, prop: "W" },
  { start: 9876, end: 9885, prop: "N" },
  { start: 9886, end: 9887, prop: "A" },
  { start: 9888, end: 9888, prop: "N" },
  { start: 9889, end: 9889, prop: "W" },
  { start: 9890, end: 9897, prop: "N" },
  { start: 9898, end: 9899, prop: "W" },
  { start: 9900, end: 9916, prop: "N" },
  { start: 9917, end: 9918, prop: "W" },
  { start: 9919, end: 9919, prop: "A" },
  { start: 9920, end: 9923, prop: "N" },
  { start: 9924, end: 9925, prop: "W" },
  { start: 9926, end: 9933, prop: "A" },
  { start: 9934, end: 9934, prop: "W" },
  { start: 9935, end: 9939, prop: "A" },
  { start: 9940, end: 9940, prop: "W" },
  { start: 9941, end: 9953, prop: "A" },
  { start: 9954, end: 9954, prop: "N" },
  { start: 9955, end: 9955, prop: "A" },
  { start: 9956, end: 9959, prop: "N" },
  { start: 9960, end: 9961, prop: "A" },
  { start: 9962, end: 9962, prop: "W" },
  { start: 9963, end: 9969, prop: "A" },
  { start: 9970, end: 9971, prop: "W" },
  { start: 9972, end: 9972, prop: "A" },
  { start: 9973, end: 9973, prop: "W" },
  { start: 9974, end: 9977, prop: "A" },
  { start: 9978, end: 9978, prop: "W" },
  { start: 9979, end: 9980, prop: "A" },
  { start: 9981, end: 9981, prop: "W" },
  { start: 9982, end: 9983, prop: "A" },
  { start: 9984, end: 9988, prop: "N" },
  { start: 9989, end: 9989, prop: "W" },
  { start: 9990, end: 9993, prop: "N" },
  { start: 9994, end: 9995, prop: "W" },
  { start: 9996, end: 10023, prop: "N" },
  { start: 10024, end: 10024, prop: "W" },
  { start: 10025, end: 10044, prop: "N" },
  { start: 10045, end: 10045, prop: "A" },
  { start: 10046, end: 10059, prop: "N" },
  { start: 10060, end: 10060, prop: "W" },
  { start: 10061, end: 10061, prop: "N" },
  { start: 10062, end: 10062, prop: "W" },
  { start: 10063, end: 10066, prop: "N" },
  { start: 10067, end: 10069, prop: "W" },
  { start: 10070, end: 10070, prop: "N" },
  { start: 10071, end: 10071, prop: "W" },
  { start: 10072, end: 10101, prop: "N" },
  { start: 10102, end: 10111, prop: "A" },
  { start: 10112, end: 10132, prop: "N" },
  { start: 10133, end: 10135, prop: "W" },
  { start: 10136, end: 10159, prop: "N" },
  { start: 10160, end: 10160, prop: "W" },
  { start: 10161, end: 10174, prop: "N" },
  { start: 10175, end: 10175, prop: "W" },
  { start: 10176, end: 10213, prop: "N" },
  { start: 10214, end: 10221, prop: "Na" },
  { start: 10222, end: 10628, prop: "N" },
  { start: 10629, end: 10630, prop: "Na" },
  { start: 10631, end: 11034, prop: "N" },
  { start: 11035, end: 11036, prop: "W" },
  { start: 11037, end: 11087, prop: "N" },
  { start: 11088, end: 11088, prop: "W" },
  { start: 11089, end: 11092, prop: "N" },
  { start: 11093, end: 11093, prop: "W" },
  { start: 11094, end: 11097, prop: "A" },
  { start: 11098, end: 11903, prop: "N" },
  { start: 11904, end: 11929, prop: "W" },
  { start: 11930, end: 11930, prop: "N" },
  { start: 11931, end: 12019, prop: "W" },
  { start: 12020, end: 12031, prop: "N" },
  { start: 12032, end: 12245, prop: "W" },
  { start: 12246, end: 12271, prop: "N" },
  { start: 12272, end: 12283, prop: "W" },
  { start: 12284, end: 12287, prop: "N" },
  { start: 12288, end: 12288, prop: "F" },
  { start: 12289, end: 12350, prop: "W" },
  { start: 12351, end: 12352, prop: "N" },
  { start: 12353, end: 12438, prop: "W" },
  { start: 12439, end: 12440, prop: "N" },
  { start: 12441, end: 12543, prop: "W" },
  { start: 12544, end: 12548, prop: "N" },
  { start: 12549, end: 12591, prop: "W" },
  { start: 12592, end: 12592, prop: "N" },
  { start: 12593, end: 12686, prop: "W" },
  { start: 12687, end: 12687, prop: "N" },
  { start: 12688, end: 12730, prop: "W" },
  { start: 12731, end: 12735, prop: "N" },
  { start: 12736, end: 12771, prop: "W" },
  { start: 12772, end: 12783, prop: "N" },
  { start: 12784, end: 12830, prop: "W" },
  { start: 12831, end: 12831, prop: "N" },
  { start: 12832, end: 12871, prop: "W" },
  { start: 12872, end: 12879, prop: "A" },
  { start: 12880, end: 19903, prop: "W" },
  { start: 19904, end: 19967, prop: "N" },
  { start: 19968, end: 42124, prop: "W" },
  { start: 42125, end: 42127, prop: "N" },
  { start: 42128, end: 42182, prop: "W" },
  { start: 42183, end: 43359, prop: "N" },
  { start: 43360, end: 43388, prop: "W" },
  { start: 43389, end: 44031, prop: "N" },
  { start: 44032, end: 55203, prop: "W" },
  { start: 55204, end: 57343, prop: "N" },
  { start: 57344, end: 63743, prop: "A" },
  { start: 63744, end: 64255, prop: "W" },
  { start: 64256, end: 65023, prop: "N" },
  { start: 65024, end: 65039, prop: "A" },
  { start: 65040, end: 65049, prop: "W" },
  { start: 65050, end: 65071, prop: "N" },
  { start: 65072, end: 65106, prop: "W" },
  { start: 65107, end: 65107, prop: "N" },
  { start: 65108, end: 65126, prop: "W" },
  { start: 65127, end: 65127, prop: "N" },
  { start: 65128, end: 65131, prop: "W" },
  { start: 65132, end: 65280, prop: "N" },
  { start: 65281, end: 65376, prop: "F" },
  { start: 65377, end: 65470, prop: "H" },
  { start: 65471, end: 65473, prop: "N" },
  { start: 65474, end: 65479, prop: "H" },
  { start: 65480, end: 65481, prop: "N" },
  { start: 65482, end: 65487, prop: "H" },
  { start: 65488, end: 65489, prop: "N" },
  { start: 65490, end: 65495, prop: "H" },
  { start: 65496, end: 65497, prop: "N" },
  { start: 65498, end: 65500, prop: "H" },
  { start: 65501, end: 65503, prop: "N" },
  { start: 65504, end: 65510, prop: "F" },
  { start: 65511, end: 65511, prop: "N" },
  { start: 65512, end: 65518, prop: "H" },
  { start: 65519, end: 65532, prop: "N" },
  { start: 65533, end: 65533, prop: "A" },
  { start: 65534, end: 94175, prop: "N" },
  { start: 94176, end: 94179, prop: "W" },
  { start: 94180, end: 94207, prop: "N" },
  { start: 94208, end: 100343, prop: "W" },
  { start: 100344, end: 100351, prop: "N" },
  { start: 100352, end: 101106, prop: "W" },
  { start: 101107, end: 110591, prop: "N" },
  { start: 110592, end: 110878, prop: "W" },
  { start: 110879, end: 110927, prop: "N" },
  { start: 110928, end: 110930, prop: "W" },
  { start: 110931, end: 110947, prop: "N" },
  { start: 110948, end: 110951, prop: "W" },
  { start: 110952, end: 110959, prop: "N" },
  { start: 110960, end: 111355, prop: "W" },
  { start: 111356, end: 126979, prop: "N" },
  { start: 126980, end: 126980, prop: "W" },
  { start: 126981, end: 127182, prop: "N" },
  { start: 127183, end: 127183, prop: "W" },
  { start: 127184, end: 127231, prop: "N" },
  { start: 127232, end: 127242, prop: "A" },
  { start: 127243, end: 127247, prop: "N" },
  { start: 127248, end: 127277, prop: "A" },
  { start: 127278, end: 127279, prop: "N" },
  { start: 127280, end: 127337, prop: "A" },
  { start: 127338, end: 127343, prop: "N" },
  { start: 127344, end: 127373, prop: "A" },
  { start: 127374, end: 127374, prop: "W" },
  { start: 127375, end: 127376, prop: "A" },
  { start: 127377, end: 127386, prop: "W" },
  { start: 127387, end: 127404, prop: "A" },
  { start: 127405, end: 127487, prop: "N" },
  { start: 127488, end: 127490, prop: "W" },
  { start: 127491, end: 127503, prop: "N" },
  { start: 127504, end: 127547, prop: "W" },
  { start: 127548, end: 127551, prop: "N" },
  { start: 127552, end: 127560, prop: "W" },
  { start: 127561, end: 127567, prop: "N" },
  { start: 127568, end: 127569, prop: "W" },
  { start: 127570, end: 127583, prop: "N" },
  { start: 127584, end: 127589, prop: "W" },
  { start: 127590, end: 127743, prop: "N" },
  { start: 127744, end: 127776, prop: "W" },
  { start: 127777, end: 127788, prop: "N" },
  { start: 127789, end: 127797, prop: "W" },
  { start: 127798, end: 127798, prop: "N" },
  { start: 127799, end: 127868, prop: "W" },
  { start: 127869, end: 127869, prop: "N" },
  { start: 127870, end: 127891, prop: "W" },
  { start: 127892, end: 127903, prop: "N" },
  { start: 127904, end: 127946, prop: "W" },
  { start: 127947, end: 127950, prop: "N" },
  { start: 127951, end: 127955, prop: "W" },
  { start: 127956, end: 127967, prop: "N" },
  { start: 127968, end: 127984, prop: "W" },
  { start: 127985, end: 127987, prop: "N" },
  { start: 127988, end: 127988, prop: "W" },
  { start: 127989, end: 127991, prop: "N" },
  { start: 127992, end: 128062, prop: "W" },
  { start: 128063, end: 128063, prop: "N" },
  { start: 128064, end: 128064, prop: "W" },
  { start: 128065, end: 128065, prop: "N" },
  { start: 128066, end: 128252, prop: "W" },
  { start: 128253, end: 128254, prop: "N" },
  { start: 128255, end: 128317, prop: "W" },
  { start: 128318, end: 128330, prop: "N" },
  { start: 128331, end: 128334, prop: "W" },
  { start: 128335, end: 128335, prop: "N" },
  { start: 128336, end: 128359, prop: "W" },
  { start: 128360, end: 128377, prop: "N" },
  { start: 128378, end: 128378, prop: "W" },
  { start: 128379, end: 128404, prop: "N" },
  { start: 128405, end: 128406, prop: "W" },
  { start: 128407, end: 128419, prop: "N" },
  { start: 128420, end: 128420, prop: "W" },
  { start: 128421, end: 128506, prop: "N" },
  { start: 128507, end: 128591, prop: "W" },
  { start: 128592, end: 128639, prop: "N" },
  { start: 128640, end: 128709, prop: "W" },
  { start: 128710, end: 128715, prop: "N" },
  { start: 128716, end: 128716, prop: "W" },
  { start: 128717, end: 128719, prop: "N" },
  { start: 128720, end: 128722, prop: "W" },
  { start: 128723, end: 128724, prop: "N" },
  { start: 128725, end: 128725, prop: "W" },
  { start: 128726, end: 128746, prop: "N" },
  { start: 128747, end: 128748, prop: "W" },
  { start: 128749, end: 128755, prop: "N" },
  { start: 128756, end: 128762, prop: "W" },
  { start: 128763, end: 128991, prop: "N" },
  { start: 128992, end: 129003, prop: "W" },
  { start: 129004, end: 129292, prop: "N" },
  { start: 129293, end: 129393, prop: "W" },
  { start: 129394, end: 129394, prop: "N" },
  { start: 129395, end: 129398, prop: "W" },
  { start: 129399, end: 129401, prop: "N" },
  { start: 129402, end: 129442, prop: "W" },
  { start: 129443, end: 129444, prop: "N" },
  { start: 129445, end: 129450, prop: "W" },
  { start: 129451, end: 129453, prop: "N" },
  { start: 129454, end: 129482, prop: "W" },
  { start: 129483, end: 129484, prop: "N" },
  { start: 129485, end: 129535, prop: "W" },
  { start: 129536, end: 129647, prop: "N" },
  { start: 129648, end: 129651, prop: "W" },
  { start: 129652, end: 129655, prop: "N" },
  { start: 129656, end: 129658, prop: "W" },
  { start: 129659, end: 129663, prop: "N" },
  { start: 129664, end: 129666, prop: "W" },
  { start: 129667, end: 129679, prop: "N" },
  { start: 129680, end: 129685, prop: "W" },
  { start: 129686, end: 131071, prop: "N" },
  { start: 131072, end: 196605, prop: "W" },
  { start: 196606, end: 196607, prop: "N" },
  { start: 196608, end: 262141, prop: "W" },
  { start: 262142, end: 917759, prop: "N" },
  { start: 917760, end: 917999, prop: "A" },
  { start: 918000, end: 983039, prop: "N" },
  { start: 983040, end: 1048573, prop: "A" },
  { start: 1048574, end: 1048575, prop: "N" },
  { start: 1048576, end: 1114109, prop: "A" },
  { start: 1114110, end: 1114111, prop: "N" },
];
/* END */

const version = "12.1.0";

/**
 * Returns The EAW property of a code point.
 * @private
 * @param {string} codePoint A code point
 * @return {string} The EAW property of the specified code point
 */
function _getEAWOfCodePoint(codePoint) {
  let min = 0;
  let max = defs.length - 1;
  while (min !== max) {
    const i   = min + ((max - min) >> 1);
    const def = defs[i];
    if (codePoint < def.start) {
      max = i - 1;
    } else if (codePoint > def.end) {
      min = i + 1;
    } else {
      return def.prop;
    }
  }
  return defs[min].prop;
}

/**
 * Returns the EAW property of a character.
 * @param {string} str A string in which the character is contained
 * @param {number} [at = 0] The position (in code unit) of the character in the string
 * @return {string} The EAW property of the specified character
 * @example
 * import { getEAW } from "meaw";
 *
 * // Narrow
 * assert(getEAW("A") === "Na");
 * // Wide
 * assert(getEAW("あ") === "W");
 * assert(getEAW("安") === "W");
 * assert(getEAW("🍣") === "W");
 * // Fullwidth
 * assert(getEAW("Ａ") === "F");
 * // Halfwidth
 * assert(getEAW("ｱ") === "H");
 * // Ambiguous
 * assert(getEAW("∀") === "A");
 * assert(getEAW("→") === "A");
 * assert(getEAW("Ω") === "A");
 * assert(getEAW("Я") === "A");
 * // Neutral
 * assert(getEAW("ℵ") === "N");
 *
 * // a position (in code unit) can be specified
 * assert(getEAW("ℵAあＡｱ∀", 2) === "W");
 */
function getEAW(str, at) {
  const codePoint = str.codePointAt(at || 0);
  return codePoint === undefined
    ? undefined
    : _getEAWOfCodePoint(codePoint);
}

const defaultWidthMap = {
  "N" : 1,
  "Na": 1,
  "W" : 2,
  "F" : 2,
  "H" : 1,
  "A" : 1,
};

/**
 * Computes width of a string based on the EAW properties of its characters.
 * By default characters with property Wide (W) or Fullwidth (F) are treated as wide (= 2)
 * and the others are as narrow (= 1)
 * @param {string} str A string to compute width
 * @param {Object<string, number> | undefined} [widthMap = undefined]
 *   An object which represents a map from an EAW property to a character width
 * @return {number} The computed width
 * @example
 * import { computeWidth } from "meaw";
 *
 * assert(computeWidth("Aあ🍣Ω") === 6);
 * // custom widths can be specified by an object
 * assert(computeWidth("Aあ🍣Ω", { "A": 2 }) === 7);
 */
function computeWidth(str, widthMap) {
  const map = widthMap
    ? Object.assign({}, defaultWidthMap, widthMap)
    : defaultWidthMap;
  let width = 0;
  for (const char of str) {
    width += map[getEAW(char)];
  }
  return width;
}

var meaw_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    computeWidth: computeWidth,
    eawVersion: version,
    getEAW: getEAW
});

var meaw_1 = /*@__PURE__*/getAugmentedNamespace(meaw_es);

var formatter = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveColumn = exports.deleteColumn = exports.insertColumn = exports.moveRow = exports.deleteRow = exports.insertRow = exports.alterAlignment = exports.formatTable = exports.FormatType = exports._weakFormatTable = exports._formatTable = exports._padText = exports._alignText = exports._computeTextWidth = exports.completeTable = exports._extendArray = exports._delimiterText = void 0;





/**
 * Creates a delimiter text.
 *
 * @private
 * @param width - Width of the horizontal bar of delimiter.
 * @throws {Error} Unknown alignment.
 */
exports._delimiterText = (alignment$1, width) => {
    const bar = '-'.repeat(width);
    switch (alignment$1) {
        case alignment.Alignment.NONE:
            return ` ${bar} `;
        case alignment.Alignment.LEFT:
            return `:${bar} `;
        case alignment.Alignment.RIGHT:
            return ` ${bar}:`;
        case alignment.Alignment.CENTER:
            return `:${bar}:`;
        default:
            throw new Error('Unknown alignment: ' + alignment$1);
    }
};
/**
 * Extends array size.
 *
 * @private
 * @param callback - Callback function to fill newly created cells.
 * @returns Extended array.
 */
exports._extendArray = (arr, size, callback) => {
    const extended = arr.slice();
    for (let i = arr.length; i < size; i++) {
        extended.push(callback(i, arr));
    }
    return extended;
};
/**
 * Completes a table by adding missing delimiter and cells.
 * After completion, all rows in the table have the same width.
 *
 * @private
 *
 * @throws {Error} Empty table.
 */
exports.completeTable = (table$1, options) => {
    const tableHeight = table$1.getHeight();
    const tableWidth = table$1.getWidth();
    if (tableHeight === 0) {
        throw new Error('Empty table');
    }
    const rows = table$1.getRows();
    const newRows = [];
    // header
    const headerRow = rows[0];
    const headerCells = headerRow.getCells();
    newRows.push(new tableRow.TableRow(exports._extendArray(headerCells, tableWidth, (j) => new tableCell.TableCell(j === headerCells.length ? headerRow.marginRight : '')), headerRow.marginLeft, headerCells.length < tableWidth ? '' : headerRow.marginRight));
    // delimiter
    const delimiterRow = table$1.getDelimiterRow();
    if (delimiterRow !== undefined) {
        const delimiterCells = delimiterRow.getCells();
        newRows.push(new tableRow.TableRow(exports._extendArray(delimiterCells, tableWidth, (j) => new tableCell.TableCell(exports._delimiterText(alignment.Alignment.NONE, j === delimiterCells.length
            ? Math.max(options.minDelimiterWidth, delimiterRow.marginRight.length - 2)
            : options.minDelimiterWidth))), delimiterRow.marginLeft, delimiterCells.length < tableWidth ? '' : delimiterRow.marginRight));
    }
    else {
        newRows.push(new tableRow.TableRow(exports._extendArray([], tableWidth, () => new tableCell.TableCell(exports._delimiterText(alignment.Alignment.NONE, options.minDelimiterWidth))), '', ''));
    }
    // body
    for (let i = delimiterRow !== undefined ? 2 : 1; i < tableHeight; i++) {
        const row = rows[i];
        const cells = row.getCells();
        newRows.push(new tableRow.TableRow(exports._extendArray(cells, tableWidth, (j) => new tableCell.TableCell(j === cells.length ? row.marginRight : '')), row.marginLeft, cells.length < tableWidth ? '' : row.marginRight));
    }
    return {
        table: new table.Table(newRows),
        delimiterInserted: delimiterRow === undefined,
    };
};
/**
 * Calculates the width of a text based on characters' EAW properties.
 *
 * @private
 *
 * @returns Calculated width of the text.
 */
exports._computeTextWidth = (text, options) => {
    const normalized = options.normalize ? text.normalize('NFC') : text;
    let w = 0;
    for (const char of normalized) {
        if (options.wideChars.has(char)) {
            w += 2;
            continue;
        }
        if (options.narrowChars.has(char)) {
            w += 1;
            continue;
        }
        switch (meaw_1.getEAW(char)) {
            case 'F':
            case 'W':
                w += 2;
                break;
            case 'A':
                w += options.ambiguousAsWide ? 2 : 1;
                break;
            default:
                w += 1;
        }
    }
    return w;
};
/**
 * Returns a aligned cell content.
 *
 * @throws {Error} Unknown alignment.
 * @throws {Error} Unexpected default alignment.
 */
exports._alignText = (text, width, alignment$1, options) => {
    const space = width - exports._computeTextWidth(text, options);
    if (space < 0) {
        return text;
    }
    switch (alignment$1) {
        case alignment.Alignment.NONE:
            throw new Error('Unexpected default alignment');
        case alignment.Alignment.LEFT:
            return text + ' '.repeat(space);
        case alignment.Alignment.RIGHT:
            return ' '.repeat(space) + text;
        case alignment.Alignment.CENTER:
            return (' '.repeat(Math.floor(space / 2)) +
                text +
                ' '.repeat(Math.ceil(space / 2)));
        default:
            throw new Error('Unknown alignment: ' + alignment$1);
    }
};
/**
 * Just adds one space paddings to both sides of a text.
 *
 * @private
 */
exports._padText = (text) => ` ${text} `;
/**
 * Formats a table.
 *
 * @private
 */
exports._formatTable = (table$1, options) => {
    const tableHeight = table$1.getHeight();
    const tableWidth = table$1.getWidth();
    if (tableHeight === 0) {
        return {
            table: table$1,
            marginLeft: '',
        };
    }
    const marginLeft = table$1.getRows()[0].marginLeft;
    if (tableWidth === 0) {
        const rows = new Array(tableHeight).fill(new tableRow.TableRow([], marginLeft, ''));
        return {
            table: new table.Table(rows),
            marginLeft,
        };
    }
    // compute column widths
    const delimiterRow = table$1.getDelimiterRow();
    const columnWidths = new Array(tableWidth).fill(0);
    if (delimiterRow !== undefined) {
        const delimiterRowWidth = delimiterRow.getWidth();
        for (let j = 0; j < delimiterRowWidth; j++) {
            columnWidths[j] = options.minDelimiterWidth;
        }
    }
    for (let i = 0; i < tableHeight; i++) {
        if (delimiterRow !== undefined && i === 1) {
            continue;
        }
        const row = table$1.getRows()[i];
        const rowWidth = row.getWidth();
        for (let j = 0; j < rowWidth; j++) {
            columnWidths[j] = Math.max(columnWidths[j], exports._computeTextWidth(row.getCellAt(j).content, options.textWidthOptions));
        }
    }
    // get column alignments
    const alignments = delimiterRow !== undefined
        ? exports._extendArray(delimiterRow.getCells().map((cell) => cell.getAlignment()), tableWidth, 
        // Safe conversion because DefaultAlignment is a subset of Alignment
        () => options.defaultAlignment)
        : new Array(tableWidth).fill(options.defaultAlignment);
    // format
    const rows = [];
    // header
    const headerRow = table$1.getRows()[0];
    rows.push(new tableRow.TableRow(headerRow
        .getCells()
        .map((cell, j) => new tableCell.TableCell(exports._padText(exports._alignText(cell.content, columnWidths[j], options.headerAlignment === alignment.HeaderAlignment.FOLLOW
        ? alignments[j] === alignment.Alignment.NONE
            ? options.defaultAlignment
            : alignments[j]
        : options.headerAlignment, options.textWidthOptions)))), marginLeft, ''));
    // delimiter
    if (delimiterRow !== undefined) {
        rows.push(new tableRow.TableRow(delimiterRow
            .getCells()
            .map((cell, j) => new tableCell.TableCell(exports._delimiterText(alignments[j], columnWidths[j]))), marginLeft, ''));
    }
    // body
    for (let i = delimiterRow !== undefined ? 2 : 1; i < tableHeight; i++) {
        const row = table$1.getRows()[i];
        rows.push(new tableRow.TableRow(row
            .getCells()
            .map((cell, j) => new tableCell.TableCell(exports._padText(exports._alignText(cell.content, columnWidths[j], alignments[j] === alignment.Alignment.NONE
            ? options.defaultAlignment
            : alignments[j], options.textWidthOptions)))), marginLeft, ''));
    }
    return {
        table: new table.Table(rows),
        marginLeft,
    };
};
/**
 * Formats a table weakly.
 * Rows are formatted independently to each other, cell contents are just trimmed and not aligned.
 * This is useful when using a non-monospaced font or dealing with wide tables.
 *
 * @private
 */
exports._weakFormatTable = (table$1, options) => {
    const tableHeight = table$1.getHeight();
    const tableWidth = table$1.getWidth();
    if (tableHeight === 0) {
        return {
            table: table$1,
            marginLeft: '',
        };
    }
    const marginLeft = table$1.getRows()[0].marginLeft;
    if (tableWidth === 0) {
        const rows = new Array(tableHeight).fill(new tableRow.TableRow([], marginLeft, ''));
        return {
            table: new table.Table(rows),
            marginLeft,
        };
    }
    const delimiterRow = table$1.getDelimiterRow();
    // format
    const rows = [];
    // header
    const headerRow = table$1.getRows()[0];
    rows.push(new tableRow.TableRow(headerRow.getCells().map((cell) => new tableCell.TableCell(exports._padText(cell.content))), marginLeft, ''));
    // delimiter
    if (delimiterRow !== undefined) {
        rows.push(new tableRow.TableRow(delimiterRow
            .getCells()
            .map((cell) => new tableCell.TableCell(exports._delimiterText(cell.getAlignment(), options.minDelimiterWidth))), marginLeft, ''));
    }
    // body
    for (let i = delimiterRow !== undefined ? 2 : 1; i < tableHeight; i++) {
        const row = table$1.getRows()[i];
        rows.push(new tableRow.TableRow(row.getCells().map((cell) => new tableCell.TableCell(exports._padText(cell.content))), marginLeft, ''));
    }
    return {
        table: new table.Table(rows),
        marginLeft,
    };
};
/**
 * Represents table format type.
 *
 * - `FormatType.NORMAL` - Formats table normally.
 * - `FormatType.WEAK` - Formats table weakly, rows are formatted independently to each other, cell
 *   contents are just trimmed and not aligned.
 */
var FormatType;
(function (FormatType) {
    FormatType["NORMAL"] = "normal";
    FormatType["WEAK"] = "weak";
})(FormatType = exports.FormatType || (exports.FormatType = {}));
/**
 * Formats a table.
 *
 * @private
 *
 * @throws {Error} Unknown format type.
 */
exports.formatTable = (table, options) => {
    switch (options.formatType) {
        case FormatType.NORMAL:
            return exports._formatTable(table, options);
        case FormatType.WEAK:
            return exports._weakFormatTable(table, options);
        default:
            throw new Error('Unknown format type: ' + options.formatType);
    }
};
/**
 * Alters a column's alignment of a table.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param columnIndex - An index of the column.
 * @param alignment - A new alignment of the column.
 * @param options - An object containing options for completion.
 * @returns {Table} An altered table object.
 * If the column index is out of range, returns the original table.
 */
exports.alterAlignment = (table$1, columnIndex, alignment, options) => {
    if (table$1.getHeight() < 1) {
        return table$1;
    }
    const delimiterRow = table$1.getRows()[1];
    if (columnIndex < 0 || delimiterRow.getWidth() - 1 < columnIndex) {
        return table$1;
    }
    const delimiterCells = delimiterRow.getCells();
    delimiterCells[columnIndex] = new tableCell.TableCell(exports._delimiterText(alignment, options.minDelimiterWidth));
    const rows = table$1.getRows();
    rows[1] = new tableRow.TableRow(delimiterCells, delimiterRow.marginLeft, delimiterRow.marginRight);
    return new table.Table(rows);
};
/**
 * Inserts a row to a table.
 * The row is always inserted after the header and the delimiter rows, even if the index specifies
 * the header or the delimiter.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param rowIndex - An row index at which a new row will be inserted.
 * @param row - A table row to be inserted.
 * @returns An altered table obejct.
 */
exports.insertRow = (table$1, rowIndex, row) => {
    const rows = table$1.getRows();
    rows.splice(Math.max(rowIndex, 2), 0, row);
    return new table.Table(rows);
};
/**
 * Deletes a row in a table.
 * If the index specifies the header row, the cells are emptied but the row will not be removed.
 * If the index specifies the delimiter row, it does nothing.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param rowIndex - An index of the row to be deleted.
 * @returns An altered table obejct.
 */
exports.deleteRow = (table$1, rowIndex) => {
    if (rowIndex === 1) {
        return table$1;
    }
    const rows = table$1.getRows();
    if (rowIndex === 0) {
        const headerRow = rows[0];
        rows[0] = new tableRow.TableRow(new Array(headerRow.getWidth()).fill(new tableCell.TableCell('')), headerRow.marginLeft, headerRow.marginRight);
    }
    else {
        rows.splice(rowIndex, 1);
    }
    return new table.Table(rows);
};
/**
 * Moves a row at the index to the specified destination.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param rowIndex - Index of the row to be moved.
 * @param destIndex - Index of the destination.
 * @returns An altered table object.
 */
exports.moveRow = (table$1, rowIndex, destIndex) => {
    if (rowIndex <= 1 || destIndex <= 1 || rowIndex === destIndex) {
        return table$1;
    }
    const rows = table$1.getRows();
    const row = rows[rowIndex];
    rows.splice(rowIndex, 1);
    rows.splice(destIndex, 0, row);
    return new table.Table(rows);
};
/**
 * Inserts a column to a table.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param columnIndex - An column index at which the new column will be inserted.
 * @param column - An array of cells.
 * @param options - An object containing options for completion.
 * @returns An altered table obejct.
 */
exports.insertColumn = (table$1, columnIndex, column, options) => {
    const rows = table$1.getRows();
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cells = rows[i].getCells();
        const cell = i === 1
            ? new tableCell.TableCell(exports._delimiterText(alignment.Alignment.NONE, options.minDelimiterWidth))
            : column[i > 1 ? i - 1 : i];
        cells.splice(columnIndex, 0, cell);
        rows[i] = new tableRow.TableRow(cells, row.marginLeft, row.marginRight);
    }
    return new table.Table(rows);
};
/**
 * Deletes a column in a table.
 * If there will be no columns after the deletion, the cells are emptied but the column will not be
 * removed.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param columnIndex - An index of the column to be deleted.
 * @param options - An object containing options for completion.
 * @returns An altered table object.
 */
exports.deleteColumn = (table$1, columnIndex, options) => {
    const rows = table$1.getRows();
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        let cells = row.getCells();
        if (cells.length <= 1) {
            cells = [
                new tableCell.TableCell(i === 1
                    ? exports._delimiterText(alignment.Alignment.NONE, options.minDelimiterWidth)
                    : ''),
            ];
        }
        else {
            cells.splice(columnIndex, 1);
        }
        rows[i] = new tableRow.TableRow(cells, row.marginLeft, row.marginRight);
    }
    return new table.Table(rows);
};
/**
 * Moves a column at the index to the specified destination.
 *
 * @private
 * @param table - A completed non-empty table.
 * @param columnIndex - Index of the column to be moved.
 * @param destIndex - Index of the destination.
 * @returns An altered table object.
 */
exports.moveColumn = (table$1, columnIndex, destIndex) => {
    if (columnIndex === destIndex) {
        return table$1;
    }
    const rows = table$1.getRows();
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.getCells();
        const cell = cells[columnIndex];
        cells.splice(columnIndex, 1);
        cells.splice(destIndex, 0, cell);
        rows[i] = new tableRow.TableRow(cells, row.marginLeft, row.marginRight);
    }
    return new table.Table(rows);
};
});

var editScript = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortestEditScript = exports.applyEditScript = exports._applyCommand = exports.Delete = exports.Insert = void 0;
/**
 * The `Insert` class represents an insertion of a line.
 *
 * @private
 */
class Insert {
    /**
     * Creats a new `Insert` object.
     *
     * @param row - Row index, starts from `0`.
     * @param line - A string to be inserted at the row.
     */
    constructor(row, line) {
        this.row = row;
        this.line = line;
    }
}
exports.Insert = Insert;
/**
 * The `Delete` class represents a deletion of a line.
 *
 * @private
 */
class Delete {
    /**
     * Creates a new `Delete` object.
     *
     * @param row - Row index, starts from `0`.
     */
    constructor(row) {
        this.row = row;
    }
}
exports.Delete = Delete;
/**
 * Applies a command to the text editor.
 *
 * @private
 * @param textEditor - An interface to the text editor.
 * @param command - A command.
 * @param rowOffset - Offset to the row index of the command.
 */
exports._applyCommand = (textEditor, command, rowOffset) => {
    if (command instanceof Insert) {
        textEditor.insertLine(rowOffset + command.row, command.line);
    }
    else if (command instanceof Delete) {
        textEditor.deleteLine(rowOffset + command.row);
    }
    else {
        throw new Error('Unknown command');
    }
};
/**
 * Apply an edit script (array of commands) to the text editor.
 *
 * @private
 * @param textEditor - An interface to the text editor.
 * @param script - An array of commands.
 * The commands are applied sequentially in the order of the array.
 * @param rowOffset - Offset to the row index of the commands.
 */
exports.applyEditScript = (textEditor, script, rowOffset) => {
    for (const command of script) {
        exports._applyCommand(textEditor, command, rowOffset);
    }
};
/**
 * Linked list used to remember edit script.
 *
 * @private
 */
class IList {
    get car() {
        throw new Error('Not implemented');
    }
    get cdr() {
        throw new Error('Not implemented');
    }
    isEmpty() {
        throw new Error('Not implemented');
    }
    unshift(value) {
        return new Cons(value, this);
    }
    toArray() {
        const arr = [];
        let rest = this;
        while (!rest.isEmpty()) {
            arr.push(rest.car);
            rest = rest.cdr;
        }
        return arr;
    }
}
/**
 * @private
 */
class Nil extends IList {
    constructor() {
        super();
    }
    get car() {
        throw new Error('Empty list');
    }
    get cdr() {
        throw new Error('Empty list');
    }
    isEmpty() {
        return true;
    }
}
/**
 * @private
 */
class Cons extends IList {
    constructor(car, cdr) {
        super();
        this._car = car;
        this._cdr = cdr;
    }
    get car() {
        return this._car;
    }
    get cdr() {
        return this._cdr;
    }
    isEmpty() {
        return false;
    }
}
/**
 * Computes the shortest edit script between two arrays of strings.
 *
 * @private
 * @param from - An array of string the edit starts from.
 * @param to - An array of string the edit goes to.
 * @param [limit=-1] - Upper limit of edit distance to be searched.
 * If negative, there is no limit.
 * @returns The shortest edit script that turns `from` into `to`;
 * `undefined` if no edit script is found in the given range.
 */
exports.shortestEditScript = (from, to, limit = -1) => {
    const fromLen = from.length;
    const toLen = to.length;
    const maxd = limit >= 0 ? Math.min(limit, fromLen + toLen) : fromLen + toLen;
    const mem = new Array(Math.min(maxd, fromLen) + Math.min(maxd, toLen) + 1);
    const offset = Math.min(maxd, fromLen);
    for (let d = 0; d <= maxd; d++) {
        const mink = d <= fromLen ? -d : d - 2 * fromLen;
        const maxk = d <= toLen ? d : -d + 2 * toLen;
        for (let k = mink; k <= maxk; k += 2) {
            let i;
            let script;
            if (d === 0) {
                i = 0;
                script = new Nil();
            }
            else if (k === -d) {
                i = mem[offset + k + 1].i + 1;
                script = mem[offset + k + 1].script.unshift(new Delete(i + k));
            }
            else if (k === d) {
                i = mem[offset + k - 1].i;
                script = mem[offset + k - 1].script.unshift(new Insert(i + k - 1, to[i + k - 1]));
            }
            else {
                const vi = mem[offset + k + 1].i + 1;
                const hi = mem[offset + k - 1].i;
                if (vi > hi) {
                    i = vi;
                    script = mem[offset + k + 1].script.unshift(new Delete(i + k));
                }
                else {
                    i = hi;
                    script = mem[offset + k - 1].script.unshift(new Insert(i + k - 1, to[i + k - 1]));
                }
            }
            while (i < fromLen && i + k < toLen && from[i] === to[i + k]) {
                i += 1;
            }
            if (k === toLen - fromLen && i === fromLen) {
                return script.toArray().reverse();
            }
            mem[offset + k] = { i, script };
        }
    }
    return undefined;
};
});

var textEditor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITextEditor = void 0;
/**
 * The `ITextEditor` represents an interface to a text editor.
 *
 * @interface
 */
class ITextEditor {
    /**
     * Gets the current cursor position.
     *
     * @returns A point object that represents the cursor position.
     */
    getCursorPosition() {
        throw new Error('Not implemented: getCursorPosition');
    }
    /**
     * Sets the cursor position to a specified one.
     */
    setCursorPosition(pos) {
        throw new Error('Not implemented: setCursorPosition');
    }
    /**
     * Sets the selection range.
     * This method also expects the cursor position to be moved as the end of the selection range.
     */
    setSelectionRange(range) {
        throw new Error('Not implemented: setSelectionRange');
    }
    /**
     * Gets the last row index of the text editor.
     */
    getLastRow() {
        throw new Error('Not implemented: getLastRow');
    }
    /**
     * Checks if the editor accepts a table at a row to be editted.
     * It should return `false` if, for example, the row is in a code block (not Markdown).
     *
     * @param row - A row index in the text editor.
     * @returns `true` if the table at the row can be editted.
     */
    acceptsTableEdit(row) {
        throw new Error('Not implemented: acceptsTableEdit');
    }
    /**
     * Gets a line string at a row.
     *
     * @param row - Row index, starts from `0`.
     * @returns The line at the specified row.
     * The line must not contain an EOL like `"\n"` or `"\r"`.
     */
    getLine(row) {
        throw new Error('Not implemented: getLine');
    }
    /**
     * Inserts a line at a specified row.
     *
     * @param row - Row index, starts from `0`.
     * @param line - A string to be inserted.
     * This must not contain an EOL like `"\n"` or `"\r"`.
     */
    insertLine(row, line) {
        throw new Error('Not implemented: insertLine');
    }
    /**
     * Deletes a line at a specified row.
     *
     * @param row - Row index, starts from `0`.
     */
    deleteLine(row) {
        throw new Error('Not implemented: deleteLine');
    }
    /**
     * Replace lines in a specified range.
     *
     * @param startRow - Start row index, starts from `0`.
     * @param endRow - End row index.
     * Lines from `startRow` to `endRow - 1` is replaced.
     * @param lines - An array of string.
     * Each strings must not contain an EOL like `"\n"` or `"\r"`.
     */
    replaceLines(startRow, endRow, lines) {
        throw new Error('Not implemented: replaceLines');
    }
    /**
     * Batches multiple operations as a single undo/redo step.
     *
     * @param func - A callback function that executes some operations on the text editor.
     */
    transact(func) {
        throw new Error('Not implemented: transact');
    }
}
exports.ITextEditor = ITextEditor;
});

var options = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = exports.optionsWithDefaults = void 0;


const DEFAULT_TEXT_WIDTH_OPTIONS = {
    normalize: true,
    wideChars: new Set(),
    narrowChars: new Set(),
    ambiguousAsWide: false,
};
const DEFAULT_OPTIONS = {
    leftMarginChars: new Set(),
    formatType: formatter.FormatType.NORMAL,
    minDelimiterWidth: 3,
    defaultAlignment: alignment.DefaultAlignment.LEFT,
    headerAlignment: alignment.HeaderAlignment.FOLLOW,
    smartCursor: false,
};
/**
 * Create an Options object for the formatter.
 * The default values are used for options that are not specified.
 *
 * The available options and default values are listed below.
 *
 * | property name       | type                              | description                                             | default value            |
 * | ------------------- | --------------------------------- | ------------------------------------------------------- | ------------------------ |
 * | `leftMarginChars`   | {@link Set}&lt;{@link string}&gt; | A set of additional left margin characters.             | `new Set()`              |
 * | `formatType`        | {@link FormatType}                | Format type, normal or weak.                            | `FormatType.NORMAL`      |
 * | `minDelimiterWidth` | {@link number}                    | Minimum width of delimiters.                            | `3`                      |
 * | `defaultAlignment`  | {@link DefaultAlignment}          | Default alignment of columns.                           | `DefaultAlignment.LEFT`  |
 * | `headerAlignment`   | {@link HeaderAlignment}           | Alignment of header cells.                              | `HeaderAlignment.FOLLOW` |
 * | `textWidthOptions`  | {@link TextWidthOptions}          | An object containing options for computing text widths. |                          |
 * | `smartCursor`       | {@link boolean}                   | Enables "Smart Cursor" feature.                         | `false`                  |
 *
 * The available options for `textWidthOptions` are the following ones.
 *
 * | property name     | type                              | description                                           | default value |
 * | ----------------- | --------------------------------- | ----------------------------------------------------- | ------------- |
 * | `normalize`       | {@link boolean}                   | Normalizes texts before computing text widths.        | `true`        |
 * | `wideChars`       | {@link Set}&lt;{@link string}&gt; | A set of characters that should be treated as wide.   | `new Set()`   |
 * | `narrowChars`     | {@link Set}&lt;{@link string}&gt; | A set of characters that should be treated as narrow. | `new Set()`   |
 * | `ambiguousAsWide` | {@link boolean}                   | Treats East Asian Ambiguous characters as wide.       | `false`       |
 *
 */
exports.optionsWithDefaults = (options) => (Object.assign(Object.assign(Object.assign({}, DEFAULT_OPTIONS), options), { textWidthOptions: options.textWidthOptions
        ? Object.assign(Object.assign({}, DEFAULT_TEXT_WIDTH_OPTIONS), options.textWidthOptions) : DEFAULT_TEXT_WIDTH_OPTIONS }));
exports.defaultOptions = exports.optionsWithDefaults({});
});

var tableEditor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableEditor = exports._computeNewOffset = exports._createIsTableRowRegex = exports.SortOrder = void 0;









var SortOrder;
(function (SortOrder) {
    SortOrder["Ascending"] = "ascending";
    SortOrder["Descending"] = "descending";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
/**
 * Creates a regular expression object that matches a table row.
 *
 * @param leftMarginChars - A set of additional left margin characters.
 * A pipe `|`, a backslash `\`, and a backquote will be ignored.
 * @returns A regular expression object that matches a table row.
 */
exports._createIsTableRowRegex = (leftMarginChars) => new RegExp(`^${parser.marginRegexSrc(leftMarginChars)}\\|`, 'u');
/**
 * Computes new focus offset from information of completed and formatted tables.
 *
 * @private
 * @param focus - A focus.
 * @param table - A completed but not formatted table with original cell contents.
 * @param formatted - Information of the formatted table.
 * @param moved - Indicates whether the focus position is moved by a command or not.
 */
exports._computeNewOffset = (focus, table, formatted, moved) => {
    if (moved) {
        const formattedFocusedCell = formatted.table.getFocusedCell(focus);
        if (formattedFocusedCell !== undefined) {
            return formattedFocusedCell.computeRawOffset(0);
        }
        return focus.column < 0 ? formatted.marginLeft.length : 0;
    }
    const focusedCell = table.getFocusedCell(focus);
    const formattedFocusedCell = formatted.table.getFocusedCell(focus);
    if (focusedCell !== undefined && formattedFocusedCell !== undefined) {
        const contentOffset = Math.min(focusedCell.computeContentOffset(focus.offset), formattedFocusedCell.content.length);
        return formattedFocusedCell.computeRawOffset(contentOffset);
    }
    return focus.column < 0 ? formatted.marginLeft.length : 0;
};
/**
 * The `TableEditor` class is at the center of the markdown-table-editor.
 * When a command is executed, it reads a table from the text editor, does some operation on the
 * table, and then apply the result to the text editor.
 *
 * To use this class, the text editor (or an interface to it) must implement {@link ITextEditor}.
 */
class TableEditor {
    /**
     * Creates a new table editor instance.
     *
     * @param textEditor - A text editor interface.
     */
    constructor(textEditor) {
        this._textEditor = textEditor;
        // smart cursor
        this._scActive = false;
    }
    /**
     * Resets the smart cursor.
     * Call this method when the table editor is inactivated.
     */
    resetSmartCursor() {
        this._scActive = false;
    }
    /**
     * Checks if the cursor is in a table row.
     * This is useful to check whether the table editor should be activated or not.
     *
     * @returns `true` if the cursor is in a table row.
     */
    cursorIsInTable(options) {
        const re = exports._createIsTableRowRegex(options.leftMarginChars);
        const pos = this._textEditor.getCursorPosition();
        return (this._textEditor.acceptsTableEdit(pos.row) &&
            re.test(this._textEditor.getLine(pos.row)));
    }
    /**
     * Finds a table under the current cursor position.
     *
     * @returns undefined if there is no table or the determined focus is invalid.
     */
    _findTable(options) {
        const re = exports._createIsTableRowRegex(options.leftMarginChars);
        const pos = this._textEditor.getCursorPosition();
        const lastRow = this._textEditor.getLastRow();
        const lines = [];
        let startRow = pos.row;
        let endRow = pos.row;
        // current line
        {
            const line = this._textEditor.getLine(pos.row);
            if (!this._textEditor.acceptsTableEdit(pos.row) || !re.test(line)) {
                return undefined;
            }
            lines.push(line);
        }
        // previous lines
        for (let row = pos.row - 1; row >= 0; row--) {
            const line = this._textEditor.getLine(row);
            if (!this._textEditor.acceptsTableEdit(row) || !re.test(line)) {
                break;
            }
            lines.unshift(line);
            startRow = row;
        }
        // next lines
        for (let row = pos.row + 1; row <= lastRow; row++) {
            const line = this._textEditor.getLine(row);
            if (!this._textEditor.acceptsTableEdit(row) || !re.test(line)) {
                break;
            }
            lines.push(line);
            endRow = row;
        }
        const range$1 = new range.Range(new point.Point(startRow, 0), new point.Point(endRow, lines[lines.length - 1].length));
        const table = parser.readTable(lines, options);
        const focus = table.focusOfPosition(pos, startRow);
        if (focus === undefined) {
            // TODO: Validate this for correctness
            return undefined;
        }
        return { range: range$1, lines, table, focus };
    }
    /**
     * Finds a table and does an operation with it.
     *
     * @private
     * @param func - A function that does some operation on table information obtained by
     * {@link TableEditor#_findTable}.
     */
    _withTable(options, func) {
        const info = this._findTable(options);
        if (info === undefined) {
            return;
        }
        func(info);
    }
    /**
     * Updates lines in a given range in the text editor.
     *
     * @private
     * @param startRow - Start row index, starts from `0`.
     * @param endRow - End row index.
     * Lines from `startRow` to `endRow - 1` are replaced.
     * @param newLines - New lines.
     * @param [oldLines=undefined] - Old lines to be replaced.
     */
    _updateLines(startRow, endRow, newLines, oldLines = undefined) {
        if (oldLines !== undefined) {
            // apply the shortest edit script
            // if a table is edited in a normal manner, the edit distance never exceeds 3
            const ses = editScript.shortestEditScript(oldLines, newLines, 3);
            if (ses !== undefined) {
                editScript.applyEditScript(this._textEditor, ses, startRow);
                return;
            }
        }
        this._textEditor.replaceLines(startRow, endRow, newLines);
    }
    /**
     * Moves the cursor position to the focused cell,
     *
     * @private
     * @param startRow - Row index where the table starts in the text editor.
     * @param table - A table.
     * @param focus - A focus to which the cursor will be moved.
     */
    _moveToFocus(startRow, table, focus) {
        const pos = table.positionOfFocus(focus, startRow);
        if (pos !== undefined) {
            this._textEditor.setCursorPosition(pos);
        }
    }
    /**
     * Selects the focused cell.
     * If the cell has no content to be selected, then just moves the cursor position.
     *
     * @private
     * @param startRow - Row index where the table starts in the text editor.
     * @param table - A table.
     * @param focus - A focus to be selected.
     */
    _selectFocus(startRow, table, focus) {
        const range = table.selectionRangeOfFocus(focus, startRow);
        if (range !== undefined) {
            this._textEditor.setSelectionRange(range);
        }
        else {
            this._moveToFocus(startRow, table, focus);
        }
    }
    /**
     * Formats the table under the cursor.
     */
    format(options) {
        this._withTable(options, ({ range, lines, table, focus }) => {
            let newFocus = focus;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            // format
            const formatted = formatter.formatTable(completed.table, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, completed.table, formatted, false));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                this._moveToFocus(range.start.row, formatted.table, newFocus);
            });
        });
    }
    /**
     * Formats and escapes from the table.
     */
    escape(options) {
        this._withTable(options, ({ range, lines, table, focus }) => {
            // complete
            const completed = formatter.completeTable(table, options);
            // format
            const formatted = formatter.formatTable(completed.table, options);
            // apply
            const newRow = range.end.row + (completed.delimiterInserted ? 2 : 1);
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                let newPos;
                if (newRow > this._textEditor.getLastRow()) {
                    this._textEditor.insertLine(newRow, '');
                    newPos = new point.Point(newRow, 0);
                }
                else {
                    const re = new RegExp(`^${parser.marginRegexSrc(options.leftMarginChars)}`, 'u');
                    const nextLine = this._textEditor.getLine(newRow);
                    // @ts-expect-error TODO
                    const margin = re.exec(nextLine)[0];
                    newPos = new point.Point(newRow, margin.length);
                }
                this._textEditor.setCursorPosition(newPos);
            });
            this.resetSmartCursor();
        });
    }
    /**
     * Alters the alignment of the focused column.
     */
    alignColumn(alignment, options) {
        this._withTable(options, ({ range, lines, table, focus }) => {
            let newFocus = focus;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            // alter alignment
            let altered = completed.table;
            if (0 <= newFocus.column &&
                newFocus.column <= altered.getHeaderWidth() - 1) {
                altered = formatter.alterAlignment(completed.table, newFocus.column, alignment, options);
            }
            // format
            const formatted = formatter.formatTable(altered, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, completed.table, formatted, false));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                this._moveToFocus(range.start.row, formatted.table, newFocus);
            });
        });
    }
    /**
     * Selects the focused cell content.
     */
    selectCell(options) {
        this._withTable(options, ({ range, lines, table, focus }) => {
            let newFocus = focus;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            // format
            const formatted = formatter.formatTable(completed.table, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, completed.table, formatted, false));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                this._selectFocus(range.start.row, formatted.table, newFocus);
            });
        });
    }
    /**
     * Moves the focus to another cell.
     *
     * @param rowOffset - Offset in row.
     * @param columnOffset - Offset in column.
     */
    moveFocus(rowOffset, columnOffset, options) {
        this._withTable(options, ({ range, lines, table, focus }) => {
            let newFocus = focus;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            const startFocus = newFocus;
            // move focus
            if (rowOffset !== 0) {
                const height = completed.table.getHeight();
                // skip delimiter row
                const skip = newFocus.row < 1 && newFocus.row + rowOffset >= 1
                    ? 1
                    : newFocus.row > 1 && newFocus.row + rowOffset <= 1
                        ? -1
                        : 0;
                newFocus = newFocus.setRow(Math.min(Math.max(newFocus.row + rowOffset + skip, 0), height <= 2 ? 0 : height - 1));
            }
            if (columnOffset !== 0) {
                const width = completed.table.getHeaderWidth();
                if (!(newFocus.column < 0 && columnOffset < 0) &&
                    !(newFocus.column > width - 1 && columnOffset > 0)) {
                    newFocus = newFocus.setColumn(Math.min(Math.max(newFocus.column + columnOffset, 0), width - 1));
                }
            }
            const moved = !newFocus.posEquals(startFocus);
            // format
            const formatted = formatter.formatTable(completed.table, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, completed.table, formatted, moved));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                if (moved) {
                    this._selectFocus(range.start.row, formatted.table, newFocus);
                }
                else {
                    this._moveToFocus(range.start.row, formatted.table, newFocus);
                }
            });
            if (moved) {
                this.resetSmartCursor();
            }
        });
    }
    /**
     * Moves the focus to the next cell.
     */
    nextCell(options) {
        this._withTable(options, ({ range, lines, table, focus: focus$1 }) => {
            // reset smart cursor if moved
            const focusMoved = (this._scTablePos !== undefined &&
                !range.start.equals(this._scTablePos)) ||
                (this._scLastFocus !== undefined &&
                    !focus$1.posEquals(this._scLastFocus));
            if (this._scActive && focusMoved) {
                this.resetSmartCursor();
            }
            let newFocus = focus$1;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            const startFocus = newFocus;
            let altered = completed.table;
            // move focus
            if (newFocus.row === 1) {
                // move to next row
                newFocus = newFocus.setRow(2);
                if (options.smartCursor) {
                    if (newFocus.column < 0 ||
                        altered.getHeaderWidth() - 1 < newFocus.column) {
                        newFocus = newFocus.setColumn(0);
                    }
                }
                else {
                    newFocus = newFocus.setColumn(0);
                }
                // insert an empty row if needed
                if (newFocus.row > altered.getHeight() - 1) {
                    const row = new Array(altered.getHeaderWidth()).fill(new tableCell.TableCell(''));
                    altered = formatter.insertRow(altered, altered.getHeight(), new tableRow.TableRow(row, '', ''));
                }
            }
            else {
                // insert an empty column if needed
                if (newFocus.column > altered.getHeaderWidth() - 1) {
                    const column = new Array(altered.getHeight() - 1).fill(new tableCell.TableCell(''));
                    altered = formatter.insertColumn(altered, altered.getHeaderWidth(), column, options);
                }
                // move to next column
                newFocus = newFocus.setColumn(newFocus.column + 1);
            }
            // format
            const formatted = formatter.formatTable(altered, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, altered, formatted, true));
            // apply
            const newLines = formatted.table.toLines();
            if (newFocus.column > formatted.table.getHeaderWidth() - 1) {
                // add margin
                newLines[newFocus.row] += ' ';
                newFocus = newFocus.setOffset(1);
            }
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, newLines, lines);
                this._selectFocus(range.start.row, formatted.table, newFocus);
            });
            if (options.smartCursor) {
                if (!this._scActive) {
                    // activate smart cursor
                    this._scActive = true;
                    this._scTablePos = range.start;
                    if (startFocus.column < 0 ||
                        formatted.table.getHeaderWidth() - 1 < startFocus.column) {
                        this._scStartFocus = new focus.Focus(startFocus.row, 0, 0);
                    }
                    else {
                        this._scStartFocus = startFocus;
                    }
                }
                this._scLastFocus = newFocus;
            }
        });
    }
    /**
     * Moves the focus to the previous cell.
     */
    previousCell(options) {
        this._withTable(options, ({ range, lines, table, focus: focus$1 }) => {
            let newFocus = focus$1;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            const startFocus = newFocus;
            // move focus
            if (newFocus.row === 0) {
                if (newFocus.column > 0) {
                    newFocus = newFocus.setColumn(newFocus.column - 1);
                }
            }
            else if (newFocus.row === 1) {
                newFocus = new focus.Focus(0, completed.table.getHeaderWidth() - 1, newFocus.offset);
            }
            else {
                if (newFocus.column > 0) {
                    newFocus = newFocus.setColumn(newFocus.column - 1);
                }
                else {
                    newFocus = new focus.Focus(newFocus.row === 2 ? 0 : newFocus.row - 1, completed.table.getHeaderWidth() - 1, newFocus.offset);
                }
            }
            const moved = !newFocus.posEquals(startFocus);
            // format
            const formatted = formatter.formatTable(completed.table, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, completed.table, formatted, moved));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                if (moved) {
                    this._selectFocus(range.start.row, formatted.table, newFocus);
                }
                else {
                    this._moveToFocus(range.start.row, formatted.table, newFocus);
                }
            });
            if (moved) {
                this.resetSmartCursor();
            }
        });
    }
    /**
     * Moves the focus to the next row.
     */
    nextRow(options) {
        this._withTable(options, ({ range, lines, table, focus: focus$1 }) => {
            // reset smart cursor if moved
            const focusMoved = (this._scTablePos !== undefined &&
                !range.start.equals(this._scTablePos)) ||
                (this._scLastFocus !== undefined &&
                    !focus$1.posEquals(this._scLastFocus));
            if (this._scActive && focusMoved) {
                this.resetSmartCursor();
            }
            let newFocus = focus$1;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            const startFocus = newFocus;
            let altered = completed.table;
            // move focus
            if (newFocus.row === 0) {
                newFocus = newFocus.setRow(2);
            }
            else {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            if (options.smartCursor) {
                if (this._scActive && this._scStartFocus !== undefined) {
                    newFocus = newFocus.setColumn(this._scStartFocus.column);
                }
                else if (newFocus.column < 0 ||
                    altered.getHeaderWidth() - 1 < newFocus.column) {
                    newFocus = newFocus.setColumn(0);
                }
            }
            else {
                newFocus = newFocus.setColumn(0);
            }
            // insert empty row if needed
            if (newFocus.row > altered.getHeight() - 1) {
                const row = new Array(altered.getHeaderWidth()).fill(new tableCell.TableCell(''));
                altered = formatter.insertRow(altered, altered.getHeight(), new tableRow.TableRow(row, '', ''));
            }
            // format
            const formatted = formatter.formatTable(altered, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, altered, formatted, true));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                this._selectFocus(range.start.row, formatted.table, newFocus);
            });
            if (options.smartCursor) {
                if (!this._scActive) {
                    // activate smart cursor
                    this._scActive = true;
                    this._scTablePos = range.start;
                    if (startFocus.column < 0 ||
                        formatted.table.getHeaderWidth() - 1 < startFocus.column) {
                        this._scStartFocus = new focus.Focus(startFocus.row, 0, 0);
                    }
                    else {
                        this._scStartFocus = startFocus;
                    }
                }
                this._scLastFocus = newFocus;
            }
        });
    }
    /**
     * Inserts an empty row at the current focus.
     */
    insertRow(options) {
        this._withTable(options, ({ range, lines, table, focus }) => {
            let newFocus = focus;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            // move focus
            if (newFocus.row <= 1) {
                newFocus = newFocus.setRow(2);
            }
            newFocus = newFocus.setColumn(0);
            // insert an empty row
            const row = new Array(completed.table.getHeaderWidth()).fill(new tableCell.TableCell(''));
            const altered = formatter.insertRow(completed.table, newFocus.row, new tableRow.TableRow(row, '', ''));
            // format
            const formatted = formatter.formatTable(altered, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, altered, formatted, true));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                this._moveToFocus(range.start.row, formatted.table, newFocus);
            });
            this.resetSmartCursor();
        });
    }
    /**
     * Deletes a row at the current focus.
     */
    deleteRow(options) {
        this._withTable(options, ({ range, lines, table, focus }) => {
            let newFocus = focus;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            // delete a row
            let altered = completed.table;
            let moved = false;
            if (newFocus.row !== 1) {
                altered = formatter.deleteRow(altered, newFocus.row);
                moved = true;
                if (newFocus.row > altered.getHeight() - 1) {
                    newFocus = newFocus.setRow(newFocus.row === 2 ? 0 : newFocus.row - 1);
                }
            }
            // format
            const formatted = formatter.formatTable(altered, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, altered, formatted, moved));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                if (moved) {
                    this._selectFocus(range.start.row, formatted.table, newFocus);
                }
                else {
                    this._moveToFocus(range.start.row, formatted.table, newFocus);
                }
            });
            this.resetSmartCursor();
        });
    }
    /**
     * Moves the focused row by the specified offset.
     *
     * @param offset - An offset the row is moved by.
     */
    moveRow(offset, options) {
        this._withTable(options, ({ range, lines, table, focus }) => {
            let newFocus = focus;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            // move row
            let altered = completed.table;
            if (newFocus.row > 1) {
                const dest = Math.min(Math.max(newFocus.row + offset, 2), altered.getHeight() - 1);
                altered = formatter.moveRow(altered, newFocus.row, dest);
                newFocus = newFocus.setRow(dest);
            }
            // format
            const formatted = formatter.formatTable(altered, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, altered, formatted, false));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                this._moveToFocus(range.start.row, formatted.table, newFocus);
            });
            this.resetSmartCursor();
        });
    }
    /**
     * Sorts rows alphanumerically using the column at the current focus.
     */
    sortRows(sortOrder, options) {
        this._withTable(options, ({ range, lines, table: table$1, focus }) => {
            let newFocus = focus;
            // complete
            const completed = formatter.completeTable(table$1, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            const bodyRows = completed.table.getRows().slice(2);
            bodyRows.sort((rowA, rowB) => {
                const cellA = rowA.getCellAt(newFocus.column);
                const cellB = rowB.getCellAt(newFocus.column);
                if (cellA === undefined) {
                    if (cellB === undefined) {
                        return 0;
                    }
                    return -1;
                }
                else if (cellB === undefined) {
                    return 1;
                }
                const contentA = cellA.content;
                const contentB = cellB.content;
                if (contentA === contentB) {
                    return 0;
                }
                else if (contentA === undefined) {
                    return -1;
                }
                else if (contentB === undefined) {
                    return 1;
                }
                else {
                    return contentA < contentB ? -1 : 1;
                }
            });
            if (sortOrder === SortOrder.Descending) {
                bodyRows.reverse();
            }
            const allRows = completed.table.getRows().slice(0, 2).concat(bodyRows);
            const newTable = new table.Table(allRows);
            // format
            const formatted = formatter.formatTable(newTable, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, newTable, formatted, true));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                this._moveToFocus(range.start.row, formatted.table, newFocus);
            });
            this.resetSmartCursor();
        });
    }
    /**
     * Inserts an empty column at the current focus.
     */
    insertColumn(options) {
        this._withTable(options, ({ range, lines, table, focus }) => {
            let newFocus = focus;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            // move focus
            if (newFocus.row === 1) {
                newFocus = newFocus.setRow(0);
            }
            if (newFocus.column < 0) {
                newFocus = newFocus.setColumn(0);
            }
            // insert an empty column
            const column = new Array(completed.table.getHeight() - 1).fill(new tableCell.TableCell(''));
            const altered = formatter.insertColumn(completed.table, newFocus.column, column, options);
            // format
            const formatted = formatter.formatTable(altered, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, altered, formatted, true));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                this._moveToFocus(range.start.row, formatted.table, newFocus);
            });
            this.resetSmartCursor();
        });
    }
    /**
     * Deletes a column at the current focus.
     */
    deleteColumn(options) {
        this._withTable(options, ({ range, lines, table, focus }) => {
            let newFocus = focus;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            // move focus
            if (newFocus.row === 1) {
                newFocus = newFocus.setRow(0);
            }
            // delete a column
            let altered = completed.table;
            let moved = false;
            if (0 <= newFocus.column &&
                newFocus.column <= altered.getHeaderWidth() - 1) {
                altered = formatter.deleteColumn(completed.table, newFocus.column, options);
                moved = true;
                if (newFocus.column > altered.getHeaderWidth() - 1) {
                    newFocus = newFocus.setColumn(altered.getHeaderWidth() - 1);
                }
            }
            // format
            const formatted = formatter.formatTable(altered, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, altered, formatted, moved));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                if (moved) {
                    this._selectFocus(range.start.row, formatted.table, newFocus);
                }
                else {
                    this._moveToFocus(range.start.row, formatted.table, newFocus);
                }
            });
            this.resetSmartCursor();
        });
    }
    /**
     * Moves the focused column by the specified offset.
     *
     * @param offset - An offset the column is moved by.
     */
    moveColumn(offset, options) {
        this._withTable(options, ({ range, lines, table, focus }) => {
            let newFocus = focus;
            // complete
            const completed = formatter.completeTable(table, options);
            if (completed.delimiterInserted && newFocus.row > 0) {
                newFocus = newFocus.setRow(newFocus.row + 1);
            }
            // move column
            let altered = completed.table;
            if (0 <= newFocus.column &&
                newFocus.column <= altered.getHeaderWidth() - 1) {
                const dest = Math.min(Math.max(newFocus.column + offset, 0), altered.getHeaderWidth() - 1);
                altered = formatter.moveColumn(altered, newFocus.column, dest);
                newFocus = newFocus.setColumn(dest);
            }
            // format
            const formatted = formatter.formatTable(altered, options);
            newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, altered, formatted, false));
            // apply
            this._textEditor.transact(() => {
                this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
                this._moveToFocus(range.start.row, formatted.table, newFocus);
            });
            this.resetSmartCursor();
        });
    }
    /**
     * Formats all the tables in the text editor.
     */
    formatAll(options) {
        this._textEditor.transact(() => {
            const re = exports._createIsTableRowRegex(options.leftMarginChars);
            let pos = this._textEditor.getCursorPosition();
            let lines = [];
            let startRow = undefined;
            let lastRow = this._textEditor.getLastRow();
            // find tables
            for (let row = 0; row <= lastRow; row++) {
                const line = this._textEditor.getLine(row);
                if (this._textEditor.acceptsTableEdit(row) && re.test(line)) {
                    lines.push(line);
                    if (startRow === undefined) {
                        startRow = row;
                    }
                }
                else if (startRow !== undefined) {
                    // get table info
                    const endRow = row - 1;
                    const range$1 = new range.Range(new point.Point(startRow, 0), new point.Point(endRow, lines[lines.length - 1].length));
                    const table = parser.readTable(lines, options);
                    const focus = table.focusOfPosition(pos, startRow);
                    let diff;
                    if (focus !== undefined) {
                        // format
                        let newFocus = focus;
                        const completed = formatter.completeTable(table, options);
                        if (completed.delimiterInserted && newFocus.row > 0) {
                            newFocus = newFocus.setRow(newFocus.row + 1);
                        }
                        const formatted = formatter.formatTable(completed.table, options);
                        newFocus = newFocus.setOffset(exports._computeNewOffset(newFocus, completed.table, formatted, false));
                        // apply
                        const newLines = formatted.table.toLines();
                        this._updateLines(range$1.start.row, range$1.end.row + 1, newLines, lines);
                        // update cursor position
                        diff = newLines.length - lines.length;
                        pos = formatted.table.positionOfFocus(newFocus, startRow);
                    }
                    else {
                        // format
                        const completed = formatter.completeTable(table, options);
                        const formatted = formatter.formatTable(completed.table, options);
                        // apply
                        const newLines = formatted.table.toLines();
                        this._updateLines(range$1.start.row, range$1.end.row + 1, newLines, lines);
                        // update cursor position
                        diff = newLines.length - lines.length;
                        if (pos.row > endRow) {
                            pos = new point.Point(pos.row + diff, pos.column);
                        }
                    }
                    // reset
                    lines = [];
                    startRow = undefined;
                    // update
                    lastRow += diff;
                    row += diff;
                }
            }
            if (startRow !== undefined) {
                // get table info
                const endRow = lastRow;
                const range$1 = new range.Range(new point.Point(startRow, 0), new point.Point(endRow, lines[lines.length - 1].length));
                const table = parser.readTable(lines, options);
                const focus = table.focusOfPosition(pos, startRow);
                // format
                let newFocus = focus;
                const completed = formatter.completeTable(table, options);
                // @ts-expect-error TODO
                if (completed.delimiterInserted && newFocus.row > 0) {
                    // @ts-expect-error TODO
                    newFocus = newFocus.setRow(newFocus.row + 1);
                }
                const formatted = formatter.formatTable(completed.table, options);
                // @ts-expect-error TODO
                newFocus = newFocus.setOffset(
                // @ts-expect-error TODO
                exports._computeNewOffset(newFocus, completed.table, formatted, false));
                // apply
                const newLines = formatted.table.toLines();
                this._updateLines(range$1.start.row, range$1.end.row + 1, newLines, lines);
                // @ts-expect-error TODO
                pos = formatted.table.positionOfFocus(newFocus, startRow);
            }
            this._textEditor.setCursorPosition(pos);
        });
    }
}
exports.TableEditor = TableEditor;
});

var lib = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrder = exports.TableEditor = exports.optionsWithDefaults = exports.defaultOptions = exports.ITextEditor = exports.shortestEditScript = exports.applyEditScript = exports.Delete = exports.Insert = exports.moveColumn = exports.deleteColumn = exports.insertColumn = exports.moveRow = exports.deleteRow = exports.insertRow = exports.alterAlignment = exports.formatTable = exports.completeTable = exports.FormatType = exports.readTable = exports.Table = exports.TableRow = exports.TableCell = exports.HeaderAlignment = exports.DefaultAlignment = exports.Alignment = exports.Focus = exports.Range = exports.Point = void 0;

Object.defineProperty(exports, "Point", { enumerable: true, get: function () { return point.Point; } });

Object.defineProperty(exports, "Range", { enumerable: true, get: function () { return range.Range; } });

Object.defineProperty(exports, "Focus", { enumerable: true, get: function () { return focus.Focus; } });

Object.defineProperty(exports, "Alignment", { enumerable: true, get: function () { return alignment.Alignment; } });
Object.defineProperty(exports, "DefaultAlignment", { enumerable: true, get: function () { return alignment.DefaultAlignment; } });
Object.defineProperty(exports, "HeaderAlignment", { enumerable: true, get: function () { return alignment.HeaderAlignment; } });

Object.defineProperty(exports, "TableCell", { enumerable: true, get: function () { return tableCell.TableCell; } });

Object.defineProperty(exports, "TableRow", { enumerable: true, get: function () { return tableRow.TableRow; } });

Object.defineProperty(exports, "Table", { enumerable: true, get: function () { return table.Table; } });

Object.defineProperty(exports, "readTable", { enumerable: true, get: function () { return parser.readTable; } });

Object.defineProperty(exports, "FormatType", { enumerable: true, get: function () { return formatter.FormatType; } });
Object.defineProperty(exports, "completeTable", { enumerable: true, get: function () { return formatter.completeTable; } });
Object.defineProperty(exports, "formatTable", { enumerable: true, get: function () { return formatter.formatTable; } });
Object.defineProperty(exports, "alterAlignment", { enumerable: true, get: function () { return formatter.alterAlignment; } });
Object.defineProperty(exports, "insertRow", { enumerable: true, get: function () { return formatter.insertRow; } });
Object.defineProperty(exports, "deleteRow", { enumerable: true, get: function () { return formatter.deleteRow; } });
Object.defineProperty(exports, "moveRow", { enumerable: true, get: function () { return formatter.moveRow; } });
Object.defineProperty(exports, "insertColumn", { enumerable: true, get: function () { return formatter.insertColumn; } });
Object.defineProperty(exports, "deleteColumn", { enumerable: true, get: function () { return formatter.deleteColumn; } });
Object.defineProperty(exports, "moveColumn", { enumerable: true, get: function () { return formatter.moveColumn; } });

Object.defineProperty(exports, "Insert", { enumerable: true, get: function () { return editScript.Insert; } });
Object.defineProperty(exports, "Delete", { enumerable: true, get: function () { return editScript.Delete; } });
Object.defineProperty(exports, "applyEditScript", { enumerable: true, get: function () { return editScript.applyEditScript; } });
Object.defineProperty(exports, "shortestEditScript", { enumerable: true, get: function () { return editScript.shortestEditScript; } });

Object.defineProperty(exports, "ITextEditor", { enumerable: true, get: function () { return textEditor.ITextEditor; } });

Object.defineProperty(exports, "defaultOptions", { enumerable: true, get: function () { return options.defaultOptions; } });
Object.defineProperty(exports, "optionsWithDefaults", { enumerable: true, get: function () { return options.optionsWithDefaults; } });

Object.defineProperty(exports, "TableEditor", { enumerable: true, get: function () { return tableEditor.TableEditor; } });
Object.defineProperty(exports, "SortOrder", { enumerable: true, get: function () { return tableEditor.SortOrder; } });
});

var TableEditorPluginSettings = /** @class */ (function () {
    function TableEditorPluginSettings() {
        this.formatType = lib.FormatType.NORMAL;
        this.showRibbonIcon = true;
        this.useMonospaceFont = true;
        this.bindEnter = true;
        this.bindTab = true;
    }
    TableEditorPluginSettings.prototype.asOptions = function () {
        return lib.optionsWithDefaults({ formatType: this.formatType });
    };
    return TableEditorPluginSettings;
}());

/**
 * ObsidianTextEditor is an implementation of the ITextEditor interface from
 * the mte-kernel library. It teaches the table editor library how to interface
 * with Obsidian and the underlying CodeMirror interface.
 */
var ObsidianTextEditor = /** @class */ (function () {
    function ObsidianTextEditor(obj) {
        var _this = this;
        this.getCursorPosition = function () {
            var position = _this.editor.getCursor();
            console.debug("getCursorPosition was called: line " + position.line + ", ch " + position.ch);
            return new lib.Point(position.line, position.ch);
        };
        this.setCursorPosition = function (pos) {
            console.debug("setCursorPosition was called: line " + pos.row + ", ch " + pos.column);
            _this.editor.setCursor({ line: pos.row, ch: pos.column });
        };
        this.setSelectionRange = function (range) {
            console.debug('setSelectionRange was called');
            _this.editor.setSelection({ line: range.start.row, ch: range.start.column }, { line: range.end.row, ch: range.end.column });
        };
        this.getLastRow = function () {
            console.debug('getLastRow was called');
            return _this.editor.lastLine();
        };
        this.acceptsTableEdit = function (row) {
            console.debug("acceptsTableEdit was called on row " + row);
            // TODO: What does this function want?
            return true;
        };
        this.getLine = function (row) {
            console.debug("getLine was called on line " + row);
            return _this.editor.getLine(row);
        };
        this.insertLine = function (row, line) {
            console.debug("insertLine was called at line " + row);
            console.debug("New line: " + line);
            if (row > _this.getLastRow()) {
                _this.editor.replaceRange('\n' + line, { line: row, ch: 0 });
            }
            else {
                _this.editor.replaceRange(line + '\n', { line: row, ch: 0 });
            }
        };
        this.deleteLine = function (row) {
            console.debug("deleteLine was called on line " + row);
            _this.editor.replaceRange('', { line: row, ch: 0 }, { line: row + 1, ch: 0 });
        };
        this.replaceLines = function (startRow, endRow, lines) {
            console.debug('replaceLines was called');
            console.debug("start " + startRow + ", end: " + endRow);
            console.debug(lines);
            // Take one off the endRow and instead go to the end of that line
            var realEndRow = endRow - 1;
            var endRowContents = _this.editor.getLine(realEndRow);
            var endRowFinalIndex = endRowContents.length;
            _this.editor.replaceRange(lines, { line: startRow, ch: 0 }, { line: realEndRow, ch: endRowFinalIndex });
        };
        this.transact = function (func) {
            console.debug('transact was called');
            _this.editor.operation(function () {
                func();
            });
        };
        if ('sourceMode' in obj) {
            this.editor = obj.sourceMode.cmEditor;
        }
        else {
            this.editor = obj;
        }
    }
    return ObsidianTextEditor;
}());

/**
 * TableControls displays a line widget in the editor to users.
 * Buttons allow easy access to table manipulation functions.
 */
var TableControls = /** @class */ (function () {
    function TableControls(cm, te) {
        var _this = this;
        /**
         * Build the line widget DOM node, and display to user.
         */
        this.display = function () {
            _this.widget = _this.cm.addLineWidget(_this.cm.getCursor().line, _this.createTableControls(), {
                coverGutter: true,
                handleMouseEvents: false,
                noHScroll: true,
            });
            _this.cm.on('keydown', _this.handleEscapeKey);
        };
        /**
         * Close this line widget.
         */
        this.clear = function () {
            console.debug('Clearing table control widget...');
            if (_this.widget) {
                _this.widget.clear();
                _this.widget = null;
                console.debug('Table control widget cleared');
            }
            _this.cm.off('keydown', _this.handleEscapeKey);
        };
        this.createTableControls = function () {
            var node = document.createElement('div');
            node.classList.add('widget-background');
            node.appendChild(_this.createButtonSvg(alignLeft, 'Align column left', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.te.leftAlignColumn();
            }));
            node.appendChild(_this.createButtonSvg(alignCenter, 'Align column center', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.te.centerAlignColumn();
            }));
            node.appendChild(_this.createButtonSvg(alignRight, 'Align column right', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.te.rightAlignColumn();
            }));
            node.appendChild(_this.createButtonSvg(sortAsc, 'Sort rows ascending', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.te.sortRowsAsc();
            }));
            node.appendChild(_this.createButtonSvg(sortDesc, 'Sort rows descending', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.te.sortRowsDesc();
            }));
            node.appendChild(_this.createButtonSvg(moveColumnLeft, 'Move column left', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.te.moveColumnLeft();
            }));
            node.appendChild(_this.createButtonSvg(moveColumnRight, 'Move column right', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.te.moveColumnRight();
            }));
            node.appendChild(_this.createButtonSvg(moveRowUp, 'Move row up', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.te.moveRowUp();
            }));
            node.appendChild(_this.createButtonSvg(moveRowDown, 'Move row down', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.te.moveRowDown();
            }));
            node.appendChild(_this.createButtonSvg(insertColumn, 'Insert column', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.te.insertColumn();
            }));
            node.appendChild(_this.createButtonSvg(insertRow, 'Insert row', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.te.insertRow();
            }));
            node.appendChild(_this.createButtonSvg(deleteColumn, 'Delete column', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.te.deleteColumn();
            }));
            node.appendChild(_this.createButtonSvg(deleteRow, 'Delete row', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.te.deleteRow();
            }));
            node.appendChild(_this.createButtonSvg(close, 'Close toolbar', function () {
                _this.cm.setCursor(_this.cursorPos);
                _this.clear();
            }));
            return node;
        };
        this.createButtonSvg = function (icon, title, action) {
            var button = document.createElement('button');
            button.addClass('widget-button');
            button.setAttribute('title', title);
            button.appendChild(icon);
            button.onClickEvent(function (event) {
                action();
                _this.clear();
            });
            return button;
        };
        this.handleEscapeKey = function (cm, event) {
            if (event.key === 'Escape') {
                _this.clear();
            }
        };
        this.cm = cm;
        this.te = te;
        this.cursorPos = cm.getCursor();
    }
    return TableControls;
}());
/**
 * Convert an svg string into an HTML element.
 *
 * @param svgText svg image as a string
 */
var Element = function (svgText) {
    var parser = new DOMParser();
    return parser.parseFromString(svgText, 'text/xml').documentElement;
};
var alignLeft = Element("\n<svg class=\"widget-icon\" enable-background=\"new 0 0 512 512\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"matrix(-1 0 0 1 512 0)\">\n    <path d=\"m501.33 170.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n    <path d=\"m501.33 298.67h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n    <path d=\"m501.33 426.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n    <path d=\"m501.33 42.667h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n  </g>\n</svg>\n");
var alignCenter = Element("\n<svg class=\"widget-icon\" enable-background=\"new 0 0 512 512\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"matrix(-1 0 0 1 512 0)\">\n    <path d=\"m416 170.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n    <path d=\"m501.33 298.67h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n    <path d=\"m416 426.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n    <path d=\"m501.33 42.667h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n  </g>\n</svg>\n");
var alignRight = Element("\n<svg class=\"widget-icon\" enable-background=\"new 0 0 512 512\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m501.33 170.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n  <path d=\"m501.33 298.67h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n  <path d=\"m501.33 426.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n  <path d=\"m501.33 42.667h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n</svg>\n");
var deleteColumn = Element("\n<svg class=\"widget-icon\" enable-background=\"new 0 0 26 26\" version=\"1.1\" viewBox=\"0 0 26 26\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m13.594 20.85v3.15h-10v-22h10v3.15c0.633-0.323 1.304-0.565 2-0.727v-3.423c0-0.551-0.448-1-1-1h-12c-0.55 0-1 0.449-1 1v24c0 0.551 0.449 1 1 1h12c0.552 0 1-0.449 1-1v-3.424c-0.696-0.161-1.367-0.403-2-0.726z\"/>\n  <path d=\"m17.594 6.188c-3.762 0-6.813 3.051-6.812 6.813-1e-3 3.761 3.05 6.812 6.812 6.812s6.813-3.051 6.813-6.813-3.052-6.812-6.813-6.812zm3.632 7.802-7.267 1e-3v-1.982h7.268l-1e-3 1.981z\"/>\n</svg>\n");
var deleteRow = Element("\n<svg class=\"widget-icon\" enable-background=\"new 0 0 15.381 15.381\" version=\"1.1\" viewBox=\"0 0 15.381 15.381\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M0,1.732v7.732h6.053c0-0.035-0.004-0.07-0.004-0.104c0-0.434,0.061-0.854,0.165-1.255H1.36V3.092    h12.662v2.192c0.546,0.396,1.01,0.897,1.359,1.477V1.732H0z\"/>\n  <path d=\"m11.196 5.28c-2.307 0-4.183 1.877-4.183 4.184 0 2.308 1.876 4.185 4.183 4.185 2.309 0 4.185-1.877 4.185-4.185 0-2.307-1.876-4.184-4.185-4.184zm0 7.233c-1.679 0-3.047-1.367-3.047-3.049 0-1.68 1.368-3.049 3.047-3.049 1.684 0 3.05 1.369 3.05 3.049 0 1.682-1.366 3.049-3.05 3.049z\"/>\n  <rect x=\"9.312\" y=\"8.759\" width=\"3.844\" height=\"1.104\"/>\n</svg>\n");
var insertColumn = Element("\n<svg class=\"widget-icon\" width=\"512pt\" height=\"512pt\" version=\"1.1\" viewBox=\"-21 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m288 106.67c-3.9258 0-7.8516-1.4297-10.922-4.3125l-80-74.664c-4.8008-4.4805-6.3789-11.457-3.9688-17.559 2.4102-6.1016 8.3203-10.133 14.891-10.133h160c6.5703 0 12.48 4.0117 14.891 10.133 2.4102 6.125 0.83203 13.078-3.9688 17.559l-80 74.664c-3.0703 2.8828-6.9961 4.3125-10.922 4.3125zm-39.402-74.668 39.402 36.777 39.402-36.777z\"/>\n  <path d=\"m432 512h-53.332c-20.59 0-37.336-16.746-37.336-37.332v-330.67c0-20.586 16.746-37.332 37.336-37.332h53.332c20.586 0 37.332 16.746 37.332 37.332v330.67c0 20.586-16.746 37.332-37.332 37.332zm-53.332-373.33c-2.9453 0-5.3359 2.3867-5.3359 5.332v330.67c0 2.9414 2.3906 5.332 5.3359 5.332h53.332c2.9453 0 5.332-2.3906 5.332-5.332v-330.67c0-2.9453-2.3867-5.332-5.332-5.332z\"/>\n  <path d=\"m197.33 512h-160c-20.586 0-37.332-16.746-37.332-37.332v-330.67c0-20.586 16.746-37.332 37.332-37.332h160c20.59 0 37.336 16.746 37.336 37.332v330.67c0 20.586-16.746 37.332-37.336 37.332zm-160-373.33c-2.9414 0-5.332 2.3867-5.332 5.332v330.67c0 2.9414 2.3906 5.332 5.332 5.332h160c2.9453 0 5.3359-2.3906 5.3359-5.332v-330.67c0-2.9453-2.3906-5.332-5.3359-5.332z\"/>\n  <path d=\"m453.33 325.33h-96c-8.832 0-16-7.168-16-16s7.168-16 16-16h96c8.832 0 16 7.168 16 16s-7.168 16-16 16z\"/>\n  <path d=\"m218.67 325.33h-202.67c-8.832 0-16-7.168-16-16s7.168-16 16-16h202.67c8.832 0 16 7.168 16 16s-7.168 16-16 16z\"/>\n  <path d=\"m117.33 512c-8.832 0-16-7.168-16-16v-373.33c0-8.832 7.168-16 16-16s16 7.168 16 16v373.33c0 8.832-7.168 16-16 16z\"/>\n</svg>\n");
var insertRow = Element("\n<svg class=\"widget-icon\" width=\"512pt\" height=\"512pt\" version=\"1.1\" viewBox=\"0 -21 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m16 277.33c-1.9844 0-3.9688-0.36328-5.8672-1.1094-6.1211-2.4102-10.133-8.3203-10.133-14.891v-160c0-6.5703 4.0117-12.48 10.133-14.891 6.1445-2.4102 13.078-0.85156 17.559 3.9688l74.664 80c5.7617 6.1445 5.7617 15.68 0 21.824l-74.664 80c-3.0938 3.3281-7.3398 5.0977-11.691 5.0977zm16-135.4v78.805l36.777-39.402z\"/>\n  <path d=\"m474.67 128h-330.67c-20.586 0-37.332-16.746-37.332-37.332v-53.336c0-20.586 16.746-37.332 37.332-37.332h330.67c20.586 0 37.332 16.746 37.332 37.332v53.336c0 20.586-16.746 37.332-37.332 37.332zm-330.67-96c-2.9453 0-5.332 2.3906-5.332 5.332v53.336c0 2.9414 2.3867 5.332 5.332 5.332h330.67c2.9414 0 5.332-2.3906 5.332-5.332v-53.336c0-2.9414-2.3906-5.332-5.332-5.332z\"/>\n  <path d=\"m474.67 469.33h-330.67c-20.586 0-37.332-16.746-37.332-37.332v-160c0-20.586 16.746-37.332 37.332-37.332h330.67c20.586 0 37.332 16.746 37.332 37.332v160c0 20.586-16.746 37.332-37.332 37.332zm-330.67-202.66c-2.9453 0-5.332 2.3867-5.332 5.332v160c0 2.9453 2.3867 5.332 5.332 5.332h330.67c2.9414 0 5.332-2.3867 5.332-5.332v-160c0-2.9453-2.3906-5.332-5.332-5.332z\"/>\n  <path d=\"m309.33 128c-8.832 0-16-7.168-16-16v-96c0-8.832 7.168-16 16-16s16 7.168 16 16v96c0 8.832-7.168 16-16 16z\"/>\n  <path d=\"m309.33 469.33c-8.832 0-16-7.168-16-16v-202.66c0-8.832 7.168-16 16-16s16 7.168 16 16v202.66c0 8.832-7.168 16-16 16z\"/>\n  <path d=\"m496 368h-373.33c-8.832 0-16-7.168-16-16s7.168-16 16-16h373.33c8.832 0 16 7.168 16 16s-7.168 16-16 16z\"/>\n</svg>\n");
var moveColumnLeft = Element("\n<svg class=\"widget-icon\" width=\"512pt\" height=\"512pt\" version=\"1.1\" viewBox=\"0 0 512.02 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m357.35 512.01h96c32.363 0 58.668-26.305 58.668-58.668v-394.66c0-32.363-26.305-58.668-58.668-58.668h-96c-32.363 0-58.664 26.305-58.664 58.668v394.66c0 32.363 26.301 58.668 58.664 58.668zm96-480c14.699 0 26.668 11.969 26.668 26.668v394.66c0 14.699-11.969 26.668-26.668 26.668h-96c-14.699 0-26.664-11.969-26.664-26.668v-394.66c0-14.699 11.965-26.668 26.664-26.668z\"/>\n  <path d=\"m16.016 272.01h224c8.832 0 16-7.168 16-16s-7.168-16-16-16h-224c-8.832 0-16 7.168-16 16s7.168 16 16 16z\"/>\n  <path d=\"m101.35 357.34c4.0976 0 8.1914-1.5547 11.309-4.6914 6.25-6.25 6.25-16.383 0-22.637l-74.027-74.023 74.027-74.027c6.25-6.25 6.25-16.387 0-22.637s-16.383-6.25-22.637 0l-85.332 85.336c-6.25 6.25-6.25 16.383 0 22.633l85.332 85.332c3.1367 3.1602 7.2344 4.7148 11.328 4.7148z\"/>\n</svg>\n");
var moveColumnRight = Element("\n<svg class=\"widget-icon\" width=\"512pt\" height=\"512pt\" version=\"1.1\" viewBox=\"0 0 512.02 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m154.67 512.01h-96c-32.363 0-58.668-26.305-58.668-58.668v-394.66c0-32.363 26.305-58.668 58.668-58.668h96c32.363 0 58.664 26.305 58.664 58.668v394.66c0 32.363-26.301 58.668-58.664 58.668zm-96-480c-14.699 0-26.668 11.969-26.668 26.668v394.66c0 14.699 11.969 26.668 26.668 26.668h96c14.699 0 26.664-11.969 26.664-26.668v-394.66c0-14.699-11.965-26.668-26.664-26.668z\"/>\n  <path d=\"m496 272.01h-224c-8.832 0-16-7.168-16-16 0-8.832 7.168-16 16-16h224c8.832 0 16 7.168 16 16 0 8.832-7.168 16-16 16z\"/>\n  <path d=\"m410.67 357.34c-4.0977 0-8.1914-1.5547-11.309-4.6914-6.25-6.25-6.25-16.383 0-22.637l74.027-74.023-74.027-74.027c-6.25-6.25-6.25-16.387 0-22.637s16.383-6.25 22.637 0l85.332 85.336c6.25 6.25 6.25 16.383 0 22.633l-85.332 85.332c-3.1367 3.1602-7.2344 4.7148-11.328 4.7148z\"/>\n</svg>\n");
var moveRowDown = Element("\n<svg class=\"widget-icon\" width=\"512pt\" height=\"512pt\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m453.33 213.33h-394.66c-32.363 0-58.668-26.301-58.668-58.664v-96c0-32.363 26.305-58.668 58.668-58.668h394.66c32.363 0 58.668 26.305 58.668 58.668v96c0 32.363-26.305 58.664-58.668 58.664zm-394.66-181.33c-14.699 0-26.668 11.969-26.668 26.668v96c0 14.699 11.969 26.664 26.668 26.664h394.66c14.699 0 26.668-11.965 26.668-26.664v-96c0-14.699-11.969-26.668-26.668-26.668z\"/>\n  <path d=\"m256 512c-8.832 0-16-7.168-16-16v-224c0-8.832 7.168-16 16-16s16 7.168 16 16v224c0 8.832-7.168 16-16 16z\"/>\n  <path d=\"m256 512c-4.0977 0-8.1914-1.5586-11.309-4.6914l-85.332-85.336c-6.25-6.25-6.25-16.383 0-22.633s16.383-6.25 22.637 0l74.023 74.027 74.027-74.027c6.25-6.25 16.387-6.25 22.637 0s6.25 16.383 0 22.633l-85.336 85.336c-3.1562 3.1328-7.25 4.6914-11.348 4.6914z\"/>\n</svg>\n");
var moveRowUp = Element("\n<svg class=\"widget-icon\" width=\"512pt\" height=\"512pt\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m453.33 298.67h-394.66c-32.363 0-58.668 26.301-58.668 58.664v96c0 32.363 26.305 58.668 58.668 58.668h394.66c32.363 0 58.668-26.305 58.668-58.668v-96c0-32.363-26.305-58.664-58.668-58.664zm-394.66 181.33c-14.699 0-26.668-11.969-26.668-26.668v-96c0-14.699 11.969-26.664 26.668-26.664h394.66c14.699 0 26.668 11.965 26.668 26.664v96c0 14.699-11.969 26.668-26.668 26.668z\"/>\n  <path d=\"m256 0c-8.832 0-16 7.168-16 16v224c0 8.832 7.168 16 16 16s16-7.168 16-16v-224c0-8.832-7.168-16-16-16z\"/>\n  <path d=\"m256 0c-4.0977 0-8.1914 1.5586-11.309 4.6914l-85.332 85.336c-6.25 6.25-6.25 16.383 0 22.633s16.383 6.25 22.637 0l74.023-74.027 74.027 74.027c6.25 6.25 16.387 6.25 22.637 0s6.25-16.383 0-22.633l-85.336-85.336c-3.1562-3.1328-7.25-4.6914-11.348-4.6914z\"/>\n</svg>\n");
var sortAsc = Element("\n<svg class=\"widget-icon\" enable-background=\"new 0 0 512 512\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"matrix(1 0 0 -1 0 501.15)\" stroke-width=\"1.3333\">\n    <path d=\"m353.6 74.486c-11.776 0-21.333 9.5573-21.333 21.333v298.67c0 11.776 9.5573 21.333 21.333 21.333s21.333-9.5573 21.333-21.333v-298.67c0-11.776-9.5573-21.333-21.333-21.333z\"/>\n    <path d=\"m353.6 74.486c-5.4636 0-10.922 2.0781-15.079 6.2552l-113.78 113.78c-8.3333 8.3333-8.3333 21.844 0 30.177 8.3333 8.3333 21.844 8.3333 30.183 0l98.697-98.703 98.703 98.703c8.3333 8.3333 21.849 8.3333 30.183 0 8.3333-8.3333 8.3333-21.844 0-30.177l-113.78-113.78c-4.2083-4.1771-9.6667-6.2552-15.131-6.2552z\"/>\n  </g>\n  <path d=\"m166.04 210.11q-5.0971-13.492-9.5945-26.385-4.4974-13.192-9.2947-26.685h-94.146l-18.889 53.07h-30.283q11.993-32.981 22.487-60.865 10.494-28.184 20.388-53.369 10.194-25.186 20.089-47.973 9.8943-23.087 20.688-45.574h26.685q10.794 22.487 20.688 45.574 9.8943 22.787 19.789 47.973 10.194 25.186 20.688 53.369 10.494 27.884 22.487 60.865zm-27.284-77.056q-9.5945-26.085-19.189-50.371-9.2947-24.586-19.489-47.073-10.494 22.487-20.089 47.073-9.2947 24.286-18.589 50.371z\"/>\n  <path d=\"m173.24 325.25q-6.896 7.7955-16.191 18.889-8.9948 10.794-19.189 24.286-10.194 13.192-20.988 28.184-10.794 14.692-21.288 29.983-10.194 14.991-19.489 29.983-9.2947 14.991-16.79 28.484h116.93v24.886h-150.81v-19.489q6.2964-11.993 14.692-26.385 8.695-14.392 18.29-29.383 9.8943-14.991 20.388-30.283t20.688-29.383q10.494-14.092 20.088-26.385 9.8943-12.293 17.99-21.588h-106.74v-24.886h142.42z\"/>\n</svg>\n");
var sortDesc = Element("\n<svg class=\"widget-icon\" enable-background=\"new 0 0 512 512\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"matrix(1 0 0 -1 0 501.15)\" stroke-width=\"1.3333\">\n    <path d=\"m353.6 74.486c-11.776 0-21.333 9.5573-21.333 21.333v298.67c0 11.776 9.5573 21.333 21.333 21.333s21.333-9.5573 21.333-21.333v-298.67c0-11.776-9.5573-21.333-21.333-21.333z\"/>\n    <path d=\"m353.6 74.486c-5.4636 0-10.922 2.0781-15.079 6.2552l-113.78 113.78c-8.3333 8.3333-8.3333 21.844 0 30.177 8.3333 8.3333 21.844 8.3333 30.183 0l98.697-98.703 98.703 98.703c8.3333 8.3333 21.849 8.3333 30.183 0 8.3333-8.3333 8.3333-21.844 0-30.177l-113.78-113.78c-4.2083-4.1771-9.6667-6.2552-15.131-6.2552z\"/>\n  </g>\n  <path d=\"m169.11 507.72q-5.0971-13.492-9.5945-26.385-4.4974-13.192-9.2947-26.685h-94.146l-18.889 53.07h-30.283q11.993-32.981 22.487-60.865 10.494-28.184 20.388-53.369 10.194-25.186 20.088-47.973 9.8943-23.087 20.688-45.574h26.685q10.794 22.487 20.688 45.574 9.8943 22.787 19.789 47.973 10.194 25.186 20.688 53.369 10.494 27.884 22.487 60.865zm-27.284-77.056q-9.5945-26.085-19.189-50.371-9.2947-24.586-19.489-47.073-10.494 22.487-20.089 47.073-9.2947 24.286-18.589 50.371z\"/>\n  <path d=\"m176.31 27.639q-6.896 7.7955-16.191 18.889-8.9948 10.794-19.189 24.286-10.194 13.192-20.988 28.184-10.794 14.692-21.288 29.983-10.194 14.991-19.489 29.983-9.2947 14.991-16.79 28.484h116.93v24.886h-150.81v-19.489q6.2964-11.993 14.692-26.385 8.695-14.392 18.29-29.383 9.8943-14.991 20.388-30.283 10.494-15.291 20.688-29.383 10.494-14.092 20.088-26.385 9.8943-12.293 17.99-21.588h-106.74v-24.886h142.42z\"/>\n</svg>\n");
var close = Element("\n<svg class=\"widget-icon\" width=\"26\" height=\"26\" version=\"1.1\" viewBox=\"0 0 6.8792 6.8792\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"translate(0 -290.12)\">\n    <path d=\"m1.4978 296.98c-0.21996-0.0285-0.46241-0.11301-0.65317-0.22765-0.15238-0.0916-0.23271-0.15608-0.36374-0.292-0.23127-0.23989-0.38272-0.52887-0.44978-0.85815-0.022385-0.10993-0.023997-0.24738-0.023997-2.045 0-2.1397-0.0050021-2.0127 0.089332-2.28 0.091584-0.25961 0.20988-0.44561 0.413-0.64938 0.25969-0.26051 0.55304-0.41425 0.92493-0.48477 0.070513-0.0134 0.51083-0.0171 2.0107-0.0171 1.7912 0 1.9284 2e-3 2.0383 0.024 0.68991 0.14049 1.2218 0.67236 1.3623 1.3623 0.022385 0.1099 0.023997 0.24708 0.023997 2.0383 0 1.4999-0.00373 1.9402-0.017119 2.0107-0.070504 0.37189-0.22425 0.66525-0.48477 0.92493-0.20731 0.20666-0.40278 0.32966-0.66175 0.41642-0.26804 0.0898-0.12118 0.0841-2.2139 0.087-1.0767 2e-3 -1.941-3e-3 -1.9943-9e-3zm4.0087-0.61331c0.18869-0.0655 0.30981-0.13961 0.44353-0.27129 0.13463-0.13258 0.21174-0.24574 0.26982-0.39595 0.083551-0.21609 0.079875-0.1102 0.075905-2.1863l-0.0036-1.8965-0.038102-0.11416c-0.12238-0.3666-0.38575-0.63286-0.74753-0.75572l-0.12759-0.04329h-3.8812l-0.11415 0.0381c-0.3666 0.12237-0.63287 0.38575-0.75573 0.74753l-0.043327 0.12758v3.8812l0.038102 0.11415c0.13664 0.40937 0.44645 0.69185 0.86168 0.7857 0.066058 0.0149 0.4242 0.0178 1.9876 0.0158l1.907-3e-3zm-3.1679-1.5265c-0.1635-0.0524-0.2433-0.24627-0.16605-0.40335 0.010899-0.0222 0.20788-0.22916 0.43774-0.45997l0.41793-0.41967-0.41793-0.41968c-0.22986-0.23083-0.42748-0.43868-0.43915-0.46191-0.058379-0.11618-0.038033-0.2343 0.056664-0.329 0.0947-0.0947 0.21282-0.11505 0.329-0.0567 0.023229 0.0117 0.23109 0.20929 0.46191 0.43915l0.41968 0.41791 0.41967-0.41791c0.23082-0.22986 0.43781-0.42694 0.45996-0.43796 0.15971-0.0793 0.35498 4e-3 0.40421 0.17411 0.021866 0.0752 0.016042 0.14327-0.018173 0.2123-0.010987 0.0222-0.20792 0.22918-0.43764 0.46006l-0.41767 0.41978 0.41783 0.41957c0.22981 0.23077 0.42684 0.43772 0.43785 0.45987 0.079363 0.15971-0.00477 0.35498-0.17411 0.40422-0.075095 0.0218-0.14299 0.0161-0.2123-0.018-0.022158-0.0109-0.2291-0.20784-0.45987-0.43765l-0.41958-0.41782-0.41977 0.41766c-0.23087 0.22973-0.43798 0.42688-0.46024 0.43813-0.061854 0.0313-0.15309 0.0383-0.21998 0.0168z\" stroke-width=\".01343\"/>\n  </g>\n</svg>\n");

var TableEditor = /** @class */ (function () {
    function TableEditor(cm, settings) {
        var _this = this;
        this.cursorIsInTable = function () {
            return _this.mte.cursorIsInTable(_this.settings.asOptions());
        };
        this.nextCell = function () {
            _this.mte.nextCell(_this.settings.asOptions());
        };
        this.previousCell = function () {
            _this.mte.previousCell(_this.settings.asOptions());
        };
        this.nextRow = function () {
            _this.mte.nextRow(_this.settings.asOptions());
        };
        this.formatTable = function () {
            _this.mte.format(_this.settings.asOptions());
        };
        this.insertColumn = function () {
            _this.mte.insertColumn(_this.settings.asOptions());
        };
        this.insertRow = function () {
            _this.mte.insertRow(_this.settings.asOptions());
        };
        this.leftAlignColumn = function () {
            _this.mte.alignColumn(lib.Alignment.LEFT, _this.settings.asOptions());
        };
        this.centerAlignColumn = function () {
            _this.mte.alignColumn(lib.Alignment.CENTER, _this.settings.asOptions());
        };
        this.rightAlignColumn = function () {
            _this.mte.alignColumn(lib.Alignment.RIGHT, _this.settings.asOptions());
        };
        this.moveColumnLeft = function () {
            _this.mte.moveColumn(-1, _this.settings.asOptions());
        };
        this.moveColumnRight = function () {
            _this.mte.moveColumn(1, _this.settings.asOptions());
        };
        this.moveRowUp = function () {
            _this.mte.moveRow(-1, _this.settings.asOptions());
        };
        this.moveRowDown = function () {
            _this.mte.moveRow(1, _this.settings.asOptions());
        };
        this.deleteColumn = function () {
            _this.mte.deleteColumn(_this.settings.asOptions());
        };
        this.deleteRow = function () {
            _this.mte.deleteRow(_this.settings.asOptions());
        };
        this.sortRowsAsc = function () {
            _this.mte.sortRows(lib.SortOrder.Ascending, _this.settings.asOptions());
        };
        this.sortRowsDesc = function () {
            _this.mte.sortRows(lib.SortOrder.Descending, _this.settings.asOptions());
        };
        this.openTableControls = function () {
            var controls = new TableControls(_this.editor, _this);
            controls.display();
            return controls;
        };
        this.settings = settings;
        this.editor = cm;
        var ote = new ObsidianTextEditor(cm);
        this.mte = new lib.TableEditor(ote);
    }
    return TableEditor;
}());

var TableEditorPlugin = /** @class */ (function (_super) {
    __extends(TableEditorPlugin, _super);
    function TableEditorPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newPerformTableAction = function (fn, alertOnNoTable) {
            if (alertOnNoTable === void 0) { alertOnNoTable = true; }
            return function () {
                // Any action will trigger hiding the table controls
                if (_this.tableControls) {
                    _this.tableControls.clear();
                    _this.tableControls = null;
                }
                // Any action will trigger checking for tables that need to be monospaced
                if (_this.settings.useMonospaceFont) {
                    _this.enableMonospaceFont();
                }
                var activeLeaf = _this.app.workspace.activeLeaf;
                if (activeLeaf.view instanceof obsidian.MarkdownView) {
                    var te = new TableEditor(activeLeaf.view.sourceMode.cmEditor, _this.settings);
                    if (!te.cursorIsInTable()) {
                        if (alertOnNoTable) {
                            new obsidian.Notice('Advanced Tables: Cursor must be in a table.');
                        }
                        return;
                    }
                    fn(te);
                }
            };
        };
        _this.handleKeyDown = function (cm, event) {
            if (['Tab', 'Enter'].contains(event.key)) {
                _this.newPerformTableAction(function (te) {
                    switch (event.key) {
                        case 'Tab':
                            if (!_this.settings.bindTab) {
                                return;
                            }
                            if (event.shiftKey) {
                                te.previousCell();
                            }
                            else {
                                te.nextCell();
                            }
                            break;
                        case 'Enter':
                            if (!_this.settings.bindEnter) {
                                return;
                            }
                            te.nextRow();
                            break;
                    }
                    event.preventDefault();
                }, false)();
            }
        };
        /**
         * This function can be used to initialize state which depends on values
         * loaded from the settings. It will not be called until loading settings is
         * complete.
         */
        _this.initAfterSettings = function () {
            if (_this.settings.showRibbonIcon) {
                obsidian.addIcon('spreadsheet', tableControlsIcon);
                _this.addRibbonIcon('spreadsheet', 'Advanced Tables Toolbar', function () {
                    _this.newPerformTableAction(function (te) {
                        _this.tableControls = te.openTableControls();
                    })();
                });
            }
            if (_this.settings.useMonospaceFont) {
                _this.enableMonospaceFont();
            }
        };
        return _this;
    }
    TableEditorPlugin.prototype.onInit = function () { };
    TableEditorPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('loading markdown-table-editor plugin');
                this.loadSettings();
                this.cmEditors = [];
                this.registerEvent(this.app.on('codemirror', function (cm) {
                    _this.cmEditors.push(cm);
                    cm.on('keydown', _this.handleKeyDown);
                }));
                this.addCommand({
                    id: 'next-row',
                    name: 'Go to next row',
                    callback: this.newPerformTableAction(function (te) {
                        if (_this.settings.bindEnter) {
                            new obsidian.Notice('Advanced Tables: Next row also bound to enter. ' +
                                'Possibly producing double actions. See Advanced Tables settings.');
                        }
                        te.nextRow();
                    }),
                });
                this.addCommand({
                    id: 'next-cell',
                    name: 'Go to next cell',
                    callback: this.newPerformTableAction(function (te) {
                        if (_this.settings.bindEnter) {
                            new obsidian.Notice('Advanced Tables: Next cell also bound to tab. ' +
                                'Possibly producing double actions. See Advanced Tables settings.');
                        }
                        te.nextCell();
                    }),
                });
                this.addCommand({
                    id: 'previous-cell',
                    name: 'Go to previous cell',
                    callback: this.newPerformTableAction(function (te) {
                        if (_this.settings.bindEnter) {
                            new obsidian.Notice('Advanced Tables: Previous cell also bound to shift+tab. ' +
                                'Possibly producing double actions. See Advanced Tables settings.');
                        }
                        te.previousCell();
                    }),
                });
                this.addCommand({
                    id: 'format-table',
                    name: 'Format table at the cursor',
                    callback: this.newPerformTableAction(function (te) {
                        te.formatTable();
                    }),
                });
                this.addCommand({
                    id: 'insert-column',
                    name: 'Insert column before current',
                    callback: this.newPerformTableAction(function (te) {
                        te.insertColumn();
                    }),
                });
                this.addCommand({
                    id: 'left-align-column',
                    name: 'Left align column',
                    callback: this.newPerformTableAction(function (te) {
                        te.leftAlignColumn();
                    }),
                });
                this.addCommand({
                    id: 'center-align-column',
                    name: 'Center align column',
                    callback: this.newPerformTableAction(function (te) {
                        te.centerAlignColumn();
                    }),
                });
                this.addCommand({
                    id: 'right-align-column',
                    name: 'Right align column',
                    callback: this.newPerformTableAction(function (te) {
                        te.rightAlignColumn();
                    }),
                });
                this.addCommand({
                    id: 'move-column-left',
                    name: 'Move column left',
                    callback: this.newPerformTableAction(function (te) {
                        te.moveColumnLeft();
                    }),
                });
                this.addCommand({
                    id: 'move-column-right',
                    name: 'Move column right',
                    callback: this.newPerformTableAction(function (te) {
                        te.moveColumnRight();
                    }),
                });
                this.addCommand({
                    id: 'move-row-up',
                    name: 'Move row up',
                    callback: this.newPerformTableAction(function (te) {
                        te.moveRowUp();
                    }),
                });
                this.addCommand({
                    id: 'move-row-down',
                    name: 'Move row down',
                    callback: this.newPerformTableAction(function (te) {
                        te.moveRowDown();
                    }),
                });
                this.addCommand({
                    id: 'delete-column',
                    name: 'Delete column',
                    callback: this.newPerformTableAction(function (te) {
                        te.deleteColumn();
                    }),
                });
                this.addCommand({
                    id: 'delete-row',
                    name: 'Delete row',
                    callback: this.newPerformTableAction(function (te) {
                        te.deleteRow();
                    }),
                });
                this.addCommand({
                    id: 'sort-rows-ascending',
                    name: 'Sort rows ascending',
                    callback: this.newPerformTableAction(function (te) {
                        te.sortRowsAsc();
                    }),
                });
                this.addCommand({
                    id: 'sort-rows-descending',
                    name: 'Sort rows descending',
                    callback: this.newPerformTableAction(function (te) {
                        te.sortRowsDesc();
                    }),
                });
                this.addCommand({
                    id: 'table-control-bar',
                    name: 'Open table controls toolbar',
                    hotkeys: [
                        {
                            modifiers: ['Mod', 'Shift'],
                            key: 'd',
                        },
                    ],
                    callback: this.newPerformTableAction(function (te) {
                        _this.tableControls = te.openTableControls();
                    }),
                });
                this.addSettingTab(new TableEditorSettingsTab(this.app, this));
                return [2 /*return*/];
            });
        });
    };
    TableEditorPlugin.prototype.onunload = function () {
        var _this = this;
        console.log('unloading markdown-table-editor plugin');
        if (this.tableControls) {
            this.tableControls.clear();
            this.tableControls = null;
        }
        this.cmEditors.forEach(function (cm) {
            cm.off('keydown', _this.handleKeyDown);
        });
    };
    TableEditorPlugin.prototype.enableMonospaceFont = function () {
        console.debug('Advanced Tables: Adding css class to enable monospace font in tables');
        var existingElem = document.getElementById('advanced-tables-monospace');
        if (existingElem) {
            console.debug('Advanced Tables: css already enabled, skipping');
            return;
        }
        var font = 'monospace';
        var preferredFont = this.settings.preferredMonospaceFont;
        if (preferredFont) {
            font = preferredFont + ", " + font;
        }
        var css = "\n<style type='text/css' id='advanced-tables-monospace'>\n  .HyperMD-table-row {\n    font-family: " + font + " !important;\n  }\n</style>\n";
        document.head.insertAdjacentHTML('beforeend', css);
    };
    TableEditorPlugin.prototype.disableMonospaceFont = function () {
        var elem = document.getElementById('advanced-tables-monospace');
        if (elem) {
            elem.parentElement.removeChild(elem);
        }
    };
    TableEditorPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.settings = new TableEditorPluginSettings();
                (function () { return __awaiter(_this, void 0, void 0, function () {
                    var loadedSettings;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loadData()];
                            case 1:
                                loadedSettings = _a.sent();
                                if (loadedSettings) {
                                    console.log('Found existing settings file');
                                    if ('formatType' in loadedSettings) {
                                        this.settings.formatType = loadedSettings.formatType;
                                    }
                                    if ('showRibbonIcon' in loadedSettings) {
                                        this.settings.showRibbonIcon = loadedSettings.showRibbonIcon;
                                    }
                                    if ('useMonospaceFont' in loadedSettings) {
                                        this.settings.useMonospaceFont = loadedSettings.useMonospaceFont;
                                    }
                                    if ('preferredMonospaceFont' in loadedSettings) {
                                        this.settings.preferredMonospaceFont =
                                            loadedSettings.preferredMonospaceFont;
                                    }
                                    if ('bindEnter' in loadedSettings) {
                                        this.settings.bindEnter = loadedSettings.bindEnter;
                                    }
                                    if ('bindTab' in loadedSettings) {
                                        this.settings.bindTab = loadedSettings.bindTab;
                                    }
                                    console.log('Saving settings to ensure consistency');
                                    this.saveData(this.settings);
                                }
                                else {
                                    console.log('No settings file found, saving...');
                                    this.saveData(this.settings);
                                }
                                this.initAfterSettings();
                                return [2 /*return*/];
                        }
                    });
                }); })();
                return [2 /*return*/];
            });
        });
    };
    return TableEditorPlugin;
}(obsidian.Plugin));
var TableEditorSettingsTab = /** @class */ (function (_super) {
    __extends(TableEditorSettingsTab, _super);
    function TableEditorSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    TableEditorSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Table Plugin Editor - Settings' });
        new obsidian.Setting(containerEl)
            .setName('Bind enter to table navigation')
            .setDesc('If enabled, when the cursor is in a table, enter advances to the next ' +
            'row. Disabling this can help avoid conflicting with tag or CJK ' +
            'autocompletion. If disabling, bind "Go to ..." in the Obsidian Hotkeys settings.')
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.bindEnter).onChange(function (value) {
                _this.plugin.settings.bindEnter = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.display();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Bind tab to table navigation')
            .setDesc('If enabled, when the cursor is in a table, tab/shift+tab navigate ' +
            'between cells. Disabling this can help avoid conflicting with tag ' +
            'or CJK autocompletion. If disabling, bind "Go to ..." in the Obsidian Hotkeys settings.')
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.bindTab).onChange(function (value) {
                _this.plugin.settings.bindTab = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.display();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Pad cell width using spaces')
            .setDesc('If enabled, table cells will have spaces added to match the with of the ' +
            'longest cell in the column. Only useful when using a monospace font during editing.')
            .addToggle(function (toggle) {
            return toggle
                .setValue(_this.plugin.settings.formatType === lib.FormatType.NORMAL)
                .onChange(function (value) {
                _this.plugin.settings.formatType = value
                    ? lib.FormatType.NORMAL
                    : lib.FormatType.WEAK;
                _this.plugin.saveData(_this.plugin.settings);
                _this.display();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Show icon in sidebar')
            .setDesc('If enabled, a button which opens the table controls toolbar will be added to the Obsidian sidebar. ' +
            'The toolbar can also be opened with a Hotkey. Changes only take effect on reload.')
            .addToggle(function (toggle) {
            return toggle
                .setValue(_this.plugin.settings.showRibbonIcon)
                .onChange(function (value) {
                _this.plugin.settings.showRibbonIcon = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.display();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Use monospace font')
            .setDesc('If enabled, a monospaced font will be used for text inside tables. If you already use a monospace font while editing, disable this to preserve your preferred font.')
            .addToggle(function (toggle) {
            return toggle
                .setValue(_this.plugin.settings.useMonospaceFont)
                .onChange(function (value) {
                _this.plugin.settings.useMonospaceFont = value;
                _this.plugin.saveData(_this.plugin.settings);
                if (value) {
                    _this.plugin.enableMonospaceFont();
                }
                else {
                    _this.plugin.disableMonospaceFont();
                }
                _this.display();
            });
        });
        if (this.plugin.settings.useMonospaceFont) {
            new obsidian.Setting(containerEl)
                .setName('Monospace Font Name')
                .setDesc('Optionally, provide a preferred monospace font that is installed on this system.')
                .addText(function (text) {
                text.setPlaceholder('monospace');
                if (_this.plugin.settings.preferredMonospaceFont) {
                    text.setValue(_this.plugin.settings.preferredMonospaceFont);
                }
                text.onChange(function (value) {
                    _this.plugin.settings.preferredMonospaceFont = value;
                    _this.plugin.saveData(_this.plugin.settings);
                    _this.plugin.disableMonospaceFont();
                    _this.plugin.enableMonospaceFont();
                });
            });
        }
    };
    return TableEditorSettingsTab;
}(obsidian.PluginSettingTab));
/**
 * An svg icon of a spreadsheet
 */
var tableControlsIcon = "<svg version=\"1.1\" viewBox=\"0 0 482.81 482.81\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill=\"currentColor\" d=\"m457.58 25.464-432.83 0.42151c-13.658 0.013314-24.758 11.115-24.757 24.757l0.031024 347.45c7.4833e-4 8.3808 4.211 15.772 10.608 20.259 3.4533 2.4499 5.0716 3.2901 8.879 3.9022 1.7033 0.37333 3.4561 0.59471 5.2692 0.59294l432.84-0.42151c1.809-1e-3 3.5618-0.21823 5.2568-0.59294h1.2174v-0.37196c10.505-2.8727 18.279-12.397 18.278-23.788l-0.031-347.43c1e-3 -13.649-11.107-24.763-24.768-24.763zm3.5453 24.763v71.344h-163.31v-74.886h159.76c1.9641 0.0014 3.5467 1.5922 3.5467 3.5425zm-1.6737 350.37h-161.6v-67.207h163.31v64.268c1e-3 1.2572-0.70549 2.321-1.7033 2.9386zm-438.21-2.5171v-64.268h76.646v67.207h-74.942c-0.99784-0.61765-1.7033-1.6814-1.7033-2.9386zm255.28-155.18v69.688h-157.42v-69.688zm0 90.913v67.207h-157.42v-67.207zm-0.031-211.83h-157.42v-74.886h157.42zm0 21.226v77.826h-157.42v-77.826zm-178.64 77.826h-76.646v-77.826h76.646zm0.03102 21.862v69.688h-76.646v-69.688zm199.95 69.268v-69.697h163.31v69.697zm-0.031-91.552v-77.826h163.31v77.826z\" stroke-width=\"1.3725\"/>\n</svg>";

module.exports = TableEditorPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9AdGdyb3Npbmdlci9tZC1hZHZhbmNlZC10YWJsZXMvbGliL3BvaW50LmpzIiwibm9kZV9tb2R1bGVzL0B0Z3Jvc2luZ2VyL21kLWFkdmFuY2VkLXRhYmxlcy9saWIvcmFuZ2UuanMiLCJub2RlX21vZHVsZXMvQHRncm9zaW5nZXIvbWQtYWR2YW5jZWQtdGFibGVzL2xpYi9mb2N1cy5qcyIsIm5vZGVfbW9kdWxlcy9AdGdyb3Npbmdlci9tZC1hZHZhbmNlZC10YWJsZXMvbGliL2FsaWdubWVudC5qcyIsIm5vZGVfbW9kdWxlcy9AdGdyb3Npbmdlci9tZC1hZHZhbmNlZC10YWJsZXMvbGliL3RhYmxlLWNlbGwuanMiLCJub2RlX21vZHVsZXMvQHRncm9zaW5nZXIvbWQtYWR2YW5jZWQtdGFibGVzL2xpYi90YWJsZS1yb3cuanMiLCJub2RlX21vZHVsZXMvQHRncm9zaW5nZXIvbWQtYWR2YW5jZWQtdGFibGVzL2xpYi90YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9AdGdyb3Npbmdlci9tZC1hZHZhbmNlZC10YWJsZXMvbGliL3BhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9tZWF3L2xpYi9tZWF3LmVzLmpzIiwibm9kZV9tb2R1bGVzL0B0Z3Jvc2luZ2VyL21kLWFkdmFuY2VkLXRhYmxlcy9saWIvZm9ybWF0dGVyLmpzIiwibm9kZV9tb2R1bGVzL0B0Z3Jvc2luZ2VyL21kLWFkdmFuY2VkLXRhYmxlcy9saWIvZWRpdC1zY3JpcHQuanMiLCJub2RlX21vZHVsZXMvQHRncm9zaW5nZXIvbWQtYWR2YW5jZWQtdGFibGVzL2xpYi90ZXh0LWVkaXRvci5qcyIsIm5vZGVfbW9kdWxlcy9AdGdyb3Npbmdlci9tZC1hZHZhbmNlZC10YWJsZXMvbGliL29wdGlvbnMuanMiLCJub2RlX21vZHVsZXMvQHRncm9zaW5nZXIvbWQtYWR2YW5jZWQtdGFibGVzL2xpYi90YWJsZS1lZGl0b3IuanMiLCJub2RlX21vZHVsZXMvQHRncm9zaW5nZXIvbWQtYWR2YW5jZWQtdGFibGVzL2xpYi9pbmRleC5qcyIsInNyYy9zZXR0aW5ncy50cyIsInNyYy9vYnNpZGlhbi10ZXh0LWVkaXRvci50cyIsInNyYy90YWJsZS1jb250cm9scy50cyIsInNyYy90YWJsZS1lZGl0b3IudHMiLCJzcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUG9pbnQgPSB2b2lkIDA7XG4vKipcbiAqIEEgYFBvaW50YCByZXByZXNlbnRzIGEgcG9pbnQgaW4gdGhlIHRleHQgZWRpdG9yLlxuICovXG5jbGFzcyBQb2ludCB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBgUG9pbnRgIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByb3cgLSBSb3cgb2YgdGhlIHBvaW50LCBzdGFydHMgZnJvbSAwLlxuICAgICAqIEBwYXJhbSBjb2x1bW4gLSBDb2x1bW4gb2YgdGhlIHBvaW50LCBzdGFydHMgZnJvbSAwLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJvdywgY29sdW1uKSB7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBwb2ludCBpcyBlcXVhbCB0byBhbm90aGVyIHBvaW50LlxuICAgICAqL1xuICAgIGVxdWFscyhwb2ludCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3cgPT09IHBvaW50LnJvdyAmJiB0aGlzLmNvbHVtbiA9PT0gcG9pbnQuY29sdW1uO1xuICAgIH1cbn1cbmV4cG9ydHMuUG9pbnQgPSBQb2ludDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SYW5nZSA9IHZvaWQgMDtcbi8qKlxuICogQSBgUmFuZ2VgIG9iamVjdCByZXByZXNlbnRzIGEgcmFuZ2UgaW4gdGhlIHRleHQgZWRpdG9yLlxuICovXG5jbGFzcyBSYW5nZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBgUmFuZ2VgIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGFydCAtIFRoZSBzdGFydCBwb2ludCBvZiB0aGUgcmFuZ2UuXG4gICAgICogQHBhcmFtIGVuZCAtIFRoZSBlbmQgcG9pbnQgb2YgdGhlIHJhbmdlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB9XG59XG5leHBvcnRzLlJhbmdlID0gUmFuZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRm9jdXMgPSB2b2lkIDA7XG4vKipcbiAqIEEgYEZvY3VzYCBvYmplY3QgcmVwcmVzZW50cyB3aGljaCBjZWxsIGlzIGZvY3VzZWQgaW4gdGhlIHRhYmxlLlxuICpcbiAqIE5vdGUgdGhhdCBgcm93YCBhbmQgYGNvbHVtbmAgcHJvcGVydGllcyBzcGVjaWZpeSBhIGNlbGwncyBwb3NpdGlvbiBpbiB0aGVcbiAqIHRhYmxlLCBub3QgdGhlIGN1cnNvcidzIHBvc2l0aW9uIGluIHRoZSB0ZXh0IGVkaXRvciBhcyB7QGxpbmsgUG9pbnR9IGNsYXNzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIEZvY3VzIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGBGb2N1c2Agb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHJvdyAtIFJvdyBvZiB0aGUgZm9jdXNlZCBjZWxsLlxuICAgICAqIEBwYXJhbSBjb2x1bW4gLSBDb2x1bW4gb2YgdGhlIGZvY3VzZWQgY2VsbC5cbiAgICAgKiBAcGFyYW0gb2Zmc2V0IC0gUmF3IG9mZnNldCBpbiB0aGUgY2VsbC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihyb3csIGNvbHVtbiwgb2Zmc2V0KSB7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0d28gZm9jdXNlcyBwb2ludCB0aGUgc2FtZSBjZWxsLlxuICAgICAqIE9mZnNldHMgYXJlIGlnbm9yZWQuXG4gICAgICovXG4gICAgcG9zRXF1YWxzKGZvY3VzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdyA9PT0gZm9jdXMucm93ICYmIHRoaXMuY29sdW1uID09PSBmb2N1cy5jb2x1bW47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBmb2N1cyBvYmplY3QgYnkgc2V0dGluZyBpdHMgcm93IHRvIHRoZSBzcGVjaWZpZWQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcm93IC0gUm93IG9mIHRoZSBmb2N1c2VkIGNlbGwuXG4gICAgICogQHJldHVybnMgQSBuZXcgZm9jdXMgb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCByb3cuXG4gICAgICovXG4gICAgc2V0Um93KHJvdykge1xuICAgICAgICByZXR1cm4gbmV3IEZvY3VzKHJvdywgdGhpcy5jb2x1bW4sIHRoaXMub2Zmc2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGZvY3VzIG9iamVjdCBieSBzZXR0aW5nIGl0cyBjb2x1bW4gdG8gdGhlIHNwZWNpZmllZCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb2x1bW4gLSBDb2x1bW4gb2YgdGhlIGZvY3VzZWQgY2VsbC5cbiAgICAgKiBAcmV0dXJucyBBIG5ldyBmb2N1cyBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIGNvbHVtbi5cbiAgICAgKi9cbiAgICBzZXRDb2x1bW4oY29sdW1uKSB7XG4gICAgICAgIHJldHVybiBuZXcgRm9jdXModGhpcy5yb3csIGNvbHVtbiwgdGhpcy5vZmZzZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgZm9jdXMgb2JqZWN0IGJ5IHNldHRpbmcgaXRzIG9mZnNldCB0byB0aGUgc3BlY2lmaWVkIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIG9mZnNldCAtIE9mZnNldCBpbiB0aGUgZm9jdXNlZCBjZWxsLlxuICAgICAqIEByZXR1cm5zIEEgbmV3IGZvY3VzIG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQgb2Zmc2V0LlxuICAgICAqL1xuICAgIHNldE9mZnNldChvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGb2N1cyh0aGlzLnJvdywgdGhpcy5jb2x1bW4sIG9mZnNldCk7XG4gICAgfVxufVxuZXhwb3J0cy5Gb2N1cyA9IEZvY3VzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkhlYWRlckFsaWdubWVudCA9IGV4cG9ydHMuRGVmYXVsdEFsaWdubWVudCA9IGV4cG9ydHMuQWxpZ25tZW50ID0gdm9pZCAwO1xuLyoqXG4gKiBSZXByZXNlbnRzIGNvbHVtbiBhbGlnbm1lbnQuXG4gKlxuICogLSBgQWxpZ25tZW50Lk5PTkVgIC0gVXNlIGRlZmF1bHQgYWxpZ25tZW50LlxuICogLSBgQWxpZ25tZW50LkxFRlRgIC0gQWxpZ24gbGVmdC5cbiAqIC0gYEFsaWdubWVudC5SSUdIVGAgLSBBbGlnbiByaWdodC5cbiAqIC0gYEFsaWdubWVudC5DRU5URVJgIC0gQWxpZ24gY2VudGVyLlxuICpcbiAqL1xudmFyIEFsaWdubWVudDtcbihmdW5jdGlvbiAoQWxpZ25tZW50KSB7XG4gICAgQWxpZ25tZW50W1wiTk9ORVwiXSA9IFwibm9uZVwiO1xuICAgIEFsaWdubWVudFtcIkxFRlRcIl0gPSBcImxlZnRcIjtcbiAgICBBbGlnbm1lbnRbXCJSSUdIVFwiXSA9IFwicmlnaHRcIjtcbiAgICBBbGlnbm1lbnRbXCJDRU5URVJcIl0gPSBcImNlbnRlclwiO1xufSkoQWxpZ25tZW50ID0gZXhwb3J0cy5BbGlnbm1lbnQgfHwgKGV4cG9ydHMuQWxpZ25tZW50ID0ge30pKTtcbi8qKlxuICogUmVwcmVzZW50cyBkZWZhdWx0IGNvbHVtbiBhbGlnbm1lbnRcbiAqXG4gKiAtIGBEZWZhdWx0QWxpZ25tZW50LkxFRlRgIC0gQWxpZ24gbGVmdC5cbiAqIC0gYERlZmF1bHRBbGlnbm1lbnQuUklHSFRgIC0gQWxpZ24gcmlnaHQuXG4gKiAtIGBEZWZhdWx0QWxpZ25tZW50LkNFTlRFUmAgLSBBbGlnbiBjZW50ZXIuXG4gKlxuICovXG52YXIgRGVmYXVsdEFsaWdubWVudDtcbihmdW5jdGlvbiAoRGVmYXVsdEFsaWdubWVudCkge1xuICAgIERlZmF1bHRBbGlnbm1lbnRbXCJMRUZUXCJdID0gXCJsZWZ0XCI7XG4gICAgRGVmYXVsdEFsaWdubWVudFtcIlJJR0hUXCJdID0gXCJyaWdodFwiO1xuICAgIERlZmF1bHRBbGlnbm1lbnRbXCJDRU5URVJcIl0gPSBcImNlbnRlclwiO1xufSkoRGVmYXVsdEFsaWdubWVudCA9IGV4cG9ydHMuRGVmYXVsdEFsaWdubWVudCB8fCAoZXhwb3J0cy5EZWZhdWx0QWxpZ25tZW50ID0ge30pKTtcbi8qKlxuICogUmVwcmVzZW50cyBhbGlnbm1lbnQgb2YgaGVhZGVyIGNlbGxzLlxuICpcbiAqIC0gYEhlYWRlckFsaWdubWVudC5GT0xMT1dgIC0gRm9sbG93IGNvbHVtbidzIGFsaWdubWVudC5cbiAqIC0gYEhlYWRlckFsaWdubWVudC5MRUZUYCAtIEFsaWduIGxlZnQuXG4gKiAtIGBIZWFkZXJBbGlnbm1lbnQuUklHSFRgIC0gQWxpZ24gcmlnaHQuXG4gKiAtIGBIZWFkZXJBbGlnbm1lbnQuQ0VOVEVSYCAtIEFsaWduIGNlbnRlci5cbiAqXG4gKi9cbnZhciBIZWFkZXJBbGlnbm1lbnQ7XG4oZnVuY3Rpb24gKEhlYWRlckFsaWdubWVudCkge1xuICAgIEhlYWRlckFsaWdubWVudFtcIkZPTExPV1wiXSA9IFwiZm9sbG93XCI7XG4gICAgSGVhZGVyQWxpZ25tZW50W1wiTEVGVFwiXSA9IFwibGVmdFwiO1xuICAgIEhlYWRlckFsaWdubWVudFtcIlJJR0hUXCJdID0gXCJyaWdodFwiO1xuICAgIEhlYWRlckFsaWdubWVudFtcIkNFTlRFUlwiXSA9IFwiY2VudGVyXCI7XG59KShIZWFkZXJBbGlnbm1lbnQgPSBleHBvcnRzLkhlYWRlckFsaWdubWVudCB8fCAoZXhwb3J0cy5IZWFkZXJBbGlnbm1lbnQgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRhYmxlQ2VsbCA9IHZvaWQgMDtcbmNvbnN0IGFsaWdubWVudF8xID0gcmVxdWlyZShcIi4vYWxpZ25tZW50XCIpO1xuLyoqXG4gKiBBIGBUYWJsZUNlbGxgIG9iamVjdCByZXByZXNlbnRzIGEgdGFibGUgY2VsbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBUYWJsZUNlbGwge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgYFRhYmxlQ2VsbGAgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHJhd0NvbnRlbnQgLSBSYXcgY29udGVudCBvZiB0aGUgY2VsbC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyYXdDb250ZW50KSB7XG4gICAgICAgIHRoaXMucmF3Q29udGVudCA9IHJhd0NvbnRlbnQ7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHJhd0NvbnRlbnQudHJpbSgpO1xuICAgICAgICB0aGlzLnBhZGRpbmdMZWZ0ID1cbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9PT0gJydcbiAgICAgICAgICAgICAgICA/IHRoaXMucmF3Q29udGVudCA9PT0gJydcbiAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgIDogMVxuICAgICAgICAgICAgICAgIDogdGhpcy5yYXdDb250ZW50Lmxlbmd0aCAtIHRoaXMucmF3Q29udGVudC50cmltTGVmdCgpLmxlbmd0aDtcbiAgICAgICAgdGhpcy5wYWRkaW5nUmlnaHQgPVxuICAgICAgICAgICAgdGhpcy5yYXdDb250ZW50Lmxlbmd0aCAtIHRoaXMuY29udGVudC5sZW5ndGggLSB0aGlzLnBhZGRpbmdMZWZ0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJzIHRoZSBjZWxsIHRvIGEgdGV4dCByZXByZXNlbnRhdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSByYXcgY29udGVudCBvZiB0aGUgY2VsbC5cbiAgICAgKi9cbiAgICB0b1RleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhd0NvbnRlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgY2VsbCBpcyBhIGRlbGltaXRlciBpLmUuIGl0IG9ubHkgY29udGFpbnMgaHlwaGVucyBgLWAgd2l0aCBvcHRpb25hbCBvbmVcbiAgICAgKiBsZWFkaW5nIGFuZCB0cmFpbGluZyBjb2xvbnMgYDpgLlxuICAgICAqXG4gICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBjZWxsIGlzIGEgZGVsaW1pdGVyLlxuICAgICAqL1xuICAgIGlzRGVsaW1pdGVyKCkge1xuICAgICAgICByZXR1cm4gL15cXHMqOj8tKzo/XFxzKiQvLnRlc3QodGhpcy5yYXdDb250ZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYWxpZ25tZW50IHRoZSBjZWxsIHJlcHJlc2VudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUaGUgYWxpZ25tZW50IHRoZSBjZWxsIHJlcHJlc2VudHM7IGB1bmRlZmluZWRgIGlmIHRoZSBjZWxsIGlzIG5vdCBhIGRlbGltaXRlci5cbiAgICAgKi9cbiAgICBnZXRBbGlnbm1lbnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0RlbGltaXRlcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnRbMF0gPT09ICc6Jykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudFt0aGlzLmNvbnRlbnQubGVuZ3RoIC0gMV0gPT09ICc6Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGlnbm1lbnRfMS5BbGlnbm1lbnQuQ0VOVEVSO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFsaWdubWVudF8xLkFsaWdubWVudC5MRUZUO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnRbdGhpcy5jb250ZW50Lmxlbmd0aCAtIDFdID09PSAnOicpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGlnbm1lbnRfMS5BbGlnbm1lbnQuUklHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsaWdubWVudF8xLkFsaWdubWVudC5OT05FO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyBhIHJlbGF0aXZlIHBvc2l0aW9uIGluIHRoZSB0cmltbWVkIGNvbnRlbnQgZnJvbSB0aGF0IGluIHRoZSByYXcgY29udGVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByYXdPZmZzZXQgLSBSZWxhdGl2ZSBwb3NpdGlvbiBpbiB0aGUgcmF3IGNvbnRlbnQuXG4gICAgICogQHJldHVybnMgLSBSZWxhdGl2ZSBwb3NpdGlvbiBpbiB0aGUgdHJpbW1lZCBjb250ZW50LlxuICAgICAqL1xuICAgIGNvbXB1dGVDb250ZW50T2Zmc2V0KHJhd09mZnNldCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZW50ID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhd09mZnNldCA8IHRoaXMucGFkZGluZ0xlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYXdPZmZzZXQgPCB0aGlzLnBhZGRpbmdMZWZ0ICsgdGhpcy5jb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHJhd09mZnNldCAtIHRoaXMucGFkZGluZ0xlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIGEgcmVsYXRpdmUgcG9zaXRpb24gaW4gdGhlIHJhdyBjb250ZW50IGZyb20gdGhhdCBpbiB0aGUgdHJpbW1lZCBjb250ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRlbnRPZmZzZXQgLSBSZWxhdGl2ZSBwb3NpdGlvbiBpbiB0aGUgdHJpbW1lZCBjb250ZW50LlxuICAgICAqIEByZXR1cm5zIC0gUmVsYXRpdmUgcG9zaXRpb24gaW4gdGhlIHJhdyBjb250ZW50LlxuICAgICAqL1xuICAgIGNvbXB1dGVSYXdPZmZzZXQoY29udGVudE9mZnNldCkge1xuICAgICAgICByZXR1cm4gY29udGVudE9mZnNldCArIHRoaXMucGFkZGluZ0xlZnQ7XG4gICAgfVxufVxuZXhwb3J0cy5UYWJsZUNlbGwgPSBUYWJsZUNlbGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGFibGVSb3cgPSB2b2lkIDA7XG4vKipcbiAqIEEgYFRhYmxlUm93YCBvYmplY3QgcmVwcmVzZW50cyBhIHRhYmxlIHJvdy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBUYWJsZVJvdyB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBgVGFibGVSb3dgIG9iamVjLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNlbGxzIC0gQ2VsbHMgdGhhdCB0aGUgcm93IGNvbnRhaW5zLlxuICAgICAqIEBwYXJhbSBtYXJnaW5MZWZ0IC0gTWFyZ2luIHN0cmluZyBhdCB0aGUgbGVmdCBvZiB0aGUgcm93LlxuICAgICAqIEBwYXJhbSBtYXJnaW5SaWdodCAtIE1hcmdpbiBzdHJpbmcgYXQgdGhlIHJpZ2h0IG9mIHRoZSByb3cuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2VsbHMsIG1hcmdpbkxlZnQsIG1hcmdpblJpZ2h0KSB7XG4gICAgICAgIHRoaXMuX2NlbGxzID0gY2VsbHMuc2xpY2UoKTtcbiAgICAgICAgdGhpcy5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdDtcbiAgICAgICAgdGhpcy5tYXJnaW5SaWdodCA9IG1hcmdpblJpZ2h0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgdGhlIGNlbGxzIGluIHRoZSByb3cuXG4gICAgICovXG4gICAgZ2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jZWxscy5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNlbGxzIHRoYXQgdGhlIHJvdyBjb250YWlucy5cbiAgICAgKi9cbiAgICBnZXRDZWxscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NlbGxzLnNsaWNlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgYSBjZWxsIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5kZXggLSBJbmRleC5cbiAgICAgKiBAcmV0dXJucyBUaGUgY2VsbCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IGlmIGV4aXN0czsgYHVuZGVmaW5lZGAgaWYgbm8gY2VsbCBpcyBmb3VuZC5cbiAgICAgKi9cbiAgICBnZXRDZWxsQXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NlbGxzW2luZGV4XTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVycyB0aGUgcm93IHRvIGEgdGV4dCByZXByZXNlbnRhdGlvbi5cbiAgICAgKi9cbiAgICB0b1RleHQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jZWxscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcmdpbkxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLl9jZWxscy5tYXAoKGNlbGwpID0+IGNlbGwudG9UZXh0KCkpLmpvaW4oJ3wnKTtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubWFyZ2luTGVmdH18JHtjZWxsc318JHt0aGlzLm1hcmdpblJpZ2h0fWA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgcm93IGlzIGEgZGVsaW1pdGVyIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgcm93IGlzIGEgZGVsaW1pdGVyIGkuZS4gYWxsIHRoZSBjZWxscyBjb250YWluZWQgYXJlIGRlbGltaXRlcnMuXG4gICAgICovXG4gICAgaXNEZWxpbWl0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jZWxscy5ldmVyeSgoY2VsbCkgPT4gY2VsbC5pc0RlbGltaXRlcigpKTtcbiAgICB9XG59XG5leHBvcnRzLlRhYmxlUm93ID0gVGFibGVSb3c7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGFibGUgPSB2b2lkIDA7XG5jb25zdCBmb2N1c18xID0gcmVxdWlyZShcIi4vZm9jdXNcIik7XG5jb25zdCBwb2ludF8xID0gcmVxdWlyZShcIi4vcG9pbnRcIik7XG5jb25zdCByYW5nZV8xID0gcmVxdWlyZShcIi4vcmFuZ2VcIik7XG4vKipcbiAqIEEgYFRhYmxlYCBvYmplY3QgcmVwcmVzZW50cyBhIHRhYmxlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIFRhYmxlIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGBUYWJsZWAgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHJvd3MgLSBBbiBhcnJheSBvZiByb3dzIHRoYXQgdGhlIHRhYmxlIGNvbnRhaW5zLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJvd3MpIHtcbiAgICAgICAgdGhpcy5fcm93cyA9IHJvd3Muc2xpY2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIHRhYmxlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIG51bWJlciBvZiByb3dzLlxuICAgICAqL1xuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvd3MubGVuZ3RoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSByb3dzIGluIHRoZSB0YWJsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSByb3dzLlxuICAgICAqL1xuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm93c1xuICAgICAgICAgICAgLm1hcCgocm93KSA9PiByb3cuZ2V0V2lkdGgoKSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKHgsIHkpID0+IE1hdGgubWF4KHgsIHkpLCAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIGhlYWRlciByb3cuXG4gICAgICogQXNzdW1lcyB0aGF0IGl0IGlzIGNhbGxlZCBvbiBhIHZhbGlkIHRhYmxlIHdpdGggYSBoZWFkZXIgcm93LlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIHdpZHRoIG9mIHRoZSBoZWFkZXIgcm93XG4gICAgICovXG4gICAgZ2V0SGVhZGVyV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3dzWzBdLmdldFdpZHRoKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHJvd3MgdGhhdCB0aGUgdGFibGUgY29udGFpbnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB0aGUgcm93cy5cbiAgICAgKi9cbiAgICBnZXRSb3dzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm93cy5zbGljZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBkZWxpbWl0ZXIgcm93IG9mIHRoZSB0YWJsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBkZWxpbWl0ZXIgcm93OyBgdW5kZWZpbmVkYCBpZiB0aGVyZSBpcyBub3QgZGVsaW1pdGVyIHJvdy5cbiAgICAgKi9cbiAgICBnZXREZWxpbWl0ZXJSb3coKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuX3Jvd3NbMV07XG4gICAgICAgIGlmIChyb3cgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm93LmlzRGVsaW1pdGVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyBhIGNlbGwgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByb3dJbmRleCAtIFJvdyBpbmRleCBvZiB0aGUgY2VsbC5cbiAgICAgKiBAcGFyYW0gY29sdW1uSW5kZXggLSBDb2x1bW4gaW5kZXggb2YgdGhlIGNlbGwuXG4gICAgICogQHJldHVybnMgVGhlIGNlbGwgYXQgdGhlIHNwZWNpZmllZCBpbmRleDsgYHVuZGVmaW5lZGAgaWYgbm90IGZvdW5kLlxuICAgICAqL1xuICAgIGdldENlbGxBdChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5fcm93c1tyb3dJbmRleF07XG4gICAgICAgIGlmIChyb3cgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93LmdldENlbGxBdChjb2x1bW5JbmRleCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNlbGwgYXQgdGhlIGZvY3VzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGZvY3VzIC0gRm9jdXMgb2JqZWN0LlxuICAgICAqIEByZXR1cm5zIFRoZSBjZWxsIGF0IHRoZSBmb2N1czsgYHVuZGVmaW5lZGAgaWYgbm90IGZvdW5kLlxuICAgICAqL1xuICAgIGdldEZvY3VzZWRDZWxsKGZvY3VzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENlbGxBdChmb2N1cy5yb3csIGZvY3VzLmNvbHVtbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHRoZSB0YWJsZSB0byBhbiBhcnJheSBvZiB0ZXh0IHJlcHJlc2VudGF0aW9ucyBvZiB0aGUgcm93cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHRleHQgcmVwcmVzZW50YXRpb25zIG9mIHRoZSByb3dzLlxuICAgICAqL1xuICAgIHRvTGluZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3dzLm1hcCgocm93KSA9PiByb3cudG9UZXh0KCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyBhIGZvY3VzIGZyb20gYSBwb2ludCBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcG9zIC0gQSBwb2ludCBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAgICogQHBhcmFtIHJvd09mZnNldCAtIFRoZSByb3cgaW5kZXggd2hlcmUgdGhlIHRhYmxlIHN0YXJ0cyBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAgICogQHJldHVybnMgQSBmb2N1cyBvYmplY3QgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgc3BlY2lmaWVkIHBvaW50O1xuICAgICAqIGB1bmRlZmluZWRgIGlmIHRoZSByb3cgaW5kZXggaXMgb3V0IG9mIGJvdW5kcy5cbiAgICAgKi9cbiAgICBmb2N1c09mUG9zaXRpb24ocG9zLCByb3dPZmZzZXQpIHtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBwb3Mucm93IC0gcm93T2Zmc2V0O1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLl9yb3dzW3Jvd0luZGV4XTtcbiAgICAgICAgaWYgKHJvdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3MuY29sdW1uIDwgcm93Lm1hcmdpbkxlZnQubGVuZ3RoICsgMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBmb2N1c18xLkZvY3VzKHJvd0luZGV4LCAtMSwgcG9zLmNvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2VsbFdpZHRocyA9IHJvdy5nZXRDZWxscygpLm1hcCgoY2VsbCkgPT4gY2VsbC5yYXdDb250ZW50Lmxlbmd0aCk7XG4gICAgICAgIGxldCBjb2x1bW5Qb3MgPSByb3cubWFyZ2luTGVmdC5sZW5ndGggKyAxOyAvLyBsZWZ0IG1hcmdpbiArIGEgcGlwZVxuICAgICAgICBsZXQgY29sdW1uSW5kZXggPSAwO1xuICAgICAgICBmb3IgKDsgY29sdW1uSW5kZXggPCBjZWxsV2lkdGhzLmxlbmd0aDsgY29sdW1uSW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGNvbHVtblBvcyArIGNlbGxXaWR0aHNbY29sdW1uSW5kZXhdICsgMSA+IHBvcy5jb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbHVtblBvcyArPSBjZWxsV2lkdGhzW2NvbHVtbkluZGV4XSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcG9zLmNvbHVtbiAtIGNvbHVtblBvcztcbiAgICAgICAgcmV0dXJuIG5ldyBmb2N1c18xLkZvY3VzKHJvd0luZGV4LCBjb2x1bW5JbmRleCwgb2Zmc2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgYSBwb3NpdGlvbiBpbiB0aGUgdGV4dCBlZGl0b3IgZnJvbSBhIGZvY3VzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGZvY3VzIC0gQSBmb2N1cyBvYmplY3QuXG4gICAgICogQHBhcmFtIHJvd09mZnNldCAtIFRoZSByb3cgaW5kZXggd2hlcmUgdGhlIHRhYmxlIHN0YXJ0cyBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAgICogQHJldHVybnMgQSBwb3NpdGlvbiBpbiB0aGUgdGV4dCBlZGl0b3IgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgZm9jdXM7XG4gICAgICogYHVuZGVmaW5lZGAgaWYgdGhlIGZvY3VzZWQgcm93ICBpcyBvdXQgb2YgdGhlIHRhYmxlLlxuICAgICAqL1xuICAgIHBvc2l0aW9uT2ZGb2N1cyhmb2N1cywgcm93T2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuX3Jvd3NbZm9jdXMucm93XTtcbiAgICAgICAgaWYgKHJvdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvd1BvcyA9IGZvY3VzLnJvdyArIHJvd09mZnNldDtcbiAgICAgICAgaWYgKGZvY3VzLmNvbHVtbiA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgcG9pbnRfMS5Qb2ludChyb3dQb3MsIGZvY3VzLm9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2VsbFdpZHRocyA9IHJvdy5nZXRDZWxscygpLm1hcCgoY2VsbCkgPT4gY2VsbC5yYXdDb250ZW50Lmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IG1heEluZGV4ID0gTWF0aC5taW4oZm9jdXMuY29sdW1uLCBjZWxsV2lkdGhzLmxlbmd0aCk7XG4gICAgICAgIGxldCBjb2x1bW5Qb3MgPSByb3cubWFyZ2luTGVmdC5sZW5ndGggKyAxO1xuICAgICAgICBmb3IgKGxldCBjb2x1bW5JbmRleCA9IDA7IGNvbHVtbkluZGV4IDwgbWF4SW5kZXg7IGNvbHVtbkluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbHVtblBvcyArPSBjZWxsV2lkdGhzW2NvbHVtbkluZGV4XSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBwb2ludF8xLlBvaW50KHJvd1BvcywgY29sdW1uUG9zICsgZm9jdXMub2Zmc2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgYSBzZWxlY3Rpb24gcmFuZ2UgZnJvbSBhIGZvY3VzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGZvY3VzIC0gQSBmb2N1cyBvYmplY3QuXG4gICAgICogQHBhcmFtIHJvd09mZnNldCAtIFRoZSByb3cgaW5kZXggd2hlcmUgdGhlIHRhYmxlIHN0YXJ0cyBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAgICogQHJldHVybnMgQSByYW5nZSB0byBiZSBzZWxlY3RlZCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBmb2N1cztcbiAgICAgKiBgdW5kZWZpbmVkYCBpZiB0aGUgZm9jdXMgZG9lcyBub3Qgc3BlY2lmeSBhbnkgY2VsbCBvciB0aGUgc3BlY2lmaWVkIGNlbGwgaXMgZW1wdHkuXG4gICAgICovXG4gICAgc2VsZWN0aW9uUmFuZ2VPZkZvY3VzKGZvY3VzLCByb3dPZmZzZXQpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5fcm93c1tmb2N1cy5yb3ddO1xuICAgICAgICBpZiAocm93ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5nZXRDZWxsQXQoZm9jdXMuY29sdW1uKTtcbiAgICAgICAgaWYgKGNlbGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2VsbC5jb250ZW50ID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3dQb3MgPSBmb2N1cy5yb3cgKyByb3dPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGNlbGxXaWR0aHMgPSByb3cuZ2V0Q2VsbHMoKS5tYXAoKGNlbGwpID0+IGNlbGwucmF3Q29udGVudC5sZW5ndGgpO1xuICAgICAgICBsZXQgY29sdW1uUG9zID0gcm93Lm1hcmdpbkxlZnQubGVuZ3RoICsgMTtcbiAgICAgICAgZm9yIChsZXQgY29sdW1uSW5kZXggPSAwOyBjb2x1bW5JbmRleCA8IGZvY3VzLmNvbHVtbjsgY29sdW1uSW5kZXgrKykge1xuICAgICAgICAgICAgY29sdW1uUG9zICs9IGNlbGxXaWR0aHNbY29sdW1uSW5kZXhdICsgMTtcbiAgICAgICAgfVxuICAgICAgICBjb2x1bW5Qb3MgKz0gY2VsbC5wYWRkaW5nTGVmdDtcbiAgICAgICAgcmV0dXJuIG5ldyByYW5nZV8xLlJhbmdlKG5ldyBwb2ludF8xLlBvaW50KHJvd1BvcywgY29sdW1uUG9zKSwgbmV3IHBvaW50XzEuUG9pbnQocm93UG9zLCBjb2x1bW5Qb3MgKyBjZWxsLmNvbnRlbnQubGVuZ3RoKSk7XG4gICAgfVxufVxuZXhwb3J0cy5UYWJsZSA9IFRhYmxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlYWRUYWJsZSA9IGV4cG9ydHMuX21hcmdpblJlZ2V4ID0gZXhwb3J0cy5tYXJnaW5SZWdleFNyYyA9IGV4cG9ydHMuX3JlYWRSb3cgPSBleHBvcnRzLl9zcGxpdENlbGxzID0gdm9pZCAwO1xuY29uc3QgdGFibGVfMSA9IHJlcXVpcmUoXCIuL3RhYmxlXCIpO1xuY29uc3QgdGFibGVfY2VsbF8xID0gcmVxdWlyZShcIi4vdGFibGUtY2VsbFwiKTtcbmNvbnN0IHRhYmxlX3Jvd18xID0gcmVxdWlyZShcIi4vdGFibGUtcm93XCIpO1xuLyoqXG4gKiBTcGxpdHMgYSB0ZXh0IGludG8gY2VsbHMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0cy5fc3BsaXRDZWxscyA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICBsZXQgYnVmID0gJyc7XG4gICAgbGV0IHJlc3QgPSB0ZXh0O1xuICAgIHdoaWxlIChyZXN0ICE9PSAnJykge1xuICAgICAgICBzd2l0Y2ggKHJlc3RbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2AnOlxuICAgICAgICAgICAgICAgIC8vIHJlYWQgY29kZSBzcGFuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydE1hdGNoID0gcmVzdC5tYXRjaCgvXmAqLyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydE1hdGNoID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIHN0YXRlbWVudCBlbnN1cmVzIGZpcnN0IGNoYXIgaXMgYSBgIGFuZCB3ZSBjYW5ub3QgZ2V0IGhlcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGp1c3Qgc2F0aXNmaWVzIHRoZSBjb21waWxlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnRNYXRjaFswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1ZjEgPSBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3QxID0gcmVzdC5zdWJzdHIoc3RhcnQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsb3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAocmVzdDEgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdDFbMF0gPT09ICdgJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZE1hdGNoID0gcmVzdDEubWF0Y2goL15gKi8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbmRNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIHN0YXRlbWVudCBlbnN1cmVzIGZpcnN0IGNoYXIgaXMgYSBgIGFuZCB3ZSBjYW5ub3QgZ2V0IGhlcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMganVzdCBzYXRpc2ZpZXMgdGhlIGNvbXBpbGVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gZW5kTWF0Y2hbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmMSArPSBlbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdDEgPSByZXN0MS5zdWJzdHIoZW5kLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZC5sZW5ndGggPT09IHN0YXJ0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWYxICs9IHJlc3QxWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3QxID0gcmVzdDEuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZiArPSBidWYxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdCA9IHJlc3QxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVmICs9ICdgJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3QgPSByZXN0LnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1xcXFwnOlxuICAgICAgICAgICAgICAgIC8vIGVzY2FwZSBuZXh0IGNoYXJhY3RlclxuICAgICAgICAgICAgICAgIGlmIChyZXN0Lmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZiArPSByZXN0LnN1YnN0cigwLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdCA9IHJlc3Quc3Vic3RyKDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmICs9ICdcXFxcJztcbiAgICAgICAgICAgICAgICAgICAgcmVzdCA9IHJlc3Quc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3wnOlxuICAgICAgICAgICAgICAgIC8vIGZsdXNoIGJ1ZmZlclxuICAgICAgICAgICAgICAgIGNlbGxzLnB1c2goYnVmKTtcbiAgICAgICAgICAgICAgICBidWYgPSAnJztcbiAgICAgICAgICAgICAgICByZXN0ID0gcmVzdC5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJ1ZiArPSByZXN0WzBdO1xuICAgICAgICAgICAgICAgIHJlc3QgPSByZXN0LnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjZWxscy5wdXNoKGJ1Zik7XG4gICAgcmV0dXJuIGNlbGxzO1xufTtcbi8qKlxuICogUmVhZHMgYSB0YWJsZSByb3cuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB0ZXh0IC0gQSB0ZXh0LlxuICogQHBhcmFtIFtsZWZ0TWFyZ2luUmVnZXg9L15cXHMqJC9dIC0gQSByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0IHRoYXQgbWF0Y2hlcyBsZWZ0IG1hcmdpbi5cbiAqL1xuZXhwb3J0cy5fcmVhZFJvdyA9ICh0ZXh0LCBsZWZ0TWFyZ2luUmVnZXggPSAvXlxccyokLykgPT4ge1xuICAgIGxldCBjZWxscyA9IGV4cG9ydHMuX3NwbGl0Q2VsbHModGV4dCk7XG4gICAgbGV0IG1hcmdpbkxlZnQ7XG4gICAgaWYgKGNlbGxzLmxlbmd0aCA+IDAgJiYgbGVmdE1hcmdpblJlZ2V4LnRlc3QoY2VsbHNbMF0pKSB7XG4gICAgICAgIG1hcmdpbkxlZnQgPSBjZWxsc1swXTtcbiAgICAgICAgY2VsbHMgPSBjZWxscy5zbGljZSgxKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1hcmdpbkxlZnQgPSAnJztcbiAgICB9XG4gICAgbGV0IG1hcmdpblJpZ2h0O1xuICAgIGlmIChjZWxscy5sZW5ndGggPiAxICYmIC9eXFxzKiQvLnRlc3QoY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIG1hcmdpblJpZ2h0ID0gY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGNlbGxzID0gY2VsbHMuc2xpY2UoMCwgY2VsbHMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtYXJnaW5SaWdodCA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHRhYmxlX3Jvd18xLlRhYmxlUm93KGNlbGxzLm1hcCgoY2VsbCkgPT4gbmV3IHRhYmxlX2NlbGxfMS5UYWJsZUNlbGwoY2VsbCkpLCBtYXJnaW5MZWZ0LCBtYXJnaW5SaWdodCk7XG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgcmVnZXggc291cmNlIHN0cmluZyBvZiBtYXJnaW4gY2hhcmFjdGVyIGNsYXNzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gY2hhcnMgLSBBIHNldCBvZiBhZGRpdGlvbmFsIG1hcmdpbiBjaGFyYWN0ZXJzLlxuICogQSBwaXBlIGB8YCwgYSBiYWNrc2xhc2ggYFxcYCwgYW5kIGEgYmFja3F1b3RlIHdpbGwgYmUgaWdub3JlZC5cbiAqIEByZXR1cm4gQSByZWdleCBzb3VyY2Ugc3RyaW5nLlxuICovXG5leHBvcnRzLm1hcmdpblJlZ2V4U3JjID0gKGNoYXJzKSA9PiB7XG4gICAgbGV0IGNzID0gJyc7XG4gICAgLy8gZm9yIChjb25zdCBjIGNoYXJzLnZhbHVlcygpKSB7XG4gICAgY2hhcnMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBpZiAoYyAhPT0gJ3wnICYmIGMgIT09ICdcXFxcJyAmJiBjICE9PSAnYCcpIHtcbiAgICAgICAgICAgIGNzICs9IGBcXFxcdXske2MuY29kZVBvaW50QXQoMCkudG9TdHJpbmcoMTYpfX1gO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGBbXFxcXHMke2NzfV0qYDtcbn07XG4vKipcbiAqIENyZWF0ZXMgYSByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0IHRoYXQgbWF0Y2hlcyBtYXJnaW4gb2YgdGFibGVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gY2hhcnMgLSBBIHNldCBvZiBhZGRpdGlvbmFsIG1hcmdpbiBjaGFyYWN0ZXJzLlxuICogQSBwaXBlIGB8YCwgYSBiYWNrc2xhc2ggYFxcYCwgYW5kIGEgYmFja3F1b3RlIHdpbGwgYmUgaWdub3JlZC5cbiAqIEByZXR1cm4gQW4gcmVndWxhciBleHByZXNzaW9uIG9iamVjdCB0aGF0IG1hdGNoZXMgbWFyZ2luIG9mIHRhYmxlcy5cbiAqL1xuZXhwb3J0cy5fbWFyZ2luUmVnZXggPSAoY2hhcnMpID0+IG5ldyBSZWdFeHAoYF4ke2V4cG9ydHMubWFyZ2luUmVnZXhTcmMoY2hhcnMpfSRgLCAndScpO1xuLyoqXG4gKiBSZWFkcyBhIHRhYmxlIGZyb20gbGluZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBsaW5lcyAtIEFuIGFycmF5IG9mIHRleHRzLCBlYWNoIHRleHQgcmVwcmVzZW50cyBhIHJvdy5cbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgb3B0aW9ucyBmb3IgcGFyc2luZy5cbiAqIEByZXR1cm5zIFRoZSB0YWJsZSByZWFkIGZyb20gdGhlIGxpbmVzLlxuICovXG5leHBvcnRzLnJlYWRUYWJsZSA9IChsaW5lcywgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGxlZnRNYXJnaW5SZWdleCA9IGV4cG9ydHMuX21hcmdpblJlZ2V4KG9wdGlvbnMubGVmdE1hcmdpbkNoYXJzKTtcbiAgICByZXR1cm4gbmV3IHRhYmxlXzEuVGFibGUobGluZXMubWFwKChsaW5lKSA9PiBleHBvcnRzLl9yZWFkUm93KGxpbmUsIGxlZnRNYXJnaW5SZWdleCkpKTtcbn07XG4iLCIvKlxuICogR2VuZXJhdGVkIGJ5IHNjcmlwdC4gRE8gTk9UIEVESVQhXG4gKlxuICogVGhpcyBwYXJ0IGlzIGRlcml2ZWQgZnJvbSBVbmljb2RlIERhdGEgRmlsZXMgYW5kIHByb3ZpZGVkIHVuZGVyIFVuaWNvZGUsIEluYy4gTGljZW5zZSBBZ3JlZW1lbnQuXG4gKi9cblxuLyogQkVHSU4gKi9cbmNvbnN0IGRlZnMgPSBbXG4gIHsgc3RhcnQ6IDAsIGVuZDogMzEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDMyLCBlbmQ6IDEyNiwgcHJvcDogXCJOYVwiIH0sXG4gIHsgc3RhcnQ6IDEyNywgZW5kOiAxNjAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDE2MSwgZW5kOiAxNjEsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDE2MiwgZW5kOiAxNjMsIHByb3A6IFwiTmFcIiB9LFxuICB7IHN0YXJ0OiAxNjQsIGVuZDogMTY0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxNjUsIGVuZDogMTY2LCBwcm9wOiBcIk5hXCIgfSxcbiAgeyBzdGFydDogMTY3LCBlbmQ6IDE2OCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTY5LCBlbmQ6IDE2OSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTcwLCBlbmQ6IDE3MCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTcxLCBlbmQ6IDE3MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTcyLCBlbmQ6IDE3MiwgcHJvcDogXCJOYVwiIH0sXG4gIHsgc3RhcnQ6IDE3MywgZW5kOiAxNzQsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDE3NSwgZW5kOiAxNzUsIHByb3A6IFwiTmFcIiB9LFxuICB7IHN0YXJ0OiAxNzYsIGVuZDogMTgwLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxODEsIGVuZDogMTgxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxODIsIGVuZDogMTg2LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxODcsIGVuZDogMTg3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxODgsIGVuZDogMTkxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxOTIsIGVuZDogMTk3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxOTgsIGVuZDogMTk4LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxOTksIGVuZDogMjA3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyMDgsIGVuZDogMjA4LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyMDksIGVuZDogMjE0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyMTUsIGVuZDogMjE2LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyMTcsIGVuZDogMjIxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyMjIsIGVuZDogMjI1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyMjYsIGVuZDogMjI5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyMzAsIGVuZDogMjMwLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyMzEsIGVuZDogMjMxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyMzIsIGVuZDogMjM0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyMzUsIGVuZDogMjM1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyMzYsIGVuZDogMjM3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyMzgsIGVuZDogMjM5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyNDAsIGVuZDogMjQwLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyNDEsIGVuZDogMjQxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyNDIsIGVuZDogMjQzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyNDQsIGVuZDogMjQ2LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyNDcsIGVuZDogMjUwLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyNTEsIGVuZDogMjUxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyNTIsIGVuZDogMjUyLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyNTMsIGVuZDogMjUzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyNTQsIGVuZDogMjU0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyNTUsIGVuZDogMjU2LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyNTcsIGVuZDogMjU3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyNTgsIGVuZDogMjcyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyNzMsIGVuZDogMjczLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyNzQsIGVuZDogMjc0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyNzUsIGVuZDogMjc1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyNzYsIGVuZDogMjgyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyODMsIGVuZDogMjgzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyODQsIGVuZDogMjkzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyOTQsIGVuZDogMjk1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAyOTYsIGVuZDogMjk4LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAyOTksIGVuZDogMjk5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAzMDAsIGVuZDogMzA0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAzMDUsIGVuZDogMzA3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAzMDgsIGVuZDogMzExLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAzMTIsIGVuZDogMzEyLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAzMTMsIGVuZDogMzE4LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAzMTksIGVuZDogMzIyLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAzMjMsIGVuZDogMzIzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAzMjQsIGVuZDogMzI0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAzMjUsIGVuZDogMzI3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAzMjgsIGVuZDogMzMxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAzMzIsIGVuZDogMzMyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAzMzMsIGVuZDogMzMzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAzMzQsIGVuZDogMzM3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAzMzgsIGVuZDogMzM5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAzNDAsIGVuZDogMzU3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAzNTgsIGVuZDogMzU5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAzNjAsIGVuZDogMzYyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAzNjMsIGVuZDogMzYzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAzNjQsIGVuZDogNDYxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA0NjIsIGVuZDogNDYyLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA0NjMsIGVuZDogNDYzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA0NjQsIGVuZDogNDY0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA0NjUsIGVuZDogNDY1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA0NjYsIGVuZDogNDY2LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA0NjcsIGVuZDogNDY3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA0NjgsIGVuZDogNDY4LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA0NjksIGVuZDogNDY5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA0NzAsIGVuZDogNDcwLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA0NzEsIGVuZDogNDcxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA0NzIsIGVuZDogNDcyLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA0NzMsIGVuZDogNDczLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA0NzQsIGVuZDogNDc0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA0NzUsIGVuZDogNDc1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA0NzYsIGVuZDogNDc2LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA0NzcsIGVuZDogNTkyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA1OTMsIGVuZDogNTkzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA1OTQsIGVuZDogNjA4LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA2MDksIGVuZDogNjA5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA2MTAsIGVuZDogNzA3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA3MDgsIGVuZDogNzA4LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA3MDksIGVuZDogNzEwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA3MTEsIGVuZDogNzExLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA3MTIsIGVuZDogNzEyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA3MTMsIGVuZDogNzE1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA3MTYsIGVuZDogNzE2LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA3MTcsIGVuZDogNzE3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA3MTgsIGVuZDogNzE5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA3MjAsIGVuZDogNzIwLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA3MjEsIGVuZDogNzI3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA3MjgsIGVuZDogNzMxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA3MzIsIGVuZDogNzMyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA3MzMsIGVuZDogNzMzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA3MzQsIGVuZDogNzM0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA3MzUsIGVuZDogNzM1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA3MzYsIGVuZDogNzY3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA3NjgsIGVuZDogODc5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4ODAsIGVuZDogOTEyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5MTMsIGVuZDogOTI5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5MzAsIGVuZDogOTMwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5MzEsIGVuZDogOTM3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5MzgsIGVuZDogOTQ0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NDUsIGVuZDogOTYxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NjIsIGVuZDogOTYyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NjMsIGVuZDogOTY5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NzAsIGVuZDogMTAyNCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTAyNSwgZW5kOiAxMDI1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxMDI2LCBlbmQ6IDEwMzksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEwNDAsIGVuZDogMTEwMywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTEwNCwgZW5kOiAxMTA0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMTA1LCBlbmQ6IDExMDUsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDExMDYsIGVuZDogNDM1MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNDM1MiwgZW5kOiA0NDQ3LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA0NDQ4LCBlbmQ6IDgyMDcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDgyMDgsIGVuZDogODIwOCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODIwOSwgZW5kOiA4MjEwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4MjExLCBlbmQ6IDgyMTQsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDgyMTUsIGVuZDogODIxNSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODIxNiwgZW5kOiA4MjE3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4MjE4LCBlbmQ6IDgyMTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDgyMjAsIGVuZDogODIyMSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODIyMiwgZW5kOiA4MjIzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4MjI0LCBlbmQ6IDgyMjYsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDgyMjcsIGVuZDogODIyNywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODIyOCwgZW5kOiA4MjMxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4MjMyLCBlbmQ6IDgyMzksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDgyNDAsIGVuZDogODI0MCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODI0MSwgZW5kOiA4MjQxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4MjQyLCBlbmQ6IDgyNDMsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDgyNDQsIGVuZDogODI0NCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODI0NSwgZW5kOiA4MjQ1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4MjQ2LCBlbmQ6IDgyNTAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDgyNTEsIGVuZDogODI1MSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODI1MiwgZW5kOiA4MjUzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4MjU0LCBlbmQ6IDgyNTQsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDgyNTUsIGVuZDogODMwNywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODMwOCwgZW5kOiA4MzA4LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4MzA5LCBlbmQ6IDgzMTgsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDgzMTksIGVuZDogODMxOSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODMyMCwgZW5kOiA4MzIwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4MzIxLCBlbmQ6IDgzMjQsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDgzMjUsIGVuZDogODM2MCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODM2MSwgZW5kOiA4MzYxLCBwcm9wOiBcIkhcIiB9LFxuICB7IHN0YXJ0OiA4MzYyLCBlbmQ6IDgzNjMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDgzNjQsIGVuZDogODM2NCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODM2NSwgZW5kOiA4NDUwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NDUxLCBlbmQ6IDg0NTEsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg0NTIsIGVuZDogODQ1MiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODQ1MywgZW5kOiA4NDUzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NDU0LCBlbmQ6IDg0NTYsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg0NTcsIGVuZDogODQ1NywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODQ1OCwgZW5kOiA4NDY2LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NDY3LCBlbmQ6IDg0NjcsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg0NjgsIGVuZDogODQ2OSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODQ3MCwgZW5kOiA4NDcwLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NDcxLCBlbmQ6IDg0ODAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg0ODEsIGVuZDogODQ4MiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODQ4MywgZW5kOiA4NDg1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NDg2LCBlbmQ6IDg0ODYsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg0ODcsIGVuZDogODQ5MCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODQ5MSwgZW5kOiA4NDkxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NDkyLCBlbmQ6IDg1MzAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg1MzEsIGVuZDogODUzMiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODUzMywgZW5kOiA4NTM4LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NTM5LCBlbmQ6IDg1NDIsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg1NDMsIGVuZDogODU0MywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODU0NCwgZW5kOiA4NTU1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NTU2LCBlbmQ6IDg1NTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg1NjAsIGVuZDogODU2OSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODU3MCwgZW5kOiA4NTg0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NTg1LCBlbmQ6IDg1ODUsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg1ODYsIGVuZDogODU5MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODU5MiwgZW5kOiA4NjAxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NjAyLCBlbmQ6IDg2MzEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg2MzIsIGVuZDogODYzMywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODYzNCwgZW5kOiA4NjU3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NjU4LCBlbmQ6IDg2NTgsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg2NTksIGVuZDogODY1OSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODY2MCwgZW5kOiA4NjYwLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NjYxLCBlbmQ6IDg2NzgsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg2NzksIGVuZDogODY3OSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODY4MCwgZW5kOiA4NzAzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NzA0LCBlbmQ6IDg3MDQsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg3MDUsIGVuZDogODcwNSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODcwNiwgZW5kOiA4NzA3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NzA4LCBlbmQ6IDg3MTAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg3MTEsIGVuZDogODcxMiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODcxMywgZW5kOiA4NzE0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NzE1LCBlbmQ6IDg3MTUsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg3MTYsIGVuZDogODcxOCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODcxOSwgZW5kOiA4NzE5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NzIwLCBlbmQ6IDg3MjAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg3MjEsIGVuZDogODcyMSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODcyMiwgZW5kOiA4NzI0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NzI1LCBlbmQ6IDg3MjUsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg3MjYsIGVuZDogODcyOSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODczMCwgZW5kOiA4NzMwLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NzMxLCBlbmQ6IDg3MzIsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg3MzMsIGVuZDogODczNiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODczNywgZW5kOiA4NzM4LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NzM5LCBlbmQ6IDg3MzksIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg3NDAsIGVuZDogODc0MCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODc0MSwgZW5kOiA4NzQxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NzQyLCBlbmQ6IDg3NDIsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg3NDMsIGVuZDogODc0OCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODc0OSwgZW5kOiA4NzQ5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NzUwLCBlbmQ6IDg3NTAsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg3NTEsIGVuZDogODc1NSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODc1NiwgZW5kOiA4NzU5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NzYwLCBlbmQ6IDg3NjMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg3NjQsIGVuZDogODc2NSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODc2NiwgZW5kOiA4Nzc1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4Nzc2LCBlbmQ6IDg3NzYsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg3NzcsIGVuZDogODc3OSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODc4MCwgZW5kOiA4NzgwLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NzgxLCBlbmQ6IDg3ODUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg3ODYsIGVuZDogODc4NiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODc4NywgZW5kOiA4Nzk5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4ODAwLCBlbmQ6IDg4MDEsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg4MDIsIGVuZDogODgwMywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODgwNCwgZW5kOiA4ODA3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4ODA4LCBlbmQ6IDg4MDksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg4MTAsIGVuZDogODgxMSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODgxMiwgZW5kOiA4ODEzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4ODE0LCBlbmQ6IDg4MTUsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg4MTYsIGVuZDogODgzMywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODgzNCwgZW5kOiA4ODM1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4ODM2LCBlbmQ6IDg4MzcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg4MzgsIGVuZDogODgzOSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODg0MCwgZW5kOiA4ODUyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4ODUzLCBlbmQ6IDg4NTMsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg4NTQsIGVuZDogODg1NiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODg1NywgZW5kOiA4ODU3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4ODU4LCBlbmQ6IDg4NjgsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg4NjksIGVuZDogODg2OSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODg3MCwgZW5kOiA4ODk0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4ODk1LCBlbmQ6IDg4OTUsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg4OTYsIGVuZDogODk3NywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODk3OCwgZW5kOiA4OTc4LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4OTc5LCBlbmQ6IDg5ODUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg5ODYsIGVuZDogODk4NywgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogODk4OCwgZW5kOiA5MDAwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5MDAxLCBlbmQ6IDkwMDIsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDkwMDMsIGVuZDogOTE5MiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTE5MywgZW5kOiA5MTk2LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5MTk3LCBlbmQ6IDkxOTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDkyMDAsIGVuZDogOTIwMCwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTIwMSwgZW5kOiA5MjAyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5MjAzLCBlbmQ6IDkyMDMsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDkyMDQsIGVuZDogOTMxMSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTMxMiwgZW5kOiA5NDQ5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NDUwLCBlbmQ6IDk0NTAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk0NTEsIGVuZDogOTU0NywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTU0OCwgZW5kOiA5NTUxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NTUyLCBlbmQ6IDk1ODcsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk1ODgsIGVuZDogOTU5OSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTYwMCwgZW5kOiA5NjE1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NjE2LCBlbmQ6IDk2MTcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk2MTgsIGVuZDogOTYyMSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTYyMiwgZW5kOiA5NjMxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NjMyLCBlbmQ6IDk2MzMsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk2MzQsIGVuZDogOTYzNCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTYzNSwgZW5kOiA5NjQxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NjQyLCBlbmQ6IDk2NDksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk2NTAsIGVuZDogOTY1MSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTY1MiwgZW5kOiA5NjUzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NjU0LCBlbmQ6IDk2NTUsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk2NTYsIGVuZDogOTY1OSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTY2MCwgZW5kOiA5NjYxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NjYyLCBlbmQ6IDk2NjMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk2NjQsIGVuZDogOTY2NSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTY2NiwgZW5kOiA5NjY5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NjcwLCBlbmQ6IDk2NzIsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk2NzMsIGVuZDogOTY3NCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTY3NSwgZW5kOiA5Njc1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5Njc2LCBlbmQ6IDk2NzcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk2NzgsIGVuZDogOTY4MSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTY4MiwgZW5kOiA5Njk3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5Njk4LCBlbmQ6IDk3MDEsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk3MDIsIGVuZDogOTcxMCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTcxMSwgZW5kOiA5NzExLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NzEyLCBlbmQ6IDk3MjQsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk3MjUsIGVuZDogOTcyNiwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTcyNywgZW5kOiA5NzMyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NzMzLCBlbmQ6IDk3MzQsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk3MzUsIGVuZDogOTczNiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTczNywgZW5kOiA5NzM3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NzM4LCBlbmQ6IDk3NDEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk3NDIsIGVuZDogOTc0MywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTc0NCwgZW5kOiA5NzQ3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NzQ4LCBlbmQ6IDk3NDksIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk3NTAsIGVuZDogOTc1NSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTc1NiwgZW5kOiA5NzU2LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NzU3LCBlbmQ6IDk3NTcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk3NTgsIGVuZDogOTc1OCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTc1OSwgZW5kOiA5NzkxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NzkyLCBlbmQ6IDk3OTIsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk3OTMsIGVuZDogOTc5MywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTc5NCwgZW5kOiA5Nzk0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5Nzk1LCBlbmQ6IDk3OTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk4MDAsIGVuZDogOTgxMSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTgxMiwgZW5kOiA5ODIzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5ODI0LCBlbmQ6IDk4MjUsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk4MjYsIGVuZDogOTgyNiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTgyNywgZW5kOiA5ODI5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5ODMwLCBlbmQ6IDk4MzAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk4MzEsIGVuZDogOTgzNCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTgzNSwgZW5kOiA5ODM1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5ODM2LCBlbmQ6IDk4MzcsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk4MzgsIGVuZDogOTgzOCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTgzOSwgZW5kOiA5ODM5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5ODQwLCBlbmQ6IDk4NTQsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk4NTUsIGVuZDogOTg1NSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTg1NiwgZW5kOiA5ODc0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5ODc1LCBlbmQ6IDk4NzUsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk4NzYsIGVuZDogOTg4NSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTg4NiwgZW5kOiA5ODg3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5ODg4LCBlbmQ6IDk4ODgsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk4ODksIGVuZDogOTg4OSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTg5MCwgZW5kOiA5ODk3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5ODk4LCBlbmQ6IDk4OTksIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk5MDAsIGVuZDogOTkxNiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTkxNywgZW5kOiA5OTE4LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5OTE5LCBlbmQ6IDk5MTksIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk5MjAsIGVuZDogOTkyMywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTkyNCwgZW5kOiA5OTI1LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5OTI2LCBlbmQ6IDk5MzMsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk5MzQsIGVuZDogOTkzNCwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTkzNSwgZW5kOiA5OTM5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5OTQwLCBlbmQ6IDk5NDAsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk5NDEsIGVuZDogOTk1MywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTk1NCwgZW5kOiA5OTU0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5OTU1LCBlbmQ6IDk5NTUsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk5NTYsIGVuZDogOTk1OSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTk2MCwgZW5kOiA5OTYxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5OTYyLCBlbmQ6IDk5NjIsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk5NjMsIGVuZDogOTk2OSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTk3MCwgZW5kOiA5OTcxLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5OTcyLCBlbmQ6IDk5NzIsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk5NzMsIGVuZDogOTk3MywgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTk3NCwgZW5kOiA5OTc3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5OTc4LCBlbmQ6IDk5NzgsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk5NzksIGVuZDogOTk4MCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTk4MSwgZW5kOiA5OTgxLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5OTgyLCBlbmQ6IDk5ODMsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk5ODQsIGVuZDogOTk4OCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTk4OSwgZW5kOiA5OTg5LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5OTkwLCBlbmQ6IDk5OTMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk5OTQsIGVuZDogOTk5NSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTk5NiwgZW5kOiAxMDAyMywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTAwMjQsIGVuZDogMTAwMjQsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEwMDI1LCBlbmQ6IDEwMDQ0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMDA0NSwgZW5kOiAxMDA0NSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTAwNDYsIGVuZDogMTAwNTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEwMDYwLCBlbmQ6IDEwMDYwLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMDA2MSwgZW5kOiAxMDA2MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTAwNjIsIGVuZDogMTAwNjIsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEwMDYzLCBlbmQ6IDEwMDY2LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMDA2NywgZW5kOiAxMDA2OSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTAwNzAsIGVuZDogMTAwNzAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEwMDcxLCBlbmQ6IDEwMDcxLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMDA3MiwgZW5kOiAxMDEwMSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTAxMDIsIGVuZDogMTAxMTEsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDEwMTEyLCBlbmQ6IDEwMTMyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMDEzMywgZW5kOiAxMDEzNSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTAxMzYsIGVuZDogMTAxNTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEwMTYwLCBlbmQ6IDEwMTYwLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMDE2MSwgZW5kOiAxMDE3NCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTAxNzUsIGVuZDogMTAxNzUsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEwMTc2LCBlbmQ6IDEwMjEzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMDIxNCwgZW5kOiAxMDIyMSwgcHJvcDogXCJOYVwiIH0sXG4gIHsgc3RhcnQ6IDEwMjIyLCBlbmQ6IDEwNjI4LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMDYyOSwgZW5kOiAxMDYzMCwgcHJvcDogXCJOYVwiIH0sXG4gIHsgc3RhcnQ6IDEwNjMxLCBlbmQ6IDExMDM0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMTAzNSwgZW5kOiAxMTAzNiwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTEwMzcsIGVuZDogMTEwODcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDExMDg4LCBlbmQ6IDExMDg4LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMTA4OSwgZW5kOiAxMTA5MiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTEwOTMsIGVuZDogMTEwOTMsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDExMDk0LCBlbmQ6IDExMDk3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxMTA5OCwgZW5kOiAxMTkwMywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTE5MDQsIGVuZDogMTE5MjksIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDExOTMwLCBlbmQ6IDExOTMwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMTkzMSwgZW5kOiAxMjAxOSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTIwMjAsIGVuZDogMTIwMzEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyMDMyLCBlbmQ6IDEyMjQ1LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjI0NiwgZW5kOiAxMjI3MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTIyNzIsIGVuZDogMTIyODMsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyMjg0LCBlbmQ6IDEyMjg3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjI4OCwgZW5kOiAxMjI4OCwgcHJvcDogXCJGXCIgfSxcbiAgeyBzdGFydDogMTIyODksIGVuZDogMTIzNTAsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyMzUxLCBlbmQ6IDEyMzUyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjM1MywgZW5kOiAxMjQzOCwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTI0MzksIGVuZDogMTI0NDAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNDQxLCBlbmQ6IDEyNTQzLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjU0NCwgZW5kOiAxMjU0OCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTI1NDksIGVuZDogMTI1OTEsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNTkyLCBlbmQ6IDEyNTkyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjU5MywgZW5kOiAxMjY4NiwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTI2ODcsIGVuZDogMTI2ODcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNjg4LCBlbmQ6IDEyNzMwLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjczMSwgZW5kOiAxMjczNSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTI3MzYsIGVuZDogMTI3NzEsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzcyLCBlbmQ6IDEyNzgzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc4NCwgZW5kOiAxMjgzMCwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTI4MzEsIGVuZDogMTI4MzEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODMyLCBlbmQ6IDEyODcxLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjg3MiwgZW5kOiAxMjg3OSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTI4ODAsIGVuZDogMTk5MDMsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDE5OTA0LCBlbmQ6IDE5OTY3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxOTk2OCwgZW5kOiA0MjEyNCwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogNDIxMjUsIGVuZDogNDIxMjcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDQyMTI4LCBlbmQ6IDQyMTgyLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA0MjE4MywgZW5kOiA0MzM1OSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNDMzNjAsIGVuZDogNDMzODgsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDQzMzg5LCBlbmQ6IDQ0MDMxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA0NDAzMiwgZW5kOiA1NTIwMywgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogNTUyMDQsIGVuZDogNTczNDMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDU3MzQ0LCBlbmQ6IDYzNzQzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA2Mzc0NCwgZW5kOiA2NDI1NSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogNjQyNTYsIGVuZDogNjUwMjMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDY1MDI0LCBlbmQ6IDY1MDM5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA2NTA0MCwgZW5kOiA2NTA0OSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogNjUwNTAsIGVuZDogNjUwNzEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDY1MDcyLCBlbmQ6IDY1MTA2LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA2NTEwNywgZW5kOiA2NTEwNywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNjUxMDgsIGVuZDogNjUxMjYsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDY1MTI3LCBlbmQ6IDY1MTI3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA2NTEyOCwgZW5kOiA2NTEzMSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogNjUxMzIsIGVuZDogNjUyODAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDY1MjgxLCBlbmQ6IDY1Mzc2LCBwcm9wOiBcIkZcIiB9LFxuICB7IHN0YXJ0OiA2NTM3NywgZW5kOiA2NTQ3MCwgcHJvcDogXCJIXCIgfSxcbiAgeyBzdGFydDogNjU0NzEsIGVuZDogNjU0NzMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDY1NDc0LCBlbmQ6IDY1NDc5LCBwcm9wOiBcIkhcIiB9LFxuICB7IHN0YXJ0OiA2NTQ4MCwgZW5kOiA2NTQ4MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNjU0ODIsIGVuZDogNjU0ODcsIHByb3A6IFwiSFwiIH0sXG4gIHsgc3RhcnQ6IDY1NDg4LCBlbmQ6IDY1NDg5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA2NTQ5MCwgZW5kOiA2NTQ5NSwgcHJvcDogXCJIXCIgfSxcbiAgeyBzdGFydDogNjU0OTYsIGVuZDogNjU0OTcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDY1NDk4LCBlbmQ6IDY1NTAwLCBwcm9wOiBcIkhcIiB9LFxuICB7IHN0YXJ0OiA2NTUwMSwgZW5kOiA2NTUwMywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNjU1MDQsIGVuZDogNjU1MTAsIHByb3A6IFwiRlwiIH0sXG4gIHsgc3RhcnQ6IDY1NTExLCBlbmQ6IDY1NTExLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA2NTUxMiwgZW5kOiA2NTUxOCwgcHJvcDogXCJIXCIgfSxcbiAgeyBzdGFydDogNjU1MTksIGVuZDogNjU1MzIsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDY1NTMzLCBlbmQ6IDY1NTMzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA2NTUzNCwgZW5kOiA5NDE3NSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTQxNzYsIGVuZDogOTQxNzksIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk0MTgwLCBlbmQ6IDk0MjA3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NDIwOCwgZW5kOiAxMDAzNDMsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEwMDM0NCwgZW5kOiAxMDAzNTEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEwMDM1MiwgZW5kOiAxMDExMDYsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEwMTEwNywgZW5kOiAxMTA1OTEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDExMDU5MiwgZW5kOiAxMTA4NzgsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDExMDg3OSwgZW5kOiAxMTA5MjcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDExMDkyOCwgZW5kOiAxMTA5MzAsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDExMDkzMSwgZW5kOiAxMTA5NDcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDExMDk0OCwgZW5kOiAxMTA5NTEsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDExMDk1MiwgZW5kOiAxMTA5NTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDExMDk2MCwgZW5kOiAxMTEzNTUsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDExMTM1NiwgZW5kOiAxMjY5NzksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNjk4MCwgZW5kOiAxMjY5ODAsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNjk4MSwgZW5kOiAxMjcxODIsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzE4MywgZW5kOiAxMjcxODMsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzE4NCwgZW5kOiAxMjcyMzEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzIzMiwgZW5kOiAxMjcyNDIsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDEyNzI0MywgZW5kOiAxMjcyNDcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzI0OCwgZW5kOiAxMjcyNzcsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDEyNzI3OCwgZW5kOiAxMjcyNzksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzI4MCwgZW5kOiAxMjczMzcsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDEyNzMzOCwgZW5kOiAxMjczNDMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzM0NCwgZW5kOiAxMjczNzMsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDEyNzM3NCwgZW5kOiAxMjczNzQsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzM3NSwgZW5kOiAxMjczNzYsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDEyNzM3NywgZW5kOiAxMjczODYsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzM4NywgZW5kOiAxMjc0MDQsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDEyNzQwNSwgZW5kOiAxMjc0ODcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzQ4OCwgZW5kOiAxMjc0OTAsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzQ5MSwgZW5kOiAxMjc1MDMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzUwNCwgZW5kOiAxMjc1NDcsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzU0OCwgZW5kOiAxMjc1NTEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzU1MiwgZW5kOiAxMjc1NjAsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzU2MSwgZW5kOiAxMjc1NjcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzU2OCwgZW5kOiAxMjc1NjksIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzU3MCwgZW5kOiAxMjc1ODMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzU4NCwgZW5kOiAxMjc1ODksIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzU5MCwgZW5kOiAxMjc3NDMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzc0NCwgZW5kOiAxMjc3NzYsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzc3NywgZW5kOiAxMjc3ODgsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzc4OSwgZW5kOiAxMjc3OTcsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzc5OCwgZW5kOiAxMjc3OTgsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzc5OSwgZW5kOiAxMjc4NjgsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzg2OSwgZW5kOiAxMjc4NjksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzg3MCwgZW5kOiAxMjc4OTEsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzg5MiwgZW5kOiAxMjc5MDMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzkwNCwgZW5kOiAxMjc5NDYsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzk0NywgZW5kOiAxMjc5NTAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzk1MSwgZW5kOiAxMjc5NTUsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzk1NiwgZW5kOiAxMjc5NjcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzk2OCwgZW5kOiAxMjc5ODQsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzk4NSwgZW5kOiAxMjc5ODcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzk4OCwgZW5kOiAxMjc5ODgsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNzk4OSwgZW5kOiAxMjc5OTEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzk5MiwgZW5kOiAxMjgwNjIsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODA2MywgZW5kOiAxMjgwNjMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODA2NCwgZW5kOiAxMjgwNjQsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODA2NSwgZW5kOiAxMjgwNjUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODA2NiwgZW5kOiAxMjgyNTIsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODI1MywgZW5kOiAxMjgyNTQsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODI1NSwgZW5kOiAxMjgzMTcsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODMxOCwgZW5kOiAxMjgzMzAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODMzMSwgZW5kOiAxMjgzMzQsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODMzNSwgZW5kOiAxMjgzMzUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODMzNiwgZW5kOiAxMjgzNTksIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODM2MCwgZW5kOiAxMjgzNzcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODM3OCwgZW5kOiAxMjgzNzgsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODM3OSwgZW5kOiAxMjg0MDQsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODQwNSwgZW5kOiAxMjg0MDYsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODQwNywgZW5kOiAxMjg0MTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODQyMCwgZW5kOiAxMjg0MjAsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODQyMSwgZW5kOiAxMjg1MDYsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODUwNywgZW5kOiAxMjg1OTEsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODU5MiwgZW5kOiAxMjg2MzksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODY0MCwgZW5kOiAxMjg3MDksIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODcxMCwgZW5kOiAxMjg3MTUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODcxNiwgZW5kOiAxMjg3MTYsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODcxNywgZW5kOiAxMjg3MTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODcyMCwgZW5kOiAxMjg3MjIsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODcyMywgZW5kOiAxMjg3MjQsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODcyNSwgZW5kOiAxMjg3MjUsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODcyNiwgZW5kOiAxMjg3NDYsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODc0NywgZW5kOiAxMjg3NDgsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODc0OSwgZW5kOiAxMjg3NTUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODc1NiwgZW5kOiAxMjg3NjIsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODc2MywgZW5kOiAxMjg5OTEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyODk5MiwgZW5kOiAxMjkwMDMsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyOTAwNCwgZW5kOiAxMjkyOTIsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyOTI5MywgZW5kOiAxMjkzOTMsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyOTM5NCwgZW5kOiAxMjkzOTQsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyOTM5NSwgZW5kOiAxMjkzOTgsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyOTM5OSwgZW5kOiAxMjk0MDEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyOTQwMiwgZW5kOiAxMjk0NDIsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyOTQ0MywgZW5kOiAxMjk0NDQsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyOTQ0NSwgZW5kOiAxMjk0NTAsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyOTQ1MSwgZW5kOiAxMjk0NTMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyOTQ1NCwgZW5kOiAxMjk0ODIsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyOTQ4MywgZW5kOiAxMjk0ODQsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyOTQ4NSwgZW5kOiAxMjk1MzUsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyOTUzNiwgZW5kOiAxMjk2NDcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyOTY0OCwgZW5kOiAxMjk2NTEsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyOTY1MiwgZW5kOiAxMjk2NTUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyOTY1NiwgZW5kOiAxMjk2NTgsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyOTY1OSwgZW5kOiAxMjk2NjMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyOTY2NCwgZW5kOiAxMjk2NjYsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyOTY2NywgZW5kOiAxMjk2NzksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyOTY4MCwgZW5kOiAxMjk2ODUsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyOTY4NiwgZW5kOiAxMzEwNzEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEzMTA3MiwgZW5kOiAxOTY2MDUsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDE5NjYwNiwgZW5kOiAxOTY2MDcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDE5NjYwOCwgZW5kOiAyNjIxNDEsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDI2MjE0MiwgZW5kOiA5MTc3NTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDkxNzc2MCwgZW5kOiA5MTc5OTksIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDkxODAwMCwgZW5kOiA5ODMwMzksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk4MzA0MCwgZW5kOiAxMDQ4NTczLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxMDQ4NTc0LCBlbmQ6IDEwNDg1NzUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEwNDg1NzYsIGVuZDogMTExNDEwOSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTExNDExMCwgZW5kOiAxMTE0MTExLCBwcm9wOiBcIk5cIiB9LFxuXTtcbi8qIEVORCAqL1xuXG5jb25zdCB2ZXJzaW9uID0gXCIxMi4xLjBcIjtcblxuLyoqXG4gKiBSZXR1cm5zIFRoZSBFQVcgcHJvcGVydHkgb2YgYSBjb2RlIHBvaW50LlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlUG9pbnQgQSBjb2RlIHBvaW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBFQVcgcHJvcGVydHkgb2YgdGhlIHNwZWNpZmllZCBjb2RlIHBvaW50XG4gKi9cbmZ1bmN0aW9uIF9nZXRFQVdPZkNvZGVQb2ludChjb2RlUG9pbnQpIHtcbiAgbGV0IG1pbiA9IDA7XG4gIGxldCBtYXggPSBkZWZzLmxlbmd0aCAtIDE7XG4gIHdoaWxlIChtaW4gIT09IG1heCkge1xuICAgIGNvbnN0IGkgICA9IG1pbiArICgobWF4IC0gbWluKSA+PiAxKTtcbiAgICBjb25zdCBkZWYgPSBkZWZzW2ldO1xuICAgIGlmIChjb2RlUG9pbnQgPCBkZWYuc3RhcnQpIHtcbiAgICAgIG1heCA9IGkgLSAxO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gZGVmLmVuZCkge1xuICAgICAgbWluID0gaSArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkZWYucHJvcDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlZnNbbWluXS5wcm9wO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIEVBVyBwcm9wZXJ0eSBvZiBhIGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgQSBzdHJpbmcgaW4gd2hpY2ggdGhlIGNoYXJhY3RlciBpcyBjb250YWluZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXQgPSAwXSBUaGUgcG9zaXRpb24gKGluIGNvZGUgdW5pdCkgb2YgdGhlIGNoYXJhY3RlciBpbiB0aGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBFQVcgcHJvcGVydHkgb2YgdGhlIHNwZWNpZmllZCBjaGFyYWN0ZXJcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRFQVcgfSBmcm9tIFwibWVhd1wiO1xuICpcbiAqIC8vIE5hcnJvd1xuICogYXNzZXJ0KGdldEVBVyhcIkFcIikgPT09IFwiTmFcIik7XG4gKiAvLyBXaWRlXG4gKiBhc3NlcnQoZ2V0RUFXKFwi44GCXCIpID09PSBcIldcIik7XG4gKiBhc3NlcnQoZ2V0RUFXKFwi5a6JXCIpID09PSBcIldcIik7XG4gKiBhc3NlcnQoZ2V0RUFXKFwi8J+No1wiKSA9PT0gXCJXXCIpO1xuICogLy8gRnVsbHdpZHRoXG4gKiBhc3NlcnQoZ2V0RUFXKFwi77yhXCIpID09PSBcIkZcIik7XG4gKiAvLyBIYWxmd2lkdGhcbiAqIGFzc2VydChnZXRFQVcoXCLvvbFcIikgPT09IFwiSFwiKTtcbiAqIC8vIEFtYmlndW91c1xuICogYXNzZXJ0KGdldEVBVyhcIuKIgFwiKSA9PT0gXCJBXCIpO1xuICogYXNzZXJ0KGdldEVBVyhcIuKGklwiKSA9PT0gXCJBXCIpO1xuICogYXNzZXJ0KGdldEVBVyhcIs6pXCIpID09PSBcIkFcIik7XG4gKiBhc3NlcnQoZ2V0RUFXKFwi0K9cIikgPT09IFwiQVwiKTtcbiAqIC8vIE5ldXRyYWxcbiAqIGFzc2VydChnZXRFQVcoXCLihLVcIikgPT09IFwiTlwiKTtcbiAqXG4gKiAvLyBhIHBvc2l0aW9uIChpbiBjb2RlIHVuaXQpIGNhbiBiZSBzcGVjaWZpZWRcbiAqIGFzc2VydChnZXRFQVcoXCLihLVB44GC77yh772x4oiAXCIsIDIpID09PSBcIldcIik7XG4gKi9cbmZ1bmN0aW9uIGdldEVBVyhzdHIsIGF0KSB7XG4gIGNvbnN0IGNvZGVQb2ludCA9IHN0ci5jb2RlUG9pbnRBdChhdCB8fCAwKTtcbiAgcmV0dXJuIGNvZGVQb2ludCA9PT0gdW5kZWZpbmVkXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IF9nZXRFQVdPZkNvZGVQb2ludChjb2RlUG9pbnQpO1xufVxuXG5jb25zdCBkZWZhdWx0V2lkdGhNYXAgPSB7XG4gIFwiTlwiIDogMSxcbiAgXCJOYVwiOiAxLFxuICBcIldcIiA6IDIsXG4gIFwiRlwiIDogMixcbiAgXCJIXCIgOiAxLFxuICBcIkFcIiA6IDEsXG59O1xuXG4vKipcbiAqIENvbXB1dGVzIHdpZHRoIG9mIGEgc3RyaW5nIGJhc2VkIG9uIHRoZSBFQVcgcHJvcGVydGllcyBvZiBpdHMgY2hhcmFjdGVycy5cbiAqIEJ5IGRlZmF1bHQgY2hhcmFjdGVycyB3aXRoIHByb3BlcnR5IFdpZGUgKFcpIG9yIEZ1bGx3aWR0aCAoRikgYXJlIHRyZWF0ZWQgYXMgd2lkZSAoPSAyKVxuICogYW5kIHRoZSBvdGhlcnMgYXJlIGFzIG5hcnJvdyAoPSAxKVxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBBIHN0cmluZyB0byBjb21wdXRlIHdpZHRoXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIG51bWJlcj4gfCB1bmRlZmluZWR9IFt3aWR0aE1hcCA9IHVuZGVmaW5lZF1cbiAqICAgQW4gb2JqZWN0IHdoaWNoIHJlcHJlc2VudHMgYSBtYXAgZnJvbSBhbiBFQVcgcHJvcGVydHkgdG8gYSBjaGFyYWN0ZXIgd2lkdGhcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGNvbXB1dGVkIHdpZHRoXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29tcHV0ZVdpZHRoIH0gZnJvbSBcIm1lYXdcIjtcbiAqXG4gKiBhc3NlcnQoY29tcHV0ZVdpZHRoKFwiQeOBgvCfjaPOqVwiKSA9PT0gNik7XG4gKiAvLyBjdXN0b20gd2lkdGhzIGNhbiBiZSBzcGVjaWZpZWQgYnkgYW4gb2JqZWN0XG4gKiBhc3NlcnQoY29tcHV0ZVdpZHRoKFwiQeOBgvCfjaPOqVwiLCB7IFwiQVwiOiAyIH0pID09PSA3KTtcbiAqL1xuZnVuY3Rpb24gY29tcHV0ZVdpZHRoKHN0ciwgd2lkdGhNYXApIHtcbiAgY29uc3QgbWFwID0gd2lkdGhNYXBcbiAgICA/IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRXaWR0aE1hcCwgd2lkdGhNYXApXG4gICAgOiBkZWZhdWx0V2lkdGhNYXA7XG4gIGxldCB3aWR0aCA9IDA7XG4gIGZvciAoY29uc3QgY2hhciBvZiBzdHIpIHtcbiAgICB3aWR0aCArPSBtYXBbZ2V0RUFXKGNoYXIpXTtcbiAgfVxuICByZXR1cm4gd2lkdGg7XG59XG5cbmV4cG9ydCB7IGNvbXB1dGVXaWR0aCwgdmVyc2lvbiBhcyBlYXdWZXJzaW9uLCBnZXRFQVcgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lYXcuZXMuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubW92ZUNvbHVtbiA9IGV4cG9ydHMuZGVsZXRlQ29sdW1uID0gZXhwb3J0cy5pbnNlcnRDb2x1bW4gPSBleHBvcnRzLm1vdmVSb3cgPSBleHBvcnRzLmRlbGV0ZVJvdyA9IGV4cG9ydHMuaW5zZXJ0Um93ID0gZXhwb3J0cy5hbHRlckFsaWdubWVudCA9IGV4cG9ydHMuZm9ybWF0VGFibGUgPSBleHBvcnRzLkZvcm1hdFR5cGUgPSBleHBvcnRzLl93ZWFrRm9ybWF0VGFibGUgPSBleHBvcnRzLl9mb3JtYXRUYWJsZSA9IGV4cG9ydHMuX3BhZFRleHQgPSBleHBvcnRzLl9hbGlnblRleHQgPSBleHBvcnRzLl9jb21wdXRlVGV4dFdpZHRoID0gZXhwb3J0cy5jb21wbGV0ZVRhYmxlID0gZXhwb3J0cy5fZXh0ZW5kQXJyYXkgPSBleHBvcnRzLl9kZWxpbWl0ZXJUZXh0ID0gdm9pZCAwO1xuY29uc3QgYWxpZ25tZW50XzEgPSByZXF1aXJlKFwiLi9hbGlnbm1lbnRcIik7XG5jb25zdCB0YWJsZV8xID0gcmVxdWlyZShcIi4vdGFibGVcIik7XG5jb25zdCB0YWJsZV9jZWxsXzEgPSByZXF1aXJlKFwiLi90YWJsZS1jZWxsXCIpO1xuY29uc3QgdGFibGVfcm93XzEgPSByZXF1aXJlKFwiLi90YWJsZS1yb3dcIik7XG5jb25zdCBtZWF3XzEgPSByZXF1aXJlKFwibWVhd1wiKTtcbi8qKlxuICogQ3JlYXRlcyBhIGRlbGltaXRlciB0ZXh0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gd2lkdGggLSBXaWR0aCBvZiB0aGUgaG9yaXpvbnRhbCBiYXIgb2YgZGVsaW1pdGVyLlxuICogQHRocm93cyB7RXJyb3J9IFVua25vd24gYWxpZ25tZW50LlxuICovXG5leHBvcnRzLl9kZWxpbWl0ZXJUZXh0ID0gKGFsaWdubWVudCwgd2lkdGgpID0+IHtcbiAgICBjb25zdCBiYXIgPSAnLScucmVwZWF0KHdpZHRoKTtcbiAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICBjYXNlIGFsaWdubWVudF8xLkFsaWdubWVudC5OT05FOlxuICAgICAgICAgICAgcmV0dXJuIGAgJHtiYXJ9IGA7XG4gICAgICAgIGNhc2UgYWxpZ25tZW50XzEuQWxpZ25tZW50LkxFRlQ6XG4gICAgICAgICAgICByZXR1cm4gYDoke2Jhcn0gYDtcbiAgICAgICAgY2FzZSBhbGlnbm1lbnRfMS5BbGlnbm1lbnQuUklHSFQ6XG4gICAgICAgICAgICByZXR1cm4gYCAke2Jhcn06YDtcbiAgICAgICAgY2FzZSBhbGlnbm1lbnRfMS5BbGlnbm1lbnQuQ0VOVEVSOlxuICAgICAgICAgICAgcmV0dXJuIGA6JHtiYXJ9OmA7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gYWxpZ25tZW50OiAnICsgYWxpZ25tZW50KTtcbiAgICB9XG59O1xuLyoqXG4gKiBFeHRlbmRzIGFycmF5IHNpemUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGZpbGwgbmV3bHkgY3JlYXRlZCBjZWxscy5cbiAqIEByZXR1cm5zIEV4dGVuZGVkIGFycmF5LlxuICovXG5leHBvcnRzLl9leHRlbmRBcnJheSA9IChhcnIsIHNpemUsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3QgZXh0ZW5kZWQgPSBhcnIuc2xpY2UoKTtcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBleHRlbmRlZC5wdXNoKGNhbGxiYWNrKGksIGFycikpO1xuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kZWQ7XG59O1xuLyoqXG4gKiBDb21wbGV0ZXMgYSB0YWJsZSBieSBhZGRpbmcgbWlzc2luZyBkZWxpbWl0ZXIgYW5kIGNlbGxzLlxuICogQWZ0ZXIgY29tcGxldGlvbiwgYWxsIHJvd3MgaW4gdGhlIHRhYmxlIGhhdmUgdGhlIHNhbWUgd2lkdGguXG4gKlxuICogQHByaXZhdGVcbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn0gRW1wdHkgdGFibGUuXG4gKi9cbmV4cG9ydHMuY29tcGxldGVUYWJsZSA9ICh0YWJsZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHRhYmxlSGVpZ2h0ID0gdGFibGUuZ2V0SGVpZ2h0KCk7XG4gICAgY29uc3QgdGFibGVXaWR0aCA9IHRhYmxlLmdldFdpZHRoKCk7XG4gICAgaWYgKHRhYmxlSGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRW1wdHkgdGFibGUnKTtcbiAgICB9XG4gICAgY29uc3Qgcm93cyA9IHRhYmxlLmdldFJvd3MoKTtcbiAgICBjb25zdCBuZXdSb3dzID0gW107XG4gICAgLy8gaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyUm93ID0gcm93c1swXTtcbiAgICBjb25zdCBoZWFkZXJDZWxscyA9IGhlYWRlclJvdy5nZXRDZWxscygpO1xuICAgIG5ld1Jvd3MucHVzaChuZXcgdGFibGVfcm93XzEuVGFibGVSb3coZXhwb3J0cy5fZXh0ZW5kQXJyYXkoaGVhZGVyQ2VsbHMsIHRhYmxlV2lkdGgsIChqKSA9PiBuZXcgdGFibGVfY2VsbF8xLlRhYmxlQ2VsbChqID09PSBoZWFkZXJDZWxscy5sZW5ndGggPyBoZWFkZXJSb3cubWFyZ2luUmlnaHQgOiAnJykpLCBoZWFkZXJSb3cubWFyZ2luTGVmdCwgaGVhZGVyQ2VsbHMubGVuZ3RoIDwgdGFibGVXaWR0aCA/ICcnIDogaGVhZGVyUm93Lm1hcmdpblJpZ2h0KSk7XG4gICAgLy8gZGVsaW1pdGVyXG4gICAgY29uc3QgZGVsaW1pdGVyUm93ID0gdGFibGUuZ2V0RGVsaW1pdGVyUm93KCk7XG4gICAgaWYgKGRlbGltaXRlclJvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGRlbGltaXRlckNlbGxzID0gZGVsaW1pdGVyUm93LmdldENlbGxzKCk7XG4gICAgICAgIG5ld1Jvd3MucHVzaChuZXcgdGFibGVfcm93XzEuVGFibGVSb3coZXhwb3J0cy5fZXh0ZW5kQXJyYXkoZGVsaW1pdGVyQ2VsbHMsIHRhYmxlV2lkdGgsIChqKSA9PiBuZXcgdGFibGVfY2VsbF8xLlRhYmxlQ2VsbChleHBvcnRzLl9kZWxpbWl0ZXJUZXh0KGFsaWdubWVudF8xLkFsaWdubWVudC5OT05FLCBqID09PSBkZWxpbWl0ZXJDZWxscy5sZW5ndGhcbiAgICAgICAgICAgID8gTWF0aC5tYXgob3B0aW9ucy5taW5EZWxpbWl0ZXJXaWR0aCwgZGVsaW1pdGVyUm93Lm1hcmdpblJpZ2h0Lmxlbmd0aCAtIDIpXG4gICAgICAgICAgICA6IG9wdGlvbnMubWluRGVsaW1pdGVyV2lkdGgpKSksIGRlbGltaXRlclJvdy5tYXJnaW5MZWZ0LCBkZWxpbWl0ZXJDZWxscy5sZW5ndGggPCB0YWJsZVdpZHRoID8gJycgOiBkZWxpbWl0ZXJSb3cubWFyZ2luUmlnaHQpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5ld1Jvd3MucHVzaChuZXcgdGFibGVfcm93XzEuVGFibGVSb3coZXhwb3J0cy5fZXh0ZW5kQXJyYXkoW10sIHRhYmxlV2lkdGgsICgpID0+IG5ldyB0YWJsZV9jZWxsXzEuVGFibGVDZWxsKGV4cG9ydHMuX2RlbGltaXRlclRleHQoYWxpZ25tZW50XzEuQWxpZ25tZW50Lk5PTkUsIG9wdGlvbnMubWluRGVsaW1pdGVyV2lkdGgpKSksICcnLCAnJykpO1xuICAgIH1cbiAgICAvLyBib2R5XG4gICAgZm9yIChsZXQgaSA9IGRlbGltaXRlclJvdyAhPT0gdW5kZWZpbmVkID8gMiA6IDE7IGkgPCB0YWJsZUhlaWdodDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICAgIGNvbnN0IGNlbGxzID0gcm93LmdldENlbGxzKCk7XG4gICAgICAgIG5ld1Jvd3MucHVzaChuZXcgdGFibGVfcm93XzEuVGFibGVSb3coZXhwb3J0cy5fZXh0ZW5kQXJyYXkoY2VsbHMsIHRhYmxlV2lkdGgsIChqKSA9PiBuZXcgdGFibGVfY2VsbF8xLlRhYmxlQ2VsbChqID09PSBjZWxscy5sZW5ndGggPyByb3cubWFyZ2luUmlnaHQgOiAnJykpLCByb3cubWFyZ2luTGVmdCwgY2VsbHMubGVuZ3RoIDwgdGFibGVXaWR0aCA/ICcnIDogcm93Lm1hcmdpblJpZ2h0KSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHRhYmxlOiBuZXcgdGFibGVfMS5UYWJsZShuZXdSb3dzKSxcbiAgICAgICAgZGVsaW1pdGVySW5zZXJ0ZWQ6IGRlbGltaXRlclJvdyA9PT0gdW5kZWZpbmVkLFxuICAgIH07XG59O1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSB3aWR0aCBvZiBhIHRleHQgYmFzZWQgb24gY2hhcmFjdGVycycgRUFXIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqXG4gKiBAcmV0dXJucyBDYWxjdWxhdGVkIHdpZHRoIG9mIHRoZSB0ZXh0LlxuICovXG5leHBvcnRzLl9jb21wdXRlVGV4dFdpZHRoID0gKHRleHQsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gb3B0aW9ucy5ub3JtYWxpemUgPyB0ZXh0Lm5vcm1hbGl6ZSgnTkZDJykgOiB0ZXh0O1xuICAgIGxldCB3ID0gMDtcbiAgICBmb3IgKGNvbnN0IGNoYXIgb2Ygbm9ybWFsaXplZCkge1xuICAgICAgICBpZiAob3B0aW9ucy53aWRlQ2hhcnMuaGFzKGNoYXIpKSB7XG4gICAgICAgICAgICB3ICs9IDI7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5uYXJyb3dDaGFycy5oYXMoY2hhcikpIHtcbiAgICAgICAgICAgIHcgKz0gMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAobWVhd18xLmdldEVBVyhjaGFyKSkge1xuICAgICAgICAgICAgY2FzZSAnRic6XG4gICAgICAgICAgICBjYXNlICdXJzpcbiAgICAgICAgICAgICAgICB3ICs9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgICAgICB3ICs9IG9wdGlvbnMuYW1iaWd1b3VzQXNXaWRlID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHcgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdztcbn07XG4vKipcbiAqIFJldHVybnMgYSBhbGlnbmVkIGNlbGwgY29udGVudC5cbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn0gVW5rbm93biBhbGlnbm1lbnQuXG4gKiBAdGhyb3dzIHtFcnJvcn0gVW5leHBlY3RlZCBkZWZhdWx0IGFsaWdubWVudC5cbiAqL1xuZXhwb3J0cy5fYWxpZ25UZXh0ID0gKHRleHQsIHdpZHRoLCBhbGlnbm1lbnQsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBzcGFjZSA9IHdpZHRoIC0gZXhwb3J0cy5fY29tcHV0ZVRleHRXaWR0aCh0ZXh0LCBvcHRpb25zKTtcbiAgICBpZiAoc3BhY2UgPCAwKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICBjYXNlIGFsaWdubWVudF8xLkFsaWdubWVudC5OT05FOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGRlZmF1bHQgYWxpZ25tZW50Jyk7XG4gICAgICAgIGNhc2UgYWxpZ25tZW50XzEuQWxpZ25tZW50LkxFRlQ6XG4gICAgICAgICAgICByZXR1cm4gdGV4dCArICcgJy5yZXBlYXQoc3BhY2UpO1xuICAgICAgICBjYXNlIGFsaWdubWVudF8xLkFsaWdubWVudC5SSUdIVDpcbiAgICAgICAgICAgIHJldHVybiAnICcucmVwZWF0KHNwYWNlKSArIHRleHQ7XG4gICAgICAgIGNhc2UgYWxpZ25tZW50XzEuQWxpZ25tZW50LkNFTlRFUjpcbiAgICAgICAgICAgIHJldHVybiAoJyAnLnJlcGVhdChNYXRoLmZsb29yKHNwYWNlIC8gMikpICtcbiAgICAgICAgICAgICAgICB0ZXh0ICtcbiAgICAgICAgICAgICAgICAnICcucmVwZWF0KE1hdGguY2VpbChzcGFjZSAvIDIpKSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gYWxpZ25tZW50OiAnICsgYWxpZ25tZW50KTtcbiAgICB9XG59O1xuLyoqXG4gKiBKdXN0IGFkZHMgb25lIHNwYWNlIHBhZGRpbmdzIHRvIGJvdGggc2lkZXMgb2YgYSB0ZXh0LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydHMuX3BhZFRleHQgPSAodGV4dCkgPT4gYCAke3RleHR9IGA7XG4vKipcbiAqIEZvcm1hdHMgYSB0YWJsZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnRzLl9mb3JtYXRUYWJsZSA9ICh0YWJsZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHRhYmxlSGVpZ2h0ID0gdGFibGUuZ2V0SGVpZ2h0KCk7XG4gICAgY29uc3QgdGFibGVXaWR0aCA9IHRhYmxlLmdldFdpZHRoKCk7XG4gICAgaWYgKHRhYmxlSGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWJsZSxcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBtYXJnaW5MZWZ0ID0gdGFibGUuZ2V0Um93cygpWzBdLm1hcmdpbkxlZnQ7XG4gICAgaWYgKHRhYmxlV2lkdGggPT09IDApIHtcbiAgICAgICAgY29uc3Qgcm93cyA9IG5ldyBBcnJheSh0YWJsZUhlaWdodCkuZmlsbChuZXcgdGFibGVfcm93XzEuVGFibGVSb3coW10sIG1hcmdpbkxlZnQsICcnKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWJsZTogbmV3IHRhYmxlXzEuVGFibGUocm93cyksXG4gICAgICAgICAgICBtYXJnaW5MZWZ0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBjb21wdXRlIGNvbHVtbiB3aWR0aHNcbiAgICBjb25zdCBkZWxpbWl0ZXJSb3cgPSB0YWJsZS5nZXREZWxpbWl0ZXJSb3coKTtcbiAgICBjb25zdCBjb2x1bW5XaWR0aHMgPSBuZXcgQXJyYXkodGFibGVXaWR0aCkuZmlsbCgwKTtcbiAgICBpZiAoZGVsaW1pdGVyUm93ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZGVsaW1pdGVyUm93V2lkdGggPSBkZWxpbWl0ZXJSb3cuZ2V0V2lkdGgoKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkZWxpbWl0ZXJSb3dXaWR0aDsgaisrKSB7XG4gICAgICAgICAgICBjb2x1bW5XaWR0aHNbal0gPSBvcHRpb25zLm1pbkRlbGltaXRlcldpZHRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGVIZWlnaHQ7IGkrKykge1xuICAgICAgICBpZiAoZGVsaW1pdGVyUm93ICE9PSB1bmRlZmluZWQgJiYgaSA9PT0gMSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm93ID0gdGFibGUuZ2V0Um93cygpW2ldO1xuICAgICAgICBjb25zdCByb3dXaWR0aCA9IHJvdy5nZXRXaWR0aCgpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd1dpZHRoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbHVtbldpZHRoc1tqXSA9IE1hdGgubWF4KGNvbHVtbldpZHRoc1tqXSwgZXhwb3J0cy5fY29tcHV0ZVRleHRXaWR0aChyb3cuZ2V0Q2VsbEF0KGopLmNvbnRlbnQsIG9wdGlvbnMudGV4dFdpZHRoT3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGdldCBjb2x1bW4gYWxpZ25tZW50c1xuICAgIGNvbnN0IGFsaWdubWVudHMgPSBkZWxpbWl0ZXJSb3cgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGV4cG9ydHMuX2V4dGVuZEFycmF5KGRlbGltaXRlclJvdy5nZXRDZWxscygpLm1hcCgoY2VsbCkgPT4gY2VsbC5nZXRBbGlnbm1lbnQoKSksIHRhYmxlV2lkdGgsIFxuICAgICAgICAvLyBTYWZlIGNvbnZlcnNpb24gYmVjYXVzZSBEZWZhdWx0QWxpZ25tZW50IGlzIGEgc3Vic2V0IG9mIEFsaWdubWVudFxuICAgICAgICAoKSA9PiBvcHRpb25zLmRlZmF1bHRBbGlnbm1lbnQpXG4gICAgICAgIDogbmV3IEFycmF5KHRhYmxlV2lkdGgpLmZpbGwob3B0aW9ucy5kZWZhdWx0QWxpZ25tZW50KTtcbiAgICAvLyBmb3JtYXRcbiAgICBjb25zdCByb3dzID0gW107XG4gICAgLy8gaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyUm93ID0gdGFibGUuZ2V0Um93cygpWzBdO1xuICAgIHJvd3MucHVzaChuZXcgdGFibGVfcm93XzEuVGFibGVSb3coaGVhZGVyUm93XG4gICAgICAgIC5nZXRDZWxscygpXG4gICAgICAgIC5tYXAoKGNlbGwsIGopID0+IG5ldyB0YWJsZV9jZWxsXzEuVGFibGVDZWxsKGV4cG9ydHMuX3BhZFRleHQoZXhwb3J0cy5fYWxpZ25UZXh0KGNlbGwuY29udGVudCwgY29sdW1uV2lkdGhzW2pdLCBvcHRpb25zLmhlYWRlckFsaWdubWVudCA9PT0gYWxpZ25tZW50XzEuSGVhZGVyQWxpZ25tZW50LkZPTExPV1xuICAgICAgICA/IGFsaWdubWVudHNbal0gPT09IGFsaWdubWVudF8xLkFsaWdubWVudC5OT05FXG4gICAgICAgICAgICA/IG9wdGlvbnMuZGVmYXVsdEFsaWdubWVudFxuICAgICAgICAgICAgOiBhbGlnbm1lbnRzW2pdXG4gICAgICAgIDogb3B0aW9ucy5oZWFkZXJBbGlnbm1lbnQsIG9wdGlvbnMudGV4dFdpZHRoT3B0aW9ucykpKSksIG1hcmdpbkxlZnQsICcnKSk7XG4gICAgLy8gZGVsaW1pdGVyXG4gICAgaWYgKGRlbGltaXRlclJvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJvd3MucHVzaChuZXcgdGFibGVfcm93XzEuVGFibGVSb3coZGVsaW1pdGVyUm93XG4gICAgICAgICAgICAuZ2V0Q2VsbHMoKVxuICAgICAgICAgICAgLm1hcCgoY2VsbCwgaikgPT4gbmV3IHRhYmxlX2NlbGxfMS5UYWJsZUNlbGwoZXhwb3J0cy5fZGVsaW1pdGVyVGV4dChhbGlnbm1lbnRzW2pdLCBjb2x1bW5XaWR0aHNbal0pKSksIG1hcmdpbkxlZnQsICcnKSk7XG4gICAgfVxuICAgIC8vIGJvZHlcbiAgICBmb3IgKGxldCBpID0gZGVsaW1pdGVyUm93ICE9PSB1bmRlZmluZWQgPyAyIDogMTsgaSA8IHRhYmxlSGVpZ2h0OyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGFibGUuZ2V0Um93cygpW2ldO1xuICAgICAgICByb3dzLnB1c2gobmV3IHRhYmxlX3Jvd18xLlRhYmxlUm93KHJvd1xuICAgICAgICAgICAgLmdldENlbGxzKClcbiAgICAgICAgICAgIC5tYXAoKGNlbGwsIGopID0+IG5ldyB0YWJsZV9jZWxsXzEuVGFibGVDZWxsKGV4cG9ydHMuX3BhZFRleHQoZXhwb3J0cy5fYWxpZ25UZXh0KGNlbGwuY29udGVudCwgY29sdW1uV2lkdGhzW2pdLCBhbGlnbm1lbnRzW2pdID09PSBhbGlnbm1lbnRfMS5BbGlnbm1lbnQuTk9ORVxuICAgICAgICAgICAgPyBvcHRpb25zLmRlZmF1bHRBbGlnbm1lbnRcbiAgICAgICAgICAgIDogYWxpZ25tZW50c1tqXSwgb3B0aW9ucy50ZXh0V2lkdGhPcHRpb25zKSkpKSwgbWFyZ2luTGVmdCwgJycpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFibGU6IG5ldyB0YWJsZV8xLlRhYmxlKHJvd3MpLFxuICAgICAgICBtYXJnaW5MZWZ0LFxuICAgIH07XG59O1xuLyoqXG4gKiBGb3JtYXRzIGEgdGFibGUgd2Vha2x5LlxuICogUm93cyBhcmUgZm9ybWF0dGVkIGluZGVwZW5kZW50bHkgdG8gZWFjaCBvdGhlciwgY2VsbCBjb250ZW50cyBhcmUganVzdCB0cmltbWVkIGFuZCBub3QgYWxpZ25lZC5cbiAqIFRoaXMgaXMgdXNlZnVsIHdoZW4gdXNpbmcgYSBub24tbW9ub3NwYWNlZCBmb250IG9yIGRlYWxpbmcgd2l0aCB3aWRlIHRhYmxlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnRzLl93ZWFrRm9ybWF0VGFibGUgPSAodGFibGUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCB0YWJsZUhlaWdodCA9IHRhYmxlLmdldEhlaWdodCgpO1xuICAgIGNvbnN0IHRhYmxlV2lkdGggPSB0YWJsZS5nZXRXaWR0aCgpO1xuICAgIGlmICh0YWJsZUhlaWdodCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFibGUsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgbWFyZ2luTGVmdCA9IHRhYmxlLmdldFJvd3MoKVswXS5tYXJnaW5MZWZ0O1xuICAgIGlmICh0YWJsZVdpZHRoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBuZXcgQXJyYXkodGFibGVIZWlnaHQpLmZpbGwobmV3IHRhYmxlX3Jvd18xLlRhYmxlUm93KFtdLCBtYXJnaW5MZWZ0LCAnJykpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFibGU6IG5ldyB0YWJsZV8xLlRhYmxlKHJvd3MpLFxuICAgICAgICAgICAgbWFyZ2luTGVmdCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZGVsaW1pdGVyUm93ID0gdGFibGUuZ2V0RGVsaW1pdGVyUm93KCk7XG4gICAgLy8gZm9ybWF0XG4gICAgY29uc3Qgcm93cyA9IFtdO1xuICAgIC8vIGhlYWRlclxuICAgIGNvbnN0IGhlYWRlclJvdyA9IHRhYmxlLmdldFJvd3MoKVswXTtcbiAgICByb3dzLnB1c2gobmV3IHRhYmxlX3Jvd18xLlRhYmxlUm93KGhlYWRlclJvdy5nZXRDZWxscygpLm1hcCgoY2VsbCkgPT4gbmV3IHRhYmxlX2NlbGxfMS5UYWJsZUNlbGwoZXhwb3J0cy5fcGFkVGV4dChjZWxsLmNvbnRlbnQpKSksIG1hcmdpbkxlZnQsICcnKSk7XG4gICAgLy8gZGVsaW1pdGVyXG4gICAgaWYgKGRlbGltaXRlclJvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJvd3MucHVzaChuZXcgdGFibGVfcm93XzEuVGFibGVSb3coZGVsaW1pdGVyUm93XG4gICAgICAgICAgICAuZ2V0Q2VsbHMoKVxuICAgICAgICAgICAgLm1hcCgoY2VsbCkgPT4gbmV3IHRhYmxlX2NlbGxfMS5UYWJsZUNlbGwoZXhwb3J0cy5fZGVsaW1pdGVyVGV4dChjZWxsLmdldEFsaWdubWVudCgpLCBvcHRpb25zLm1pbkRlbGltaXRlcldpZHRoKSkpLCBtYXJnaW5MZWZ0LCAnJykpO1xuICAgIH1cbiAgICAvLyBib2R5XG4gICAgZm9yIChsZXQgaSA9IGRlbGltaXRlclJvdyAhPT0gdW5kZWZpbmVkID8gMiA6IDE7IGkgPCB0YWJsZUhlaWdodDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRhYmxlLmdldFJvd3MoKVtpXTtcbiAgICAgICAgcm93cy5wdXNoKG5ldyB0YWJsZV9yb3dfMS5UYWJsZVJvdyhyb3cuZ2V0Q2VsbHMoKS5tYXAoKGNlbGwpID0+IG5ldyB0YWJsZV9jZWxsXzEuVGFibGVDZWxsKGV4cG9ydHMuX3BhZFRleHQoY2VsbC5jb250ZW50KSkpLCBtYXJnaW5MZWZ0LCAnJykpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB0YWJsZTogbmV3IHRhYmxlXzEuVGFibGUocm93cyksXG4gICAgICAgIG1hcmdpbkxlZnQsXG4gICAgfTtcbn07XG4vKipcbiAqIFJlcHJlc2VudHMgdGFibGUgZm9ybWF0IHR5cGUuXG4gKlxuICogLSBgRm9ybWF0VHlwZS5OT1JNQUxgIC0gRm9ybWF0cyB0YWJsZSBub3JtYWxseS5cbiAqIC0gYEZvcm1hdFR5cGUuV0VBS2AgLSBGb3JtYXRzIHRhYmxlIHdlYWtseSwgcm93cyBhcmUgZm9ybWF0dGVkIGluZGVwZW5kZW50bHkgdG8gZWFjaCBvdGhlciwgY2VsbFxuICogICBjb250ZW50cyBhcmUganVzdCB0cmltbWVkIGFuZCBub3QgYWxpZ25lZC5cbiAqL1xudmFyIEZvcm1hdFR5cGU7XG4oZnVuY3Rpb24gKEZvcm1hdFR5cGUpIHtcbiAgICBGb3JtYXRUeXBlW1wiTk9STUFMXCJdID0gXCJub3JtYWxcIjtcbiAgICBGb3JtYXRUeXBlW1wiV0VBS1wiXSA9IFwid2Vha1wiO1xufSkoRm9ybWF0VHlwZSA9IGV4cG9ydHMuRm9ybWF0VHlwZSB8fCAoZXhwb3J0cy5Gb3JtYXRUeXBlID0ge30pKTtcbi8qKlxuICogRm9ybWF0cyBhIHRhYmxlLlxuICpcbiAqIEBwcml2YXRlXG4gKlxuICogQHRocm93cyB7RXJyb3J9IFVua25vd24gZm9ybWF0IHR5cGUuXG4gKi9cbmV4cG9ydHMuZm9ybWF0VGFibGUgPSAodGFibGUsIG9wdGlvbnMpID0+IHtcbiAgICBzd2l0Y2ggKG9wdGlvbnMuZm9ybWF0VHlwZSkge1xuICAgICAgICBjYXNlIEZvcm1hdFR5cGUuTk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuX2Zvcm1hdFRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgY2FzZSBGb3JtYXRUeXBlLldFQUs6XG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5fd2Vha0Zvcm1hdFRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBmb3JtYXQgdHlwZTogJyArIG9wdGlvbnMuZm9ybWF0VHlwZSk7XG4gICAgfVxufTtcbi8qKlxuICogQWx0ZXJzIGEgY29sdW1uJ3MgYWxpZ25tZW50IG9mIGEgdGFibGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB0YWJsZSAtIEEgY29tcGxldGVkIG5vbi1lbXB0eSB0YWJsZS5cbiAqIEBwYXJhbSBjb2x1bW5JbmRleCAtIEFuIGluZGV4IG9mIHRoZSBjb2x1bW4uXG4gKiBAcGFyYW0gYWxpZ25tZW50IC0gQSBuZXcgYWxpZ25tZW50IG9mIHRoZSBjb2x1bW4uXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCBjb250YWluaW5nIG9wdGlvbnMgZm9yIGNvbXBsZXRpb24uXG4gKiBAcmV0dXJucyB7VGFibGV9IEFuIGFsdGVyZWQgdGFibGUgb2JqZWN0LlxuICogSWYgdGhlIGNvbHVtbiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UsIHJldHVybnMgdGhlIG9yaWdpbmFsIHRhYmxlLlxuICovXG5leHBvcnRzLmFsdGVyQWxpZ25tZW50ID0gKHRhYmxlLCBjb2x1bW5JbmRleCwgYWxpZ25tZW50LCBvcHRpb25zKSA9PiB7XG4gICAgaWYgKHRhYmxlLmdldEhlaWdodCgpIDwgMSkge1xuICAgICAgICByZXR1cm4gdGFibGU7XG4gICAgfVxuICAgIGNvbnN0IGRlbGltaXRlclJvdyA9IHRhYmxlLmdldFJvd3MoKVsxXTtcbiAgICBpZiAoY29sdW1uSW5kZXggPCAwIHx8IGRlbGltaXRlclJvdy5nZXRXaWR0aCgpIC0gMSA8IGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0YWJsZTtcbiAgICB9XG4gICAgY29uc3QgZGVsaW1pdGVyQ2VsbHMgPSBkZWxpbWl0ZXJSb3cuZ2V0Q2VsbHMoKTtcbiAgICBkZWxpbWl0ZXJDZWxsc1tjb2x1bW5JbmRleF0gPSBuZXcgdGFibGVfY2VsbF8xLlRhYmxlQ2VsbChleHBvcnRzLl9kZWxpbWl0ZXJUZXh0KGFsaWdubWVudCwgb3B0aW9ucy5taW5EZWxpbWl0ZXJXaWR0aCkpO1xuICAgIGNvbnN0IHJvd3MgPSB0YWJsZS5nZXRSb3dzKCk7XG4gICAgcm93c1sxXSA9IG5ldyB0YWJsZV9yb3dfMS5UYWJsZVJvdyhkZWxpbWl0ZXJDZWxscywgZGVsaW1pdGVyUm93Lm1hcmdpbkxlZnQsIGRlbGltaXRlclJvdy5tYXJnaW5SaWdodCk7XG4gICAgcmV0dXJuIG5ldyB0YWJsZV8xLlRhYmxlKHJvd3MpO1xufTtcbi8qKlxuICogSW5zZXJ0cyBhIHJvdyB0byBhIHRhYmxlLlxuICogVGhlIHJvdyBpcyBhbHdheXMgaW5zZXJ0ZWQgYWZ0ZXIgdGhlIGhlYWRlciBhbmQgdGhlIGRlbGltaXRlciByb3dzLCBldmVuIGlmIHRoZSBpbmRleCBzcGVjaWZpZXNcbiAqIHRoZSBoZWFkZXIgb3IgdGhlIGRlbGltaXRlci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHRhYmxlIC0gQSBjb21wbGV0ZWQgbm9uLWVtcHR5IHRhYmxlLlxuICogQHBhcmFtIHJvd0luZGV4IC0gQW4gcm93IGluZGV4IGF0IHdoaWNoIGEgbmV3IHJvdyB3aWxsIGJlIGluc2VydGVkLlxuICogQHBhcmFtIHJvdyAtIEEgdGFibGUgcm93IHRvIGJlIGluc2VydGVkLlxuICogQHJldHVybnMgQW4gYWx0ZXJlZCB0YWJsZSBvYmVqY3QuXG4gKi9cbmV4cG9ydHMuaW5zZXJ0Um93ID0gKHRhYmxlLCByb3dJbmRleCwgcm93KSA9PiB7XG4gICAgY29uc3Qgcm93cyA9IHRhYmxlLmdldFJvd3MoKTtcbiAgICByb3dzLnNwbGljZShNYXRoLm1heChyb3dJbmRleCwgMiksIDAsIHJvdyk7XG4gICAgcmV0dXJuIG5ldyB0YWJsZV8xLlRhYmxlKHJvd3MpO1xufTtcbi8qKlxuICogRGVsZXRlcyBhIHJvdyBpbiBhIHRhYmxlLlxuICogSWYgdGhlIGluZGV4IHNwZWNpZmllcyB0aGUgaGVhZGVyIHJvdywgdGhlIGNlbGxzIGFyZSBlbXB0aWVkIGJ1dCB0aGUgcm93IHdpbGwgbm90IGJlIHJlbW92ZWQuXG4gKiBJZiB0aGUgaW5kZXggc3BlY2lmaWVzIHRoZSBkZWxpbWl0ZXIgcm93LCBpdCBkb2VzIG5vdGhpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB0YWJsZSAtIEEgY29tcGxldGVkIG5vbi1lbXB0eSB0YWJsZS5cbiAqIEBwYXJhbSByb3dJbmRleCAtIEFuIGluZGV4IG9mIHRoZSByb3cgdG8gYmUgZGVsZXRlZC5cbiAqIEByZXR1cm5zIEFuIGFsdGVyZWQgdGFibGUgb2JlamN0LlxuICovXG5leHBvcnRzLmRlbGV0ZVJvdyA9ICh0YWJsZSwgcm93SW5kZXgpID0+IHtcbiAgICBpZiAocm93SW5kZXggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRhYmxlO1xuICAgIH1cbiAgICBjb25zdCByb3dzID0gdGFibGUuZ2V0Um93cygpO1xuICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xuICAgICAgICBjb25zdCBoZWFkZXJSb3cgPSByb3dzWzBdO1xuICAgICAgICByb3dzWzBdID0gbmV3IHRhYmxlX3Jvd18xLlRhYmxlUm93KG5ldyBBcnJheShoZWFkZXJSb3cuZ2V0V2lkdGgoKSkuZmlsbChuZXcgdGFibGVfY2VsbF8xLlRhYmxlQ2VsbCgnJykpLCBoZWFkZXJSb3cubWFyZ2luTGVmdCwgaGVhZGVyUm93Lm1hcmdpblJpZ2h0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJvd3Muc3BsaWNlKHJvd0luZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyB0YWJsZV8xLlRhYmxlKHJvd3MpO1xufTtcbi8qKlxuICogTW92ZXMgYSByb3cgYXQgdGhlIGluZGV4IHRvIHRoZSBzcGVjaWZpZWQgZGVzdGluYXRpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB0YWJsZSAtIEEgY29tcGxldGVkIG5vbi1lbXB0eSB0YWJsZS5cbiAqIEBwYXJhbSByb3dJbmRleCAtIEluZGV4IG9mIHRoZSByb3cgdG8gYmUgbW92ZWQuXG4gKiBAcGFyYW0gZGVzdEluZGV4IC0gSW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uLlxuICogQHJldHVybnMgQW4gYWx0ZXJlZCB0YWJsZSBvYmplY3QuXG4gKi9cbmV4cG9ydHMubW92ZVJvdyA9ICh0YWJsZSwgcm93SW5kZXgsIGRlc3RJbmRleCkgPT4ge1xuICAgIGlmIChyb3dJbmRleCA8PSAxIHx8IGRlc3RJbmRleCA8PSAxIHx8IHJvd0luZGV4ID09PSBkZXN0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRhYmxlO1xuICAgIH1cbiAgICBjb25zdCByb3dzID0gdGFibGUuZ2V0Um93cygpO1xuICAgIGNvbnN0IHJvdyA9IHJvd3Nbcm93SW5kZXhdO1xuICAgIHJvd3Muc3BsaWNlKHJvd0luZGV4LCAxKTtcbiAgICByb3dzLnNwbGljZShkZXN0SW5kZXgsIDAsIHJvdyk7XG4gICAgcmV0dXJuIG5ldyB0YWJsZV8xLlRhYmxlKHJvd3MpO1xufTtcbi8qKlxuICogSW5zZXJ0cyBhIGNvbHVtbiB0byBhIHRhYmxlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gdGFibGUgLSBBIGNvbXBsZXRlZCBub24tZW1wdHkgdGFibGUuXG4gKiBAcGFyYW0gY29sdW1uSW5kZXggLSBBbiBjb2x1bW4gaW5kZXggYXQgd2hpY2ggdGhlIG5ldyBjb2x1bW4gd2lsbCBiZSBpbnNlcnRlZC5cbiAqIEBwYXJhbSBjb2x1bW4gLSBBbiBhcnJheSBvZiBjZWxscy5cbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgb3B0aW9ucyBmb3IgY29tcGxldGlvbi5cbiAqIEByZXR1cm5zIEFuIGFsdGVyZWQgdGFibGUgb2JlamN0LlxuICovXG5leHBvcnRzLmluc2VydENvbHVtbiA9ICh0YWJsZSwgY29sdW1uSW5kZXgsIGNvbHVtbiwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHJvd3MgPSB0YWJsZS5nZXRSb3dzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICAgIGNvbnN0IGNlbGxzID0gcm93c1tpXS5nZXRDZWxscygpO1xuICAgICAgICBjb25zdCBjZWxsID0gaSA9PT0gMVxuICAgICAgICAgICAgPyBuZXcgdGFibGVfY2VsbF8xLlRhYmxlQ2VsbChleHBvcnRzLl9kZWxpbWl0ZXJUZXh0KGFsaWdubWVudF8xLkFsaWdubWVudC5OT05FLCBvcHRpb25zLm1pbkRlbGltaXRlcldpZHRoKSlcbiAgICAgICAgICAgIDogY29sdW1uW2kgPiAxID8gaSAtIDEgOiBpXTtcbiAgICAgICAgY2VsbHMuc3BsaWNlKGNvbHVtbkluZGV4LCAwLCBjZWxsKTtcbiAgICAgICAgcm93c1tpXSA9IG5ldyB0YWJsZV9yb3dfMS5UYWJsZVJvdyhjZWxscywgcm93Lm1hcmdpbkxlZnQsIHJvdy5tYXJnaW5SaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgdGFibGVfMS5UYWJsZShyb3dzKTtcbn07XG4vKipcbiAqIERlbGV0ZXMgYSBjb2x1bW4gaW4gYSB0YWJsZS5cbiAqIElmIHRoZXJlIHdpbGwgYmUgbm8gY29sdW1ucyBhZnRlciB0aGUgZGVsZXRpb24sIHRoZSBjZWxscyBhcmUgZW1wdGllZCBidXQgdGhlIGNvbHVtbiB3aWxsIG5vdCBiZVxuICogcmVtb3ZlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHRhYmxlIC0gQSBjb21wbGV0ZWQgbm9uLWVtcHR5IHRhYmxlLlxuICogQHBhcmFtIGNvbHVtbkluZGV4IC0gQW4gaW5kZXggb2YgdGhlIGNvbHVtbiB0byBiZSBkZWxldGVkLlxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3QgY29udGFpbmluZyBvcHRpb25zIGZvciBjb21wbGV0aW9uLlxuICogQHJldHVybnMgQW4gYWx0ZXJlZCB0YWJsZSBvYmplY3QuXG4gKi9cbmV4cG9ydHMuZGVsZXRlQ29sdW1uID0gKHRhYmxlLCBjb2x1bW5JbmRleCwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHJvd3MgPSB0YWJsZS5nZXRSb3dzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICAgIGxldCBjZWxscyA9IHJvdy5nZXRDZWxscygpO1xuICAgICAgICBpZiAoY2VsbHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIGNlbGxzID0gW1xuICAgICAgICAgICAgICAgIG5ldyB0YWJsZV9jZWxsXzEuVGFibGVDZWxsKGkgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgPyBleHBvcnRzLl9kZWxpbWl0ZXJUZXh0KGFsaWdubWVudF8xLkFsaWdubWVudC5OT05FLCBvcHRpb25zLm1pbkRlbGltaXRlcldpZHRoKVxuICAgICAgICAgICAgICAgICAgICA6ICcnKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjZWxscy5zcGxpY2UoY29sdW1uSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJvd3NbaV0gPSBuZXcgdGFibGVfcm93XzEuVGFibGVSb3coY2VsbHMsIHJvdy5tYXJnaW5MZWZ0LCByb3cubWFyZ2luUmlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHRhYmxlXzEuVGFibGUocm93cyk7XG59O1xuLyoqXG4gKiBNb3ZlcyBhIGNvbHVtbiBhdCB0aGUgaW5kZXggdG8gdGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHRhYmxlIC0gQSBjb21wbGV0ZWQgbm9uLWVtcHR5IHRhYmxlLlxuICogQHBhcmFtIGNvbHVtbkluZGV4IC0gSW5kZXggb2YgdGhlIGNvbHVtbiB0byBiZSBtb3ZlZC5cbiAqIEBwYXJhbSBkZXN0SW5kZXggLSBJbmRleCBvZiB0aGUgZGVzdGluYXRpb24uXG4gKiBAcmV0dXJucyBBbiBhbHRlcmVkIHRhYmxlIG9iamVjdC5cbiAqL1xuZXhwb3J0cy5tb3ZlQ29sdW1uID0gKHRhYmxlLCBjb2x1bW5JbmRleCwgZGVzdEluZGV4KSA9PiB7XG4gICAgaWYgKGNvbHVtbkluZGV4ID09PSBkZXN0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRhYmxlO1xuICAgIH1cbiAgICBjb25zdCByb3dzID0gdGFibGUuZ2V0Um93cygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgICAgICBjb25zdCBjZWxscyA9IHJvdy5nZXRDZWxscygpO1xuICAgICAgICBjb25zdCBjZWxsID0gY2VsbHNbY29sdW1uSW5kZXhdO1xuICAgICAgICBjZWxscy5zcGxpY2UoY29sdW1uSW5kZXgsIDEpO1xuICAgICAgICBjZWxscy5zcGxpY2UoZGVzdEluZGV4LCAwLCBjZWxsKTtcbiAgICAgICAgcm93c1tpXSA9IG5ldyB0YWJsZV9yb3dfMS5UYWJsZVJvdyhjZWxscywgcm93Lm1hcmdpbkxlZnQsIHJvdy5tYXJnaW5SaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgdGFibGVfMS5UYWJsZShyb3dzKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2hvcnRlc3RFZGl0U2NyaXB0ID0gZXhwb3J0cy5hcHBseUVkaXRTY3JpcHQgPSBleHBvcnRzLl9hcHBseUNvbW1hbmQgPSBleHBvcnRzLkRlbGV0ZSA9IGV4cG9ydHMuSW5zZXJ0ID0gdm9pZCAwO1xuLyoqXG4gKiBUaGUgYEluc2VydGAgY2xhc3MgcmVwcmVzZW50cyBhbiBpbnNlcnRpb24gb2YgYSBsaW5lLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIEluc2VydCB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRzIGEgbmV3IGBJbnNlcnRgIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByb3cgLSBSb3cgaW5kZXgsIHN0YXJ0cyBmcm9tIGAwYC5cbiAgICAgKiBAcGFyYW0gbGluZSAtIEEgc3RyaW5nIHRvIGJlIGluc2VydGVkIGF0IHRoZSByb3cuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iocm93LCBsaW5lKSB7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cbn1cbmV4cG9ydHMuSW5zZXJ0ID0gSW5zZXJ0O1xuLyoqXG4gKiBUaGUgYERlbGV0ZWAgY2xhc3MgcmVwcmVzZW50cyBhIGRlbGV0aW9uIG9mIGEgbGluZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBEZWxldGUge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgYERlbGV0ZWAgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHJvdyAtIFJvdyBpbmRleCwgc3RhcnRzIGZyb20gYDBgLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJvdykge1xuICAgICAgICB0aGlzLnJvdyA9IHJvdztcbiAgICB9XG59XG5leHBvcnRzLkRlbGV0ZSA9IERlbGV0ZTtcbi8qKlxuICogQXBwbGllcyBhIGNvbW1hbmQgdG8gdGhlIHRleHQgZWRpdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gdGV4dEVkaXRvciAtIEFuIGludGVyZmFjZSB0byB0aGUgdGV4dCBlZGl0b3IuXG4gKiBAcGFyYW0gY29tbWFuZCAtIEEgY29tbWFuZC5cbiAqIEBwYXJhbSByb3dPZmZzZXQgLSBPZmZzZXQgdG8gdGhlIHJvdyBpbmRleCBvZiB0aGUgY29tbWFuZC5cbiAqL1xuZXhwb3J0cy5fYXBwbHlDb21tYW5kID0gKHRleHRFZGl0b3IsIGNvbW1hbmQsIHJvd09mZnNldCkgPT4ge1xuICAgIGlmIChjb21tYW5kIGluc3RhbmNlb2YgSW5zZXJ0KSB7XG4gICAgICAgIHRleHRFZGl0b3IuaW5zZXJ0TGluZShyb3dPZmZzZXQgKyBjb21tYW5kLnJvdywgY29tbWFuZC5saW5lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tbWFuZCBpbnN0YW5jZW9mIERlbGV0ZSkge1xuICAgICAgICB0ZXh0RWRpdG9yLmRlbGV0ZUxpbmUocm93T2Zmc2V0ICsgY29tbWFuZC5yb3cpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGNvbW1hbmQnKTtcbiAgICB9XG59O1xuLyoqXG4gKiBBcHBseSBhbiBlZGl0IHNjcmlwdCAoYXJyYXkgb2YgY29tbWFuZHMpIHRvIHRoZSB0ZXh0IGVkaXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHRleHRFZGl0b3IgLSBBbiBpbnRlcmZhY2UgdG8gdGhlIHRleHQgZWRpdG9yLlxuICogQHBhcmFtIHNjcmlwdCAtIEFuIGFycmF5IG9mIGNvbW1hbmRzLlxuICogVGhlIGNvbW1hbmRzIGFyZSBhcHBsaWVkIHNlcXVlbnRpYWxseSBpbiB0aGUgb3JkZXIgb2YgdGhlIGFycmF5LlxuICogQHBhcmFtIHJvd09mZnNldCAtIE9mZnNldCB0byB0aGUgcm93IGluZGV4IG9mIHRoZSBjb21tYW5kcy5cbiAqL1xuZXhwb3J0cy5hcHBseUVkaXRTY3JpcHQgPSAodGV4dEVkaXRvciwgc2NyaXB0LCByb3dPZmZzZXQpID0+IHtcbiAgICBmb3IgKGNvbnN0IGNvbW1hbmQgb2Ygc2NyaXB0KSB7XG4gICAgICAgIGV4cG9ydHMuX2FwcGx5Q29tbWFuZCh0ZXh0RWRpdG9yLCBjb21tYW5kLCByb3dPZmZzZXQpO1xuICAgIH1cbn07XG4vKipcbiAqIExpbmtlZCBsaXN0IHVzZWQgdG8gcmVtZW1iZXIgZWRpdCBzY3JpcHQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgSUxpc3Qge1xuICAgIGdldCBjYXIoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuICAgIGdldCBjZHIoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuICAgIHVuc2hpZnQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zKHZhbHVlLCB0aGlzKTtcbiAgICB9XG4gICAgdG9BcnJheSgpIHtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIGxldCByZXN0ID0gdGhpcztcbiAgICAgICAgd2hpbGUgKCFyZXN0LmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgYXJyLnB1c2gocmVzdC5jYXIpO1xuICAgICAgICAgICAgcmVzdCA9IHJlc3QuY2RyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBOaWwgZXh0ZW5kcyBJTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGdldCBjYXIoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRW1wdHkgbGlzdCcpO1xuICAgIH1cbiAgICBnZXQgY2RyKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtcHR5IGxpc3QnKTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBDb25zIGV4dGVuZHMgSUxpc3Qge1xuICAgIGNvbnN0cnVjdG9yKGNhciwgY2RyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2NhciA9IGNhcjtcbiAgICAgICAgdGhpcy5fY2RyID0gY2RyO1xuICAgIH1cbiAgICBnZXQgY2FyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyO1xuICAgIH1cbiAgICBnZXQgY2RyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2RyO1xuICAgIH1cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuLyoqXG4gKiBDb21wdXRlcyB0aGUgc2hvcnRlc3QgZWRpdCBzY3JpcHQgYmV0d2VlbiB0d28gYXJyYXlzIG9mIHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBmcm9tIC0gQW4gYXJyYXkgb2Ygc3RyaW5nIHRoZSBlZGl0IHN0YXJ0cyBmcm9tLlxuICogQHBhcmFtIHRvIC0gQW4gYXJyYXkgb2Ygc3RyaW5nIHRoZSBlZGl0IGdvZXMgdG8uXG4gKiBAcGFyYW0gW2xpbWl0PS0xXSAtIFVwcGVyIGxpbWl0IG9mIGVkaXQgZGlzdGFuY2UgdG8gYmUgc2VhcmNoZWQuXG4gKiBJZiBuZWdhdGl2ZSwgdGhlcmUgaXMgbm8gbGltaXQuXG4gKiBAcmV0dXJucyBUaGUgc2hvcnRlc3QgZWRpdCBzY3JpcHQgdGhhdCB0dXJucyBgZnJvbWAgaW50byBgdG9gO1xuICogYHVuZGVmaW5lZGAgaWYgbm8gZWRpdCBzY3JpcHQgaXMgZm91bmQgaW4gdGhlIGdpdmVuIHJhbmdlLlxuICovXG5leHBvcnRzLnNob3J0ZXN0RWRpdFNjcmlwdCA9IChmcm9tLCB0bywgbGltaXQgPSAtMSkgPT4ge1xuICAgIGNvbnN0IGZyb21MZW4gPSBmcm9tLmxlbmd0aDtcbiAgICBjb25zdCB0b0xlbiA9IHRvLmxlbmd0aDtcbiAgICBjb25zdCBtYXhkID0gbGltaXQgPj0gMCA/IE1hdGgubWluKGxpbWl0LCBmcm9tTGVuICsgdG9MZW4pIDogZnJvbUxlbiArIHRvTGVuO1xuICAgIGNvbnN0IG1lbSA9IG5ldyBBcnJheShNYXRoLm1pbihtYXhkLCBmcm9tTGVuKSArIE1hdGgubWluKG1heGQsIHRvTGVuKSArIDEpO1xuICAgIGNvbnN0IG9mZnNldCA9IE1hdGgubWluKG1heGQsIGZyb21MZW4pO1xuICAgIGZvciAobGV0IGQgPSAwOyBkIDw9IG1heGQ7IGQrKykge1xuICAgICAgICBjb25zdCBtaW5rID0gZCA8PSBmcm9tTGVuID8gLWQgOiBkIC0gMiAqIGZyb21MZW47XG4gICAgICAgIGNvbnN0IG1heGsgPSBkIDw9IHRvTGVuID8gZCA6IC1kICsgMiAqIHRvTGVuO1xuICAgICAgICBmb3IgKGxldCBrID0gbWluazsgayA8PSBtYXhrOyBrICs9IDIpIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IHNjcmlwdDtcbiAgICAgICAgICAgIGlmIChkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbmV3IE5pbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoayA9PT0gLWQpIHtcbiAgICAgICAgICAgICAgICBpID0gbWVtW29mZnNldCArIGsgKyAxXS5pICsgMTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBtZW1bb2Zmc2V0ICsgayArIDFdLnNjcmlwdC51bnNoaWZ0KG5ldyBEZWxldGUoaSArIGspKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGsgPT09IGQpIHtcbiAgICAgICAgICAgICAgICBpID0gbWVtW29mZnNldCArIGsgLSAxXS5pO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG1lbVtvZmZzZXQgKyBrIC0gMV0uc2NyaXB0LnVuc2hpZnQobmV3IEluc2VydChpICsgayAtIDEsIHRvW2kgKyBrIC0gMV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpID0gbWVtW29mZnNldCArIGsgKyAxXS5pICsgMTtcbiAgICAgICAgICAgICAgICBjb25zdCBoaSA9IG1lbVtvZmZzZXQgKyBrIC0gMV0uaTtcbiAgICAgICAgICAgICAgICBpZiAodmkgPiBoaSkge1xuICAgICAgICAgICAgICAgICAgICBpID0gdmk7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdCA9IG1lbVtvZmZzZXQgKyBrICsgMV0uc2NyaXB0LnVuc2hpZnQobmV3IERlbGV0ZShpICsgaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IGhpO1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHQgPSBtZW1bb2Zmc2V0ICsgayAtIDFdLnNjcmlwdC51bnNoaWZ0KG5ldyBJbnNlcnQoaSArIGsgLSAxLCB0b1tpICsgayAtIDFdKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGkgPCBmcm9tTGVuICYmIGkgKyBrIDwgdG9MZW4gJiYgZnJvbVtpXSA9PT0gdG9baSArIGtdKSB7XG4gICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsgPT09IHRvTGVuIC0gZnJvbUxlbiAmJiBpID09PSBmcm9tTGVuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjcmlwdC50b0FycmF5KCkucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVtW29mZnNldCArIGtdID0geyBpLCBzY3JpcHQgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JVGV4dEVkaXRvciA9IHZvaWQgMDtcbi8qKlxuICogVGhlIGBJVGV4dEVkaXRvcmAgcmVwcmVzZW50cyBhbiBpbnRlcmZhY2UgdG8gYSB0ZXh0IGVkaXRvci5cbiAqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmNsYXNzIElUZXh0RWRpdG9yIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IGN1cnNvciBwb3NpdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEEgcG9pbnQgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgY3Vyc29yIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIGdldEN1cnNvclBvc2l0aW9uKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZDogZ2V0Q3Vyc29yUG9zaXRpb24nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3Vyc29yIHBvc2l0aW9uIHRvIGEgc3BlY2lmaWVkIG9uZS5cbiAgICAgKi9cbiAgICBzZXRDdXJzb3JQb3NpdGlvbihwb3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQ6IHNldEN1cnNvclBvc2l0aW9uJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNlbGVjdGlvbiByYW5nZS5cbiAgICAgKiBUaGlzIG1ldGhvZCBhbHNvIGV4cGVjdHMgdGhlIGN1cnNvciBwb3NpdGlvbiB0byBiZSBtb3ZlZCBhcyB0aGUgZW5kIG9mIHRoZSBzZWxlY3Rpb24gcmFuZ2UuXG4gICAgICovXG4gICAgc2V0U2VsZWN0aW9uUmFuZ2UocmFuZ2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQ6IHNldFNlbGVjdGlvblJhbmdlJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGxhc3Qgcm93IGluZGV4IG9mIHRoZSB0ZXh0IGVkaXRvci5cbiAgICAgKi9cbiAgICBnZXRMYXN0Um93KCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZDogZ2V0TGFzdFJvdycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGVkaXRvciBhY2NlcHRzIGEgdGFibGUgYXQgYSByb3cgdG8gYmUgZWRpdHRlZC5cbiAgICAgKiBJdCBzaG91bGQgcmV0dXJuIGBmYWxzZWAgaWYsIGZvciBleGFtcGxlLCB0aGUgcm93IGlzIGluIGEgY29kZSBibG9jayAobm90IE1hcmtkb3duKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByb3cgLSBBIHJvdyBpbmRleCBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSB0YWJsZSBhdCB0aGUgcm93IGNhbiBiZSBlZGl0dGVkLlxuICAgICAqL1xuICAgIGFjY2VwdHNUYWJsZUVkaXQocm93KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkOiBhY2NlcHRzVGFibGVFZGl0Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgYSBsaW5lIHN0cmluZyBhdCBhIHJvdy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByb3cgLSBSb3cgaW5kZXgsIHN0YXJ0cyBmcm9tIGAwYC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbGluZSBhdCB0aGUgc3BlY2lmaWVkIHJvdy5cbiAgICAgKiBUaGUgbGluZSBtdXN0IG5vdCBjb250YWluIGFuIEVPTCBsaWtlIGBcIlxcblwiYCBvciBgXCJcXHJcImAuXG4gICAgICovXG4gICAgZ2V0TGluZShyb3cpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQ6IGdldExpbmUnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhIGxpbmUgYXQgYSBzcGVjaWZpZWQgcm93LlxuICAgICAqXG4gICAgICogQHBhcmFtIHJvdyAtIFJvdyBpbmRleCwgc3RhcnRzIGZyb20gYDBgLlxuICAgICAqIEBwYXJhbSBsaW5lIC0gQSBzdHJpbmcgdG8gYmUgaW5zZXJ0ZWQuXG4gICAgICogVGhpcyBtdXN0IG5vdCBjb250YWluIGFuIEVPTCBsaWtlIGBcIlxcblwiYCBvciBgXCJcXHJcImAuXG4gICAgICovXG4gICAgaW5zZXJ0TGluZShyb3csIGxpbmUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQ6IGluc2VydExpbmUnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhIGxpbmUgYXQgYSBzcGVjaWZpZWQgcm93LlxuICAgICAqXG4gICAgICogQHBhcmFtIHJvdyAtIFJvdyBpbmRleCwgc3RhcnRzIGZyb20gYDBgLlxuICAgICAqL1xuICAgIGRlbGV0ZUxpbmUocm93KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkOiBkZWxldGVMaW5lJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgbGluZXMgaW4gYSBzcGVjaWZpZWQgcmFuZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RhcnRSb3cgLSBTdGFydCByb3cgaW5kZXgsIHN0YXJ0cyBmcm9tIGAwYC5cbiAgICAgKiBAcGFyYW0gZW5kUm93IC0gRW5kIHJvdyBpbmRleC5cbiAgICAgKiBMaW5lcyBmcm9tIGBzdGFydFJvd2AgdG8gYGVuZFJvdyAtIDFgIGlzIHJlcGxhY2VkLlxuICAgICAqIEBwYXJhbSBsaW5lcyAtIEFuIGFycmF5IG9mIHN0cmluZy5cbiAgICAgKiBFYWNoIHN0cmluZ3MgbXVzdCBub3QgY29udGFpbiBhbiBFT0wgbGlrZSBgXCJcXG5cImAgb3IgYFwiXFxyXCJgLlxuICAgICAqL1xuICAgIHJlcGxhY2VMaW5lcyhzdGFydFJvdywgZW5kUm93LCBsaW5lcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZDogcmVwbGFjZUxpbmVzJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJhdGNoZXMgbXVsdGlwbGUgb3BlcmF0aW9ucyBhcyBhIHNpbmdsZSB1bmRvL3JlZG8gc3RlcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmdW5jIC0gQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIHNvbWUgb3BlcmF0aW9ucyBvbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAgICovXG4gICAgdHJhbnNhY3QoZnVuYykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZDogdHJhbnNhY3QnKTtcbiAgICB9XG59XG5leHBvcnRzLklUZXh0RWRpdG9yID0gSVRleHRFZGl0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSBleHBvcnRzLm9wdGlvbnNXaXRoRGVmYXVsdHMgPSB2b2lkIDA7XG5jb25zdCBhbGlnbm1lbnRfMSA9IHJlcXVpcmUoXCIuL2FsaWdubWVudFwiKTtcbmNvbnN0IGZvcm1hdHRlcl8xID0gcmVxdWlyZShcIi4vZm9ybWF0dGVyXCIpO1xuY29uc3QgREVGQVVMVF9URVhUX1dJRFRIX09QVElPTlMgPSB7XG4gICAgbm9ybWFsaXplOiB0cnVlLFxuICAgIHdpZGVDaGFyczogbmV3IFNldCgpLFxuICAgIG5hcnJvd0NoYXJzOiBuZXcgU2V0KCksXG4gICAgYW1iaWd1b3VzQXNXaWRlOiBmYWxzZSxcbn07XG5jb25zdCBERUZBVUxUX09QVElPTlMgPSB7XG4gICAgbGVmdE1hcmdpbkNoYXJzOiBuZXcgU2V0KCksXG4gICAgZm9ybWF0VHlwZTogZm9ybWF0dGVyXzEuRm9ybWF0VHlwZS5OT1JNQUwsXG4gICAgbWluRGVsaW1pdGVyV2lkdGg6IDMsXG4gICAgZGVmYXVsdEFsaWdubWVudDogYWxpZ25tZW50XzEuRGVmYXVsdEFsaWdubWVudC5MRUZULFxuICAgIGhlYWRlckFsaWdubWVudDogYWxpZ25tZW50XzEuSGVhZGVyQWxpZ25tZW50LkZPTExPVyxcbiAgICBzbWFydEN1cnNvcjogZmFsc2UsXG59O1xuLyoqXG4gKiBDcmVhdGUgYW4gT3B0aW9ucyBvYmplY3QgZm9yIHRoZSBmb3JtYXR0ZXIuXG4gKiBUaGUgZGVmYXVsdCB2YWx1ZXMgYXJlIHVzZWQgZm9yIG9wdGlvbnMgdGhhdCBhcmUgbm90IHNwZWNpZmllZC5cbiAqXG4gKiBUaGUgYXZhaWxhYmxlIG9wdGlvbnMgYW5kIGRlZmF1bHQgdmFsdWVzIGFyZSBsaXN0ZWQgYmVsb3cuXG4gKlxuICogfCBwcm9wZXJ0eSBuYW1lICAgICAgIHwgdHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRlZmF1bHQgdmFsdWUgICAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYGxlZnRNYXJnaW5DaGFyc2AgICB8IHtAbGluayBTZXR9Jmx0O3tAbGluayBzdHJpbmd9Jmd0OyB8IEEgc2V0IG9mIGFkZGl0aW9uYWwgbGVmdCBtYXJnaW4gY2hhcmFjdGVycy4gICAgICAgICAgICAgfCBgbmV3IFNldCgpYCAgICAgICAgICAgICAgfFxuICogfCBgZm9ybWF0VHlwZWAgICAgICAgIHwge0BsaW5rIEZvcm1hdFR5cGV9ICAgICAgICAgICAgICAgIHwgRm9ybWF0IHR5cGUsIG5vcm1hbCBvciB3ZWFrLiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGBGb3JtYXRUeXBlLk5PUk1BTGAgICAgICB8XG4gKiB8IGBtaW5EZWxpbWl0ZXJXaWR0aGAgfCB7QGxpbmsgbnVtYmVyfSAgICAgICAgICAgICAgICAgICAgfCBNaW5pbXVtIHdpZHRoIG9mIGRlbGltaXRlcnMuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYDNgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgYGRlZmF1bHRBbGlnbm1lbnRgICB8IHtAbGluayBEZWZhdWx0QWxpZ25tZW50fSAgICAgICAgICB8IERlZmF1bHQgYWxpZ25tZW50IG9mIGNvbHVtbnMuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgRGVmYXVsdEFsaWdubWVudC5MRUZUYCAgfFxuICogfCBgaGVhZGVyQWxpZ25tZW50YCAgIHwge0BsaW5rIEhlYWRlckFsaWdubWVudH0gICAgICAgICAgIHwgQWxpZ25tZW50IG9mIGhlYWRlciBjZWxscy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGBIZWFkZXJBbGlnbm1lbnQuRk9MTE9XYCB8XG4gKiB8IGB0ZXh0V2lkdGhPcHRpb25zYCAgfCB7QGxpbmsgVGV4dFdpZHRoT3B0aW9uc30gICAgICAgICAgfCBBbiBvYmplY3QgY29udGFpbmluZyBvcHRpb25zIGZvciBjb21wdXRpbmcgdGV4dCB3aWR0aHMuIHwgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgYHNtYXJ0Q3Vyc29yYCAgICAgICB8IHtAbGluayBib29sZWFufSAgICAgICAgICAgICAgICAgICB8IEVuYWJsZXMgXCJTbWFydCBDdXJzb3JcIiBmZWF0dXJlLiAgICAgICAgICAgICAgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogVGhlIGF2YWlsYWJsZSBvcHRpb25zIGZvciBgdGV4dFdpZHRoT3B0aW9uc2AgYXJlIHRoZSBmb2xsb3dpbmcgb25lcy5cbiAqXG4gKiB8IHByb3BlcnR5IG5hbWUgICAgIHwgdHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZWZhdWx0IHZhbHVlIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0gfFxuICogfCBgbm9ybWFsaXplYCAgICAgICB8IHtAbGluayBib29sZWFufSAgICAgICAgICAgICAgICAgICB8IE5vcm1hbGl6ZXMgdGV4dHMgYmVmb3JlIGNvbXB1dGluZyB0ZXh0IHdpZHRocy4gICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiB8IGB3aWRlQ2hhcnNgICAgICAgIHwge0BsaW5rIFNldH0mbHQ7e0BsaW5rIHN0cmluZ30mZ3Q7IHwgQSBzZXQgb2YgY2hhcmFjdGVycyB0aGF0IHNob3VsZCBiZSB0cmVhdGVkIGFzIHdpZGUuICAgfCBgbmV3IFNldCgpYCAgIHxcbiAqIHwgYG5hcnJvd0NoYXJzYCAgICAgfCB7QGxpbmsgU2V0fSZsdDt7QGxpbmsgc3RyaW5nfSZndDsgfCBBIHNldCBvZiBjaGFyYWN0ZXJzIHRoYXQgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgbmFycm93LiB8IGBuZXcgU2V0KClgICAgfFxuICogfCBgYW1iaWd1b3VzQXNXaWRlYCB8IHtAbGluayBib29sZWFufSAgICAgICAgICAgICAgICAgICB8IFRyZWF0cyBFYXN0IEFzaWFuIEFtYmlndW91cyBjaGFyYWN0ZXJzIGFzIHdpZGUuICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICovXG5leHBvcnRzLm9wdGlvbnNXaXRoRGVmYXVsdHMgPSAob3B0aW9ucykgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMpLCBvcHRpb25zKSwgeyB0ZXh0V2lkdGhPcHRpb25zOiBvcHRpb25zLnRleHRXaWR0aE9wdGlvbnNcbiAgICAgICAgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfVEVYVF9XSURUSF9PUFRJT05TKSwgb3B0aW9ucy50ZXh0V2lkdGhPcHRpb25zKSA6IERFRkFVTFRfVEVYVF9XSURUSF9PUFRJT05TIH0pKTtcbmV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSBleHBvcnRzLm9wdGlvbnNXaXRoRGVmYXVsdHMoe30pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRhYmxlRWRpdG9yID0gZXhwb3J0cy5fY29tcHV0ZU5ld09mZnNldCA9IGV4cG9ydHMuX2NyZWF0ZUlzVGFibGVSb3dSZWdleCA9IGV4cG9ydHMuU29ydE9yZGVyID0gdm9pZCAwO1xuY29uc3QgZWRpdF9zY3JpcHRfMSA9IHJlcXVpcmUoXCIuL2VkaXQtc2NyaXB0XCIpO1xuY29uc3QgZm9jdXNfMSA9IHJlcXVpcmUoXCIuL2ZvY3VzXCIpO1xuY29uc3QgZm9ybWF0dGVyXzEgPSByZXF1aXJlKFwiLi9mb3JtYXR0ZXJcIik7XG5jb25zdCBwYXJzZXJfMSA9IHJlcXVpcmUoXCIuL3BhcnNlclwiKTtcbmNvbnN0IHBvaW50XzEgPSByZXF1aXJlKFwiLi9wb2ludFwiKTtcbmNvbnN0IHJhbmdlXzEgPSByZXF1aXJlKFwiLi9yYW5nZVwiKTtcbmNvbnN0IHRhYmxlXzEgPSByZXF1aXJlKFwiLi90YWJsZVwiKTtcbmNvbnN0IHRhYmxlX2NlbGxfMSA9IHJlcXVpcmUoXCIuL3RhYmxlLWNlbGxcIik7XG5jb25zdCB0YWJsZV9yb3dfMSA9IHJlcXVpcmUoXCIuL3RhYmxlLXJvd1wiKTtcbnZhciBTb3J0T3JkZXI7XG4oZnVuY3Rpb24gKFNvcnRPcmRlcikge1xuICAgIFNvcnRPcmRlcltcIkFzY2VuZGluZ1wiXSA9IFwiYXNjZW5kaW5nXCI7XG4gICAgU29ydE9yZGVyW1wiRGVzY2VuZGluZ1wiXSA9IFwiZGVzY2VuZGluZ1wiO1xufSkoU29ydE9yZGVyID0gZXhwb3J0cy5Tb3J0T3JkZXIgfHwgKGV4cG9ydHMuU29ydE9yZGVyID0ge30pKTtcbi8qKlxuICogQ3JlYXRlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3QgdGhhdCBtYXRjaGVzIGEgdGFibGUgcm93LlxuICpcbiAqIEBwYXJhbSBsZWZ0TWFyZ2luQ2hhcnMgLSBBIHNldCBvZiBhZGRpdGlvbmFsIGxlZnQgbWFyZ2luIGNoYXJhY3RlcnMuXG4gKiBBIHBpcGUgYHxgLCBhIGJhY2tzbGFzaCBgXFxgLCBhbmQgYSBiYWNrcXVvdGUgd2lsbCBiZSBpZ25vcmVkLlxuICogQHJldHVybnMgQSByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0IHRoYXQgbWF0Y2hlcyBhIHRhYmxlIHJvdy5cbiAqL1xuZXhwb3J0cy5fY3JlYXRlSXNUYWJsZVJvd1JlZ2V4ID0gKGxlZnRNYXJnaW5DaGFycykgPT4gbmV3IFJlZ0V4cChgXiR7cGFyc2VyXzEubWFyZ2luUmVnZXhTcmMobGVmdE1hcmdpbkNoYXJzKX1cXFxcfGAsICd1Jyk7XG4vKipcbiAqIENvbXB1dGVzIG5ldyBmb2N1cyBvZmZzZXQgZnJvbSBpbmZvcm1hdGlvbiBvZiBjb21wbGV0ZWQgYW5kIGZvcm1hdHRlZCB0YWJsZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBmb2N1cyAtIEEgZm9jdXMuXG4gKiBAcGFyYW0gdGFibGUgLSBBIGNvbXBsZXRlZCBidXQgbm90IGZvcm1hdHRlZCB0YWJsZSB3aXRoIG9yaWdpbmFsIGNlbGwgY29udGVudHMuXG4gKiBAcGFyYW0gZm9ybWF0dGVkIC0gSW5mb3JtYXRpb24gb2YgdGhlIGZvcm1hdHRlZCB0YWJsZS5cbiAqIEBwYXJhbSBtb3ZlZCAtIEluZGljYXRlcyB3aGV0aGVyIHRoZSBmb2N1cyBwb3NpdGlvbiBpcyBtb3ZlZCBieSBhIGNvbW1hbmQgb3Igbm90LlxuICovXG5leHBvcnRzLl9jb21wdXRlTmV3T2Zmc2V0ID0gKGZvY3VzLCB0YWJsZSwgZm9ybWF0dGVkLCBtb3ZlZCkgPT4ge1xuICAgIGlmIChtb3ZlZCkge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRGb2N1c2VkQ2VsbCA9IGZvcm1hdHRlZC50YWJsZS5nZXRGb2N1c2VkQ2VsbChmb2N1cyk7XG4gICAgICAgIGlmIChmb3JtYXR0ZWRGb2N1c2VkQ2VsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0dGVkRm9jdXNlZENlbGwuY29tcHV0ZVJhd09mZnNldCgwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9jdXMuY29sdW1uIDwgMCA/IGZvcm1hdHRlZC5tYXJnaW5MZWZ0Lmxlbmd0aCA6IDA7XG4gICAgfVxuICAgIGNvbnN0IGZvY3VzZWRDZWxsID0gdGFibGUuZ2V0Rm9jdXNlZENlbGwoZm9jdXMpO1xuICAgIGNvbnN0IGZvcm1hdHRlZEZvY3VzZWRDZWxsID0gZm9ybWF0dGVkLnRhYmxlLmdldEZvY3VzZWRDZWxsKGZvY3VzKTtcbiAgICBpZiAoZm9jdXNlZENlbGwgIT09IHVuZGVmaW5lZCAmJiBmb3JtYXR0ZWRGb2N1c2VkQ2VsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRPZmZzZXQgPSBNYXRoLm1pbihmb2N1c2VkQ2VsbC5jb21wdXRlQ29udGVudE9mZnNldChmb2N1cy5vZmZzZXQpLCBmb3JtYXR0ZWRGb2N1c2VkQ2VsbC5jb250ZW50Lmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRGb2N1c2VkQ2VsbC5jb21wdXRlUmF3T2Zmc2V0KGNvbnRlbnRPZmZzZXQpO1xuICAgIH1cbiAgICByZXR1cm4gZm9jdXMuY29sdW1uIDwgMCA/IGZvcm1hdHRlZC5tYXJnaW5MZWZ0Lmxlbmd0aCA6IDA7XG59O1xuLyoqXG4gKiBUaGUgYFRhYmxlRWRpdG9yYCBjbGFzcyBpcyBhdCB0aGUgY2VudGVyIG9mIHRoZSBtYXJrZG93bi10YWJsZS1lZGl0b3IuXG4gKiBXaGVuIGEgY29tbWFuZCBpcyBleGVjdXRlZCwgaXQgcmVhZHMgYSB0YWJsZSBmcm9tIHRoZSB0ZXh0IGVkaXRvciwgZG9lcyBzb21lIG9wZXJhdGlvbiBvbiB0aGVcbiAqIHRhYmxlLCBhbmQgdGhlbiBhcHBseSB0aGUgcmVzdWx0IHRvIHRoZSB0ZXh0IGVkaXRvci5cbiAqXG4gKiBUbyB1c2UgdGhpcyBjbGFzcywgdGhlIHRleHQgZWRpdG9yIChvciBhbiBpbnRlcmZhY2UgdG8gaXQpIG11c3QgaW1wbGVtZW50IHtAbGluayBJVGV4dEVkaXRvcn0uXG4gKi9cbmNsYXNzIFRhYmxlRWRpdG9yIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHRhYmxlIGVkaXRvciBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0ZXh0RWRpdG9yIC0gQSB0ZXh0IGVkaXRvciBpbnRlcmZhY2UuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodGV4dEVkaXRvcikge1xuICAgICAgICB0aGlzLl90ZXh0RWRpdG9yID0gdGV4dEVkaXRvcjtcbiAgICAgICAgLy8gc21hcnQgY3Vyc29yXG4gICAgICAgIHRoaXMuX3NjQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgc21hcnQgY3Vyc29yLlxuICAgICAqIENhbGwgdGhpcyBtZXRob2Qgd2hlbiB0aGUgdGFibGUgZWRpdG9yIGlzIGluYWN0aXZhdGVkLlxuICAgICAqL1xuICAgIHJlc2V0U21hcnRDdXJzb3IoKSB7XG4gICAgICAgIHRoaXMuX3NjQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgY3Vyc29yIGlzIGluIGEgdGFibGUgcm93LlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIHRvIGNoZWNrIHdoZXRoZXIgdGhlIHRhYmxlIGVkaXRvciBzaG91bGQgYmUgYWN0aXZhdGVkIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgY3Vyc29yIGlzIGluIGEgdGFibGUgcm93LlxuICAgICAqL1xuICAgIGN1cnNvcklzSW5UYWJsZShvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHJlID0gZXhwb3J0cy5fY3JlYXRlSXNUYWJsZVJvd1JlZ2V4KG9wdGlvbnMubGVmdE1hcmdpbkNoYXJzKTtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5fdGV4dEVkaXRvci5nZXRDdXJzb3JQb3NpdGlvbigpO1xuICAgICAgICByZXR1cm4gKHRoaXMuX3RleHRFZGl0b3IuYWNjZXB0c1RhYmxlRWRpdChwb3Mucm93KSAmJlxuICAgICAgICAgICAgcmUudGVzdCh0aGlzLl90ZXh0RWRpdG9yLmdldExpbmUocG9zLnJvdykpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluZHMgYSB0YWJsZSB1bmRlciB0aGUgY3VycmVudCBjdXJzb3IgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB1bmRlZmluZWQgaWYgdGhlcmUgaXMgbm8gdGFibGUgb3IgdGhlIGRldGVybWluZWQgZm9jdXMgaXMgaW52YWxpZC5cbiAgICAgKi9cbiAgICBfZmluZFRhYmxlKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcmUgPSBleHBvcnRzLl9jcmVhdGVJc1RhYmxlUm93UmVnZXgob3B0aW9ucy5sZWZ0TWFyZ2luQ2hhcnMpO1xuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLl90ZXh0RWRpdG9yLmdldEN1cnNvclBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGxhc3RSb3cgPSB0aGlzLl90ZXh0RWRpdG9yLmdldExhc3RSb3coKTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICAgICAgbGV0IHN0YXJ0Um93ID0gcG9zLnJvdztcbiAgICAgICAgbGV0IGVuZFJvdyA9IHBvcy5yb3c7XG4gICAgICAgIC8vIGN1cnJlbnQgbGluZVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gdGhpcy5fdGV4dEVkaXRvci5nZXRMaW5lKHBvcy5yb3cpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl90ZXh0RWRpdG9yLmFjY2VwdHNUYWJsZUVkaXQocG9zLnJvdykgfHwgIXJlLnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwcmV2aW91cyBsaW5lc1xuICAgICAgICBmb3IgKGxldCByb3cgPSBwb3Mucm93IC0gMTsgcm93ID49IDA7IHJvdy0tKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gdGhpcy5fdGV4dEVkaXRvci5nZXRMaW5lKHJvdyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3RleHRFZGl0b3IuYWNjZXB0c1RhYmxlRWRpdChyb3cpIHx8ICFyZS50ZXN0KGxpbmUpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5lcy51bnNoaWZ0KGxpbmUpO1xuICAgICAgICAgICAgc3RhcnRSb3cgPSByb3c7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmV4dCBsaW5lc1xuICAgICAgICBmb3IgKGxldCByb3cgPSBwb3Mucm93ICsgMTsgcm93IDw9IGxhc3RSb3c7IHJvdysrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gdGhpcy5fdGV4dEVkaXRvci5nZXRMaW5lKHJvdyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3RleHRFZGl0b3IuYWNjZXB0c1RhYmxlRWRpdChyb3cpIHx8ICFyZS50ZXN0KGxpbmUpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgZW5kUm93ID0gcm93O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmdlID0gbmV3IHJhbmdlXzEuUmFuZ2UobmV3IHBvaW50XzEuUG9pbnQoc3RhcnRSb3csIDApLCBuZXcgcG9pbnRfMS5Qb2ludChlbmRSb3csIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLmxlbmd0aCkpO1xuICAgICAgICBjb25zdCB0YWJsZSA9IHBhcnNlcl8xLnJlYWRUYWJsZShsaW5lcywgb3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IGZvY3VzID0gdGFibGUuZm9jdXNPZlBvc2l0aW9uKHBvcywgc3RhcnRSb3cpO1xuICAgICAgICBpZiAoZm9jdXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gVE9ETzogVmFsaWRhdGUgdGhpcyBmb3IgY29ycmVjdG5lc3NcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcmFuZ2UsIGxpbmVzLCB0YWJsZSwgZm9jdXMgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluZHMgYSB0YWJsZSBhbmQgZG9lcyBhbiBvcGVyYXRpb24gd2l0aCBpdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIGZ1bmMgLSBBIGZ1bmN0aW9uIHRoYXQgZG9lcyBzb21lIG9wZXJhdGlvbiBvbiB0YWJsZSBpbmZvcm1hdGlvbiBvYnRhaW5lZCBieVxuICAgICAqIHtAbGluayBUYWJsZUVkaXRvciNfZmluZFRhYmxlfS5cbiAgICAgKi9cbiAgICBfd2l0aFRhYmxlKG9wdGlvbnMsIGZ1bmMpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuX2ZpbmRUYWJsZShvcHRpb25zKTtcbiAgICAgICAgaWYgKGluZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmMoaW5mbyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgbGluZXMgaW4gYSBnaXZlbiByYW5nZSBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSBzdGFydFJvdyAtIFN0YXJ0IHJvdyBpbmRleCwgc3RhcnRzIGZyb20gYDBgLlxuICAgICAqIEBwYXJhbSBlbmRSb3cgLSBFbmQgcm93IGluZGV4LlxuICAgICAqIExpbmVzIGZyb20gYHN0YXJ0Um93YCB0byBgZW5kUm93IC0gMWAgYXJlIHJlcGxhY2VkLlxuICAgICAqIEBwYXJhbSBuZXdMaW5lcyAtIE5ldyBsaW5lcy5cbiAgICAgKiBAcGFyYW0gW29sZExpbmVzPXVuZGVmaW5lZF0gLSBPbGQgbGluZXMgdG8gYmUgcmVwbGFjZWQuXG4gICAgICovXG4gICAgX3VwZGF0ZUxpbmVzKHN0YXJ0Um93LCBlbmRSb3csIG5ld0xpbmVzLCBvbGRMaW5lcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gYXBwbHkgdGhlIHNob3J0ZXN0IGVkaXQgc2NyaXB0XG4gICAgICAgICAgICAvLyBpZiBhIHRhYmxlIGlzIGVkaXRlZCBpbiBhIG5vcm1hbCBtYW5uZXIsIHRoZSBlZGl0IGRpc3RhbmNlIG5ldmVyIGV4Y2VlZHMgM1xuICAgICAgICAgICAgY29uc3Qgc2VzID0gZWRpdF9zY3JpcHRfMS5zaG9ydGVzdEVkaXRTY3JpcHQob2xkTGluZXMsIG5ld0xpbmVzLCAzKTtcbiAgICAgICAgICAgIGlmIChzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGVkaXRfc2NyaXB0XzEuYXBwbHlFZGl0U2NyaXB0KHRoaXMuX3RleHRFZGl0b3IsIHNlcywgc3RhcnRSb3cpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90ZXh0RWRpdG9yLnJlcGxhY2VMaW5lcyhzdGFydFJvdywgZW5kUm93LCBuZXdMaW5lcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBjdXJzb3IgcG9zaXRpb24gdG8gdGhlIGZvY3VzZWQgY2VsbCxcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHN0YXJ0Um93IC0gUm93IGluZGV4IHdoZXJlIHRoZSB0YWJsZSBzdGFydHMgaW4gdGhlIHRleHQgZWRpdG9yLlxuICAgICAqIEBwYXJhbSB0YWJsZSAtIEEgdGFibGUuXG4gICAgICogQHBhcmFtIGZvY3VzIC0gQSBmb2N1cyB0byB3aGljaCB0aGUgY3Vyc29yIHdpbGwgYmUgbW92ZWQuXG4gICAgICovXG4gICAgX21vdmVUb0ZvY3VzKHN0YXJ0Um93LCB0YWJsZSwgZm9jdXMpIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGFibGUucG9zaXRpb25PZkZvY3VzKGZvY3VzLCBzdGFydFJvdyk7XG4gICAgICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fdGV4dEVkaXRvci5zZXRDdXJzb3JQb3NpdGlvbihwb3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgdGhlIGZvY3VzZWQgY2VsbC5cbiAgICAgKiBJZiB0aGUgY2VsbCBoYXMgbm8gY29udGVudCB0byBiZSBzZWxlY3RlZCwgdGhlbiBqdXN0IG1vdmVzIHRoZSBjdXJzb3IgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSBzdGFydFJvdyAtIFJvdyBpbmRleCB3aGVyZSB0aGUgdGFibGUgc3RhcnRzIGluIHRoZSB0ZXh0IGVkaXRvci5cbiAgICAgKiBAcGFyYW0gdGFibGUgLSBBIHRhYmxlLlxuICAgICAqIEBwYXJhbSBmb2N1cyAtIEEgZm9jdXMgdG8gYmUgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgX3NlbGVjdEZvY3VzKHN0YXJ0Um93LCB0YWJsZSwgZm9jdXMpIHtcbiAgICAgICAgY29uc3QgcmFuZ2UgPSB0YWJsZS5zZWxlY3Rpb25SYW5nZU9mRm9jdXMoZm9jdXMsIHN0YXJ0Um93KTtcbiAgICAgICAgaWYgKHJhbmdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3RleHRFZGl0b3Iuc2V0U2VsZWN0aW9uUmFuZ2UocmFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbW92ZVRvRm9jdXMoc3RhcnRSb3csIHRhYmxlLCBmb2N1cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRm9ybWF0cyB0aGUgdGFibGUgdW5kZXIgdGhlIGN1cnNvci5cbiAgICAgKi9cbiAgICBmb3JtYXQob3B0aW9ucykge1xuICAgICAgICB0aGlzLl93aXRoVGFibGUob3B0aW9ucywgKHsgcmFuZ2UsIGxpbmVzLCB0YWJsZSwgZm9jdXMgfSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0ZvY3VzID0gZm9jdXM7XG4gICAgICAgICAgICAvLyBjb21wbGV0ZVxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVkID0gZm9ybWF0dGVyXzEuY29tcGxldGVUYWJsZSh0YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoY29tcGxldGVkLmRlbGltaXRlckluc2VydGVkICYmIG5ld0ZvY3VzLnJvdyA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGZvcm1hdFxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0dGVyXzEuZm9ybWF0VGFibGUoY29tcGxldGVkLnRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KGV4cG9ydHMuX2NvbXB1dGVOZXdPZmZzZXQobmV3Rm9jdXMsIGNvbXBsZXRlZC50YWJsZSwgZm9ybWF0dGVkLCBmYWxzZSkpO1xuICAgICAgICAgICAgLy8gYXBwbHlcbiAgICAgICAgICAgIHRoaXMuX3RleHRFZGl0b3IudHJhbnNhY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpbmVzKHJhbmdlLnN0YXJ0LnJvdywgcmFuZ2UuZW5kLnJvdyArIDEsIGZvcm1hdHRlZC50YWJsZS50b0xpbmVzKCksIGxpbmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlVG9Gb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb3JtYXRzIGFuZCBlc2NhcGVzIGZyb20gdGhlIHRhYmxlLlxuICAgICAqL1xuICAgIGVzY2FwZShvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3dpdGhUYWJsZShvcHRpb25zLCAoeyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9KSA9PiB7XG4gICAgICAgICAgICAvLyBjb21wbGV0ZVxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVkID0gZm9ybWF0dGVyXzEuY29tcGxldGVUYWJsZSh0YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAvLyBmb3JtYXRcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdHRlcl8xLmZvcm1hdFRhYmxlKGNvbXBsZXRlZC50YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAvLyBhcHBseVxuICAgICAgICAgICAgY29uc3QgbmV3Um93ID0gcmFuZ2UuZW5kLnJvdyArIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgPyAyIDogMSk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0RWRpdG9yLnRyYW5zYWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVMaW5lcyhyYW5nZS5zdGFydC5yb3csIHJhbmdlLmVuZC5yb3cgKyAxLCBmb3JtYXR0ZWQudGFibGUudG9MaW5lcygpLCBsaW5lcyk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1BvcztcbiAgICAgICAgICAgICAgICBpZiAobmV3Um93ID4gdGhpcy5fdGV4dEVkaXRvci5nZXRMYXN0Um93KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dEVkaXRvci5pbnNlcnRMaW5lKG5ld1JvdywgJycpO1xuICAgICAgICAgICAgICAgICAgICBuZXdQb3MgPSBuZXcgcG9pbnRfMS5Qb2ludChuZXdSb3csIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGBeJHtwYXJzZXJfMS5tYXJnaW5SZWdleFNyYyhvcHRpb25zLmxlZnRNYXJnaW5DaGFycyl9YCwgJ3UnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dExpbmUgPSB0aGlzLl90ZXh0RWRpdG9yLmdldExpbmUobmV3Um93KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IHJlLmV4ZWMobmV4dExpbmUpWzBdO1xuICAgICAgICAgICAgICAgICAgICBuZXdQb3MgPSBuZXcgcG9pbnRfMS5Qb2ludChuZXdSb3csIG1hcmdpbi5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl90ZXh0RWRpdG9yLnNldEN1cnNvclBvc2l0aW9uKG5ld1Bvcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTbWFydEN1cnNvcigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWx0ZXJzIHRoZSBhbGlnbm1lbnQgb2YgdGhlIGZvY3VzZWQgY29sdW1uLlxuICAgICAqL1xuICAgIGFsaWduQ29sdW1uKGFsaWdubWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl93aXRoVGFibGUob3B0aW9ucywgKHsgcmFuZ2UsIGxpbmVzLCB0YWJsZSwgZm9jdXMgfSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0ZvY3VzID0gZm9jdXM7XG4gICAgICAgICAgICAvLyBjb21wbGV0ZVxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVkID0gZm9ybWF0dGVyXzEuY29tcGxldGVUYWJsZSh0YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoY29tcGxldGVkLmRlbGltaXRlckluc2VydGVkICYmIG5ld0ZvY3VzLnJvdyA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFsdGVyIGFsaWdubWVudFxuICAgICAgICAgICAgbGV0IGFsdGVyZWQgPSBjb21wbGV0ZWQudGFibGU7XG4gICAgICAgICAgICBpZiAoMCA8PSBuZXdGb2N1cy5jb2x1bW4gJiZcbiAgICAgICAgICAgICAgICBuZXdGb2N1cy5jb2x1bW4gPD0gYWx0ZXJlZC5nZXRIZWFkZXJXaWR0aCgpIC0gMSkge1xuICAgICAgICAgICAgICAgIGFsdGVyZWQgPSBmb3JtYXR0ZXJfMS5hbHRlckFsaWdubWVudChjb21wbGV0ZWQudGFibGUsIG5ld0ZvY3VzLmNvbHVtbiwgYWxpZ25tZW50LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGZvcm1hdFxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0dGVyXzEuZm9ybWF0VGFibGUoYWx0ZXJlZCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldE9mZnNldChleHBvcnRzLl9jb21wdXRlTmV3T2Zmc2V0KG5ld0ZvY3VzLCBjb21wbGV0ZWQudGFibGUsIGZvcm1hdHRlZCwgZmFsc2UpKTtcbiAgICAgICAgICAgIC8vIGFwcGx5XG4gICAgICAgICAgICB0aGlzLl90ZXh0RWRpdG9yLnRyYW5zYWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVMaW5lcyhyYW5nZS5zdGFydC5yb3csIHJhbmdlLmVuZC5yb3cgKyAxLCBmb3JtYXR0ZWQudGFibGUudG9MaW5lcygpLCBsaW5lcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZVRvRm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgZm9jdXNlZCBjZWxsIGNvbnRlbnQuXG4gICAgICovXG4gICAgc2VsZWN0Q2VsbChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3dpdGhUYWJsZShvcHRpb25zLCAoeyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9KSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Rm9jdXMgPSBmb2N1cztcbiAgICAgICAgICAgIC8vIGNvbXBsZXRlXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmb3JtYXR0ZXJfMS5jb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Um93KG5ld0ZvY3VzLnJvdyArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZm9ybWF0XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXR0ZXJfMS5mb3JtYXRUYWJsZShjb21wbGV0ZWQudGFibGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRPZmZzZXQoZXhwb3J0cy5fY29tcHV0ZU5ld09mZnNldChuZXdGb2N1cywgY29tcGxldGVkLnRhYmxlLCBmb3JtYXR0ZWQsIGZhbHNlKSk7XG4gICAgICAgICAgICAvLyBhcHBseVxuICAgICAgICAgICAgdGhpcy5fdGV4dEVkaXRvci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGluZXMocmFuZ2Uuc3RhcnQucm93LCByYW5nZS5lbmQucm93ICsgMSwgZm9ybWF0dGVkLnRhYmxlLnRvTGluZXMoKSwgbGluZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdEZvY3VzKHJhbmdlLnN0YXJ0LnJvdywgZm9ybWF0dGVkLnRhYmxlLCBuZXdGb2N1cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBmb2N1cyB0byBhbm90aGVyIGNlbGwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcm93T2Zmc2V0IC0gT2Zmc2V0IGluIHJvdy5cbiAgICAgKiBAcGFyYW0gY29sdW1uT2Zmc2V0IC0gT2Zmc2V0IGluIGNvbHVtbi5cbiAgICAgKi9cbiAgICBtb3ZlRm9jdXMocm93T2Zmc2V0LCBjb2x1bW5PZmZzZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fd2l0aFRhYmxlKG9wdGlvbnMsICh7IHJhbmdlLCBsaW5lcywgdGFibGUsIGZvY3VzIH0pID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdGb2N1cyA9IGZvY3VzO1xuICAgICAgICAgICAgLy8gY29tcGxldGVcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGZvcm1hdHRlcl8xLmNvbXBsZXRlVGFibGUodGFibGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGNvbXBsZXRlZC5kZWxpbWl0ZXJJbnNlcnRlZCAmJiBuZXdGb2N1cy5yb3cgPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3cobmV3Rm9jdXMucm93ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdGFydEZvY3VzID0gbmV3Rm9jdXM7XG4gICAgICAgICAgICAvLyBtb3ZlIGZvY3VzXG4gICAgICAgICAgICBpZiAocm93T2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gY29tcGxldGVkLnRhYmxlLmdldEhlaWdodCgpO1xuICAgICAgICAgICAgICAgIC8vIHNraXAgZGVsaW1pdGVyIHJvd1xuICAgICAgICAgICAgICAgIGNvbnN0IHNraXAgPSBuZXdGb2N1cy5yb3cgPCAxICYmIG5ld0ZvY3VzLnJvdyArIHJvd09mZnNldCA+PSAxXG4gICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICA6IG5ld0ZvY3VzLnJvdyA+IDEgJiYgbmV3Rm9jdXMucm93ICsgcm93T2Zmc2V0IDw9IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhNYXRoLm1pbihNYXRoLm1heChuZXdGb2N1cy5yb3cgKyByb3dPZmZzZXQgKyBza2lwLCAwKSwgaGVpZ2h0IDw9IDIgPyAwIDogaGVpZ2h0IC0gMSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbHVtbk9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gY29tcGxldGVkLnRhYmxlLmdldEhlYWRlcldpZHRoKCk7XG4gICAgICAgICAgICAgICAgaWYgKCEobmV3Rm9jdXMuY29sdW1uIDwgMCAmJiBjb2x1bW5PZmZzZXQgPCAwKSAmJlxuICAgICAgICAgICAgICAgICAgICAhKG5ld0ZvY3VzLmNvbHVtbiA+IHdpZHRoIC0gMSAmJiBjb2x1bW5PZmZzZXQgPiAwKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldENvbHVtbihNYXRoLm1pbihNYXRoLm1heChuZXdGb2N1cy5jb2x1bW4gKyBjb2x1bW5PZmZzZXQsIDApLCB3aWR0aCAtIDEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtb3ZlZCA9ICFuZXdGb2N1cy5wb3NFcXVhbHMoc3RhcnRGb2N1cyk7XG4gICAgICAgICAgICAvLyBmb3JtYXRcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdHRlcl8xLmZvcm1hdFRhYmxlKGNvbXBsZXRlZC50YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldE9mZnNldChleHBvcnRzLl9jb21wdXRlTmV3T2Zmc2V0KG5ld0ZvY3VzLCBjb21wbGV0ZWQudGFibGUsIGZvcm1hdHRlZCwgbW92ZWQpKTtcbiAgICAgICAgICAgIC8vIGFwcGx5XG4gICAgICAgICAgICB0aGlzLl90ZXh0RWRpdG9yLnRyYW5zYWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVMaW5lcyhyYW5nZS5zdGFydC5yb3csIHJhbmdlLmVuZC5yb3cgKyAxLCBmb3JtYXR0ZWQudGFibGUudG9MaW5lcygpLCBsaW5lcyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdEZvY3VzKHJhbmdlLnN0YXJ0LnJvdywgZm9ybWF0dGVkLnRhYmxlLCBuZXdGb2N1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlVG9Gb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFNtYXJ0Q3Vyc29yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgZm9jdXMgdG8gdGhlIG5leHQgY2VsbC5cbiAgICAgKi9cbiAgICBuZXh0Q2VsbChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3dpdGhUYWJsZShvcHRpb25zLCAoeyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9KSA9PiB7XG4gICAgICAgICAgICAvLyByZXNldCBzbWFydCBjdXJzb3IgaWYgbW92ZWRcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzTW92ZWQgPSAodGhpcy5fc2NUYWJsZVBvcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgIXJhbmdlLnN0YXJ0LmVxdWFscyh0aGlzLl9zY1RhYmxlUG9zKSkgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5fc2NMYXN0Rm9jdXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAhZm9jdXMucG9zRXF1YWxzKHRoaXMuX3NjTGFzdEZvY3VzKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2NBY3RpdmUgJiYgZm9jdXNNb3ZlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTbWFydEN1cnNvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5ld0ZvY3VzID0gZm9jdXM7XG4gICAgICAgICAgICAvLyBjb21wbGV0ZVxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVkID0gZm9ybWF0dGVyXzEuY29tcGxldGVUYWJsZSh0YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoY29tcGxldGVkLmRlbGltaXRlckluc2VydGVkICYmIG5ld0ZvY3VzLnJvdyA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0Rm9jdXMgPSBuZXdGb2N1cztcbiAgICAgICAgICAgIGxldCBhbHRlcmVkID0gY29tcGxldGVkLnRhYmxlO1xuICAgICAgICAgICAgLy8gbW92ZSBmb2N1c1xuICAgICAgICAgICAgaWYgKG5ld0ZvY3VzLnJvdyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmUgdG8gbmV4dCByb3dcbiAgICAgICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdygyKTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zbWFydEN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Rm9jdXMuY29sdW1uIDwgMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJlZC5nZXRIZWFkZXJXaWR0aCgpIC0gMSA8IG5ld0ZvY3VzLmNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRDb2x1bW4oMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Q29sdW1uKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpbnNlcnQgYW4gZW1wdHkgcm93IGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgIGlmIChuZXdGb2N1cy5yb3cgPiBhbHRlcmVkLmdldEhlaWdodCgpIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBuZXcgQXJyYXkoYWx0ZXJlZC5nZXRIZWFkZXJXaWR0aCgpKS5maWxsKG5ldyB0YWJsZV9jZWxsXzEuVGFibGVDZWxsKCcnKSk7XG4gICAgICAgICAgICAgICAgICAgIGFsdGVyZWQgPSBmb3JtYXR0ZXJfMS5pbnNlcnRSb3coYWx0ZXJlZCwgYWx0ZXJlZC5nZXRIZWlnaHQoKSwgbmV3IHRhYmxlX3Jvd18xLlRhYmxlUm93KHJvdywgJycsICcnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaW5zZXJ0IGFuIGVtcHR5IGNvbHVtbiBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICBpZiAobmV3Rm9jdXMuY29sdW1uID4gYWx0ZXJlZC5nZXRIZWFkZXJXaWR0aCgpIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBuZXcgQXJyYXkoYWx0ZXJlZC5nZXRIZWlnaHQoKSAtIDEpLmZpbGwobmV3IHRhYmxlX2NlbGxfMS5UYWJsZUNlbGwoJycpKTtcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJlZCA9IGZvcm1hdHRlcl8xLmluc2VydENvbHVtbihhbHRlcmVkLCBhbHRlcmVkLmdldEhlYWRlcldpZHRoKCksIGNvbHVtbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIG1vdmUgdG8gbmV4dCBjb2x1bW5cbiAgICAgICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldENvbHVtbihuZXdGb2N1cy5jb2x1bW4gKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGZvcm1hdFxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0dGVyXzEuZm9ybWF0VGFibGUoYWx0ZXJlZCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldE9mZnNldChleHBvcnRzLl9jb21wdXRlTmV3T2Zmc2V0KG5ld0ZvY3VzLCBhbHRlcmVkLCBmb3JtYXR0ZWQsIHRydWUpKTtcbiAgICAgICAgICAgIC8vIGFwcGx5XG4gICAgICAgICAgICBjb25zdCBuZXdMaW5lcyA9IGZvcm1hdHRlZC50YWJsZS50b0xpbmVzKCk7XG4gICAgICAgICAgICBpZiAobmV3Rm9jdXMuY29sdW1uID4gZm9ybWF0dGVkLnRhYmxlLmdldEhlYWRlcldpZHRoKCkgLSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gYWRkIG1hcmdpblxuICAgICAgICAgICAgICAgIG5ld0xpbmVzW25ld0ZvY3VzLnJvd10gKz0gJyAnO1xuICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdGV4dEVkaXRvci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGluZXMocmFuZ2Uuc3RhcnQucm93LCByYW5nZS5lbmQucm93ICsgMSwgbmV3TGluZXMsIGxpbmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RGb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zbWFydEN1cnNvcikge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fc2NBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWN0aXZhdGUgc21hcnQgY3Vyc29yXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NUYWJsZVBvcyA9IHJhbmdlLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRGb2N1cy5jb2x1bW4gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQudGFibGUuZ2V0SGVhZGVyV2lkdGgoKSAtIDEgPCBzdGFydEZvY3VzLmNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NTdGFydEZvY3VzID0gbmV3IGZvY3VzXzEuRm9jdXMoc3RhcnRGb2N1cy5yb3csIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NTdGFydEZvY3VzID0gc3RhcnRGb2N1cztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zY0xhc3RGb2N1cyA9IG5ld0ZvY3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIGZvY3VzIHRvIHRoZSBwcmV2aW91cyBjZWxsLlxuICAgICAqL1xuICAgIHByZXZpb3VzQ2VsbChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3dpdGhUYWJsZShvcHRpb25zLCAoeyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9KSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Rm9jdXMgPSBmb2N1cztcbiAgICAgICAgICAgIC8vIGNvbXBsZXRlXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmb3JtYXR0ZXJfMS5jb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Um93KG5ld0ZvY3VzLnJvdyArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RhcnRGb2N1cyA9IG5ld0ZvY3VzO1xuICAgICAgICAgICAgLy8gbW92ZSBmb2N1c1xuICAgICAgICAgICAgaWYgKG5ld0ZvY3VzLnJvdyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdGb2N1cy5jb2x1bW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Q29sdW1uKG5ld0ZvY3VzLmNvbHVtbiAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld0ZvY3VzLnJvdyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3IGZvY3VzXzEuRm9jdXMoMCwgY29tcGxldGVkLnRhYmxlLmdldEhlYWRlcldpZHRoKCkgLSAxLCBuZXdGb2N1cy5vZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0ZvY3VzLmNvbHVtbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRDb2x1bW4obmV3Rm9jdXMuY29sdW1uIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdGb2N1cyA9IG5ldyBmb2N1c18xLkZvY3VzKG5ld0ZvY3VzLnJvdyA9PT0gMiA/IDAgOiBuZXdGb2N1cy5yb3cgLSAxLCBjb21wbGV0ZWQudGFibGUuZ2V0SGVhZGVyV2lkdGgoKSAtIDEsIG5ld0ZvY3VzLm9mZnNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW92ZWQgPSAhbmV3Rm9jdXMucG9zRXF1YWxzKHN0YXJ0Rm9jdXMpO1xuICAgICAgICAgICAgLy8gZm9ybWF0XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXR0ZXJfMS5mb3JtYXRUYWJsZShjb21wbGV0ZWQudGFibGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRPZmZzZXQoZXhwb3J0cy5fY29tcHV0ZU5ld09mZnNldChuZXdGb2N1cywgY29tcGxldGVkLnRhYmxlLCBmb3JtYXR0ZWQsIG1vdmVkKSk7XG4gICAgICAgICAgICAvLyBhcHBseVxuICAgICAgICAgICAgdGhpcy5fdGV4dEVkaXRvci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGluZXMocmFuZ2Uuc3RhcnQucm93LCByYW5nZS5lbmQucm93ICsgMSwgZm9ybWF0dGVkLnRhYmxlLnRvTGluZXMoKSwgbGluZXMpO1xuICAgICAgICAgICAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RGb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW92ZVRvRm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTbWFydEN1cnNvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIGZvY3VzIHRvIHRoZSBuZXh0IHJvdy5cbiAgICAgKi9cbiAgICBuZXh0Um93KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fd2l0aFRhYmxlKG9wdGlvbnMsICh7IHJhbmdlLCBsaW5lcywgdGFibGUsIGZvY3VzIH0pID0+IHtcbiAgICAgICAgICAgIC8vIHJlc2V0IHNtYXJ0IGN1cnNvciBpZiBtb3ZlZFxuICAgICAgICAgICAgY29uc3QgZm9jdXNNb3ZlZCA9ICh0aGlzLl9zY1RhYmxlUG9zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAhcmFuZ2Uuc3RhcnQuZXF1YWxzKHRoaXMuX3NjVGFibGVQb3MpKSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLl9zY0xhc3RGb2N1cyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgICFmb2N1cy5wb3NFcXVhbHModGhpcy5fc2NMYXN0Rm9jdXMpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zY0FjdGl2ZSAmJiBmb2N1c01vdmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFNtYXJ0Q3Vyc29yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmV3Rm9jdXMgPSBmb2N1cztcbiAgICAgICAgICAgIC8vIGNvbXBsZXRlXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmb3JtYXR0ZXJfMS5jb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Um93KG5ld0ZvY3VzLnJvdyArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RhcnRGb2N1cyA9IG5ld0ZvY3VzO1xuICAgICAgICAgICAgbGV0IGFsdGVyZWQgPSBjb21wbGV0ZWQudGFibGU7XG4gICAgICAgICAgICAvLyBtb3ZlIGZvY3VzXG4gICAgICAgICAgICBpZiAobmV3Rm9jdXMucm93ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3coMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNtYXJ0Q3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NjQWN0aXZlICYmIHRoaXMuX3NjU3RhcnRGb2N1cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Q29sdW1uKHRoaXMuX3NjU3RhcnRGb2N1cy5jb2x1bW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdGb2N1cy5jb2x1bW4gPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgIGFsdGVyZWQuZ2V0SGVhZGVyV2lkdGgoKSAtIDEgPCBuZXdGb2N1cy5jb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRDb2x1bW4oMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRDb2x1bW4oMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbnNlcnQgZW1wdHkgcm93IGlmIG5lZWRlZFxuICAgICAgICAgICAgaWYgKG5ld0ZvY3VzLnJvdyA+IGFsdGVyZWQuZ2V0SGVpZ2h0KCkgLSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gbmV3IEFycmF5KGFsdGVyZWQuZ2V0SGVhZGVyV2lkdGgoKSkuZmlsbChuZXcgdGFibGVfY2VsbF8xLlRhYmxlQ2VsbCgnJykpO1xuICAgICAgICAgICAgICAgIGFsdGVyZWQgPSBmb3JtYXR0ZXJfMS5pbnNlcnRSb3coYWx0ZXJlZCwgYWx0ZXJlZC5nZXRIZWlnaHQoKSwgbmV3IHRhYmxlX3Jvd18xLlRhYmxlUm93KHJvdywgJycsICcnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmb3JtYXRcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdHRlcl8xLmZvcm1hdFRhYmxlKGFsdGVyZWQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRPZmZzZXQoZXhwb3J0cy5fY29tcHV0ZU5ld09mZnNldChuZXdGb2N1cywgYWx0ZXJlZCwgZm9ybWF0dGVkLCB0cnVlKSk7XG4gICAgICAgICAgICAvLyBhcHBseVxuICAgICAgICAgICAgdGhpcy5fdGV4dEVkaXRvci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGluZXMocmFuZ2Uuc3RhcnQucm93LCByYW5nZS5lbmQucm93ICsgMSwgZm9ybWF0dGVkLnRhYmxlLnRvTGluZXMoKSwgbGluZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdEZvY3VzKHJhbmdlLnN0YXJ0LnJvdywgZm9ybWF0dGVkLnRhYmxlLCBuZXdGb2N1cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNtYXJ0Q3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9zY0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBhY3RpdmF0ZSBzbWFydCBjdXJzb3JcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY1RhYmxlUG9zID0gcmFuZ2Uuc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEZvY3VzLmNvbHVtbiA8IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZC50YWJsZS5nZXRIZWFkZXJXaWR0aCgpIC0gMSA8IHN0YXJ0Rm9jdXMuY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY1N0YXJ0Rm9jdXMgPSBuZXcgZm9jdXNfMS5Gb2N1cyhzdGFydEZvY3VzLnJvdywgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY1N0YXJ0Rm9jdXMgPSBzdGFydEZvY3VzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3NjTGFzdEZvY3VzID0gbmV3Rm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGFuIGVtcHR5IHJvdyBhdCB0aGUgY3VycmVudCBmb2N1cy5cbiAgICAgKi9cbiAgICBpbnNlcnRSb3cob3B0aW9ucykge1xuICAgICAgICB0aGlzLl93aXRoVGFibGUob3B0aW9ucywgKHsgcmFuZ2UsIGxpbmVzLCB0YWJsZSwgZm9jdXMgfSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0ZvY3VzID0gZm9jdXM7XG4gICAgICAgICAgICAvLyBjb21wbGV0ZVxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVkID0gZm9ybWF0dGVyXzEuY29tcGxldGVUYWJsZSh0YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoY29tcGxldGVkLmRlbGltaXRlckluc2VydGVkICYmIG5ld0ZvY3VzLnJvdyA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1vdmUgZm9jdXNcbiAgICAgICAgICAgIGlmIChuZXdGb2N1cy5yb3cgPD0gMSkge1xuICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Um93KDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRDb2x1bW4oMCk7XG4gICAgICAgICAgICAvLyBpbnNlcnQgYW4gZW1wdHkgcm93XG4gICAgICAgICAgICBjb25zdCByb3cgPSBuZXcgQXJyYXkoY29tcGxldGVkLnRhYmxlLmdldEhlYWRlcldpZHRoKCkpLmZpbGwobmV3IHRhYmxlX2NlbGxfMS5UYWJsZUNlbGwoJycpKTtcbiAgICAgICAgICAgIGNvbnN0IGFsdGVyZWQgPSBmb3JtYXR0ZXJfMS5pbnNlcnRSb3coY29tcGxldGVkLnRhYmxlLCBuZXdGb2N1cy5yb3csIG5ldyB0YWJsZV9yb3dfMS5UYWJsZVJvdyhyb3csICcnLCAnJykpO1xuICAgICAgICAgICAgLy8gZm9ybWF0XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXR0ZXJfMS5mb3JtYXRUYWJsZShhbHRlcmVkLCBvcHRpb25zKTtcbiAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KGV4cG9ydHMuX2NvbXB1dGVOZXdPZmZzZXQobmV3Rm9jdXMsIGFsdGVyZWQsIGZvcm1hdHRlZCwgdHJ1ZSkpO1xuICAgICAgICAgICAgLy8gYXBwbHlcbiAgICAgICAgICAgIHRoaXMuX3RleHRFZGl0b3IudHJhbnNhY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpbmVzKHJhbmdlLnN0YXJ0LnJvdywgcmFuZ2UuZW5kLnJvdyArIDEsIGZvcm1hdHRlZC50YWJsZS50b0xpbmVzKCksIGxpbmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlVG9Gb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U21hcnRDdXJzb3IoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSByb3cgYXQgdGhlIGN1cnJlbnQgZm9jdXMuXG4gICAgICovXG4gICAgZGVsZXRlUm93KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fd2l0aFRhYmxlKG9wdGlvbnMsICh7IHJhbmdlLCBsaW5lcywgdGFibGUsIGZvY3VzIH0pID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdGb2N1cyA9IGZvY3VzO1xuICAgICAgICAgICAgLy8gY29tcGxldGVcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGZvcm1hdHRlcl8xLmNvbXBsZXRlVGFibGUodGFibGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGNvbXBsZXRlZC5kZWxpbWl0ZXJJbnNlcnRlZCAmJiBuZXdGb2N1cy5yb3cgPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3cobmV3Rm9jdXMucm93ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkZWxldGUgYSByb3dcbiAgICAgICAgICAgIGxldCBhbHRlcmVkID0gY29tcGxldGVkLnRhYmxlO1xuICAgICAgICAgICAgbGV0IG1vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAobmV3Rm9jdXMucm93ICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgYWx0ZXJlZCA9IGZvcm1hdHRlcl8xLmRlbGV0ZVJvdyhhbHRlcmVkLCBuZXdGb2N1cy5yb3cpO1xuICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAobmV3Rm9jdXMucm93ID4gYWx0ZXJlZC5nZXRIZWlnaHQoKSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3cobmV3Rm9jdXMucm93ID09PSAyID8gMCA6IG5ld0ZvY3VzLnJvdyAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGZvcm1hdFxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0dGVyXzEuZm9ybWF0VGFibGUoYWx0ZXJlZCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldE9mZnNldChleHBvcnRzLl9jb21wdXRlTmV3T2Zmc2V0KG5ld0ZvY3VzLCBhbHRlcmVkLCBmb3JtYXR0ZWQsIG1vdmVkKSk7XG4gICAgICAgICAgICAvLyBhcHBseVxuICAgICAgICAgICAgdGhpcy5fdGV4dEVkaXRvci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGluZXMocmFuZ2Uuc3RhcnQucm93LCByYW5nZS5lbmQucm93ICsgMSwgZm9ybWF0dGVkLnRhYmxlLnRvTGluZXMoKSwgbGluZXMpO1xuICAgICAgICAgICAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RGb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW92ZVRvRm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTbWFydEN1cnNvcigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIGZvY3VzZWQgcm93IGJ5IHRoZSBzcGVjaWZpZWQgb2Zmc2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIG9mZnNldCAtIEFuIG9mZnNldCB0aGUgcm93IGlzIG1vdmVkIGJ5LlxuICAgICAqL1xuICAgIG1vdmVSb3cob2Zmc2V0LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3dpdGhUYWJsZShvcHRpb25zLCAoeyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9KSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Rm9jdXMgPSBmb2N1cztcbiAgICAgICAgICAgIC8vIGNvbXBsZXRlXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmb3JtYXR0ZXJfMS5jb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Um93KG5ld0ZvY3VzLnJvdyArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbW92ZSByb3dcbiAgICAgICAgICAgIGxldCBhbHRlcmVkID0gY29tcGxldGVkLnRhYmxlO1xuICAgICAgICAgICAgaWYgKG5ld0ZvY3VzLnJvdyA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0ID0gTWF0aC5taW4oTWF0aC5tYXgobmV3Rm9jdXMucm93ICsgb2Zmc2V0LCAyKSwgYWx0ZXJlZC5nZXRIZWlnaHQoKSAtIDEpO1xuICAgICAgICAgICAgICAgIGFsdGVyZWQgPSBmb3JtYXR0ZXJfMS5tb3ZlUm93KGFsdGVyZWQsIG5ld0ZvY3VzLnJvdywgZGVzdCk7XG4gICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3coZGVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmb3JtYXRcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdHRlcl8xLmZvcm1hdFRhYmxlKGFsdGVyZWQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRPZmZzZXQoZXhwb3J0cy5fY29tcHV0ZU5ld09mZnNldChuZXdGb2N1cywgYWx0ZXJlZCwgZm9ybWF0dGVkLCBmYWxzZSkpO1xuICAgICAgICAgICAgLy8gYXBwbHlcbiAgICAgICAgICAgIHRoaXMuX3RleHRFZGl0b3IudHJhbnNhY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpbmVzKHJhbmdlLnN0YXJ0LnJvdywgcmFuZ2UuZW5kLnJvdyArIDEsIGZvcm1hdHRlZC50YWJsZS50b0xpbmVzKCksIGxpbmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlVG9Gb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U21hcnRDdXJzb3IoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNvcnRzIHJvd3MgYWxwaGFudW1lcmljYWxseSB1c2luZyB0aGUgY29sdW1uIGF0IHRoZSBjdXJyZW50IGZvY3VzLlxuICAgICAqL1xuICAgIHNvcnRSb3dzKHNvcnRPcmRlciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl93aXRoVGFibGUob3B0aW9ucywgKHsgcmFuZ2UsIGxpbmVzLCB0YWJsZSwgZm9jdXMgfSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0ZvY3VzID0gZm9jdXM7XG4gICAgICAgICAgICAvLyBjb21wbGV0ZVxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVkID0gZm9ybWF0dGVyXzEuY29tcGxldGVUYWJsZSh0YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoY29tcGxldGVkLmRlbGltaXRlckluc2VydGVkICYmIG5ld0ZvY3VzLnJvdyA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJvZHlSb3dzID0gY29tcGxldGVkLnRhYmxlLmdldFJvd3MoKS5zbGljZSgyKTtcbiAgICAgICAgICAgIGJvZHlSb3dzLnNvcnQoKHJvd0EsIHJvd0IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsQSA9IHJvd0EuZ2V0Q2VsbEF0KG5ld0ZvY3VzLmNvbHVtbik7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbEIgPSByb3dCLmdldENlbGxBdChuZXdGb2N1cy5jb2x1bW4pO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsQSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsQiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNlbGxCID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRBID0gY2VsbEEuY29udGVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50QiA9IGNlbGxCLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRBID09PSBjb250ZW50Qikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29udGVudEEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRlbnRCID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudEEgPCBjb250ZW50QiA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5EZXNjZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgYm9keVJvd3MucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWxsUm93cyA9IGNvbXBsZXRlZC50YWJsZS5nZXRSb3dzKCkuc2xpY2UoMCwgMikuY29uY2F0KGJvZHlSb3dzKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RhYmxlID0gbmV3IHRhYmxlXzEuVGFibGUoYWxsUm93cyk7XG4gICAgICAgICAgICAvLyBmb3JtYXRcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdHRlcl8xLmZvcm1hdFRhYmxlKG5ld1RhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KGV4cG9ydHMuX2NvbXB1dGVOZXdPZmZzZXQobmV3Rm9jdXMsIG5ld1RhYmxlLCBmb3JtYXR0ZWQsIHRydWUpKTtcbiAgICAgICAgICAgIC8vIGFwcGx5XG4gICAgICAgICAgICB0aGlzLl90ZXh0RWRpdG9yLnRyYW5zYWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVMaW5lcyhyYW5nZS5zdGFydC5yb3csIHJhbmdlLmVuZC5yb3cgKyAxLCBmb3JtYXR0ZWQudGFibGUudG9MaW5lcygpLCBsaW5lcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZVRvRm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yZXNldFNtYXJ0Q3Vyc29yKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGFuIGVtcHR5IGNvbHVtbiBhdCB0aGUgY3VycmVudCBmb2N1cy5cbiAgICAgKi9cbiAgICBpbnNlcnRDb2x1bW4ob3B0aW9ucykge1xuICAgICAgICB0aGlzLl93aXRoVGFibGUob3B0aW9ucywgKHsgcmFuZ2UsIGxpbmVzLCB0YWJsZSwgZm9jdXMgfSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0ZvY3VzID0gZm9jdXM7XG4gICAgICAgICAgICAvLyBjb21wbGV0ZVxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVkID0gZm9ybWF0dGVyXzEuY29tcGxldGVUYWJsZSh0YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoY29tcGxldGVkLmRlbGltaXRlckluc2VydGVkICYmIG5ld0ZvY3VzLnJvdyA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1vdmUgZm9jdXNcbiAgICAgICAgICAgIGlmIChuZXdGb2N1cy5yb3cgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdygwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdGb2N1cy5jb2x1bW4gPCAwKSB7XG4gICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRDb2x1bW4oMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbnNlcnQgYW4gZW1wdHkgY29sdW1uXG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBuZXcgQXJyYXkoY29tcGxldGVkLnRhYmxlLmdldEhlaWdodCgpIC0gMSkuZmlsbChuZXcgdGFibGVfY2VsbF8xLlRhYmxlQ2VsbCgnJykpO1xuICAgICAgICAgICAgY29uc3QgYWx0ZXJlZCA9IGZvcm1hdHRlcl8xLmluc2VydENvbHVtbihjb21wbGV0ZWQudGFibGUsIG5ld0ZvY3VzLmNvbHVtbiwgY29sdW1uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIC8vIGZvcm1hdFxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0dGVyXzEuZm9ybWF0VGFibGUoYWx0ZXJlZCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldE9mZnNldChleHBvcnRzLl9jb21wdXRlTmV3T2Zmc2V0KG5ld0ZvY3VzLCBhbHRlcmVkLCBmb3JtYXR0ZWQsIHRydWUpKTtcbiAgICAgICAgICAgIC8vIGFwcGx5XG4gICAgICAgICAgICB0aGlzLl90ZXh0RWRpdG9yLnRyYW5zYWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVMaW5lcyhyYW5nZS5zdGFydC5yb3csIHJhbmdlLmVuZC5yb3cgKyAxLCBmb3JtYXR0ZWQudGFibGUudG9MaW5lcygpLCBsaW5lcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZVRvRm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yZXNldFNtYXJ0Q3Vyc29yKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGEgY29sdW1uIGF0IHRoZSBjdXJyZW50IGZvY3VzLlxuICAgICAqL1xuICAgIGRlbGV0ZUNvbHVtbihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3dpdGhUYWJsZShvcHRpb25zLCAoeyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9KSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Rm9jdXMgPSBmb2N1cztcbiAgICAgICAgICAgIC8vIGNvbXBsZXRlXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmb3JtYXR0ZXJfMS5jb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Um93KG5ld0ZvY3VzLnJvdyArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbW92ZSBmb2N1c1xuICAgICAgICAgICAgaWYgKG5ld0ZvY3VzLnJvdyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Um93KDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGVsZXRlIGEgY29sdW1uXG4gICAgICAgICAgICBsZXQgYWx0ZXJlZCA9IGNvbXBsZXRlZC50YWJsZTtcbiAgICAgICAgICAgIGxldCBtb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKDAgPD0gbmV3Rm9jdXMuY29sdW1uICYmXG4gICAgICAgICAgICAgICAgbmV3Rm9jdXMuY29sdW1uIDw9IGFsdGVyZWQuZ2V0SGVhZGVyV2lkdGgoKSAtIDEpIHtcbiAgICAgICAgICAgICAgICBhbHRlcmVkID0gZm9ybWF0dGVyXzEuZGVsZXRlQ29sdW1uKGNvbXBsZXRlZC50YWJsZSwgbmV3Rm9jdXMuY29sdW1uLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0ZvY3VzLmNvbHVtbiA+IGFsdGVyZWQuZ2V0SGVhZGVyV2lkdGgoKSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRDb2x1bW4oYWx0ZXJlZC5nZXRIZWFkZXJXaWR0aCgpIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZm9ybWF0XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXR0ZXJfMS5mb3JtYXRUYWJsZShhbHRlcmVkLCBvcHRpb25zKTtcbiAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KGV4cG9ydHMuX2NvbXB1dGVOZXdPZmZzZXQobmV3Rm9jdXMsIGFsdGVyZWQsIGZvcm1hdHRlZCwgbW92ZWQpKTtcbiAgICAgICAgICAgIC8vIGFwcGx5XG4gICAgICAgICAgICB0aGlzLl90ZXh0RWRpdG9yLnRyYW5zYWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVMaW5lcyhyYW5nZS5zdGFydC5yb3csIHJhbmdlLmVuZC5yb3cgKyAxLCBmb3JtYXR0ZWQudGFibGUudG9MaW5lcygpLCBsaW5lcyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdEZvY3VzKHJhbmdlLnN0YXJ0LnJvdywgZm9ybWF0dGVkLnRhYmxlLCBuZXdGb2N1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlVG9Gb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yZXNldFNtYXJ0Q3Vyc29yKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgZm9jdXNlZCBjb2x1bW4gYnkgdGhlIHNwZWNpZmllZCBvZmZzZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IC0gQW4gb2Zmc2V0IHRoZSBjb2x1bW4gaXMgbW92ZWQgYnkuXG4gICAgICovXG4gICAgbW92ZUNvbHVtbihvZmZzZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fd2l0aFRhYmxlKG9wdGlvbnMsICh7IHJhbmdlLCBsaW5lcywgdGFibGUsIGZvY3VzIH0pID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdGb2N1cyA9IGZvY3VzO1xuICAgICAgICAgICAgLy8gY29tcGxldGVcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGZvcm1hdHRlcl8xLmNvbXBsZXRlVGFibGUodGFibGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGNvbXBsZXRlZC5kZWxpbWl0ZXJJbnNlcnRlZCAmJiBuZXdGb2N1cy5yb3cgPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3cobmV3Rm9jdXMucm93ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtb3ZlIGNvbHVtblxuICAgICAgICAgICAgbGV0IGFsdGVyZWQgPSBjb21wbGV0ZWQudGFibGU7XG4gICAgICAgICAgICBpZiAoMCA8PSBuZXdGb2N1cy5jb2x1bW4gJiZcbiAgICAgICAgICAgICAgICBuZXdGb2N1cy5jb2x1bW4gPD0gYWx0ZXJlZC5nZXRIZWFkZXJXaWR0aCgpIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc3QgPSBNYXRoLm1pbihNYXRoLm1heChuZXdGb2N1cy5jb2x1bW4gKyBvZmZzZXQsIDApLCBhbHRlcmVkLmdldEhlYWRlcldpZHRoKCkgLSAxKTtcbiAgICAgICAgICAgICAgICBhbHRlcmVkID0gZm9ybWF0dGVyXzEubW92ZUNvbHVtbihhbHRlcmVkLCBuZXdGb2N1cy5jb2x1bW4sIGRlc3QpO1xuICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Q29sdW1uKGRlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZm9ybWF0XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXR0ZXJfMS5mb3JtYXRUYWJsZShhbHRlcmVkLCBvcHRpb25zKTtcbiAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KGV4cG9ydHMuX2NvbXB1dGVOZXdPZmZzZXQobmV3Rm9jdXMsIGFsdGVyZWQsIGZvcm1hdHRlZCwgZmFsc2UpKTtcbiAgICAgICAgICAgIC8vIGFwcGx5XG4gICAgICAgICAgICB0aGlzLl90ZXh0RWRpdG9yLnRyYW5zYWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVMaW5lcyhyYW5nZS5zdGFydC5yb3csIHJhbmdlLmVuZC5yb3cgKyAxLCBmb3JtYXR0ZWQudGFibGUudG9MaW5lcygpLCBsaW5lcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZVRvRm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yZXNldFNtYXJ0Q3Vyc29yKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb3JtYXRzIGFsbCB0aGUgdGFibGVzIGluIHRoZSB0ZXh0IGVkaXRvci5cbiAgICAgKi9cbiAgICBmb3JtYXRBbGwob3B0aW9ucykge1xuICAgICAgICB0aGlzLl90ZXh0RWRpdG9yLnRyYW5zYWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlID0gZXhwb3J0cy5fY3JlYXRlSXNUYWJsZVJvd1JlZ2V4KG9wdGlvbnMubGVmdE1hcmdpbkNoYXJzKTtcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLl90ZXh0RWRpdG9yLmdldEN1cnNvclBvc2l0aW9uKCk7XG4gICAgICAgICAgICBsZXQgbGluZXMgPSBbXTtcbiAgICAgICAgICAgIGxldCBzdGFydFJvdyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGxldCBsYXN0Um93ID0gdGhpcy5fdGV4dEVkaXRvci5nZXRMYXN0Um93KCk7XG4gICAgICAgICAgICAvLyBmaW5kIHRhYmxlc1xuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDw9IGxhc3RSb3c7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IHRoaXMuX3RleHRFZGl0b3IuZ2V0TGluZShyb3cpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0RWRpdG9yLmFjY2VwdHNUYWJsZUVkaXQocm93KSAmJiByZS50ZXN0KGxpbmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydFJvdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFJvdyA9IHJvdztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdGFydFJvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0YWJsZSBpbmZvXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZFJvdyA9IHJvdyAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gbmV3IHJhbmdlXzEuUmFuZ2UobmV3IHBvaW50XzEuUG9pbnQoc3RhcnRSb3csIDApLCBuZXcgcG9pbnRfMS5Qb2ludChlbmRSb3csIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IHBhcnNlcl8xLnJlYWRUYWJsZShsaW5lcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvY3VzID0gdGFibGUuZm9jdXNPZlBvc2l0aW9uKHBvcywgc3RhcnRSb3cpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0ZvY3VzID0gZm9jdXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmb3JtYXR0ZXJfMS5jb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Um93KG5ld0ZvY3VzLnJvdyArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0dGVyXzEuZm9ybWF0VGFibGUoY29tcGxldGVkLnRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KGV4cG9ydHMuX2NvbXB1dGVOZXdPZmZzZXQobmV3Rm9jdXMsIGNvbXBsZXRlZC50YWJsZSwgZm9ybWF0dGVkLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwbHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpbmVzID0gZm9ybWF0dGVkLnRhYmxlLnRvTGluZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpbmVzKHJhbmdlLnN0YXJ0LnJvdywgcmFuZ2UuZW5kLnJvdyArIDEsIG5ld0xpbmVzLCBsaW5lcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgY3Vyc29yIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmID0gbmV3TGluZXMubGVuZ3RoIC0gbGluZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gZm9ybWF0dGVkLnRhYmxlLnBvc2l0aW9uT2ZGb2N1cyhuZXdGb2N1cywgc3RhcnRSb3cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmb3JtYXR0ZXJfMS5jb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdHRlcl8xLmZvcm1hdFRhYmxlKGNvbXBsZXRlZC50YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcHBseVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZXMgPSBmb3JtYXR0ZWQudGFibGUudG9MaW5lcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGluZXMocmFuZ2Uuc3RhcnQucm93LCByYW5nZS5lbmQucm93ICsgMSwgbmV3TGluZXMsIGxpbmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjdXJzb3IgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZmYgPSBuZXdMaW5lcy5sZW5ndGggLSBsaW5lcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zLnJvdyA+IGVuZFJvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IG5ldyBwb2ludF8xLlBvaW50KHBvcy5yb3cgKyBkaWZmLCBwb3MuY29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyByZXNldFxuICAgICAgICAgICAgICAgICAgICBsaW5lcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBzdGFydFJvdyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlXG4gICAgICAgICAgICAgICAgICAgIGxhc3RSb3cgKz0gZGlmZjtcbiAgICAgICAgICAgICAgICAgICAgcm93ICs9IGRpZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0Um93ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGFibGUgaW5mb1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZFJvdyA9IGxhc3RSb3c7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBuZXcgcmFuZ2VfMS5SYW5nZShuZXcgcG9pbnRfMS5Qb2ludChzdGFydFJvdywgMCksIG5ldyBwb2ludF8xLlBvaW50KGVuZFJvdywgbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGUgPSBwYXJzZXJfMS5yZWFkVGFibGUobGluZXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvY3VzID0gdGFibGUuZm9jdXNPZlBvc2l0aW9uKHBvcywgc3RhcnRSb3cpO1xuICAgICAgICAgICAgICAgIC8vIGZvcm1hdFxuICAgICAgICAgICAgICAgIGxldCBuZXdGb2N1cyA9IGZvY3VzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGZvcm1hdHRlcl8xLmNvbXBsZXRlVGFibGUodGFibGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE9cbiAgICAgICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3cobmV3Rm9jdXMucm93ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdHRlcl8xLmZvcm1hdFRhYmxlKGNvbXBsZXRlZC50YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPXG4gICAgICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRPZmZzZXQoXG4gICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5fY29tcHV0ZU5ld09mZnNldChuZXdGb2N1cywgY29tcGxldGVkLnRhYmxlLCBmb3JtYXR0ZWQsIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdMaW5lcyA9IGZvcm1hdHRlZC50YWJsZS50b0xpbmVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGluZXMocmFuZ2Uuc3RhcnQucm93LCByYW5nZS5lbmQucm93ICsgMSwgbmV3TGluZXMsIGxpbmVzKTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE9cbiAgICAgICAgICAgICAgICBwb3MgPSBmb3JtYXR0ZWQudGFibGUucG9zaXRpb25PZkZvY3VzKG5ld0ZvY3VzLCBzdGFydFJvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl90ZXh0RWRpdG9yLnNldEN1cnNvclBvc2l0aW9uKHBvcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuVGFibGVFZGl0b3IgPSBUYWJsZUVkaXRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Tb3J0T3JkZXIgPSBleHBvcnRzLlRhYmxlRWRpdG9yID0gZXhwb3J0cy5vcHRpb25zV2l0aERlZmF1bHRzID0gZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IGV4cG9ydHMuSVRleHRFZGl0b3IgPSBleHBvcnRzLnNob3J0ZXN0RWRpdFNjcmlwdCA9IGV4cG9ydHMuYXBwbHlFZGl0U2NyaXB0ID0gZXhwb3J0cy5EZWxldGUgPSBleHBvcnRzLkluc2VydCA9IGV4cG9ydHMubW92ZUNvbHVtbiA9IGV4cG9ydHMuZGVsZXRlQ29sdW1uID0gZXhwb3J0cy5pbnNlcnRDb2x1bW4gPSBleHBvcnRzLm1vdmVSb3cgPSBleHBvcnRzLmRlbGV0ZVJvdyA9IGV4cG9ydHMuaW5zZXJ0Um93ID0gZXhwb3J0cy5hbHRlckFsaWdubWVudCA9IGV4cG9ydHMuZm9ybWF0VGFibGUgPSBleHBvcnRzLmNvbXBsZXRlVGFibGUgPSBleHBvcnRzLkZvcm1hdFR5cGUgPSBleHBvcnRzLnJlYWRUYWJsZSA9IGV4cG9ydHMuVGFibGUgPSBleHBvcnRzLlRhYmxlUm93ID0gZXhwb3J0cy5UYWJsZUNlbGwgPSBleHBvcnRzLkhlYWRlckFsaWdubWVudCA9IGV4cG9ydHMuRGVmYXVsdEFsaWdubWVudCA9IGV4cG9ydHMuQWxpZ25tZW50ID0gZXhwb3J0cy5Gb2N1cyA9IGV4cG9ydHMuUmFuZ2UgPSBleHBvcnRzLlBvaW50ID0gdm9pZCAwO1xudmFyIHBvaW50XzEgPSByZXF1aXJlKFwiLi9wb2ludFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlBvaW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwb2ludF8xLlBvaW50OyB9IH0pO1xudmFyIHJhbmdlXzEgPSByZXF1aXJlKFwiLi9yYW5nZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJhbmdlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByYW5nZV8xLlJhbmdlOyB9IH0pO1xudmFyIGZvY3VzXzEgPSByZXF1aXJlKFwiLi9mb2N1c1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkZvY3VzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmb2N1c18xLkZvY3VzOyB9IH0pO1xudmFyIGFsaWdubWVudF8xID0gcmVxdWlyZShcIi4vYWxpZ25tZW50XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWxpZ25tZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhbGlnbm1lbnRfMS5BbGlnbm1lbnQ7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEZWZhdWx0QWxpZ25tZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhbGlnbm1lbnRfMS5EZWZhdWx0QWxpZ25tZW50OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSGVhZGVyQWxpZ25tZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhbGlnbm1lbnRfMS5IZWFkZXJBbGlnbm1lbnQ7IH0gfSk7XG52YXIgdGFibGVfY2VsbF8xID0gcmVxdWlyZShcIi4vdGFibGUtY2VsbFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlRhYmxlQ2VsbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGFibGVfY2VsbF8xLlRhYmxlQ2VsbDsgfSB9KTtcbnZhciB0YWJsZV9yb3dfMSA9IHJlcXVpcmUoXCIuL3RhYmxlLXJvd1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlRhYmxlUm93XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0YWJsZV9yb3dfMS5UYWJsZVJvdzsgfSB9KTtcbnZhciB0YWJsZV8xID0gcmVxdWlyZShcIi4vdGFibGVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJUYWJsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGFibGVfMS5UYWJsZTsgfSB9KTtcbnZhciBwYXJzZXJfMSA9IHJlcXVpcmUoXCIuL3BhcnNlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlYWRUYWJsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGFyc2VyXzEucmVhZFRhYmxlOyB9IH0pO1xudmFyIGZvcm1hdHRlcl9qc18xID0gcmVxdWlyZShcIi4vZm9ybWF0dGVyLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRm9ybWF0VHlwZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZm9ybWF0dGVyX2pzXzEuRm9ybWF0VHlwZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNvbXBsZXRlVGFibGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZvcm1hdHRlcl9qc18xLmNvbXBsZXRlVGFibGU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmb3JtYXRUYWJsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZm9ybWF0dGVyX2pzXzEuZm9ybWF0VGFibGU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhbHRlckFsaWdubWVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZm9ybWF0dGVyX2pzXzEuYWx0ZXJBbGlnbm1lbnQ7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpbnNlcnRSb3dcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZvcm1hdHRlcl9qc18xLmluc2VydFJvdzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlbGV0ZVJvd1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZm9ybWF0dGVyX2pzXzEuZGVsZXRlUm93OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibW92ZVJvd1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZm9ybWF0dGVyX2pzXzEubW92ZVJvdzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImluc2VydENvbHVtblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZm9ybWF0dGVyX2pzXzEuaW5zZXJ0Q29sdW1uOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVsZXRlQ29sdW1uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmb3JtYXR0ZXJfanNfMS5kZWxldGVDb2x1bW47IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtb3ZlQ29sdW1uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmb3JtYXR0ZXJfanNfMS5tb3ZlQ29sdW1uOyB9IH0pO1xudmFyIGVkaXRfc2NyaXB0XzEgPSByZXF1aXJlKFwiLi9lZGl0LXNjcmlwdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkluc2VydFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZWRpdF9zY3JpcHRfMS5JbnNlcnQ7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEZWxldGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVkaXRfc2NyaXB0XzEuRGVsZXRlOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYXBwbHlFZGl0U2NyaXB0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlZGl0X3NjcmlwdF8xLmFwcGx5RWRpdFNjcmlwdDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNob3J0ZXN0RWRpdFNjcmlwdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZWRpdF9zY3JpcHRfMS5zaG9ydGVzdEVkaXRTY3JpcHQ7IH0gfSk7XG52YXIgdGV4dF9lZGl0b3JfMSA9IHJlcXVpcmUoXCIuL3RleHQtZWRpdG9yXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSVRleHRFZGl0b3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRleHRfZWRpdG9yXzEuSVRleHRFZGl0b3I7IH0gfSk7XG52YXIgb3B0aW9uc18xID0gcmVxdWlyZShcIi4vb3B0aW9uc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRPcHRpb25zXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBvcHRpb25zXzEuZGVmYXVsdE9wdGlvbnM7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJvcHRpb25zV2l0aERlZmF1bHRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBvcHRpb25zXzEub3B0aW9uc1dpdGhEZWZhdWx0czsgfSB9KTtcbnZhciB0YWJsZV9lZGl0b3JfMSA9IHJlcXVpcmUoXCIuL3RhYmxlLWVkaXRvclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlRhYmxlRWRpdG9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0YWJsZV9lZGl0b3JfMS5UYWJsZUVkaXRvcjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNvcnRPcmRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGFibGVfZWRpdG9yXzEuU29ydE9yZGVyOyB9IH0pO1xuIiwiaW1wb3J0IHtcbiAgRm9ybWF0VHlwZSxcbiAgT3B0aW9ucyxcbiAgb3B0aW9uc1dpdGhEZWZhdWx0cyxcbn0gZnJvbSAnQHRncm9zaW5nZXIvbWQtYWR2YW5jZWQtdGFibGVzJztcblxuZXhwb3J0IGNsYXNzIFRhYmxlRWRpdG9yUGx1Z2luU2V0dGluZ3Mge1xuICBwdWJsaWMgZm9ybWF0VHlwZTogRm9ybWF0VHlwZTtcbiAgcHVibGljIHNob3dSaWJib25JY29uOiBib29sZWFuO1xuXG4gIHB1YmxpYyB1c2VNb25vc3BhY2VGb250OiBib29sZWFuO1xuICBwdWJsaWMgcHJlZmVycmVkTW9ub3NwYWNlRm9udDogc3RyaW5nO1xuXG4gIHB1YmxpYyBiaW5kRW50ZXI6IGJvb2xlYW47XG4gIHB1YmxpYyBiaW5kVGFiOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZm9ybWF0VHlwZSA9IEZvcm1hdFR5cGUuTk9STUFMO1xuICAgIHRoaXMuc2hvd1JpYmJvbkljb24gPSB0cnVlO1xuICAgIHRoaXMudXNlTW9ub3NwYWNlRm9udCA9IHRydWU7XG4gICAgdGhpcy5iaW5kRW50ZXIgPSB0cnVlO1xuICAgIHRoaXMuYmluZFRhYiA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgYXNPcHRpb25zKCk6IE9wdGlvbnMge1xuICAgIHJldHVybiBvcHRpb25zV2l0aERlZmF1bHRzKHsgZm9ybWF0VHlwZTogdGhpcy5mb3JtYXRUeXBlIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCwgUmFuZ2UgfSBmcm9tICdAdGdyb3Npbmdlci9tZC1hZHZhbmNlZC10YWJsZXMnO1xuaW1wb3J0IHsgTWFya2Rvd25WaWV3IH0gZnJvbSAnb2JzaWRpYW4nO1xuXG4vKipcbiAqIE9ic2lkaWFuVGV4dEVkaXRvciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgSVRleHRFZGl0b3IgaW50ZXJmYWNlIGZyb21cbiAqIHRoZSBtdGUta2VybmVsIGxpYnJhcnkuIEl0IHRlYWNoZXMgdGhlIHRhYmxlIGVkaXRvciBsaWJyYXJ5IGhvdyB0byBpbnRlcmZhY2VcbiAqIHdpdGggT2JzaWRpYW4gYW5kIHRoZSB1bmRlcmx5aW5nIENvZGVNaXJyb3IgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgY2xhc3MgT2JzaWRpYW5UZXh0RWRpdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSBlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yO1xuXG4gIGNvbnN0cnVjdG9yKGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IpO1xuICBjb25zdHJ1Y3Rvcih2aWV3OiBNYXJrZG93blZpZXcpO1xuICBjb25zdHJ1Y3RvcihvYmo6IENvZGVNaXJyb3IuRWRpdG9yIHwgTWFya2Rvd25WaWV3KSB7XG4gICAgaWYgKCdzb3VyY2VNb2RlJyBpbiBvYmopIHtcbiAgICAgIHRoaXMuZWRpdG9yID0gb2JqLnNvdXJjZU1vZGUuY21FZGl0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdG9yID0gb2JqO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJzb3JQb3NpdGlvbiA9ICgpOiBQb2ludCA9PiB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmVkaXRvci5nZXRDdXJzb3IoKTtcbiAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgYGdldEN1cnNvclBvc2l0aW9uIHdhcyBjYWxsZWQ6IGxpbmUgJHtwb3NpdGlvbi5saW5lfSwgY2ggJHtwb3NpdGlvbi5jaH1gLFxuICAgICk7XG4gICAgcmV0dXJuIG5ldyBQb2ludChwb3NpdGlvbi5saW5lLCBwb3NpdGlvbi5jaCk7XG4gIH07XG5cbiAgcHVibGljIHNldEN1cnNvclBvc2l0aW9uID0gKHBvczogUG9pbnQpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgYHNldEN1cnNvclBvc2l0aW9uIHdhcyBjYWxsZWQ6IGxpbmUgJHtwb3Mucm93fSwgY2ggJHtwb3MuY29sdW1ufWAsXG4gICAgKTtcbiAgICB0aGlzLmVkaXRvci5zZXRDdXJzb3IoeyBsaW5lOiBwb3Mucm93LCBjaDogcG9zLmNvbHVtbiB9KTtcbiAgfTtcblxuICBwdWJsaWMgc2V0U2VsZWN0aW9uUmFuZ2UgPSAocmFuZ2U6IFJhbmdlKTogdm9pZCA9PiB7XG4gICAgY29uc29sZS5kZWJ1Zygnc2V0U2VsZWN0aW9uUmFuZ2Ugd2FzIGNhbGxlZCcpO1xuICAgIHRoaXMuZWRpdG9yLnNldFNlbGVjdGlvbihcbiAgICAgIHsgbGluZTogcmFuZ2Uuc3RhcnQucm93LCBjaDogcmFuZ2Uuc3RhcnQuY29sdW1uIH0sXG4gICAgICB7IGxpbmU6IHJhbmdlLmVuZC5yb3csIGNoOiByYW5nZS5lbmQuY29sdW1uIH0sXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgZ2V0TGFzdFJvdyA9ICgpOiBudW1iZXIgPT4ge1xuICAgIGNvbnNvbGUuZGVidWcoJ2dldExhc3RSb3cgd2FzIGNhbGxlZCcpO1xuICAgIHJldHVybiB0aGlzLmVkaXRvci5sYXN0TGluZSgpO1xuICB9O1xuXG4gIHB1YmxpYyBhY2NlcHRzVGFibGVFZGl0ID0gKHJvdzogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc29sZS5kZWJ1ZyhgYWNjZXB0c1RhYmxlRWRpdCB3YXMgY2FsbGVkIG9uIHJvdyAke3Jvd31gKTtcbiAgICAvLyBUT0RPOiBXaGF0IGRvZXMgdGhpcyBmdW5jdGlvbiB3YW50P1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHB1YmxpYyBnZXRMaW5lID0gKHJvdzogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKGBnZXRMaW5lIHdhcyBjYWxsZWQgb24gbGluZSAke3Jvd31gKTtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3IuZ2V0TGluZShyb3cpO1xuICB9O1xuXG4gIHB1YmxpYyBpbnNlcnRMaW5lID0gKHJvdzogbnVtYmVyLCBsaW5lOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKGBpbnNlcnRMaW5lIHdhcyBjYWxsZWQgYXQgbGluZSAke3Jvd31gKTtcbiAgICBjb25zb2xlLmRlYnVnKGBOZXcgbGluZTogJHtsaW5lfWApO1xuXG4gICAgaWYgKHJvdyA+IHRoaXMuZ2V0TGFzdFJvdygpKSB7XG4gICAgICB0aGlzLmVkaXRvci5yZXBsYWNlUmFuZ2UoJ1xcbicgKyBsaW5lLCB7IGxpbmU6IHJvdywgY2g6IDAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdG9yLnJlcGxhY2VSYW5nZShsaW5lICsgJ1xcbicsIHsgbGluZTogcm93LCBjaDogMCB9KTtcbiAgICB9XG4gIH07XG5cbiAgcHVibGljIGRlbGV0ZUxpbmUgPSAocm93OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKGBkZWxldGVMaW5lIHdhcyBjYWxsZWQgb24gbGluZSAke3Jvd31gKTtcbiAgICB0aGlzLmVkaXRvci5yZXBsYWNlUmFuZ2UoXG4gICAgICAnJyxcbiAgICAgIHsgbGluZTogcm93LCBjaDogMCB9LFxuICAgICAgeyBsaW5lOiByb3cgKyAxLCBjaDogMCB9LFxuICAgICk7XG4gIH07XG5cbiAgcHVibGljIHJlcGxhY2VMaW5lcyA9IChcbiAgICBzdGFydFJvdzogbnVtYmVyLFxuICAgIGVuZFJvdzogbnVtYmVyLFxuICAgIGxpbmVzOiBzdHJpbmdbXSxcbiAgKTogdm9pZCA9PiB7XG4gICAgY29uc29sZS5kZWJ1ZygncmVwbGFjZUxpbmVzIHdhcyBjYWxsZWQnKTtcbiAgICBjb25zb2xlLmRlYnVnKGBzdGFydCAke3N0YXJ0Um93fSwgZW5kOiAke2VuZFJvd31gKTtcbiAgICBjb25zb2xlLmRlYnVnKGxpbmVzKTtcblxuICAgIC8vIFRha2Ugb25lIG9mZiB0aGUgZW5kUm93IGFuZCBpbnN0ZWFkIGdvIHRvIHRoZSBlbmQgb2YgdGhhdCBsaW5lXG4gICAgY29uc3QgcmVhbEVuZFJvdyA9IGVuZFJvdyAtIDE7XG4gICAgY29uc3QgZW5kUm93Q29udGVudHMgPSB0aGlzLmVkaXRvci5nZXRMaW5lKHJlYWxFbmRSb3cpO1xuICAgIGNvbnN0IGVuZFJvd0ZpbmFsSW5kZXggPSBlbmRSb3dDb250ZW50cy5sZW5ndGg7XG5cbiAgICB0aGlzLmVkaXRvci5yZXBsYWNlUmFuZ2UoXG4gICAgICBsaW5lcyxcbiAgICAgIHsgbGluZTogc3RhcnRSb3csIGNoOiAwIH0sXG4gICAgICB7IGxpbmU6IHJlYWxFbmRSb3csIGNoOiBlbmRSb3dGaW5hbEluZGV4IH0sXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgdHJhbnNhY3QgPSAoZnVuYzogRnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKCd0cmFuc2FjdCB3YXMgY2FsbGVkJyk7XG4gICAgdGhpcy5lZGl0b3Iub3BlcmF0aW9uKCgpID0+IHtcbiAgICAgIGZ1bmMoKTtcbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IFRhYmxlRWRpdG9yIH0gZnJvbSAnLi90YWJsZS1lZGl0b3InO1xuXG4vKipcbiAqIFRhYmxlQ29udHJvbHMgZGlzcGxheXMgYSBsaW5lIHdpZGdldCBpbiB0aGUgZWRpdG9yIHRvIHVzZXJzLlxuICogQnV0dG9ucyBhbGxvdyBlYXN5IGFjY2VzcyB0byB0YWJsZSBtYW5pcHVsYXRpb24gZnVuY3Rpb25zLlxuICovXG5leHBvcnQgY2xhc3MgVGFibGVDb250cm9scyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY206IENvZGVNaXJyb3IuRWRpdG9yO1xuICBwcml2YXRlIHJlYWRvbmx5IHRlOiBUYWJsZUVkaXRvcjtcblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgY3Vyc29yIHdoZW4gdGhpcyB3aWRnZXQgd2FzIGNyZWF0ZWQuXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IGN1cnNvclBvczogQ29kZU1pcnJvci5Qb3NpdGlvbjtcblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBDb2RlTWlycm9yIHdpZGdldCBvYmplY3QsIHdoaWNoIGNhbiBiZSB1c2VkIHRvXG4gICAqIHJlbW92ZSBpdCBmcm9tIHRoZSBlZGl0b3IuXG4gICAqL1xuICBwcml2YXRlIHdpZGdldDogQ29kZU1pcnJvci5MaW5lV2lkZ2V0O1xuXG4gIGNvbnN0cnVjdG9yKGNtOiBDb2RlTWlycm9yLkVkaXRvciwgdGU6IFRhYmxlRWRpdG9yKSB7XG4gICAgdGhpcy5jbSA9IGNtO1xuICAgIHRoaXMudGUgPSB0ZTtcblxuICAgIHRoaXMuY3Vyc29yUG9zID0gY20uZ2V0Q3Vyc29yKCk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIGxpbmUgd2lkZ2V0IERPTSBub2RlLCBhbmQgZGlzcGxheSB0byB1c2VyLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGRpc3BsYXkgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy53aWRnZXQgPSB0aGlzLmNtLmFkZExpbmVXaWRnZXQoXG4gICAgICB0aGlzLmNtLmdldEN1cnNvcigpLmxpbmUsXG4gICAgICB0aGlzLmNyZWF0ZVRhYmxlQ29udHJvbHMoKSxcbiAgICAgIHtcbiAgICAgICAgY292ZXJHdXR0ZXI6IHRydWUsXG4gICAgICAgIGhhbmRsZU1vdXNlRXZlbnRzOiBmYWxzZSwgLy8gRWRpdG9yIGRvZXMgbm90IGhhbmRsZSBtb3VzZSBldmVudHMsIGJyb3dzZXIgZG9lc1xuICAgICAgICBub0hTY3JvbGw6IHRydWUsIC8vIERvbid0IG1vdmUgdGhlIHRvb2xiYXIgaWYgZWRpdG9yIGlzIGhvcml6LiBzY3JvbGxlZFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgdGhpcy5jbS5vbigna2V5ZG93bicsIHRoaXMuaGFuZGxlRXNjYXBlS2V5KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xvc2UgdGhpcyBsaW5lIHdpZGdldC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBjbGVhciA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKCdDbGVhcmluZyB0YWJsZSBjb250cm9sIHdpZGdldC4uLicpO1xuICAgIGlmICh0aGlzLndpZGdldCkge1xuICAgICAgdGhpcy53aWRnZXQuY2xlYXIoKTtcbiAgICAgIHRoaXMud2lkZ2V0ID0gbnVsbDtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1RhYmxlIGNvbnRyb2wgd2lkZ2V0IGNsZWFyZWQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNtLm9mZigna2V5ZG93bicsIHRoaXMuaGFuZGxlRXNjYXBlS2V5KTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGNyZWF0ZVRhYmxlQ29udHJvbHMgPSAoKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1iYWNrZ3JvdW5kJyk7XG5cbiAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgdGhpcy5jcmVhdGVCdXR0b25TdmcoYWxpZ25MZWZ0LCAnQWxpZ24gY29sdW1uIGxlZnQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY20uc2V0Q3Vyc29yKHRoaXMuY3Vyc29yUG9zKTtcbiAgICAgICAgdGhpcy50ZS5sZWZ0QWxpZ25Db2x1bW4oKTtcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgdGhpcy5jcmVhdGVCdXR0b25TdmcoYWxpZ25DZW50ZXIsICdBbGlnbiBjb2x1bW4gY2VudGVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNtLnNldEN1cnNvcih0aGlzLmN1cnNvclBvcyk7XG4gICAgICAgIHRoaXMudGUuY2VudGVyQWxpZ25Db2x1bW4oKTtcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgdGhpcy5jcmVhdGVCdXR0b25TdmcoYWxpZ25SaWdodCwgJ0FsaWduIGNvbHVtbiByaWdodCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5jbS5zZXRDdXJzb3IodGhpcy5jdXJzb3JQb3MpO1xuICAgICAgICB0aGlzLnRlLnJpZ2h0QWxpZ25Db2x1bW4oKTtcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgdGhpcy5jcmVhdGVCdXR0b25Tdmcoc29ydEFzYywgJ1NvcnQgcm93cyBhc2NlbmRpbmcnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY20uc2V0Q3Vyc29yKHRoaXMuY3Vyc29yUG9zKTtcbiAgICAgICAgdGhpcy50ZS5zb3J0Um93c0FzYygpO1xuICAgICAgfSksXG4gICAgKTtcblxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoXG4gICAgICB0aGlzLmNyZWF0ZUJ1dHRvblN2Zyhzb3J0RGVzYywgJ1NvcnQgcm93cyBkZXNjZW5kaW5nJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNtLnNldEN1cnNvcih0aGlzLmN1cnNvclBvcyk7XG4gICAgICAgIHRoaXMudGUuc29ydFJvd3NEZXNjKCk7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgbm9kZS5hcHBlbmRDaGlsZChcbiAgICAgIHRoaXMuY3JlYXRlQnV0dG9uU3ZnKG1vdmVDb2x1bW5MZWZ0LCAnTW92ZSBjb2x1bW4gbGVmdCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5jbS5zZXRDdXJzb3IodGhpcy5jdXJzb3JQb3MpO1xuICAgICAgICB0aGlzLnRlLm1vdmVDb2x1bW5MZWZ0KCk7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgbm9kZS5hcHBlbmRDaGlsZChcbiAgICAgIHRoaXMuY3JlYXRlQnV0dG9uU3ZnKG1vdmVDb2x1bW5SaWdodCwgJ01vdmUgY29sdW1uIHJpZ2h0JywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNtLnNldEN1cnNvcih0aGlzLmN1cnNvclBvcyk7XG4gICAgICAgIHRoaXMudGUubW92ZUNvbHVtblJpZ2h0KCk7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgbm9kZS5hcHBlbmRDaGlsZChcbiAgICAgIHRoaXMuY3JlYXRlQnV0dG9uU3ZnKG1vdmVSb3dVcCwgJ01vdmUgcm93IHVwJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNtLnNldEN1cnNvcih0aGlzLmN1cnNvclBvcyk7XG4gICAgICAgIHRoaXMudGUubW92ZVJvd1VwKCk7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgbm9kZS5hcHBlbmRDaGlsZChcbiAgICAgIHRoaXMuY3JlYXRlQnV0dG9uU3ZnKG1vdmVSb3dEb3duLCAnTW92ZSByb3cgZG93bicsICgpID0+IHtcbiAgICAgICAgdGhpcy5jbS5zZXRDdXJzb3IodGhpcy5jdXJzb3JQb3MpO1xuICAgICAgICB0aGlzLnRlLm1vdmVSb3dEb3duKCk7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgbm9kZS5hcHBlbmRDaGlsZChcbiAgICAgIHRoaXMuY3JlYXRlQnV0dG9uU3ZnKGluc2VydENvbHVtbiwgJ0luc2VydCBjb2x1bW4nLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY20uc2V0Q3Vyc29yKHRoaXMuY3Vyc29yUG9zKTtcbiAgICAgICAgdGhpcy50ZS5pbnNlcnRDb2x1bW4oKTtcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgdGhpcy5jcmVhdGVCdXR0b25TdmcoaW5zZXJ0Um93LCAnSW5zZXJ0IHJvdycsICgpID0+IHtcbiAgICAgICAgdGhpcy5jbS5zZXRDdXJzb3IodGhpcy5jdXJzb3JQb3MpO1xuICAgICAgICB0aGlzLnRlLmluc2VydFJvdygpO1xuICAgICAgfSksXG4gICAgKTtcblxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoXG4gICAgICB0aGlzLmNyZWF0ZUJ1dHRvblN2ZyhkZWxldGVDb2x1bW4sICdEZWxldGUgY29sdW1uJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNtLnNldEN1cnNvcih0aGlzLmN1cnNvclBvcyk7XG4gICAgICAgIHRoaXMudGUuZGVsZXRlQ29sdW1uKCk7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgbm9kZS5hcHBlbmRDaGlsZChcbiAgICAgIHRoaXMuY3JlYXRlQnV0dG9uU3ZnKGRlbGV0ZVJvdywgJ0RlbGV0ZSByb3cnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY20uc2V0Q3Vyc29yKHRoaXMuY3Vyc29yUG9zKTtcbiAgICAgICAgdGhpcy50ZS5kZWxldGVSb3coKTtcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgdGhpcy5jcmVhdGVCdXR0b25TdmcoY2xvc2UsICdDbG9zZSB0b29sYmFyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNtLnNldEN1cnNvcih0aGlzLmN1cnNvclBvcyk7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGNyZWF0ZUJ1dHRvblN2ZyA9IChcbiAgICBpY29uOiBIVE1MRWxlbWVudCxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGFjdGlvbjogKCkgPT4gdm9pZCxcbiAgKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5hZGRDbGFzcygnd2lkZ2V0LWJ1dHRvbicpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGl0bGUpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBidXR0b24ub25DbGlja0V2ZW50KChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgYWN0aW9uKCk7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGhhbmRsZUVzY2FwZUtleSA9IChcbiAgICBjbTogQ29kZU1pcnJvci5FZGl0b3IsXG4gICAgZXZlbnQ6IEtleWJvYXJkRXZlbnQsXG4gICk6IHZvaWQgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gc3ZnIHN0cmluZyBpbnRvIGFuIEhUTUwgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gc3ZnVGV4dCBzdmcgaW1hZ2UgYXMgYSBzdHJpbmdcbiAqL1xuY29uc3QgRWxlbWVudCA9IChzdmdUZXh0OiBzdHJpbmcpOiBIVE1MRWxlbWVudCA9PiB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3ZnVGV4dCwgJ3RleHQveG1sJykuZG9jdW1lbnRFbGVtZW50O1xufTtcblxuY29uc3QgYWxpZ25MZWZ0ID0gRWxlbWVudChgXG48c3ZnIGNsYXNzPVwid2lkZ2V0LWljb25cIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgtMSAwIDAgMSA1MTIgMClcIj5cbiAgICA8cGF0aCBkPVwibTUwMS4zMyAxNzAuNjdoLTMyMGMtNS44OTYgMC0xMC42NjcgNC43NzEtMTAuNjY3IDEwLjY2N3YyMS4zMzNjMCA1Ljg5NiA0Ljc3MSAxMC42NjcgMTAuNjY3IDEwLjY2N2gzMjBjNS44OTYgMCAxMC42NjctNC43NzEgMTAuNjY3LTEwLjY2N3YtMjEuMzMzYzAtNS44OTYtNC43NzEtMTAuNjY3LTEwLjY2Ny0xMC42Njd6XCIvPlxuICAgIDxwYXRoIGQ9XCJtNTAxLjMzIDI5OC42N2gtNDkwLjY3Yy01Ljg5NiAwLTEwLjY2NyA0Ljc3MS0xMC42NjcgMTAuNjY2djIxLjMzM2MwIDUuODk2IDQuNzcxIDEwLjY2NyAxMC42NjcgMTAuNjY3aDQ5MC42N2M1Ljg5NiAwIDEwLjY2Ny00Ljc3MSAxMC42NjctMTAuNjY3di0yMS4zMzNjLTFlLTMgLTUuODk1LTQuNzcyLTEwLjY2Ni0xMC42NjgtMTAuNjY2elwiLz5cbiAgICA8cGF0aCBkPVwibTUwMS4zMyA0MjYuNjdoLTMyMGMtNS44OTYgMC0xMC42NjcgNC43NzEtMTAuNjY3IDEwLjY2N3YyMS4zMzNjMCA1Ljg5NiA0Ljc3MSAxMC42NjcgMTAuNjY3IDEwLjY2N2gzMjBjNS44OTYgMCAxMC42NjctNC43NzEgMTAuNjY3LTEwLjY2N3YtMjEuMzMzYzAtNS44OTYtNC43NzEtMTAuNjY3LTEwLjY2Ny0xMC42Njd6XCIvPlxuICAgIDxwYXRoIGQ9XCJtNTAxLjMzIDQyLjY2N2gtNDkwLjY3Yy01Ljg5NiAwLTEwLjY2NyA0Ljc3MS0xMC42NjcgMTAuNjY2djIxLjMzM2MwIDUuODk2IDQuNzcxIDEwLjY2NyAxMC42NjcgMTAuNjY3aDQ5MC42N2M1Ljg5NiAwIDEwLjY2Ny00Ljc3MSAxMC42NjctMTAuNjY3di0yMS4zMzNjLTFlLTMgLTUuODk1LTQuNzcyLTEwLjY2Ni0xMC42NjgtMTAuNjY2elwiLz5cbiAgPC9nPlxuPC9zdmc+XG5gKTtcblxuY29uc3QgYWxpZ25DZW50ZXIgPSBFbGVtZW50KGBcbjxzdmcgY2xhc3M9XCJ3aWRnZXQtaWNvblwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPGcgdHJhbnNmb3JtPVwibWF0cml4KC0xIDAgMCAxIDUxMiAwKVwiPlxuICAgIDxwYXRoIGQ9XCJtNDE2IDE3MC42N2gtMzIwYy01Ljg5NiAwLTEwLjY2NyA0Ljc3MS0xMC42NjcgMTAuNjY3djIxLjMzM2MwIDUuODk2IDQuNzcxIDEwLjY2NyAxMC42NjcgMTAuNjY3aDMyMGM1Ljg5NiAwIDEwLjY2Ny00Ljc3MSAxMC42NjctMTAuNjY3di0yMS4zMzNjMC01Ljg5Ni00Ljc3MS0xMC42NjctMTAuNjY3LTEwLjY2N3pcIi8+XG4gICAgPHBhdGggZD1cIm01MDEuMzMgMjk4LjY3aC00OTAuNjdjLTUuODk2IDAtMTAuNjY3IDQuNzcxLTEwLjY2NyAxMC42NjZ2MjEuMzMzYzAgNS44OTYgNC43NzEgMTAuNjY3IDEwLjY2NyAxMC42NjdoNDkwLjY3YzUuODk2IDAgMTAuNjY3LTQuNzcxIDEwLjY2Ny0xMC42Njd2LTIxLjMzM2MtMWUtMyAtNS44OTUtNC43NzItMTAuNjY2LTEwLjY2OC0xMC42NjZ6XCIvPlxuICAgIDxwYXRoIGQ9XCJtNDE2IDQyNi42N2gtMzIwYy01Ljg5NiAwLTEwLjY2NyA0Ljc3MS0xMC42NjcgMTAuNjY3djIxLjMzM2MwIDUuODk2IDQuNzcxIDEwLjY2NyAxMC42NjcgMTAuNjY3aDMyMGM1Ljg5NiAwIDEwLjY2Ny00Ljc3MSAxMC42NjctMTAuNjY3di0yMS4zMzNjMC01Ljg5Ni00Ljc3MS0xMC42NjctMTAuNjY3LTEwLjY2N3pcIi8+XG4gICAgPHBhdGggZD1cIm01MDEuMzMgNDIuNjY3aC00OTAuNjdjLTUuODk2IDAtMTAuNjY3IDQuNzcxLTEwLjY2NyAxMC42NjZ2MjEuMzMzYzAgNS44OTYgNC43NzEgMTAuNjY3IDEwLjY2NyAxMC42NjdoNDkwLjY3YzUuODk2IDAgMTAuNjY3LTQuNzcxIDEwLjY2Ny0xMC42Njd2LTIxLjMzM2MtMWUtMyAtNS44OTUtNC43NzItMTAuNjY2LTEwLjY2OC0xMC42NjZ6XCIvPlxuICA8L2c+XG48L3N2Zz5cbmApO1xuXG5jb25zdCBhbGlnblJpZ2h0ID0gRWxlbWVudChgXG48c3ZnIGNsYXNzPVwid2lkZ2V0LWljb25cIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGQ9XCJtNTAxLjMzIDE3MC42N2gtMzIwYy01Ljg5NiAwLTEwLjY2NyA0Ljc3MS0xMC42NjcgMTAuNjY3djIxLjMzM2MwIDUuODk2IDQuNzcxIDEwLjY2NyAxMC42NjcgMTAuNjY3aDMyMGM1Ljg5NiAwIDEwLjY2Ny00Ljc3MSAxMC42NjctMTAuNjY3di0yMS4zMzNjMC01Ljg5Ni00Ljc3MS0xMC42NjctMTAuNjY3LTEwLjY2N3pcIi8+XG4gIDxwYXRoIGQ9XCJtNTAxLjMzIDI5OC42N2gtNDkwLjY3Yy01Ljg5NiAwLTEwLjY2NyA0Ljc3MS0xMC42NjcgMTAuNjY2djIxLjMzM2MwIDUuODk2IDQuNzcxIDEwLjY2NyAxMC42NjcgMTAuNjY3aDQ5MC42N2M1Ljg5NiAwIDEwLjY2Ny00Ljc3MSAxMC42NjctMTAuNjY3di0yMS4zMzNjLTFlLTMgLTUuODk1LTQuNzcyLTEwLjY2Ni0xMC42NjgtMTAuNjY2elwiLz5cbiAgPHBhdGggZD1cIm01MDEuMzMgNDI2LjY3aC0zMjBjLTUuODk2IDAtMTAuNjY3IDQuNzcxLTEwLjY2NyAxMC42Njd2MjEuMzMzYzAgNS44OTYgNC43NzEgMTAuNjY3IDEwLjY2NyAxMC42NjdoMzIwYzUuODk2IDAgMTAuNjY3LTQuNzcxIDEwLjY2Ny0xMC42Njd2LTIxLjMzM2MwLTUuODk2LTQuNzcxLTEwLjY2Ny0xMC42NjctMTAuNjY3elwiLz5cbiAgPHBhdGggZD1cIm01MDEuMzMgNDIuNjY3aC00OTAuNjdjLTUuODk2IDAtMTAuNjY3IDQuNzcxLTEwLjY2NyAxMC42NjZ2MjEuMzMzYzAgNS44OTYgNC43NzEgMTAuNjY3IDEwLjY2NyAxMC42NjdoNDkwLjY3YzUuODk2IDAgMTAuNjY3LTQuNzcxIDEwLjY2Ny0xMC42Njd2LTIxLjMzM2MtMWUtMyAtNS44OTUtNC43NzItMTAuNjY2LTEwLjY2OC0xMC42NjZ6XCIvPlxuPC9zdmc+XG5gKTtcblxuY29uc3QgZGVsZXRlQ29sdW1uID0gRWxlbWVudChgXG48c3ZnIGNsYXNzPVwid2lkZ2V0LWljb25cIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMjYgMjZcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIm0xMy41OTQgMjAuODV2My4xNWgtMTB2LTIyaDEwdjMuMTVjMC42MzMtMC4zMjMgMS4zMDQtMC41NjUgMi0wLjcyN3YtMy40MjNjMC0wLjU1MS0wLjQ0OC0xLTEtMWgtMTJjLTAuNTUgMC0xIDAuNDQ5LTEgMXYyNGMwIDAuNTUxIDAuNDQ5IDEgMSAxaDEyYzAuNTUyIDAgMS0wLjQ0OSAxLTF2LTMuNDI0Yy0wLjY5Ni0wLjE2MS0xLjM2Ny0wLjQwMy0yLTAuNzI2elwiLz5cbiAgPHBhdGggZD1cIm0xNy41OTQgNi4xODhjLTMuNzYyIDAtNi44MTMgMy4wNTEtNi44MTIgNi44MTMtMWUtMyAzLjc2MSAzLjA1IDYuODEyIDYuODEyIDYuODEyczYuODEzLTMuMDUxIDYuODEzLTYuODEzLTMuMDUyLTYuODEyLTYuODEzLTYuODEyem0zLjYzMiA3LjgwMi03LjI2NyAxZS0zdi0xLjk4Mmg3LjI2OGwtMWUtMyAxLjk4MXpcIi8+XG48L3N2Zz5cbmApO1xuXG5jb25zdCBkZWxldGVSb3cgPSBFbGVtZW50KGBcbjxzdmcgY2xhc3M9XCJ3aWRnZXQtaWNvblwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAxNS4zODEgMTUuMzgxXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTUuMzgxIDE1LjM4MVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk0wLDEuNzMydjcuNzMyaDYuMDUzYzAtMC4wMzUtMC4wMDQtMC4wNy0wLjAwNC0wLjEwNGMwLTAuNDM0LDAuMDYxLTAuODU0LDAuMTY1LTEuMjU1SDEuMzZWMy4wOTIgICAgaDEyLjY2MnYyLjE5MmMwLjU0NiwwLjM5NiwxLjAxLDAuODk3LDEuMzU5LDEuNDc3VjEuNzMySDB6XCIvPlxuICA8cGF0aCBkPVwibTExLjE5NiA1LjI4Yy0yLjMwNyAwLTQuMTgzIDEuODc3LTQuMTgzIDQuMTg0IDAgMi4zMDggMS44NzYgNC4xODUgNC4xODMgNC4xODUgMi4zMDkgMCA0LjE4NS0xLjg3NyA0LjE4NS00LjE4NSAwLTIuMzA3LTEuODc2LTQuMTg0LTQuMTg1LTQuMTg0em0wIDcuMjMzYy0xLjY3OSAwLTMuMDQ3LTEuMzY3LTMuMDQ3LTMuMDQ5IDAtMS42OCAxLjM2OC0zLjA0OSAzLjA0Ny0zLjA0OSAxLjY4NCAwIDMuMDUgMS4zNjkgMy4wNSAzLjA0OSAwIDEuNjgyLTEuMzY2IDMuMDQ5LTMuMDUgMy4wNDl6XCIvPlxuICA8cmVjdCB4PVwiOS4zMTJcIiB5PVwiOC43NTlcIiB3aWR0aD1cIjMuODQ0XCIgaGVpZ2h0PVwiMS4xMDRcIi8+XG48L3N2Zz5cbmApO1xuXG5jb25zdCBpbnNlcnRDb2x1bW4gPSBFbGVtZW50KGBcbjxzdmcgY2xhc3M9XCJ3aWRnZXQtaWNvblwiIHdpZHRoPVwiNTEycHRcIiBoZWlnaHQ9XCI1MTJwdFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiLTIxIDAgNTEyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIm0yODggMTA2LjY3Yy0zLjkyNTggMC03Ljg1MTYtMS40Mjk3LTEwLjkyMi00LjMxMjVsLTgwLTc0LjY2NGMtNC44MDA4LTQuNDgwNS02LjM3ODktMTEuNDU3LTMuOTY4OC0xNy41NTkgMi40MTAyLTYuMTAxNiA4LjMyMDMtMTAuMTMzIDE0Ljg5MS0xMC4xMzNoMTYwYzYuNTcwMyAwIDEyLjQ4IDQuMDExNyAxNC44OTEgMTAuMTMzIDIuNDEwMiA2LjEyNSAwLjgzMjAzIDEzLjA3OC0zLjk2ODggMTcuNTU5bC04MCA3NC42NjRjLTMuMDcwMyAyLjg4MjgtNi45OTYxIDQuMzEyNS0xMC45MjIgNC4zMTI1em0tMzkuNDAyLTc0LjY2OCAzOS40MDIgMzYuNzc3IDM5LjQwMi0zNi43Nzd6XCIvPlxuICA8cGF0aCBkPVwibTQzMiA1MTJoLTUzLjMzMmMtMjAuNTkgMC0zNy4zMzYtMTYuNzQ2LTM3LjMzNi0zNy4zMzJ2LTMzMC42N2MwLTIwLjU4NiAxNi43NDYtMzcuMzMyIDM3LjMzNi0zNy4zMzJoNTMuMzMyYzIwLjU4NiAwIDM3LjMzMiAxNi43NDYgMzcuMzMyIDM3LjMzMnYzMzAuNjdjMCAyMC41ODYtMTYuNzQ2IDM3LjMzMi0zNy4zMzIgMzcuMzMyem0tNTMuMzMyLTM3My4zM2MtMi45NDUzIDAtNS4zMzU5IDIuMzg2Ny01LjMzNTkgNS4zMzJ2MzMwLjY3YzAgMi45NDE0IDIuMzkwNiA1LjMzMiA1LjMzNTkgNS4zMzJoNTMuMzMyYzIuOTQ1MyAwIDUuMzMyLTIuMzkwNiA1LjMzMi01LjMzMnYtMzMwLjY3YzAtMi45NDUzLTIuMzg2Ny01LjMzMi01LjMzMi01LjMzMnpcIi8+XG4gIDxwYXRoIGQ9XCJtMTk3LjMzIDUxMmgtMTYwYy0yMC41ODYgMC0zNy4zMzItMTYuNzQ2LTM3LjMzMi0zNy4zMzJ2LTMzMC42N2MwLTIwLjU4NiAxNi43NDYtMzcuMzMyIDM3LjMzMi0zNy4zMzJoMTYwYzIwLjU5IDAgMzcuMzM2IDE2Ljc0NiAzNy4zMzYgMzcuMzMydjMzMC42N2MwIDIwLjU4Ni0xNi43NDYgMzcuMzMyLTM3LjMzNiAzNy4zMzJ6bS0xNjAtMzczLjMzYy0yLjk0MTQgMC01LjMzMiAyLjM4NjctNS4zMzIgNS4zMzJ2MzMwLjY3YzAgMi45NDE0IDIuMzkwNiA1LjMzMiA1LjMzMiA1LjMzMmgxNjBjMi45NDUzIDAgNS4zMzU5LTIuMzkwNiA1LjMzNTktNS4zMzJ2LTMzMC42N2MwLTIuOTQ1My0yLjM5MDYtNS4zMzItNS4zMzU5LTUuMzMyelwiLz5cbiAgPHBhdGggZD1cIm00NTMuMzMgMzI1LjMzaC05NmMtOC44MzIgMC0xNi03LjE2OC0xNi0xNnM3LjE2OC0xNiAxNi0xNmg5NmM4LjgzMiAwIDE2IDcuMTY4IDE2IDE2cy03LjE2OCAxNi0xNiAxNnpcIi8+XG4gIDxwYXRoIGQ9XCJtMjE4LjY3IDMyNS4zM2gtMjAyLjY3Yy04LjgzMiAwLTE2LTcuMTY4LTE2LTE2czcuMTY4LTE2IDE2LTE2aDIwMi42N2M4LjgzMiAwIDE2IDcuMTY4IDE2IDE2cy03LjE2OCAxNi0xNiAxNnpcIi8+XG4gIDxwYXRoIGQ9XCJtMTE3LjMzIDUxMmMtOC44MzIgMC0xNi03LjE2OC0xNi0xNnYtMzczLjMzYzAtOC44MzIgNy4xNjgtMTYgMTYtMTZzMTYgNy4xNjggMTYgMTZ2MzczLjMzYzAgOC44MzItNy4xNjggMTYtMTYgMTZ6XCIvPlxuPC9zdmc+XG5gKTtcblxuY29uc3QgaW5zZXJ0Um93ID0gRWxlbWVudChgXG48c3ZnIGNsYXNzPVwid2lkZ2V0LWljb25cIiB3aWR0aD1cIjUxMnB0XCIgaGVpZ2h0PVwiNTEycHRcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgLTIxIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGQ9XCJtMTYgMjc3LjMzYy0xLjk4NDQgMC0zLjk2ODgtMC4zNjMyOC01Ljg2NzItMS4xMDk0LTYuMTIxMS0yLjQxMDItMTAuMTMzLTguMzIwMy0xMC4xMzMtMTQuODkxdi0xNjBjMC02LjU3MDMgNC4wMTE3LTEyLjQ4IDEwLjEzMy0xNC44OTEgNi4xNDQ1LTIuNDEwMiAxMy4wNzgtMC44NTE1NiAxNy41NTkgMy45Njg4bDc0LjY2NCA4MGM1Ljc2MTcgNi4xNDQ1IDUuNzYxNyAxNS42OCAwIDIxLjgyNGwtNzQuNjY0IDgwYy0zLjA5MzggMy4zMjgxLTcuMzM5OCA1LjA5NzctMTEuNjkxIDUuMDk3N3ptMTYtMTM1LjR2NzguODA1bDM2Ljc3Ny0zOS40MDJ6XCIvPlxuICA8cGF0aCBkPVwibTQ3NC42NyAxMjhoLTMzMC42N2MtMjAuNTg2IDAtMzcuMzMyLTE2Ljc0Ni0zNy4zMzItMzcuMzMydi01My4zMzZjMC0yMC41ODYgMTYuNzQ2LTM3LjMzMiAzNy4zMzItMzcuMzMyaDMzMC42N2MyMC41ODYgMCAzNy4zMzIgMTYuNzQ2IDM3LjMzMiAzNy4zMzJ2NTMuMzM2YzAgMjAuNTg2LTE2Ljc0NiAzNy4zMzItMzcuMzMyIDM3LjMzMnptLTMzMC42Ny05NmMtMi45NDUzIDAtNS4zMzIgMi4zOTA2LTUuMzMyIDUuMzMydjUzLjMzNmMwIDIuOTQxNCAyLjM4NjcgNS4zMzIgNS4zMzIgNS4zMzJoMzMwLjY3YzIuOTQxNCAwIDUuMzMyLTIuMzkwNiA1LjMzMi01LjMzMnYtNTMuMzM2YzAtMi45NDE0LTIuMzkwNi01LjMzMi01LjMzMi01LjMzMnpcIi8+XG4gIDxwYXRoIGQ9XCJtNDc0LjY3IDQ2OS4zM2gtMzMwLjY3Yy0yMC41ODYgMC0zNy4zMzItMTYuNzQ2LTM3LjMzMi0zNy4zMzJ2LTE2MGMwLTIwLjU4NiAxNi43NDYtMzcuMzMyIDM3LjMzMi0zNy4zMzJoMzMwLjY3YzIwLjU4NiAwIDM3LjMzMiAxNi43NDYgMzcuMzMyIDM3LjMzMnYxNjBjMCAyMC41ODYtMTYuNzQ2IDM3LjMzMi0zNy4zMzIgMzcuMzMyem0tMzMwLjY3LTIwMi42NmMtMi45NDUzIDAtNS4zMzIgMi4zODY3LTUuMzMyIDUuMzMydjE2MGMwIDIuOTQ1MyAyLjM4NjcgNS4zMzIgNS4zMzIgNS4zMzJoMzMwLjY3YzIuOTQxNCAwIDUuMzMyLTIuMzg2NyA1LjMzMi01LjMzMnYtMTYwYzAtMi45NDUzLTIuMzkwNi01LjMzMi01LjMzMi01LjMzMnpcIi8+XG4gIDxwYXRoIGQ9XCJtMzA5LjMzIDEyOGMtOC44MzIgMC0xNi03LjE2OC0xNi0xNnYtOTZjMC04LjgzMiA3LjE2OC0xNiAxNi0xNnMxNiA3LjE2OCAxNiAxNnY5NmMwIDguODMyLTcuMTY4IDE2LTE2IDE2elwiLz5cbiAgPHBhdGggZD1cIm0zMDkuMzMgNDY5LjMzYy04LjgzMiAwLTE2LTcuMTY4LTE2LTE2di0yMDIuNjZjMC04LjgzMiA3LjE2OC0xNiAxNi0xNnMxNiA3LjE2OCAxNiAxNnYyMDIuNjZjMCA4LjgzMi03LjE2OCAxNi0xNiAxNnpcIi8+XG4gIDxwYXRoIGQ9XCJtNDk2IDM2OGgtMzczLjMzYy04LjgzMiAwLTE2LTcuMTY4LTE2LTE2czcuMTY4LTE2IDE2LTE2aDM3My4zM2M4LjgzMiAwIDE2IDcuMTY4IDE2IDE2cy03LjE2OCAxNi0xNiAxNnpcIi8+XG48L3N2Zz5cbmApO1xuXG5jb25zdCBtb3ZlQ29sdW1uTGVmdCA9IEVsZW1lbnQoYFxuPHN2ZyBjbGFzcz1cIndpZGdldC1pY29uXCIgd2lkdGg9XCI1MTJwdFwiIGhlaWdodD1cIjUxMnB0XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTEyLjAyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIm0zNTcuMzUgNTEyLjAxaDk2YzMyLjM2MyAwIDU4LjY2OC0yNi4zMDUgNTguNjY4LTU4LjY2OHYtMzk0LjY2YzAtMzIuMzYzLTI2LjMwNS01OC42NjgtNTguNjY4LTU4LjY2OGgtOTZjLTMyLjM2MyAwLTU4LjY2NCAyNi4zMDUtNTguNjY0IDU4LjY2OHYzOTQuNjZjMCAzMi4zNjMgMjYuMzAxIDU4LjY2OCA1OC42NjQgNTguNjY4em05Ni00ODBjMTQuNjk5IDAgMjYuNjY4IDExLjk2OSAyNi42NjggMjYuNjY4djM5NC42NmMwIDE0LjY5OS0xMS45NjkgMjYuNjY4LTI2LjY2OCAyNi42NjhoLTk2Yy0xNC42OTkgMC0yNi42NjQtMTEuOTY5LTI2LjY2NC0yNi42Njh2LTM5NC42NmMwLTE0LjY5OSAxMS45NjUtMjYuNjY4IDI2LjY2NC0yNi42Njh6XCIvPlxuICA8cGF0aCBkPVwibTE2LjAxNiAyNzIuMDFoMjI0YzguODMyIDAgMTYtNy4xNjggMTYtMTZzLTcuMTY4LTE2LTE2LTE2aC0yMjRjLTguODMyIDAtMTYgNy4xNjgtMTYgMTZzNy4xNjggMTYgMTYgMTZ6XCIvPlxuICA8cGF0aCBkPVwibTEwMS4zNSAzNTcuMzRjNC4wOTc2IDAgOC4xOTE0LTEuNTU0NyAxMS4zMDktNC42OTE0IDYuMjUtNi4yNSA2LjI1LTE2LjM4MyAwLTIyLjYzN2wtNzQuMDI3LTc0LjAyMyA3NC4wMjctNzQuMDI3YzYuMjUtNi4yNSA2LjI1LTE2LjM4NyAwLTIyLjYzN3MtMTYuMzgzLTYuMjUtMjIuNjM3IDBsLTg1LjMzMiA4NS4zMzZjLTYuMjUgNi4yNS02LjI1IDE2LjM4MyAwIDIyLjYzM2w4NS4zMzIgODUuMzMyYzMuMTM2NyAzLjE2MDIgNy4yMzQ0IDQuNzE0OCAxMS4zMjggNC43MTQ4elwiLz5cbjwvc3ZnPlxuYCk7XG5cbmNvbnN0IG1vdmVDb2x1bW5SaWdodCA9IEVsZW1lbnQoYFxuPHN2ZyBjbGFzcz1cIndpZGdldC1pY29uXCIgd2lkdGg9XCI1MTJwdFwiIGhlaWdodD1cIjUxMnB0XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTEyLjAyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIm0xNTQuNjcgNTEyLjAxaC05NmMtMzIuMzYzIDAtNTguNjY4LTI2LjMwNS01OC42NjgtNTguNjY4di0zOTQuNjZjMC0zMi4zNjMgMjYuMzA1LTU4LjY2OCA1OC42NjgtNTguNjY4aDk2YzMyLjM2MyAwIDU4LjY2NCAyNi4zMDUgNTguNjY0IDU4LjY2OHYzOTQuNjZjMCAzMi4zNjMtMjYuMzAxIDU4LjY2OC01OC42NjQgNTguNjY4em0tOTYtNDgwYy0xNC42OTkgMC0yNi42NjggMTEuOTY5LTI2LjY2OCAyNi42Njh2Mzk0LjY2YzAgMTQuNjk5IDExLjk2OSAyNi42NjggMjYuNjY4IDI2LjY2OGg5NmMxNC42OTkgMCAyNi42NjQtMTEuOTY5IDI2LjY2NC0yNi42Njh2LTM5NC42NmMwLTE0LjY5OS0xMS45NjUtMjYuNjY4LTI2LjY2NC0yNi42Njh6XCIvPlxuICA8cGF0aCBkPVwibTQ5NiAyNzIuMDFoLTIyNGMtOC44MzIgMC0xNi03LjE2OC0xNi0xNiAwLTguODMyIDcuMTY4LTE2IDE2LTE2aDIyNGM4LjgzMiAwIDE2IDcuMTY4IDE2IDE2IDAgOC44MzItNy4xNjggMTYtMTYgMTZ6XCIvPlxuICA8cGF0aCBkPVwibTQxMC42NyAzNTcuMzRjLTQuMDk3NyAwLTguMTkxNC0xLjU1NDctMTEuMzA5LTQuNjkxNC02LjI1LTYuMjUtNi4yNS0xNi4zODMgMC0yMi42MzdsNzQuMDI3LTc0LjAyMy03NC4wMjctNzQuMDI3Yy02LjI1LTYuMjUtNi4yNS0xNi4zODcgMC0yMi42MzdzMTYuMzgzLTYuMjUgMjIuNjM3IDBsODUuMzMyIDg1LjMzNmM2LjI1IDYuMjUgNi4yNSAxNi4zODMgMCAyMi42MzNsLTg1LjMzMiA4NS4zMzJjLTMuMTM2NyAzLjE2MDItNy4yMzQ0IDQuNzE0OC0xMS4zMjggNC43MTQ4elwiLz5cbjwvc3ZnPlxuYCk7XG5cbmNvbnN0IG1vdmVSb3dEb3duID0gRWxlbWVudChgXG48c3ZnIGNsYXNzPVwid2lkZ2V0LWljb25cIiB3aWR0aD1cIjUxMnB0XCIgaGVpZ2h0PVwiNTEycHRcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBkPVwibTQ1My4zMyAyMTMuMzNoLTM5NC42NmMtMzIuMzYzIDAtNTguNjY4LTI2LjMwMS01OC42NjgtNTguNjY0di05NmMwLTMyLjM2MyAyNi4zMDUtNTguNjY4IDU4LjY2OC01OC42NjhoMzk0LjY2YzMyLjM2MyAwIDU4LjY2OCAyNi4zMDUgNTguNjY4IDU4LjY2OHY5NmMwIDMyLjM2My0yNi4zMDUgNTguNjY0LTU4LjY2OCA1OC42NjR6bS0zOTQuNjYtMTgxLjMzYy0xNC42OTkgMC0yNi42NjggMTEuOTY5LTI2LjY2OCAyNi42Njh2OTZjMCAxNC42OTkgMTEuOTY5IDI2LjY2NCAyNi42NjggMjYuNjY0aDM5NC42NmMxNC42OTkgMCAyNi42NjgtMTEuOTY1IDI2LjY2OC0yNi42NjR2LTk2YzAtMTQuNjk5LTExLjk2OS0yNi42NjgtMjYuNjY4LTI2LjY2OHpcIi8+XG4gIDxwYXRoIGQ9XCJtMjU2IDUxMmMtOC44MzIgMC0xNi03LjE2OC0xNi0xNnYtMjI0YzAtOC44MzIgNy4xNjgtMTYgMTYtMTZzMTYgNy4xNjggMTYgMTZ2MjI0YzAgOC44MzItNy4xNjggMTYtMTYgMTZ6XCIvPlxuICA8cGF0aCBkPVwibTI1NiA1MTJjLTQuMDk3NyAwLTguMTkxNC0xLjU1ODYtMTEuMzA5LTQuNjkxNGwtODUuMzMyLTg1LjMzNmMtNi4yNS02LjI1LTYuMjUtMTYuMzgzIDAtMjIuNjMzczE2LjM4My02LjI1IDIyLjYzNyAwbDc0LjAyMyA3NC4wMjcgNzQuMDI3LTc0LjAyN2M2LjI1LTYuMjUgMTYuMzg3LTYuMjUgMjIuNjM3IDBzNi4yNSAxNi4zODMgMCAyMi42MzNsLTg1LjMzNiA4NS4zMzZjLTMuMTU2MiAzLjEzMjgtNy4yNSA0LjY5MTQtMTEuMzQ4IDQuNjkxNHpcIi8+XG48L3N2Zz5cbmApO1xuXG5jb25zdCBtb3ZlUm93VXAgPSBFbGVtZW50KGBcbjxzdmcgY2xhc3M9XCJ3aWRnZXQtaWNvblwiIHdpZHRoPVwiNTEycHRcIiBoZWlnaHQ9XCI1MTJwdFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGQ9XCJtNDUzLjMzIDI5OC42N2gtMzk0LjY2Yy0zMi4zNjMgMC01OC42NjggMjYuMzAxLTU4LjY2OCA1OC42NjR2OTZjMCAzMi4zNjMgMjYuMzA1IDU4LjY2OCA1OC42NjggNTguNjY4aDM5NC42NmMzMi4zNjMgMCA1OC42NjgtMjYuMzA1IDU4LjY2OC01OC42Njh2LTk2YzAtMzIuMzYzLTI2LjMwNS01OC42NjQtNTguNjY4LTU4LjY2NHptLTM5NC42NiAxODEuMzNjLTE0LjY5OSAwLTI2LjY2OC0xMS45NjktMjYuNjY4LTI2LjY2OHYtOTZjMC0xNC42OTkgMTEuOTY5LTI2LjY2NCAyNi42NjgtMjYuNjY0aDM5NC42NmMxNC42OTkgMCAyNi42NjggMTEuOTY1IDI2LjY2OCAyNi42NjR2OTZjMCAxNC42OTktMTEuOTY5IDI2LjY2OC0yNi42NjggMjYuNjY4elwiLz5cbiAgPHBhdGggZD1cIm0yNTYgMGMtOC44MzIgMC0xNiA3LjE2OC0xNiAxNnYyMjRjMCA4LjgzMiA3LjE2OCAxNiAxNiAxNnMxNi03LjE2OCAxNi0xNnYtMjI0YzAtOC44MzItNy4xNjgtMTYtMTYtMTZ6XCIvPlxuICA8cGF0aCBkPVwibTI1NiAwYy00LjA5NzcgMC04LjE5MTQgMS41NTg2LTExLjMwOSA0LjY5MTRsLTg1LjMzMiA4NS4zMzZjLTYuMjUgNi4yNS02LjI1IDE2LjM4MyAwIDIyLjYzM3MxNi4zODMgNi4yNSAyMi42MzcgMGw3NC4wMjMtNzQuMDI3IDc0LjAyNyA3NC4wMjdjNi4yNSA2LjI1IDE2LjM4NyA2LjI1IDIyLjYzNyAwczYuMjUtMTYuMzgzIDAtMjIuNjMzbC04NS4zMzYtODUuMzM2Yy0zLjE1NjItMy4xMzI4LTcuMjUtNC42OTE0LTExLjM0OC00LjY5MTR6XCIvPlxuPC9zdmc+XG5gKTtcblxuY29uc3Qgc29ydEFzYyA9IEVsZW1lbnQoYFxuPHN2ZyBjbGFzcz1cIndpZGdldC1pY29uXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMiA1MTJcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSAwIDAgLTEgMCA1MDEuMTUpXCIgc3Ryb2tlLXdpZHRoPVwiMS4zMzMzXCI+XG4gICAgPHBhdGggZD1cIm0zNTMuNiA3NC40ODZjLTExLjc3NiAwLTIxLjMzMyA5LjU1NzMtMjEuMzMzIDIxLjMzM3YyOTguNjdjMCAxMS43NzYgOS41NTczIDIxLjMzMyAyMS4zMzMgMjEuMzMzczIxLjMzMy05LjU1NzMgMjEuMzMzLTIxLjMzM3YtMjk4LjY3YzAtMTEuNzc2LTkuNTU3My0yMS4zMzMtMjEuMzMzLTIxLjMzM3pcIi8+XG4gICAgPHBhdGggZD1cIm0zNTMuNiA3NC40ODZjLTUuNDYzNiAwLTEwLjkyMiAyLjA3ODEtMTUuMDc5IDYuMjU1MmwtMTEzLjc4IDExMy43OGMtOC4zMzMzIDguMzMzMy04LjMzMzMgMjEuODQ0IDAgMzAuMTc3IDguMzMzMyA4LjMzMzMgMjEuODQ0IDguMzMzMyAzMC4xODMgMGw5OC42OTctOTguNzAzIDk4LjcwMyA5OC43MDNjOC4zMzMzIDguMzMzMyAyMS44NDkgOC4zMzMzIDMwLjE4MyAwIDguMzMzMy04LjMzMzMgOC4zMzMzLTIxLjg0NCAwLTMwLjE3N2wtMTEzLjc4LTExMy43OGMtNC4yMDgzLTQuMTc3MS05LjY2NjctNi4yNTUyLTE1LjEzMS02LjI1NTJ6XCIvPlxuICA8L2c+XG4gIDxwYXRoIGQ9XCJtMTY2LjA0IDIxMC4xMXEtNS4wOTcxLTEzLjQ5Mi05LjU5NDUtMjYuMzg1LTQuNDk3NC0xMy4xOTItOS4yOTQ3LTI2LjY4NWgtOTQuMTQ2bC0xOC44ODkgNTMuMDdoLTMwLjI4M3ExMS45OTMtMzIuOTgxIDIyLjQ4Ny02MC44NjUgMTAuNDk0LTI4LjE4NCAyMC4zODgtNTMuMzY5IDEwLjE5NC0yNS4xODYgMjAuMDg5LTQ3Ljk3MyA5Ljg5NDMtMjMuMDg3IDIwLjY4OC00NS41NzRoMjYuNjg1cTEwLjc5NCAyMi40ODcgMjAuNjg4IDQ1LjU3NCA5Ljg5NDMgMjIuNzg3IDE5Ljc4OSA0Ny45NzMgMTAuMTk0IDI1LjE4NiAyMC42ODggNTMuMzY5IDEwLjQ5NCAyNy44ODQgMjIuNDg3IDYwLjg2NXptLTI3LjI4NC03Ny4wNTZxLTkuNTk0NS0yNi4wODUtMTkuMTg5LTUwLjM3MS05LjI5NDctMjQuNTg2LTE5LjQ4OS00Ny4wNzMtMTAuNDk0IDIyLjQ4Ny0yMC4wODkgNDcuMDczLTkuMjk0NyAyNC4yODYtMTguNTg5IDUwLjM3MXpcIi8+XG4gIDxwYXRoIGQ9XCJtMTczLjI0IDMyNS4yNXEtNi44OTYgNy43OTU1LTE2LjE5MSAxOC44ODktOC45OTQ4IDEwLjc5NC0xOS4xODkgMjQuMjg2LTEwLjE5NCAxMy4xOTItMjAuOTg4IDI4LjE4NC0xMC43OTQgMTQuNjkyLTIxLjI4OCAyOS45ODMtMTAuMTk0IDE0Ljk5MS0xOS40ODkgMjkuOTgzLTkuMjk0NyAxNC45OTEtMTYuNzkgMjguNDg0aDExNi45M3YyNC44ODZoLTE1MC44MXYtMTkuNDg5cTYuMjk2NC0xMS45OTMgMTQuNjkyLTI2LjM4NSA4LjY5NS0xNC4zOTIgMTguMjktMjkuMzgzIDkuODk0My0xNC45OTEgMjAuMzg4LTMwLjI4M3QyMC42ODgtMjkuMzgzcTEwLjQ5NC0xNC4wOTIgMjAuMDg4LTI2LjM4NSA5Ljg5NDMtMTIuMjkzIDE3Ljk5LTIxLjU4OGgtMTA2Ljc0di0yNC44ODZoMTQyLjQyelwiLz5cbjwvc3ZnPlxuYCk7XG5cbmNvbnN0IHNvcnREZXNjID0gRWxlbWVudChgXG48c3ZnIGNsYXNzPVwid2lkZ2V0LWljb25cIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxIDAgMCAtMSAwIDUwMS4xNSlcIiBzdHJva2Utd2lkdGg9XCIxLjMzMzNcIj5cbiAgICA8cGF0aCBkPVwibTM1My42IDc0LjQ4NmMtMTEuNzc2IDAtMjEuMzMzIDkuNTU3My0yMS4zMzMgMjEuMzMzdjI5OC42N2MwIDExLjc3NiA5LjU1NzMgMjEuMzMzIDIxLjMzMyAyMS4zMzNzMjEuMzMzLTkuNTU3MyAyMS4zMzMtMjEuMzMzdi0yOTguNjdjMC0xMS43NzYtOS41NTczLTIxLjMzMy0yMS4zMzMtMjEuMzMzelwiLz5cbiAgICA8cGF0aCBkPVwibTM1My42IDc0LjQ4NmMtNS40NjM2IDAtMTAuOTIyIDIuMDc4MS0xNS4wNzkgNi4yNTUybC0xMTMuNzggMTEzLjc4Yy04LjMzMzMgOC4zMzMzLTguMzMzMyAyMS44NDQgMCAzMC4xNzcgOC4zMzMzIDguMzMzMyAyMS44NDQgOC4zMzMzIDMwLjE4MyAwbDk4LjY5Ny05OC43MDMgOTguNzAzIDk4LjcwM2M4LjMzMzMgOC4zMzMzIDIxLjg0OSA4LjMzMzMgMzAuMTgzIDAgOC4zMzMzLTguMzMzMyA4LjMzMzMtMjEuODQ0IDAtMzAuMTc3bC0xMTMuNzgtMTEzLjc4Yy00LjIwODMtNC4xNzcxLTkuNjY2Ny02LjI1NTItMTUuMTMxLTYuMjU1MnpcIi8+XG4gIDwvZz5cbiAgPHBhdGggZD1cIm0xNjkuMTEgNTA3LjcycS01LjA5NzEtMTMuNDkyLTkuNTk0NS0yNi4zODUtNC40OTc0LTEzLjE5Mi05LjI5NDctMjYuNjg1aC05NC4xNDZsLTE4Ljg4OSA1My4wN2gtMzAuMjgzcTExLjk5My0zMi45ODEgMjIuNDg3LTYwLjg2NSAxMC40OTQtMjguMTg0IDIwLjM4OC01My4zNjkgMTAuMTk0LTI1LjE4NiAyMC4wODgtNDcuOTczIDkuODk0My0yMy4wODcgMjAuNjg4LTQ1LjU3NGgyNi42ODVxMTAuNzk0IDIyLjQ4NyAyMC42ODggNDUuNTc0IDkuODk0MyAyMi43ODcgMTkuNzg5IDQ3Ljk3MyAxMC4xOTQgMjUuMTg2IDIwLjY4OCA1My4zNjkgMTAuNDk0IDI3Ljg4NCAyMi40ODcgNjAuODY1em0tMjcuMjg0LTc3LjA1NnEtOS41OTQ1LTI2LjA4NS0xOS4xODktNTAuMzcxLTkuMjk0Ny0yNC41ODYtMTkuNDg5LTQ3LjA3My0xMC40OTQgMjIuNDg3LTIwLjA4OSA0Ny4wNzMtOS4yOTQ3IDI0LjI4Ni0xOC41ODkgNTAuMzcxelwiLz5cbiAgPHBhdGggZD1cIm0xNzYuMzEgMjcuNjM5cS02Ljg5NiA3Ljc5NTUtMTYuMTkxIDE4Ljg4OS04Ljk5NDggMTAuNzk0LTE5LjE4OSAyNC4yODYtMTAuMTk0IDEzLjE5Mi0yMC45ODggMjguMTg0LTEwLjc5NCAxNC42OTItMjEuMjg4IDI5Ljk4My0xMC4xOTQgMTQuOTkxLTE5LjQ4OSAyOS45ODMtOS4yOTQ3IDE0Ljk5MS0xNi43OSAyOC40ODRoMTE2LjkzdjI0Ljg4NmgtMTUwLjgxdi0xOS40ODlxNi4yOTY0LTExLjk5MyAxNC42OTItMjYuMzg1IDguNjk1LTE0LjM5MiAxOC4yOS0yOS4zODMgOS44OTQzLTE0Ljk5MSAyMC4zODgtMzAuMjgzIDEwLjQ5NC0xNS4yOTEgMjAuNjg4LTI5LjM4MyAxMC40OTQtMTQuMDkyIDIwLjA4OC0yNi4zODUgOS44OTQzLTEyLjI5MyAxNy45OS0yMS41ODhoLTEwNi43NHYtMjQuODg2aDE0Mi40MnpcIi8+XG48L3N2Zz5cbmApO1xuXG5jb25zdCBjbG9zZSA9IEVsZW1lbnQoYFxuPHN2ZyBjbGFzcz1cIndpZGdldC1pY29uXCIgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjI2XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNi44NzkyIDYuODc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgLTI5MC4xMilcIj5cbiAgICA8cGF0aCBkPVwibTEuNDk3OCAyOTYuOThjLTAuMjE5OTYtMC4wMjg1LTAuNDYyNDEtMC4xMTMwMS0wLjY1MzE3LTAuMjI3NjUtMC4xNTIzOC0wLjA5MTYtMC4yMzI3MS0wLjE1NjA4LTAuMzYzNzQtMC4yOTItMC4yMzEyNy0wLjIzOTg5LTAuMzgyNzItMC41Mjg4Ny0wLjQ0OTc4LTAuODU4MTUtMC4wMjIzODUtMC4xMDk5My0wLjAyMzk5Ny0wLjI0NzM4LTAuMDIzOTk3LTIuMDQ1IDAtMi4xMzk3LTAuMDA1MDAyMS0yLjAxMjcgMC4wODkzMzItMi4yOCAwLjA5MTU4NC0wLjI1OTYxIDAuMjA5ODgtMC40NDU2MSAwLjQxMy0wLjY0OTM4IDAuMjU5NjktMC4yNjA1MSAwLjU1MzA0LTAuNDE0MjUgMC45MjQ5My0wLjQ4NDc3IDAuMDcwNTEzLTAuMDEzNCAwLjUxMDgzLTAuMDE3MSAyLjAxMDctMC4wMTcxIDEuNzkxMiAwIDEuOTI4NCAyZS0zIDIuMDM4MyAwLjAyNCAwLjY4OTkxIDAuMTQwNDkgMS4yMjE4IDAuNjcyMzYgMS4zNjIzIDEuMzYyMyAwLjAyMjM4NSAwLjEwOTkgMC4wMjM5OTcgMC4yNDcwOCAwLjAyMzk5NyAyLjAzODMgMCAxLjQ5OTktMC4wMDM3MyAxLjk0MDItMC4wMTcxMTkgMi4wMTA3LTAuMDcwNTA0IDAuMzcxODktMC4yMjQyNSAwLjY2NTI1LTAuNDg0NzcgMC45MjQ5My0wLjIwNzMxIDAuMjA2NjYtMC40MDI3OCAwLjMyOTY2LTAuNjYxNzUgMC40MTY0Mi0wLjI2ODA0IDAuMDg5OC0wLjEyMTE4IDAuMDg0MS0yLjIxMzkgMC4wODctMS4wNzY3IDJlLTMgLTEuOTQxLTNlLTMgLTEuOTk0My05ZS0zem00LjAwODctMC42MTMzMWMwLjE4ODY5LTAuMDY1NSAwLjMwOTgxLTAuMTM5NjEgMC40NDM1My0wLjI3MTI5IDAuMTM0NjMtMC4xMzI1OCAwLjIxMTc0LTAuMjQ1NzQgMC4yNjk4Mi0wLjM5NTk1IDAuMDgzNTUxLTAuMjE2MDkgMC4wNzk4NzUtMC4xMTAyIDAuMDc1OTA1LTIuMTg2M2wtMC4wMDM2LTEuODk2NS0wLjAzODEwMi0wLjExNDE2Yy0wLjEyMjM4LTAuMzY2Ni0wLjM4NTc1LTAuNjMyODYtMC43NDc1My0wLjc1NTcybC0wLjEyNzU5LTAuMDQzMjloLTMuODgxMmwtMC4xMTQxNSAwLjAzODFjLTAuMzY2NiAwLjEyMjM3LTAuNjMyODcgMC4zODU3NS0wLjc1NTczIDAuNzQ3NTNsLTAuMDQzMzI3IDAuMTI3NTh2My44ODEybDAuMDM4MTAyIDAuMTE0MTVjMC4xMzY2NCAwLjQwOTM3IDAuNDQ2NDUgMC42OTE4NSAwLjg2MTY4IDAuNzg1NyAwLjA2NjA1OCAwLjAxNDkgMC40MjQyIDAuMDE3OCAxLjk4NzYgMC4wMTU4bDEuOTA3LTNlLTN6bS0zLjE2NzktMS41MjY1Yy0wLjE2MzUtMC4wNTI0LTAuMjQzMy0wLjI0NjI3LTAuMTY2MDUtMC40MDMzNSAwLjAxMDg5OS0wLjAyMjIgMC4yMDc4OC0wLjIyOTE2IDAuNDM3NzQtMC40NTk5N2wwLjQxNzkzLTAuNDE5NjctMC40MTc5My0wLjQxOTY4Yy0wLjIyOTg2LTAuMjMwODMtMC40Mjc0OC0wLjQzODY4LTAuNDM5MTUtMC40NjE5MS0wLjA1ODM3OS0wLjExNjE4LTAuMDM4MDMzLTAuMjM0MyAwLjA1NjY2NC0wLjMyOSAwLjA5NDctMC4wOTQ3IDAuMjEyODItMC4xMTUwNSAwLjMyOS0wLjA1NjcgMC4wMjMyMjkgMC4wMTE3IDAuMjMxMDkgMC4yMDkyOSAwLjQ2MTkxIDAuNDM5MTVsMC40MTk2OCAwLjQxNzkxIDAuNDE5NjctMC40MTc5MWMwLjIzMDgyLTAuMjI5ODYgMC40Mzc4MS0wLjQyNjk0IDAuNDU5OTYtMC40Mzc5NiAwLjE1OTcxLTAuMDc5MyAwLjM1NDk4IDRlLTMgMC40MDQyMSAwLjE3NDExIDAuMDIxODY2IDAuMDc1MiAwLjAxNjA0MiAwLjE0MzI3LTAuMDE4MTczIDAuMjEyMy0wLjAxMDk4NyAwLjAyMjItMC4yMDc5MiAwLjIyOTE4LTAuNDM3NjQgMC40NjAwNmwtMC40MTc2NyAwLjQxOTc4IDAuNDE3ODMgMC40MTk1N2MwLjIyOTgxIDAuMjMwNzcgMC40MjY4NCAwLjQzNzcyIDAuNDM3ODUgMC40NTk4NyAwLjA3OTM2MyAwLjE1OTcxLTAuMDA0NzcgMC4zNTQ5OC0wLjE3NDExIDAuNDA0MjItMC4wNzUwOTUgMC4wMjE4LTAuMTQyOTkgMC4wMTYxLTAuMjEyMy0wLjAxOC0wLjAyMjE1OC0wLjAxMDktMC4yMjkxLTAuMjA3ODQtMC40NTk4Ny0wLjQzNzY1bC0wLjQxOTU4LTAuNDE3ODItMC40MTk3NyAwLjQxNzY2Yy0wLjIzMDg3IDAuMjI5NzMtMC40Mzc5OCAwLjQyNjg4LTAuNDYwMjQgMC40MzgxMy0wLjA2MTg1NCAwLjAzMTMtMC4xNTMwOSAwLjAzODMtMC4yMTk5OCAwLjAxNjh6XCIgc3Ryb2tlLXdpZHRoPVwiLjAxMzQzXCIvPlxuICA8L2c+XG48L3N2Zz5cbmApO1xuIiwiaW1wb3J0IHsgT2JzaWRpYW5UZXh0RWRpdG9yIH0gZnJvbSAnLi9vYnNpZGlhbi10ZXh0LWVkaXRvcic7XG5pbXBvcnQgeyBUYWJsZUVkaXRvclBsdWdpblNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5ncyc7XG5pbXBvcnQgeyBUYWJsZUNvbnRyb2xzIH0gZnJvbSAnLi90YWJsZS1jb250cm9scyc7XG5pbXBvcnQge1xuICBBbGlnbm1lbnQsXG4gIFNvcnRPcmRlcixcbiAgVGFibGVFZGl0b3IgYXMgTVRFRWRpdG9yLFxufSBmcm9tICdAdGdyb3Npbmdlci9tZC1hZHZhbmNlZC10YWJsZXMnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVFZGl0b3Ige1xuICBwcml2YXRlIHJlYWRvbmx5IHNldHRpbmdzOiBUYWJsZUVkaXRvclBsdWdpblNldHRpbmdzO1xuICBwcml2YXRlIHJlYWRvbmx5IGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3I7XG4gIHByaXZhdGUgcmVhZG9ubHkgbXRlOiBNVEVFZGl0b3I7XG5cbiAgY29uc3RydWN0b3IoY206IENvZGVNaXJyb3IuRWRpdG9yLCBzZXR0aW5nczogVGFibGVFZGl0b3JQbHVnaW5TZXR0aW5ncykge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLmVkaXRvciA9IGNtO1xuXG4gICAgY29uc3Qgb3RlID0gbmV3IE9ic2lkaWFuVGV4dEVkaXRvcihjbSk7XG4gICAgdGhpcy5tdGUgPSBuZXcgTVRFRWRpdG9yKG90ZSk7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgY3Vyc29ySXNJblRhYmxlID0gKCk6IGJvb2xlYW4gPT5cbiAgICB0aGlzLm10ZS5jdXJzb3JJc0luVGFibGUodGhpcy5zZXR0aW5ncy5hc09wdGlvbnMoKSk7XG5cbiAgcHVibGljIHJlYWRvbmx5IG5leHRDZWxsID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubXRlLm5leHRDZWxsKHRoaXMuc2V0dGluZ3MuYXNPcHRpb25zKCkpO1xuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBwcmV2aW91c0NlbGwgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5tdGUucHJldmlvdXNDZWxsKHRoaXMuc2V0dGluZ3MuYXNPcHRpb25zKCkpO1xuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBuZXh0Um93ID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubXRlLm5leHRSb3codGhpcy5zZXR0aW5ncy5hc09wdGlvbnMoKSk7XG4gIH07XG5cbiAgcHVibGljIHJlYWRvbmx5IGZvcm1hdFRhYmxlID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubXRlLmZvcm1hdCh0aGlzLnNldHRpbmdzLmFzT3B0aW9ucygpKTtcbiAgfTtcblxuICBwdWJsaWMgcmVhZG9ubHkgaW5zZXJ0Q29sdW1uID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubXRlLmluc2VydENvbHVtbih0aGlzLnNldHRpbmdzLmFzT3B0aW9ucygpKTtcbiAgfTtcblxuICBwdWJsaWMgcmVhZG9ubHkgaW5zZXJ0Um93ID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubXRlLmluc2VydFJvdyh0aGlzLnNldHRpbmdzLmFzT3B0aW9ucygpKTtcbiAgfTtcblxuICBwdWJsaWMgcmVhZG9ubHkgbGVmdEFsaWduQ29sdW1uID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubXRlLmFsaWduQ29sdW1uKEFsaWdubWVudC5MRUZULCB0aGlzLnNldHRpbmdzLmFzT3B0aW9ucygpKTtcbiAgfTtcblxuICBwdWJsaWMgcmVhZG9ubHkgY2VudGVyQWxpZ25Db2x1bW4gPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5tdGUuYWxpZ25Db2x1bW4oQWxpZ25tZW50LkNFTlRFUiwgdGhpcy5zZXR0aW5ncy5hc09wdGlvbnMoKSk7XG4gIH07XG5cbiAgcHVibGljIHJlYWRvbmx5IHJpZ2h0QWxpZ25Db2x1bW4gPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5tdGUuYWxpZ25Db2x1bW4oQWxpZ25tZW50LlJJR0hULCB0aGlzLnNldHRpbmdzLmFzT3B0aW9ucygpKTtcbiAgfTtcblxuICBwdWJsaWMgcmVhZG9ubHkgbW92ZUNvbHVtbkxlZnQgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5tdGUubW92ZUNvbHVtbigtMSwgdGhpcy5zZXR0aW5ncy5hc09wdGlvbnMoKSk7XG4gIH07XG5cbiAgcHVibGljIHJlYWRvbmx5IG1vdmVDb2x1bW5SaWdodCA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLm10ZS5tb3ZlQ29sdW1uKDEsIHRoaXMuc2V0dGluZ3MuYXNPcHRpb25zKCkpO1xuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBtb3ZlUm93VXAgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5tdGUubW92ZVJvdygtMSwgdGhpcy5zZXR0aW5ncy5hc09wdGlvbnMoKSk7XG4gIH07XG5cbiAgcHVibGljIHJlYWRvbmx5IG1vdmVSb3dEb3duID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubXRlLm1vdmVSb3coMSwgdGhpcy5zZXR0aW5ncy5hc09wdGlvbnMoKSk7XG4gIH07XG5cbiAgcHVibGljIHJlYWRvbmx5IGRlbGV0ZUNvbHVtbiA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLm10ZS5kZWxldGVDb2x1bW4odGhpcy5zZXR0aW5ncy5hc09wdGlvbnMoKSk7XG4gIH07XG5cbiAgcHVibGljIHJlYWRvbmx5IGRlbGV0ZVJvdyA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLm10ZS5kZWxldGVSb3codGhpcy5zZXR0aW5ncy5hc09wdGlvbnMoKSk7XG4gIH07XG5cbiAgcHVibGljIHJlYWRvbmx5IHNvcnRSb3dzQXNjID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubXRlLnNvcnRSb3dzKFNvcnRPcmRlci5Bc2NlbmRpbmcsIHRoaXMuc2V0dGluZ3MuYXNPcHRpb25zKCkpO1xuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBzb3J0Um93c0Rlc2MgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5tdGUuc29ydFJvd3MoU29ydE9yZGVyLkRlc2NlbmRpbmcsIHRoaXMuc2V0dGluZ3MuYXNPcHRpb25zKCkpO1xuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBvcGVuVGFibGVDb250cm9scyA9ICgpOiBUYWJsZUNvbnRyb2xzID0+IHtcbiAgICBjb25zdCBjb250cm9scyA9IG5ldyBUYWJsZUNvbnRyb2xzKHRoaXMuZWRpdG9yLCB0aGlzKTtcbiAgICBjb250cm9scy5kaXNwbGF5KCk7XG4gICAgcmV0dXJuIGNvbnRyb2xzO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgVGFibGVFZGl0b3JQbHVnaW5TZXR0aW5ncyB9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHsgVGFibGVDb250cm9scyB9IGZyb20gJy4vdGFibGUtY29udHJvbHMnO1xuaW1wb3J0IHsgVGFibGVFZGl0b3IgfSBmcm9tICcuL3RhYmxlLWVkaXRvcic7XG5pbXBvcnQgeyBGb3JtYXRUeXBlIH0gZnJvbSAnQHRncm9zaW5nZXIvbWQtYWR2YW5jZWQtdGFibGVzJztcbmltcG9ydCB7XG4gIGFkZEljb24sXG4gIEFwcCxcbiAgTWFya2Rvd25WaWV3LFxuICBOb3RpY2UsXG4gIFBsdWdpbixcbiAgUGx1Z2luU2V0dGluZ1RhYixcbiAgU2V0dGluZyxcbn0gZnJvbSAnb2JzaWRpYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUVkaXRvclBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHB1YmxpYyBzZXR0aW5nczogVGFibGVFZGl0b3JQbHVnaW5TZXR0aW5ncztcblxuICAvLyBjbUVkaXRvcnMgaXMgdXNlZCBkdXJpbmcgdW5sb2FkIHRvIHJlbW92ZSBvdXIgZXZlbnQgaGFuZGxlcnMuXG4gIHByaXZhdGUgY21FZGl0b3JzOiBDb2RlTWlycm9yLkVkaXRvcltdO1xuXG4gIHByaXZhdGUgdGFibGVDb250cm9sczogVGFibGVDb250cm9scztcblxuICBwdWJsaWMgb25Jbml0KCk6IHZvaWQge31cblxuICBwdWJsaWMgYXN5bmMgb25sb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIG1hcmtkb3duLXRhYmxlLWVkaXRvciBwbHVnaW4nKTtcblxuICAgIHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICB0aGlzLmNtRWRpdG9ycyA9IFtdO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLm9uKCdjb2RlbWlycm9yJywgKGNtOiBDb2RlTWlycm9yLkVkaXRvcikgPT4ge1xuICAgICAgICB0aGlzLmNtRWRpdG9ycy5wdXNoKGNtKTtcbiAgICAgICAgY20ub24oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgICAgfSksXG4gICAgKTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ25leHQtcm93JyxcbiAgICAgIG5hbWU6ICdHbyB0byBuZXh0IHJvdycsXG4gICAgICBjYWxsYmFjazogdGhpcy5uZXdQZXJmb3JtVGFibGVBY3Rpb24oKHRlOiBUYWJsZUVkaXRvcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5iaW5kRW50ZXIpIHtcbiAgICAgICAgICBuZXcgTm90aWNlKFxuICAgICAgICAgICAgJ0FkdmFuY2VkIFRhYmxlczogTmV4dCByb3cgYWxzbyBib3VuZCB0byBlbnRlci4gJyArXG4gICAgICAgICAgICAgICdQb3NzaWJseSBwcm9kdWNpbmcgZG91YmxlIGFjdGlvbnMuIFNlZSBBZHZhbmNlZCBUYWJsZXMgc2V0dGluZ3MuJyxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRlLm5leHRSb3coKTtcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnbmV4dC1jZWxsJyxcbiAgICAgIG5hbWU6ICdHbyB0byBuZXh0IGNlbGwnLFxuICAgICAgY2FsbGJhY2s6IHRoaXMubmV3UGVyZm9ybVRhYmxlQWN0aW9uKCh0ZTogVGFibGVFZGl0b3IpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYmluZEVudGVyKSB7XG4gICAgICAgICAgbmV3IE5vdGljZShcbiAgICAgICAgICAgICdBZHZhbmNlZCBUYWJsZXM6IE5leHQgY2VsbCBhbHNvIGJvdW5kIHRvIHRhYi4gJyArXG4gICAgICAgICAgICAgICdQb3NzaWJseSBwcm9kdWNpbmcgZG91YmxlIGFjdGlvbnMuIFNlZSBBZHZhbmNlZCBUYWJsZXMgc2V0dGluZ3MuJyxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRlLm5leHRDZWxsKCk7XG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3ByZXZpb3VzLWNlbGwnLFxuICAgICAgbmFtZTogJ0dvIHRvIHByZXZpb3VzIGNlbGwnLFxuICAgICAgY2FsbGJhY2s6IHRoaXMubmV3UGVyZm9ybVRhYmxlQWN0aW9uKCh0ZTogVGFibGVFZGl0b3IpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYmluZEVudGVyKSB7XG4gICAgICAgICAgbmV3IE5vdGljZShcbiAgICAgICAgICAgICdBZHZhbmNlZCBUYWJsZXM6IFByZXZpb3VzIGNlbGwgYWxzbyBib3VuZCB0byBzaGlmdCt0YWIuICcgK1xuICAgICAgICAgICAgICAnUG9zc2libHkgcHJvZHVjaW5nIGRvdWJsZSBhY3Rpb25zLiBTZWUgQWR2YW5jZWQgVGFibGVzIHNldHRpbmdzLicsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0ZS5wcmV2aW91c0NlbGwoKTtcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnZm9ybWF0LXRhYmxlJyxcbiAgICAgIG5hbWU6ICdGb3JtYXQgdGFibGUgYXQgdGhlIGN1cnNvcicsXG4gICAgICBjYWxsYmFjazogdGhpcy5uZXdQZXJmb3JtVGFibGVBY3Rpb24oKHRlOiBUYWJsZUVkaXRvcikgPT4ge1xuICAgICAgICB0ZS5mb3JtYXRUYWJsZSgpO1xuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdpbnNlcnQtY29sdW1uJyxcbiAgICAgIG5hbWU6ICdJbnNlcnQgY29sdW1uIGJlZm9yZSBjdXJyZW50JyxcbiAgICAgIGNhbGxiYWNrOiB0aGlzLm5ld1BlcmZvcm1UYWJsZUFjdGlvbigodGU6IFRhYmxlRWRpdG9yKSA9PiB7XG4gICAgICAgIHRlLmluc2VydENvbHVtbigpO1xuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdsZWZ0LWFsaWduLWNvbHVtbicsXG4gICAgICBuYW1lOiAnTGVmdCBhbGlnbiBjb2x1bW4nLFxuICAgICAgY2FsbGJhY2s6IHRoaXMubmV3UGVyZm9ybVRhYmxlQWN0aW9uKCh0ZTogVGFibGVFZGl0b3IpID0+IHtcbiAgICAgICAgdGUubGVmdEFsaWduQ29sdW1uKCk7XG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ2NlbnRlci1hbGlnbi1jb2x1bW4nLFxuICAgICAgbmFtZTogJ0NlbnRlciBhbGlnbiBjb2x1bW4nLFxuICAgICAgY2FsbGJhY2s6IHRoaXMubmV3UGVyZm9ybVRhYmxlQWN0aW9uKCh0ZTogVGFibGVFZGl0b3IpID0+IHtcbiAgICAgICAgdGUuY2VudGVyQWxpZ25Db2x1bW4oKTtcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAncmlnaHQtYWxpZ24tY29sdW1uJyxcbiAgICAgIG5hbWU6ICdSaWdodCBhbGlnbiBjb2x1bW4nLFxuICAgICAgY2FsbGJhY2s6IHRoaXMubmV3UGVyZm9ybVRhYmxlQWN0aW9uKCh0ZTogVGFibGVFZGl0b3IpID0+IHtcbiAgICAgICAgdGUucmlnaHRBbGlnbkNvbHVtbigpO1xuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdtb3ZlLWNvbHVtbi1sZWZ0JyxcbiAgICAgIG5hbWU6ICdNb3ZlIGNvbHVtbiBsZWZ0JyxcbiAgICAgIGNhbGxiYWNrOiB0aGlzLm5ld1BlcmZvcm1UYWJsZUFjdGlvbigodGU6IFRhYmxlRWRpdG9yKSA9PiB7XG4gICAgICAgIHRlLm1vdmVDb2x1bW5MZWZ0KCk7XG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ21vdmUtY29sdW1uLXJpZ2h0JyxcbiAgICAgIG5hbWU6ICdNb3ZlIGNvbHVtbiByaWdodCcsXG4gICAgICBjYWxsYmFjazogdGhpcy5uZXdQZXJmb3JtVGFibGVBY3Rpb24oKHRlOiBUYWJsZUVkaXRvcikgPT4ge1xuICAgICAgICB0ZS5tb3ZlQ29sdW1uUmlnaHQoKTtcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnbW92ZS1yb3ctdXAnLFxuICAgICAgbmFtZTogJ01vdmUgcm93IHVwJyxcbiAgICAgIGNhbGxiYWNrOiB0aGlzLm5ld1BlcmZvcm1UYWJsZUFjdGlvbigodGU6IFRhYmxlRWRpdG9yKSA9PiB7XG4gICAgICAgIHRlLm1vdmVSb3dVcCgpO1xuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdtb3ZlLXJvdy1kb3duJyxcbiAgICAgIG5hbWU6ICdNb3ZlIHJvdyBkb3duJyxcbiAgICAgIGNhbGxiYWNrOiB0aGlzLm5ld1BlcmZvcm1UYWJsZUFjdGlvbigodGU6IFRhYmxlRWRpdG9yKSA9PiB7XG4gICAgICAgIHRlLm1vdmVSb3dEb3duKCk7XG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ2RlbGV0ZS1jb2x1bW4nLFxuICAgICAgbmFtZTogJ0RlbGV0ZSBjb2x1bW4nLFxuICAgICAgY2FsbGJhY2s6IHRoaXMubmV3UGVyZm9ybVRhYmxlQWN0aW9uKCh0ZTogVGFibGVFZGl0b3IpID0+IHtcbiAgICAgICAgdGUuZGVsZXRlQ29sdW1uKCk7XG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ2RlbGV0ZS1yb3cnLFxuICAgICAgbmFtZTogJ0RlbGV0ZSByb3cnLFxuICAgICAgY2FsbGJhY2s6IHRoaXMubmV3UGVyZm9ybVRhYmxlQWN0aW9uKCh0ZTogVGFibGVFZGl0b3IpID0+IHtcbiAgICAgICAgdGUuZGVsZXRlUm93KCk7XG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3NvcnQtcm93cy1hc2NlbmRpbmcnLFxuICAgICAgbmFtZTogJ1NvcnQgcm93cyBhc2NlbmRpbmcnLFxuICAgICAgY2FsbGJhY2s6IHRoaXMubmV3UGVyZm9ybVRhYmxlQWN0aW9uKCh0ZTogVGFibGVFZGl0b3IpID0+IHtcbiAgICAgICAgdGUuc29ydFJvd3NBc2MoKTtcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc29ydC1yb3dzLWRlc2NlbmRpbmcnLFxuICAgICAgbmFtZTogJ1NvcnQgcm93cyBkZXNjZW5kaW5nJyxcbiAgICAgIGNhbGxiYWNrOiB0aGlzLm5ld1BlcmZvcm1UYWJsZUFjdGlvbigodGU6IFRhYmxlRWRpdG9yKSA9PiB7XG4gICAgICAgIHRlLnNvcnRSb3dzRGVzYygpO1xuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICd0YWJsZS1jb250cm9sLWJhcicsXG4gICAgICBuYW1lOiAnT3BlbiB0YWJsZSBjb250cm9scyB0b29sYmFyJyxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogWydNb2QnLCAnU2hpZnQnXSxcbiAgICAgICAgICBrZXk6ICdkJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjYWxsYmFjazogdGhpcy5uZXdQZXJmb3JtVGFibGVBY3Rpb24oKHRlOiBUYWJsZUVkaXRvcikgPT4ge1xuICAgICAgICB0aGlzLnRhYmxlQ29udHJvbHMgPSB0ZS5vcGVuVGFibGVDb250cm9scygpO1xuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IFRhYmxlRWRpdG9yU2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBvbnVubG9hZCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygndW5sb2FkaW5nIG1hcmtkb3duLXRhYmxlLWVkaXRvciBwbHVnaW4nKTtcblxuICAgIGlmICh0aGlzLnRhYmxlQ29udHJvbHMpIHtcbiAgICAgIHRoaXMudGFibGVDb250cm9scy5jbGVhcigpO1xuICAgICAgdGhpcy50YWJsZUNvbnRyb2xzID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmNtRWRpdG9ycy5mb3JFYWNoKChjbSkgPT4ge1xuICAgICAgY20ub2ZmKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBlbmFibGVNb25vc3BhY2VGb250KCk6IHZvaWQge1xuICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICAnQWR2YW5jZWQgVGFibGVzOiBBZGRpbmcgY3NzIGNsYXNzIHRvIGVuYWJsZSBtb25vc3BhY2UgZm9udCBpbiB0YWJsZXMnLFxuICAgICk7XG5cbiAgICBjb25zdCBleGlzdGluZ0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWR2YW5jZWQtdGFibGVzLW1vbm9zcGFjZScpO1xuICAgIGlmIChleGlzdGluZ0VsZW0pIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ0FkdmFuY2VkIFRhYmxlczogY3NzIGFscmVhZHkgZW5hYmxlZCwgc2tpcHBpbmcnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZm9udCA9ICdtb25vc3BhY2UnO1xuICAgIGNvbnN0IHByZWZlcnJlZEZvbnQgPSB0aGlzLnNldHRpbmdzLnByZWZlcnJlZE1vbm9zcGFjZUZvbnQ7XG4gICAgaWYgKHByZWZlcnJlZEZvbnQpIHtcbiAgICAgIGZvbnQgPSBgJHtwcmVmZXJyZWRGb250fSwgJHtmb250fWA7XG4gICAgfVxuXG4gICAgY29uc3QgY3NzID0gYFxuPHN0eWxlIHR5cGU9J3RleHQvY3NzJyBpZD0nYWR2YW5jZWQtdGFibGVzLW1vbm9zcGFjZSc+XG4gIC5IeXBlck1ELXRhYmxlLXJvdyB7XG4gICAgZm9udC1mYW1pbHk6ICR7Zm9udH0gIWltcG9ydGFudDtcbiAgfVxuPC9zdHlsZT5cbmA7XG4gICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNzcyk7XG4gIH1cblxuICBwdWJsaWMgZGlzYWJsZU1vbm9zcGFjZUZvbnQoKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZHZhbmNlZC10YWJsZXMtbW9ub3NwYWNlJyk7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIGVsZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlYWRvbmx5IG5ld1BlcmZvcm1UYWJsZUFjdGlvbiA9IChcbiAgICBmbjogKHRlOiBUYWJsZUVkaXRvcikgPT4gdm9pZCxcbiAgICBhbGVydE9uTm9UYWJsZSA9IHRydWUsXG4gICkgPT4gKCk6IHZvaWQgPT4ge1xuICAgIC8vIEFueSBhY3Rpb24gd2lsbCB0cmlnZ2VyIGhpZGluZyB0aGUgdGFibGUgY29udHJvbHNcbiAgICBpZiAodGhpcy50YWJsZUNvbnRyb2xzKSB7XG4gICAgICB0aGlzLnRhYmxlQ29udHJvbHMuY2xlYXIoKTtcbiAgICAgIHRoaXMudGFibGVDb250cm9scyA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gQW55IGFjdGlvbiB3aWxsIHRyaWdnZXIgY2hlY2tpbmcgZm9yIHRhYmxlcyB0aGF0IG5lZWQgdG8gYmUgbW9ub3NwYWNlZFxuICAgIGlmICh0aGlzLnNldHRpbmdzLnVzZU1vbm9zcGFjZUZvbnQpIHtcbiAgICAgIHRoaXMuZW5hYmxlTW9ub3NwYWNlRm9udCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUxlYWYgPSB0aGlzLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZjtcbiAgICBpZiAoYWN0aXZlTGVhZi52aWV3IGluc3RhbmNlb2YgTWFya2Rvd25WaWV3KSB7XG4gICAgICBjb25zdCB0ZSA9IG5ldyBUYWJsZUVkaXRvcihcbiAgICAgICAgYWN0aXZlTGVhZi52aWV3LnNvdXJjZU1vZGUuY21FZGl0b3IsXG4gICAgICAgIHRoaXMuc2V0dGluZ3MsXG4gICAgICApO1xuXG4gICAgICBpZiAoIXRlLmN1cnNvcklzSW5UYWJsZSgpKSB7XG4gICAgICAgIGlmIChhbGVydE9uTm9UYWJsZSkge1xuICAgICAgICAgIG5ldyBOb3RpY2UoJ0FkdmFuY2VkIFRhYmxlczogQ3Vyc29yIG11c3QgYmUgaW4gYSB0YWJsZS4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZuKHRlKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVLZXlEb3duID0gKFxuICAgIGNtOiBDb2RlTWlycm9yLkVkaXRvcixcbiAgICBldmVudDogS2V5Ym9hcmRFdmVudCxcbiAgKTogdm9pZCA9PiB7XG4gICAgaWYgKFsnVGFiJywgJ0VudGVyJ10uY29udGFpbnMoZXZlbnQua2V5KSkge1xuICAgICAgdGhpcy5uZXdQZXJmb3JtVGFibGVBY3Rpb24oKHRlOiBUYWJsZUVkaXRvcikgPT4ge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuYmluZFRhYikge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICB0ZS5wcmV2aW91c0NlbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlLm5leHRDZWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuYmluZEVudGVyKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGUubmV4dFJvdygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0sIGZhbHNlKSgpO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGFzeW5jIGxvYWRTZXR0aW5ncygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnNldHRpbmdzID0gbmV3IFRhYmxlRWRpdG9yUGx1Z2luU2V0dGluZ3MoKTtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVkU2V0dGluZ3MgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgICBpZiAobG9hZGVkU2V0dGluZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZvdW5kIGV4aXN0aW5nIHNldHRpbmdzIGZpbGUnKTtcblxuICAgICAgICBpZiAoJ2Zvcm1hdFR5cGUnIGluIGxvYWRlZFNldHRpbmdzKSB7XG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy5mb3JtYXRUeXBlID0gbG9hZGVkU2V0dGluZ3MuZm9ybWF0VHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnc2hvd1JpYmJvbkljb24nIGluIGxvYWRlZFNldHRpbmdzKSB7XG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy5zaG93UmliYm9uSWNvbiA9IGxvYWRlZFNldHRpbmdzLnNob3dSaWJib25JY29uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCd1c2VNb25vc3BhY2VGb250JyBpbiBsb2FkZWRTZXR0aW5ncykge1xuICAgICAgICAgIHRoaXMuc2V0dGluZ3MudXNlTW9ub3NwYWNlRm9udCA9IGxvYWRlZFNldHRpbmdzLnVzZU1vbm9zcGFjZUZvbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3ByZWZlcnJlZE1vbm9zcGFjZUZvbnQnIGluIGxvYWRlZFNldHRpbmdzKSB7XG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy5wcmVmZXJyZWRNb25vc3BhY2VGb250ID1cbiAgICAgICAgICAgIGxvYWRlZFNldHRpbmdzLnByZWZlcnJlZE1vbm9zcGFjZUZvbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ2JpbmRFbnRlcicgaW4gbG9hZGVkU2V0dGluZ3MpIHtcbiAgICAgICAgICB0aGlzLnNldHRpbmdzLmJpbmRFbnRlciA9IGxvYWRlZFNldHRpbmdzLmJpbmRFbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnYmluZFRhYicgaW4gbG9hZGVkU2V0dGluZ3MpIHtcbiAgICAgICAgICB0aGlzLnNldHRpbmdzLmJpbmRUYWIgPSBsb2FkZWRTZXR0aW5ncy5iaW5kVGFiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1NhdmluZyBzZXR0aW5ncyB0byBlbnN1cmUgY29uc2lzdGVuY3knKTtcbiAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBzZXR0aW5ncyBmaWxlIGZvdW5kLCBzYXZpbmcuLi4nKTtcbiAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbml0QWZ0ZXJTZXR0aW5ncygpO1xuICAgIH0pKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byBpbml0aWFsaXplIHN0YXRlIHdoaWNoIGRlcGVuZHMgb24gdmFsdWVzXG4gICAqIGxvYWRlZCBmcm9tIHRoZSBzZXR0aW5ncy4gSXQgd2lsbCBub3QgYmUgY2FsbGVkIHVudGlsIGxvYWRpbmcgc2V0dGluZ3MgaXNcbiAgICogY29tcGxldGUuXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IGluaXRBZnRlclNldHRpbmdzID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnNob3dSaWJib25JY29uKSB7XG4gICAgICBhZGRJY29uKCdzcHJlYWRzaGVldCcsIHRhYmxlQ29udHJvbHNJY29uKTtcbiAgICAgIHRoaXMuYWRkUmliYm9uSWNvbignc3ByZWFkc2hlZXQnLCAnQWR2YW5jZWQgVGFibGVzIFRvb2xiYXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMubmV3UGVyZm9ybVRhYmxlQWN0aW9uKCh0ZTogVGFibGVFZGl0b3IpID0+IHtcbiAgICAgICAgICB0aGlzLnRhYmxlQ29udHJvbHMgPSB0ZS5vcGVuVGFibGVDb250cm9scygpO1xuICAgICAgICB9KSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNldHRpbmdzLnVzZU1vbm9zcGFjZUZvbnQpIHtcbiAgICAgIHRoaXMuZW5hYmxlTW9ub3NwYWNlRm9udCgpO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgVGFibGVFZGl0b3JTZXR0aW5nc1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBwcml2YXRlIHJlYWRvbmx5IHBsdWdpbjogVGFibGVFZGl0b3JQbHVnaW47XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogVGFibGVFZGl0b3JQbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBwdWJsaWMgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdUYWJsZSBQbHVnaW4gRWRpdG9yIC0gU2V0dGluZ3MnIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnQmluZCBlbnRlciB0byB0YWJsZSBuYXZpZ2F0aW9uJylcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICAnSWYgZW5hYmxlZCwgd2hlbiB0aGUgY3Vyc29yIGlzIGluIGEgdGFibGUsIGVudGVyIGFkdmFuY2VzIHRvIHRoZSBuZXh0ICcgK1xuICAgICAgICAgICdyb3cuIERpc2FibGluZyB0aGlzIGNhbiBoZWxwIGF2b2lkIGNvbmZsaWN0aW5nIHdpdGggdGFnIG9yIENKSyAnICtcbiAgICAgICAgICAnYXV0b2NvbXBsZXRpb24uIElmIGRpc2FibGluZywgYmluZCBcIkdvIHRvIC4uLlwiIGluIHRoZSBPYnNpZGlhbiBIb3RrZXlzIHNldHRpbmdzLicsXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5iaW5kRW50ZXIpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJpbmRFbnRlciA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgfSksXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnQmluZCB0YWIgdG8gdGFibGUgbmF2aWdhdGlvbicpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgJ0lmIGVuYWJsZWQsIHdoZW4gdGhlIGN1cnNvciBpcyBpbiBhIHRhYmxlLCB0YWIvc2hpZnQrdGFiIG5hdmlnYXRlICcgK1xuICAgICAgICAgICdiZXR3ZWVuIGNlbGxzLiBEaXNhYmxpbmcgdGhpcyBjYW4gaGVscCBhdm9pZCBjb25mbGljdGluZyB3aXRoIHRhZyAnICtcbiAgICAgICAgICAnb3IgQ0pLIGF1dG9jb21wbGV0aW9uLiBJZiBkaXNhYmxpbmcsIGJpbmQgXCJHbyB0byAuLi5cIiBpbiB0aGUgT2JzaWRpYW4gSG90a2V5cyBzZXR0aW5ncy4nLFxuICAgICAgKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYmluZFRhYikub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYmluZFRhYiA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgfSksXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnUGFkIGNlbGwgd2lkdGggdXNpbmcgc3BhY2VzJylcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICAnSWYgZW5hYmxlZCwgdGFibGUgY2VsbHMgd2lsbCBoYXZlIHNwYWNlcyBhZGRlZCB0byBtYXRjaCB0aGUgd2l0aCBvZiB0aGUgJyArXG4gICAgICAgICAgJ2xvbmdlc3QgY2VsbCBpbiB0aGUgY29sdW1uLiBPbmx5IHVzZWZ1bCB3aGVuIHVzaW5nIGEgbW9ub3NwYWNlIGZvbnQgZHVyaW5nIGVkaXRpbmcuJyxcbiAgICAgIClcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmZvcm1hdFR5cGUgPT09IEZvcm1hdFR5cGUuTk9STUFMKVxuICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmZvcm1hdFR5cGUgPSB2YWx1ZVxuICAgICAgICAgICAgICA/IEZvcm1hdFR5cGUuTk9STUFMXG4gICAgICAgICAgICAgIDogRm9ybWF0VHlwZS5XRUFLO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgfSksXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnU2hvdyBpY29uIGluIHNpZGViYXInKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgICdJZiBlbmFibGVkLCBhIGJ1dHRvbiB3aGljaCBvcGVucyB0aGUgdGFibGUgY29udHJvbHMgdG9vbGJhciB3aWxsIGJlIGFkZGVkIHRvIHRoZSBPYnNpZGlhbiBzaWRlYmFyLiAnICtcbiAgICAgICAgICAnVGhlIHRvb2xiYXIgY2FuIGFsc28gYmUgb3BlbmVkIHdpdGggYSBIb3RrZXkuIENoYW5nZXMgb25seSB0YWtlIGVmZmVjdCBvbiByZWxvYWQuJyxcbiAgICAgIClcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dSaWJib25JY29uKVxuICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dSaWJib25JY29uID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdVc2UgbW9ub3NwYWNlIGZvbnQnKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgICdJZiBlbmFibGVkLCBhIG1vbm9zcGFjZWQgZm9udCB3aWxsIGJlIHVzZWQgZm9yIHRleHQgaW5zaWRlIHRhYmxlcy4gSWYgeW91IGFscmVhZHkgdXNlIGEgbW9ub3NwYWNlIGZvbnQgd2hpbGUgZWRpdGluZywgZGlzYWJsZSB0aGlzIHRvIHByZXNlcnZlIHlvdXIgcHJlZmVycmVkIGZvbnQuJyxcbiAgICAgIClcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZU1vbm9zcGFjZUZvbnQpXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlTW9ub3NwYWNlRm9udCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLmVuYWJsZU1vbm9zcGFjZUZvbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLmRpc2FibGVNb25vc3BhY2VGb250KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICk7XG5cbiAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlTW9ub3NwYWNlRm9udCkge1xuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgIC5zZXROYW1lKCdNb25vc3BhY2UgRm9udCBOYW1lJylcbiAgICAgICAgLnNldERlc2MoXG4gICAgICAgICAgJ09wdGlvbmFsbHksIHByb3ZpZGUgYSBwcmVmZXJyZWQgbW9ub3NwYWNlIGZvbnQgdGhhdCBpcyBpbnN0YWxsZWQgb24gdGhpcyBzeXN0ZW0uJyxcbiAgICAgICAgKVxuICAgICAgICAuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgICAgIHRleHQuc2V0UGxhY2Vob2xkZXIoJ21vbm9zcGFjZScpO1xuICAgICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wcmVmZXJyZWRNb25vc3BhY2VGb250KSB7XG4gICAgICAgICAgICB0ZXh0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnByZWZlcnJlZE1vbm9zcGFjZUZvbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0Lm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucHJlZmVycmVkTW9ub3NwYWNlRm9udCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uZGlzYWJsZU1vbm9zcGFjZUZvbnQoKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmVuYWJsZU1vbm9zcGFjZUZvbnQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQW4gc3ZnIGljb24gb2YgYSBzcHJlYWRzaGVldFxuICovXG5jb25zdCB0YWJsZUNvbnRyb2xzSWNvbiA9IGA8c3ZnIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDQ4Mi44MSA0ODIuODFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTQ1Ny41OCAyNS40NjQtNDMyLjgzIDAuNDIxNTFjLTEzLjY1OCAwLjAxMzMxNC0yNC43NTggMTEuMTE1LTI0Ljc1NyAyNC43NTdsMC4wMzEwMjQgMzQ3LjQ1YzcuNDgzM2UtNCA4LjM4MDggNC4yMTEgMTUuNzcyIDEwLjYwOCAyMC4yNTkgMy40NTMzIDIuNDQ5OSA1LjA3MTYgMy4yOTAxIDguODc5IDMuOTAyMiAxLjcwMzMgMC4zNzMzMyAzLjQ1NjEgMC41OTQ3MSA1LjI2OTIgMC41OTI5NGw0MzIuODQtMC40MjE1MWMxLjgwOS0xZS0zIDMuNTYxOC0wLjIxODIzIDUuMjU2OC0wLjU5Mjk0aDEuMjE3NHYtMC4zNzE5NmMxMC41MDUtMi44NzI3IDE4LjI3OS0xMi4zOTcgMTguMjc4LTIzLjc4OGwtMC4wMzEtMzQ3LjQzYzFlLTMgLTEzLjY0OS0xMS4xMDctMjQuNzYzLTI0Ljc2OC0yNC43NjN6bTMuNTQ1MyAyNC43NjN2NzEuMzQ0aC0xNjMuMzF2LTc0Ljg4NmgxNTkuNzZjMS45NjQxIDAuMDAxNCAzLjU0NjcgMS41OTIyIDMuNTQ2NyAzLjU0MjV6bS0xLjY3MzcgMzUwLjM3aC0xNjEuNnYtNjcuMjA3aDE2My4zMXY2NC4yNjhjMWUtMyAxLjI1NzItMC43MDU0OSAyLjMyMS0xLjcwMzMgMi45Mzg2em0tNDM4LjIxLTIuNTE3MXYtNjQuMjY4aDc2LjY0NnY2Ny4yMDdoLTc0Ljk0MmMtMC45OTc4NC0wLjYxNzY1LTEuNzAzMy0xLjY4MTQtMS43MDMzLTIuOTM4NnptMjU1LjI4LTE1NS4xOHY2OS42ODhoLTE1Ny40MnYtNjkuNjg4em0wIDkwLjkxM3Y2Ny4yMDdoLTE1Ny40MnYtNjcuMjA3em0tMC4wMzEtMjExLjgzaC0xNTcuNDJ2LTc0Ljg4NmgxNTcuNDJ6bTAgMjEuMjI2djc3LjgyNmgtMTU3LjQydi03Ny44MjZ6bS0xNzguNjQgNzcuODI2aC03Ni42NDZ2LTc3LjgyNmg3Ni42NDZ6bTAuMDMxMDIgMjEuODYydjY5LjY4OGgtNzYuNjQ2di02OS42ODh6bTE5OS45NSA2OS4yNjh2LTY5LjY5N2gxNjMuMzF2NjkuNjk3em0tMC4wMzEtOTEuNTUydi03Ny44MjZoMTYzLjMxdjc3LjgyNnpcIiBzdHJva2Utd2lkdGg9XCIxLjM3MjVcIi8+XG48L3N2Zz5gO1xuIl0sIm5hbWVzIjpbImFsaWdubWVudF8xIiwiZm9jdXNfMSIsInBvaW50XzEiLCJyYW5nZV8xIiwidGFibGVfcm93XzEiLCJ0YWJsZV9jZWxsXzEiLCJ0YWJsZV8xIiwiYWxpZ25tZW50IiwidGFibGUiLCJmb3JtYXR0ZXJfMSIsInBhcnNlcl8xIiwicmFuZ2UiLCJlZGl0X3NjcmlwdF8xIiwiZm9jdXMiLCJmb3JtYXR0ZXJfanNfMSIsInRleHRfZWRpdG9yXzEiLCJvcHRpb25zXzEiLCJ0YWJsZV9lZGl0b3JfMSIsIkZvcm1hdFR5cGUiLCJvcHRpb25zV2l0aERlZmF1bHRzIiwiUG9pbnQiLCJBbGlnbm1lbnQiLCJTb3J0T3JkZXIiLCJNVEVFZGl0b3IiLCJNYXJrZG93blZpZXciLCJOb3RpY2UiLCJhZGRJY29uIiwiUGx1Z2luIiwiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNO0FBQzlDLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDeEUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7QUFDakUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVM7QUFDakUsZ0JBQWdCO0FBQ2hCLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFO0FBQ2hJLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQzFHLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDekYsb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN2RixvQkFBb0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVM7QUFDM0MsYUFBYTtBQUNiLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNsRSxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDekYsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHQSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFLLENBQUM7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFdBQVcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQzdCLFFBQVEsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDdkIsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQ2xCLFFBQVEsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3RFLEtBQUs7QUFDTCxDQUFDO0FBQ0QsYUFBYSxHQUFHLEtBQUs7Ozs7QUN2QnJCLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQUssQ0FBQztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7QUFDNUIsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUMzQixRQUFRLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTCxDQUFDO0FBQ0QsYUFBYSxHQUFHLEtBQUs7Ozs7QUNqQnJCLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFLLENBQUM7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ3JDLFFBQVEsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDdkIsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUM3QixRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzdCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRTtBQUNyQixRQUFRLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUN0RSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO0FBQ2hCLFFBQVEsT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtBQUN0QixRQUFRLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7QUFDdEIsUUFBUSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4RCxLQUFLO0FBQ0wsQ0FBQztBQUNELGFBQWEsR0FBRyxLQUFLOzs7O0FDMURyQixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCx1QkFBdUIsR0FBRyx3QkFBd0IsR0FBRyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFNBQVMsQ0FBQztBQUNkLENBQUMsVUFBVSxTQUFTLEVBQUU7QUFDdEIsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQy9CLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUMvQixJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDakMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBQ25DLENBQUMsRUFBRSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsS0FBSyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdCQUFnQixDQUFDO0FBQ3JCLENBQUMsVUFBVSxnQkFBZ0IsRUFBRTtBQUM3QixJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUN0QyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUN4QyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUMxQyxDQUFDLEVBQUUsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixLQUFLLHdCQUF3QixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxlQUFlLENBQUM7QUFDcEIsQ0FBQyxVQUFVLGVBQWUsRUFBRTtBQUM1QixJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDekMsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQ3JDLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUN2QyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDekMsQ0FBQyxFQUFFLGVBQWUsR0FBRyxPQUFPLENBQUMsZUFBZSxLQUFLLHVCQUF1QixHQUFHLEVBQUUsQ0FBQyxDQUFDOzs7O0FDL0MvRSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxTQUFTLENBQUM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRTtBQUM1QixRQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQ3JDLFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekMsUUFBUSxJQUFJLENBQUMsV0FBVztBQUN4QixZQUFZLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRTtBQUMvQixrQkFBa0IsSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFO0FBQ3hDLHNCQUFzQixDQUFDO0FBQ3ZCLHNCQUFzQixDQUFDO0FBQ3ZCLGtCQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUM3RSxRQUFRLElBQUksQ0FBQyxZQUFZO0FBQ3pCLFlBQVksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUM1RSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksTUFBTSxHQUFHO0FBQ2IsUUFBUSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDL0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksV0FBVyxHQUFHO0FBQ2xCLFFBQVEsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxZQUFZLEdBQUc7QUFDbkIsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO0FBQ2pDLFlBQVksT0FBTyxTQUFTLENBQUM7QUFDN0IsU0FBUztBQUNULFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUNyQyxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7QUFDL0QsZ0JBQWdCLE9BQU9BLFNBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQ3BELGFBQWE7QUFDYixZQUFZLE9BQU9BLFNBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQzlDLFNBQVM7QUFDVCxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7QUFDM0QsWUFBWSxPQUFPQSxTQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUMvQyxTQUFTO0FBQ1QsUUFBUSxPQUFPQSxTQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztBQUMxQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvQkFBb0IsQ0FBQyxTQUFTLEVBQUU7QUFDcEMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO0FBQ2pDLFlBQVksT0FBTyxDQUFDLENBQUM7QUFDckIsU0FBUztBQUNULFFBQVEsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUMxQyxZQUFZLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLFNBQVM7QUFDVCxRQUFRLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDaEUsWUFBWSxPQUFPLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ2hELFNBQVM7QUFDVCxRQUFRLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDbkMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0JBQWdCLENBQUMsYUFBYSxFQUFFO0FBQ3BDLFFBQVEsT0FBTyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNoRCxLQUFLO0FBQ0wsQ0FBQztBQUNELGlCQUFpQixHQUFHLFNBQVM7Ozs7QUMzRjdCLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFFBQVEsQ0FBQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUU7QUFDaEQsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNwQyxRQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQ3JDLFFBQVEsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDdkMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksUUFBUSxHQUFHO0FBQ2YsUUFBUSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2xDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLFFBQVEsR0FBRztBQUNmLFFBQVEsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ25DLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUU7QUFDckIsUUFBUSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksTUFBTSxHQUFHO0FBQ2IsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUN0QyxZQUFZLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUNuQyxTQUFTO0FBQ1QsUUFBUSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxXQUFXLEdBQUc7QUFDbEIsUUFBUSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELEtBQUs7QUFDTCxDQUFDO0FBQ0QsZ0JBQWdCLEdBQUcsUUFBUTs7OztBQzVEM0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ1k7QUFDQTtBQUNBO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQUssQ0FBQztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksU0FBUyxHQUFHO0FBQ2hCLFFBQVEsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNqQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksUUFBUSxHQUFHO0FBQ2YsUUFBUSxPQUFPLElBQUksQ0FBQyxLQUFLO0FBQ3pCLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN6QyxhQUFhLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksY0FBYyxHQUFHO0FBQ3JCLFFBQVEsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLEdBQUc7QUFDZCxRQUFRLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZUFBZSxHQUFHO0FBQ3RCLFFBQVEsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxRQUFRLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtBQUMvQixZQUFZLE9BQU8sU0FBUyxDQUFDO0FBQzdCLFNBQVM7QUFDVCxRQUFRLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFO0FBQy9CLFlBQVksT0FBTyxHQUFHLENBQUM7QUFDdkIsU0FBUztBQUNULFFBQVEsT0FBTyxTQUFTLENBQUM7QUFDekIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRTtBQUNyQyxRQUFRLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekMsUUFBUSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7QUFDL0IsWUFBWSxPQUFPLFNBQVMsQ0FBQztBQUM3QixTQUFTO0FBQ1QsUUFBUSxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksY0FBYyxDQUFDLEtBQUssRUFBRTtBQUMxQixRQUFRLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyxHQUFHO0FBQ2QsUUFBUSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3JELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxlQUFlLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRTtBQUNwQyxRQUFRLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0FBQzdDLFFBQVEsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6QyxRQUFRLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtBQUMvQixZQUFZLE9BQU8sU0FBUyxDQUFDO0FBQzdCLFNBQVM7QUFDVCxRQUFRLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDcEQsWUFBWSxPQUFPLElBQUlDLEtBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvRCxTQUFTO0FBQ1QsUUFBUSxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEYsUUFBUSxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDbEQsUUFBUSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDNUIsUUFBUSxPQUFPLFdBQVcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxFQUFFO0FBQy9ELFlBQVksSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO0FBQ3RFLGdCQUFnQixNQUFNO0FBQ3RCLGFBQWE7QUFDYixZQUFZLFNBQVMsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELFNBQVM7QUFDVCxRQUFRLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0FBQzlDLFFBQVEsT0FBTyxJQUFJQSxLQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGVBQWUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFO0FBQ3RDLFFBQVEsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUMsUUFBUSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7QUFDL0IsWUFBWSxPQUFPLFNBQVMsQ0FBQztBQUM3QixTQUFTO0FBQ1QsUUFBUSxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztBQUM3QyxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDOUIsWUFBWSxPQUFPLElBQUlDLEtBQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzRCxTQUFTO0FBQ1QsUUFBUSxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEYsUUFBUSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25FLFFBQVEsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELFFBQVEsS0FBSyxJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUUsV0FBVyxHQUFHLFFBQVEsRUFBRSxXQUFXLEVBQUUsRUFBRTtBQUN6RSxZQUFZLFNBQVMsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELFNBQVM7QUFDVCxRQUFRLE9BQU8sSUFBSUEsS0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUJBQXFCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRTtBQUM1QyxRQUFRLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLFFBQVEsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO0FBQy9CLFlBQVksT0FBTyxTQUFTLENBQUM7QUFDN0IsU0FBUztBQUNULFFBQVEsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakQsUUFBUSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7QUFDaEMsWUFBWSxPQUFPLFNBQVMsQ0FBQztBQUM3QixTQUFTO0FBQ1QsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO0FBQ2pDLFlBQVksT0FBTyxTQUFTLENBQUM7QUFDN0IsU0FBUztBQUNULFFBQVEsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7QUFDN0MsUUFBUSxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEYsUUFBUSxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDbEQsUUFBUSxLQUFLLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRTtBQUM3RSxZQUFZLFNBQVMsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELFNBQVM7QUFDVCxRQUFRLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ3RDLFFBQVEsT0FBTyxJQUFJQyxLQUFPLENBQUMsS0FBSyxDQUFDLElBQUlELEtBQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFFLElBQUlBLEtBQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDbkksS0FBSztBQUNMLENBQUM7QUFDRCxhQUFhLEdBQUcsS0FBSzs7OztBQ3hMckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsaUJBQWlCLEdBQUcsb0JBQW9CLEdBQUcsc0JBQXNCLEdBQUcsZ0JBQWdCLEdBQUcsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDakY7QUFDVTtBQUNGO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsR0FBRyxDQUFDLElBQUksS0FBSztBQUNoQyxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNyQixJQUFJLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNqQixJQUFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNwQixJQUFJLE9BQU8sSUFBSSxLQUFLLEVBQUUsRUFBRTtBQUN4QixRQUFRLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN2QixZQUFZLEtBQUssR0FBRztBQUNwQjtBQUNBLGdCQUFnQjtBQUNoQixvQkFBb0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6RCxvQkFBb0IsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO0FBQzdDO0FBQ0E7QUFDQSx3QkFBd0IsTUFBTTtBQUM5QixxQkFBcUI7QUFDckIsb0JBQW9CLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCxvQkFBb0IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ3JDLG9CQUFvQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxRCxvQkFBb0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3ZDLG9CQUFvQixPQUFPLEtBQUssS0FBSyxFQUFFLEVBQUU7QUFDekMsd0JBQXdCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUM5Qyw0QkFBNEIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRSw0QkFBNEIsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ25EO0FBQ0E7QUFDQSxnQ0FBZ0MsTUFBTTtBQUN0Qyw2QkFBNkI7QUFDN0IsNEJBQTRCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRCw0QkFBNEIsSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUN4Qyw0QkFBNEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdELDRCQUE0QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUM3RCxnQ0FBZ0MsTUFBTSxHQUFHLElBQUksQ0FBQztBQUM5QyxnQ0FBZ0MsTUFBTTtBQUN0Qyw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qiw0QkFBNEIsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3Qyw0QkFBNEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEQseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixvQkFBb0IsSUFBSSxNQUFNLEVBQUU7QUFDaEMsd0JBQXdCLEdBQUcsSUFBSSxJQUFJLENBQUM7QUFDcEMsd0JBQXdCLElBQUksR0FBRyxLQUFLLENBQUM7QUFDckMscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6Qix3QkFBd0IsR0FBRyxJQUFJLEdBQUcsQ0FBQztBQUNuQyx3QkFBd0IsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUMscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixnQkFBZ0IsTUFBTTtBQUN0QixZQUFZLEtBQUssSUFBSTtBQUNyQjtBQUNBLGdCQUFnQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3RDLG9CQUFvQixHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0Msb0JBQW9CLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFDLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsb0JBQW9CLEdBQUcsSUFBSSxJQUFJLENBQUM7QUFDaEMsb0JBQW9CLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFDLGlCQUFpQjtBQUNqQixnQkFBZ0IsTUFBTTtBQUN0QixZQUFZLEtBQUssR0FBRztBQUNwQjtBQUNBLGdCQUFnQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLGdCQUFnQixHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLGdCQUFnQixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QyxnQkFBZ0IsTUFBTTtBQUN0QixZQUFZO0FBQ1osZ0JBQWdCLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsZ0JBQWdCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLFNBQVM7QUFDVCxLQUFLO0FBQ0wsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLElBQUksT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsR0FBRyxDQUFDLElBQUksRUFBRSxlQUFlLEdBQUcsT0FBTyxLQUFLO0FBQ3hELElBQUksSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyxJQUFJLElBQUksVUFBVSxDQUFDO0FBQ25CLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQzVELFFBQVEsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QixRQUFRLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLEtBQUs7QUFDTCxTQUFTO0FBQ1QsUUFBUSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLEtBQUs7QUFDTCxJQUFJLElBQUksV0FBVyxDQUFDO0FBQ3BCLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDbkUsUUFBUSxXQUFXLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUMsUUFBUSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqRCxLQUFLO0FBQ0wsU0FBUztBQUNULFFBQVEsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN6QixLQUFLO0FBQ0wsSUFBSSxPQUFPLElBQUlFLFFBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJQyxTQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3BILENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsR0FBRyxDQUFDLEtBQUssS0FBSztBQUNwQyxJQUFJLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNoQjtBQUNBLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztBQUN6QixRQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7QUFDbEQsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUQsU0FBUztBQUNULEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEdBQUcsQ0FBQyxLQUFLLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxLQUFLO0FBQ3hDLElBQUksTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDMUUsSUFBSSxPQUFPLElBQUlDLEtBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0YsQ0FBQzs7O0FDdkpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLEdBQUc7QUFDYixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDbEMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3RDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDdEMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUN0QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3RDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN0QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDeEMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDMUMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUMxQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFF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
