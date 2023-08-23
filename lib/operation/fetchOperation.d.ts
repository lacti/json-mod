import OperationBase from "./operationBase";
type CurrentKey = undefined;
type MultipleSubKeys = string[];
export default interface FetchOperation extends OperationBase {
    operation: "fetch";
    key: CurrentKey | MultipleSubKeys;
}
export {};
