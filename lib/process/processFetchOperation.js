"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decomposePath_1 = require("../path/decomposePath");
const ensureKeyValue_1 = require("../resource/ensureKeyValue");
const readValue_1 = require("../resource/readValue");
function processFetchOperation({ resource, path, key, }) {
    return key !== undefined
        ? fetchWithKeys(resource, path, key)
        : fetchWithoutKey(resource, path);
}
exports.default = processFetchOperation;
function fetchWithKeys(resource, path, key) {
    const nulls = () => key.map((_) => null);
    if (resource === null) {
        return nulls();
    }
    if (path.length === 0) {
        const keyValueResource = ensureKeyValue_1.default(resource);
        return key.map((eachKey) => { var _a; return (_a = keyValueResource[eachKey]) !== null && _a !== void 0 ? _a : null; });
    }
    const parent = readValue_1.default(resource, path);
    if (parent === undefined) {
        return nulls();
    }
    const keyValueParent = ensureKeyValue_1.default(parent);
    return key.map((eachKey) => { var _a; return (_a = keyValueParent[eachKey]) !== null && _a !== void 0 ? _a : null; });
}
function fetchWithoutKey(resource, path) {
    var _a;
    if (resource === null) {
        return null;
    }
    if (path.length === 0) {
        return resource;
    }
    const { parentPath, currentKey } = decomposePath_1.default(path);
    const parent = readValue_1.default(resource, parentPath);
    if (parent === undefined) {
        return null;
    }
    return (_a = ensureKeyValue_1.default(parent)[currentKey]) !== null && _a !== void 0 ? _a : null;
}
//# sourceMappingURL=processFetchOperation.js.map