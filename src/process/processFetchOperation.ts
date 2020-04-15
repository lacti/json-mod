import FetchOperation from "../operation/fetchOperation";
import decomposePath from "../path/decomposePath";
import ensureKeyValue from "../resource/ensureKeyValue";
import readValue from "../resource/readValue";
import ResourceValue from "../resource/resourceValue";
import OperationContext from "./operationContext";

type FetchResult = ResourceValue | null[] | null;

export default function processFetchOperation({
  resource,
  path,
  key,
}: OperationContext<FetchOperation>): FetchResult {
  return key !== undefined
    ? fetchWithKeys(resource, path, key)
    : fetchWithoutKey(resource, path);
}

function fetchWithKeys(
  resource: ResourceValue | null,
  path: string,
  key: string[]
): FetchResult {
  const nulls = () => key.map((_) => null);
  if (resource === null) {
    return nulls();
  }

  if (path.length === 0) {
    const keyValueResource = ensureKeyValue(resource);
    return key.map((eachKey) => keyValueResource[eachKey] ?? null);
  }
  const parent = readValue(resource, path);
  if (parent === undefined) {
    return nulls();
  }
  const keyValueParent = ensureKeyValue(parent);
  return key.map((eachKey) => keyValueParent[eachKey] ?? null);
}

function fetchWithoutKey(
  resource: ResourceValue | null,
  path: string
): FetchResult {
  if (resource === null) {
    return null;
  }
  if (path.length === 0) {
    return resource;
  }

  const { parentPath, currentKey } = decomposePath(path);
  const parent = readValue(resource, parentPath);
  if (parent === undefined) {
    return null;
  }
  return ensureKeyValue(parent)[currentKey] ?? null;
}
