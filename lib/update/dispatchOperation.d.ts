import AppendOperation from "../operation/appendOperation";
import ModifyOperation from "../operation/modifyOperation";
import RemoveOperation from "../operation/removeOperation";
declare type AnyOperation = AppendOperation | ModifyOperation | RemoveOperation;
export default function dispatchOperation(op: AnyOperation): string | number | import("../resource/keyValue").default | import("../resource/arrayValue").default | null;
export {};
