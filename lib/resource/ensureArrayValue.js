"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ensureArrayValue(value) {
    if (value instanceof Array) {
        return value;
    }
    throw new Error("Invalid structure: value is not an array");
}
exports.default = ensureArrayValue;
//# sourceMappingURL=ensureArrayValue.js.map