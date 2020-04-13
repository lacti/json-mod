"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ensureKeyValue_1 = require("../resource/ensureKeyValue");
const readValue_1 = require("../resource/readValue");
function processModifyOperation({ resource, path, value }) {
    if (resource === null) {
        throw new Error("Invalid modification: resource does not exist");
    }
    if (path.length === 0) {
        return value;
    }
    const parent = readValue_1.default(resource, path);
    if (parent === undefined) {
        throw new Error("Invalid path: no target to modify");
    }
    const keyValueParent = ensureKeyValue_1.default(parent);
    for (const [key, newValue] of Object.entries(value)) {
        keyValueParent[key] = newValue;
    }
    return resource;
}
exports.default = processModifyOperation;
//# sourceMappingURL=processModifyOperation.js.map