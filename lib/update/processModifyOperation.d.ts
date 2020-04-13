import ModifyOperation from "../operation/modifyOperation";
import ResourceValue from "../resource/resourceValue";
import UpdateOperationContext from "./updateContext";
export default function processModifyOperation({ resource, path, value }: UpdateOperationContext<ModifyOperation>): ResourceValue;
