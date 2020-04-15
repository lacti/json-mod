import ArrayValue from "../resource/arrayValue";
import KeyValue from "../resource/keyValue";
import OperationBase from "./operationBase";
export default interface AppendOperation extends OperationBase {
    operation: "append";
    value: KeyValue | ArrayValue;
    upsert: boolean;
}
