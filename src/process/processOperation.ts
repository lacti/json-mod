import AnyOperation from "../operation/anyOperation";
import ResourceValue from "../resource/resourceValue";
import processAppendOperation from "./processAppendOperation";
import processFetchOperation from "./processFetchOperation";
import processModifyOperation from "./processModifyOperation";
import processRemoveOperation from "./processRemoveOperation";

export default function processOperation(
  resource: ResourceValue | null,
  op: AnyOperation
) {
  switch (op.operation) {
    case "append":
      return processAppendOperation({ ...op, resource });
    case "modify":
      return processModifyOperation({ ...op, resource });
    case "remove":
      return processRemoveOperation({ ...op, resource });
    case "fetch":
      return processFetchOperation({ ...op, resource });
    default:
      throw new Error("Unsupported operation");
  }
}
