import ModifyOperation from "../operation/modifyOperation";
import ResourceValue from "../resource/resourceValue";
import OperationContext from "./operationContext";
export default function processModifyOperation({ resource, path, value, }: OperationContext<ModifyOperation>): ResourceValue;
