import OperationBase from "../operation/operationBase";
import ResourceValue from "../resource/resourceValue";

type OperationContext<R extends OperationBase> = Omit<R, "operation"> & {
  resource: ResourceValue | null;
};

export default OperationContext;
