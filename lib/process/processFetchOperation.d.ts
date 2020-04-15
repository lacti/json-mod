import FetchOperation from "../operation/fetchOperation";
import ResourceValue from "../resource/resourceValue";
import OperationContext from "./operationContext";
declare type FetchResult = ResourceValue | null[] | null;
export default function processFetchOperation({ resource, path, key, }: OperationContext<FetchOperation>): FetchResult;
export {};
