import { GenericEntity } from "../types/generic-entity";
import { GenericEntityIdType } from "../types/generic-entity-id-type";

export interface IRepositoryWrapperRequestResult<T extends GenericEntity = any> {
    state : "SUCCESS" | "FAIL";
    errorInformation?: any;
    finalValue : T;
}