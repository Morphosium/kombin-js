import { StringUtils } from "./Util/StringUtils";

export interface IEntityConfiguration {
    sourceEntityName? : string;
    entityName? : string;
    generalFieldName? : string;
    generalFieldPluralName? : string;
    generalFieldIdName? : string;
    generalFieldPluralIdName? : string;
}

export class EntityConfiguration implements IEntityConfiguration {
    generalFieldName? : string;
    generalFieldPluralName? : string;
    generalFieldIdName? : string;
    generalFieldPluralIdName? : string;

    constructor(public entityName : string, public sourceEntityName? : string) {
        this.generalFieldName = StringUtils.toCamelCase(entityName);
        this.generalFieldPluralName = this.generalFieldName + "s";
        this.generalFieldIdName = this.generalFieldName + "Id";
        this.generalFieldPluralIdName = this.generalFieldIdName + "s";
    }
}