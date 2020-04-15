import OperationBase from "../operation/operationBase";
import ResourceValue from "../resource/resourceValue";
declare type OperationContext<R extends OperationBase> = Omit<R, "operation"> & {
    resource: ResourceValue | null;
};
export default OperationContext;
