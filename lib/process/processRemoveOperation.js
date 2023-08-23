"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decomposePath_1 = require("../path/decomposePath");
const ensureKeyValue_1 = require("../resource/ensureKeyValue");
const readValue_1 = require("../resource/readValue");
function processRemoveOperation({ resource, path, key, }) {
    if (resource === null) {
        return null;
    }
    if (key !== undefined) {
        removeWithKeys(resource, path, key);
    }
    else {
        // Delete all.
        if (path.length === 0) {
            return null;
        }
        removeWithoutKey(resource, path);
    }
    return resource;
}
exports.default = processRemoveOperation;
function removeWithKeys(resource, path, key) {
    const maybeKeyValueParent = findKeyValueParent(resource, path);
    if (maybeKeyValueParent === null) {
        return;
    }
    key.forEach((eachKey) => {
        delete maybeKeyValueParent[eachKey];
    });
}
function findKeyValueParent(resource, path) {
    if (path.length === 0) {
        return (0, ensureKeyValue_1.default)(resource);
    }
    const parent = (0, readValue_1.default)(resource, path);
    if (parent !== undefined) {
        return (0, ensureKeyValue_1.default)(parent);
    }
    return null;
}
function removeWithoutKey(resource, path) {
    const { parentPath, currentKey } = (0, decomposePath_1.default)(path);
    const parent = (0, readValue_1.default)(resource, parentPath);
    if (parent !== undefined) {
        delete (0, ensureKeyValue_1.default)(parent)[currentKey];
    }
}
//# sourceMappingURL=processRemoveOperation.js.map