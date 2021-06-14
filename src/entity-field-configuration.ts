import { StringUtils } from "./util/string-utils";

export interface IEntityFieldConfiguration {
    sourceEntityName? : string;
    entityName? : string;
    generalFieldName? : string;
    generalFieldPluralName? : string;
    generalFieldIdName? : string;
    generalFieldPluralIdName? : string;
}

export class EntityFieldConfiguration implements IEntityFieldConfiguration {
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