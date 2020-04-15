import RemoveOperation from "../operation/removeOperation";
import decomposePath from "../path/decomposePath";
import ensureKeyValue from "../resource/ensureKeyValue";
import KeyValue from "../resource/keyValue";
import readValue from "../resource/readValue";
import ResourceValue from "../resource/resourceValue";
import OperationContext from "./operationContext";

export default function processRemoveOperation({
  resource,
  path,
  key,
}: OperationContext<RemoveOperation>): ResourceValue | null {
  if (resource === null) {
    return null;
  }
  if (key !== undefined) {
    removeWithKeys(resource, path, key);
  } else {
    // Delete all.
    if (path.length === 0) {
      return null;
    }
    removeWithoutKey(resource, path);
  }
  return resource;
}

function removeWithKeys(
  resource: ResourceValue,
  path: string,
  key: string[]
): void {
  const maybeKeyValueParent = findKeyValueParent(resource, path);
  if (maybeKeyValueParent === null) {
    return;
  }
  key.forEach((eachKey) => {
    delete maybeKeyValueParent[eachKey];
  });
}

function findKeyValueParent(
  resource: ResourceValue,
  path: string
): KeyValue | null {
  if (path.length === 0) {
    return ensureKeyValue(resource);
  }
  const parent = readValue(resource, path);
  if (parent !== undefined) {
    return ensureKeyValue(parent);
  }
  return null;
}

function removeWithoutKey(resource: ResourceValue, path: string): void {
  const { parentPath, currentKey } = decomposePath(path);
  const parent = readValue(resource, parentPath);
  if (parent !== undefined) {
    delete ensureKeyValue(parent)[currentKey];
  }
}
