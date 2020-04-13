"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pathDelimiter_1 = require("./pathDelimiter");
function validatePath(path) {
    if (path.length === 0) {
        return true;
    }
    let lastDelimIndex = path.indexOf(pathDelimiter_1.default);
    if (lastDelimIndex === 0) {
        return false;
    }
    while (true) {
        const nextDelimIndex = path.indexOf(pathDelimiter_1.default, lastDelimIndex + pathDelimiter_1.default.length);
        if (nextDelimIndex < 0) {
            break;
        }
        if (lastDelimIndex + pathDelimiter_1.default.length === nextDelimIndex) {
            return false;
        }
        lastDelimIndex = nextDelimIndex;
    }
    return lastDelimIndex + pathDelimiter_1.default.length < path.length;
}
exports.default = validatePath;
//# sourceMappingURL=validatePath.js.map