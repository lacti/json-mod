import OperationBase from "./operationBase";
declare type CurrentKey = undefined;
declare type MultipleSubKeys = string[];
export default interface FetchOperation extends OperationBase {
    operation: "fetch";
    key: CurrentKey | MultipleSubKeys;
}
export {};
