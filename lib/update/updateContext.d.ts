import UpdateOperationBase from "../operation/updateOperationBase";
import ResourceValue from "../resource/resourceValue";
declare type UpdateOperationContext<R extends UpdateOperationBase> = Omit<R, "operation"> & {
    resource: ResourceValue | null;
};
export default UpdateOperationContext;
