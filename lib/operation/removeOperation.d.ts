import OperationBase from "./operationBase";
declare type CurrentKey = undefined;
declare type MultipleSubKeys = string[];
export default interface RemoveOperation extends OperationBase {
    operation: "remove";
    key: CurrentKey | MultipleSubKeys;
}
export {};
