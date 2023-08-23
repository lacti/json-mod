import OperationBase from "./operationBase";
type CurrentKey = undefined;
type MultipleSubKeys = string[];
export default interface RemoveOperation extends OperationBase {
    operation: "remove";
    key: CurrentKey | MultipleSubKeys;
}
export {};
