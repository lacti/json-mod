"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processAppendOperation_1 = require("./processAppendOperation");
const processModifyOperation_1 = require("./processModifyOperation");
const processRemoveOperation_1 = require("./processRemoveOperation");
function dispatchOperation(op) {
    switch (op.operation) {
        case "append":
            return processAppendOperation_1.default(op);
        case "modify":
            return processModifyOperation_1.default(op);
        case "remove":
            return processRemoveOperation_1.default(op);
        default:
            throw new Error("Unsupported operation");
    }
}
exports.default = dispatchOperation;
//# sourceMappingURL=dispatchOperation.js.map