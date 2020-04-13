import ResourceValue from "../resource/resourceValue";
export default interface UpdateOperationBase {
    resource: ResourceValue | null;
    path: string;
}
