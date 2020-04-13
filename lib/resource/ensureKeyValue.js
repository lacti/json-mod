"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ensureKeyValue(value) {
    if (value instanceof Array) {
        throw new Error("Invalid structure: value is an array");
    }
    if (!(value instanceof Object)) {
        throw new Error("Invalid structure: value is not an object");
    }
    return value;
}
exports.default = ensureKeyValue;
//# sourceMappingURL=ensureKeyValue.js.map