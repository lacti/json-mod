import UpdateOperationBase from "./updateOperationBase";
declare type CurrentKey = undefined;
declare type MultipleSubKeys = string[];
export default interface RemoveOperation extends UpdateOperationBase {
    operation: "remove";
    key: CurrentKey | MultipleSubKeys;
}
export {};
