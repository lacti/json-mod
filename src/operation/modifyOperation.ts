import KeyValue from "../resource/keyValue";
import OperationBase from "./operationBase";

export default interface ModifyOperation extends OperationBase {
  operation: "modify";
  value: KeyValue;
}
