import AppendOperation from "../operation/appendOperation";
import ResourceValue from "../resource/resourceValue";
import UpdateOperationContext from "./updateContext";
export default function processAppendOperation({ resource, path, value, upsert }: UpdateOperationContext<AppendOperation>): ResourceValue;
