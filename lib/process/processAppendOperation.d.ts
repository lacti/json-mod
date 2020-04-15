import AppendOperation from "../operation/appendOperation";
import ResourceValue from "../resource/resourceValue";
import OperationContext from "./operationContext";
export default function processAppendOperation({ resource, path, value, upsert, }: OperationContext<AppendOperation>): ResourceValue;
