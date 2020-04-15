"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processAppendOperation_1 = require("./processAppendOperation");
const processFetchOperation_1 = require("./processFetchOperation");
const processModifyOperation_1 = require("./processModifyOperation");
const processRemoveOperation_1 = require("./processRemoveOperation");
function processOperation(resource, op) {
    switch (op.operation) {
        case "append":
            return processAppendOperation_1.default({ ...op, resource });
        case "modify":
            return processModifyOperation_1.default({ ...op, resource });
        case "remove":
            return processRemoveOperation_1.default({ ...op, resource });
        case "fetch":
            return processFetchOperation_1.default({ ...op, resource });
        default:
            throw new Error("Unsupported operation");
    }
}
exports.default = processOperation;
//# sourceMappingURL=processOperation.js.map