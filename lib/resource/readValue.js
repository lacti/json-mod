"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pathDelimiter_1 = require("../path/pathDelimiter");
const readChildValue_1 = require("./readChildValue");
function readValue(value, path) {
    if (path.length === 0) {
        return value;
    }
    const nextDot = path.indexOf(pathDelimiter_1.default);
    if (nextDot < 0) {
        return readChildValue_1.default(value, path);
    }
    const currentKey = path.substring(0, nextDot);
    const nextPath = path.substring(nextDot + pathDelimiter_1.default.length);
    const maybeChild = readChildValue_1.default(value, currentKey);
    if (maybeChild === undefined) {
        return undefined;
    }
    return readValue(maybeChild, nextPath);
}
exports.default = readValue;
//# sourceMappingURL=readValue.js.map