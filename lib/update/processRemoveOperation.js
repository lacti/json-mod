"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decomposePath_1 = require("../path/decomposePath");
const ensureKeyValue_1 = require("../resource/ensureKeyValue");
const readValue_1 = require("../resource/readValue");
function processRemoveOperation({ resource, path, key }) {
    if (resource === null) {
        return null;
    }
    if (key === undefined) {
        if (path.length === 0) {
            return null;
        }
        else {
            const { parentPath, currentKey } = decomposePath_1.default(path);
            const parent = readValue_1.default(resource, parentPath);
            if (parent !== undefined) {
                delete ensureKeyValue_1.default(parent)[currentKey];
            }
        }
    }
    else {
        if (path.length === 0) {
            const keyValueResource = ensureKeyValue_1.default(resource);
            key.forEach(eachKey => {
                delete keyValueResource[eachKey];
            });
        }
        else {
            const parent = readValue_1.default(resource, path);
            if (parent !== undefined) {
                const keyValueParent = ensureKeyValue_1.default(parent);
                key.forEach(eachKey => {
                    delete keyValueParent[eachKey];
                });
            }
        }
    }
    return resource;
}
exports.default = processRemoveOperation;
//# sourceMappingURL=processRemoveOperation.js.map