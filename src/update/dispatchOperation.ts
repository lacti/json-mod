import AppendOperation from "../operation/appendOperation";
import ModifyOperation from "../operation/modifyOperation";
import RemoveOperation from "../operation/removeOperation";
import processAppendOperation from "./processAppendOperation";
import processModifyOperation from "./processModifyOperation";
import processRemoveOperation from "./processRemoveOperation";

type AnyOperation = AppendOperation | ModifyOperation | RemoveOperation;

export default function dispatchOperation(op: AnyOperation) {
  switch (op.operation) {
    case "append":
      return processAppendOperation(op);
    case "modify":
      return processModifyOperation(op);
    case "remove":
      return processRemoveOperation(op);
    default:
      throw new Error("Unsupported operation");
  }
}
