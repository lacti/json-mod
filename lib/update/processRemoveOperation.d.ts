import RemoveOperation from "../operation/removeOperation";
import ResourceValue from "../resource/resourceValue";
import UpdateOperationContext from "./updateContext";
export default function processRemoveOperation({ resource, path, key }: UpdateOperationContext<RemoveOperation>): ResourceValue | null;
