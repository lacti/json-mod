import AnyOperation from "../operation/anyOperation";
import ResourceValue from "../resource/resourceValue";
export default function processOperation(resource: ResourceValue | null, op: AnyOperation): string | number | import("../resource/keyValue").default | import("../resource/arrayValue").default | null[] | null;
