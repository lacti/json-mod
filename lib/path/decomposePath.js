"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pathDelimiter_1 = require("./pathDelimiter");
function decomposePath(path) {
    const lastDelimiterPos = path.lastIndexOf(pathDelimiter_1.default);
    if (lastDelimiterPos < 0) {
        return { parentPath: "", currentKey: path };
    }
    else {
        return {
            parentPath: path.substring(0, lastDelimiterPos),
            currentKey: path.substring(lastDelimiterPos + pathDelimiter_1.default.length)
        };
    }
}
exports.default = decomposePath;
//# sourceMappingURL=decomposePath.js.map