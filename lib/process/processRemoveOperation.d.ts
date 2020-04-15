import RemoveOperation from "../operation/removeOperation";
import ResourceValue from "../resource/resourceValue";
import OperationContext from "./operationContext";
export default function processRemoveOperation({ resource, path, key, }: OperationContext<RemoveOperation>): ResourceValue | null;
