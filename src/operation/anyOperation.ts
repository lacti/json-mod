import AppendOperation from "./appendOperation";
import FetchOperation from "./fetchOperation";
import ModifyOperation from "./modifyOperation";
import RemoveOperation from "./removeOperation";

type AnyOperation =
  | AppendOperation
  | ModifyOperation
  | RemoveOperation
  | FetchOperation;

export default AnyOperation;
