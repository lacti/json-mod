"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ensureKeyValue_1 = require("./ensureKeyValue");
function readChildValue(parent, childKey) {
    const keyValueParent = ensureKeyValue_1.default(parent);
    if (!(childKey in keyValueParent)) {
        return undefined;
    }
    return keyValueParent[childKey];
}
exports.default = readChildValue;
//# sourceMappingURL=readChildValue.js.map