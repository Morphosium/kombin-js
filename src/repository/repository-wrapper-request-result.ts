import { GenericEntity } from "../types/generic-entity";
import { GenericEntityIdType } from "./generic-entity-id-type";

export interface IRepositoryWrapperRequestResult<T extends GenericEntity = any> {
    state : "SUCCESS" | "FAIL";
    errorInformation?: any;
    finalValue : T;
}