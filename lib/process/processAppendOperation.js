"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pathDelimiter_1 = require("../path/pathDelimiter");
const ensureArrayValue_1 = require("../resource/ensureArrayValue");
const ensureKeyValue_1 = require("../resource/ensureKeyValue");
function processAppendOperation({ resource, path, value, upsert, }) {
    const initialValue = resolveInitialValue(value);
    const ensuredResource = ensureResource(resource, path.length > 0, initialValue);
    const target = resolveTarget(ensuredResource, path, initialValue);
    if (value instanceof Array) {
        const arrayTarget = (0, ensureArrayValue_1.default)(target);
        for (const each of value) {
            arrayTarget.push(each);
        }
    }
    else if (value instanceof Object) {
        const keyValueTarget = (0, ensureKeyValue_1.default)(target);
        for (const [k, v] of Object.entries(value)) {
            if (!upsert && k in keyValueTarget) {
                throw new Error(`Invalid addition: key[${k}] already exists`);
            }
            keyValueTarget[k] = v;
        }
    }
    return ensuredResource;
}
exports.default = processAppendOperation;
function resolveInitialValue(value) {
    return value instanceof Array ? [] : {};
}
function ensureResource(resource, hasPath, initialValue) {
    if (resource !== null) {
        return resource;
    }
    return hasPath ? {} : initialValue;
}
function resolveTarget(ensuredResource, path, initialValue) {
    var _a;
    let target = ensuredResource;
    let currentPath = path;
    while (currentPath.length > 0) {
        const nextDot = currentPath.indexOf(pathDelimiter_1.default);
        const endOfPath = nextDot < 0;
        const currentKey = endOfPath
            ? currentPath
            : currentPath.substring(0, nextDot);
        const currentInitialValue = endOfPath ? initialValue : {};
        const parentOfTarget = (0, ensureKeyValue_1.default)(target);
        target = parentOfTarget[currentKey] =
            (_a = parentOfTarget[currentKey]) !== null && _a !== void 0 ? _a : currentInitialValue;
        currentPath = currentPath.substring(currentKey.length + pathDelimiter_1.default.length);
    }
    return target;
}
//# sourceMappingURL=processAppendOperation.js.map