import { StringUtils } from "../util/string-utils";

export interface IEntityFieldTargets { [fieldName: string]: string };

export interface IEntityFieldConfiguration {
    sourceEntityName?: string;
    entityName?: string;
    generalFieldName?: string;
    generalFieldPluralName?: string;
    generalFieldIdName?: string;
    generalFieldPluralIdName?: string;
    fieldTargets?: IEntityFieldTargets;
}

export class EntityFieldConfiguration implements IEntityFieldConfiguration {
    generalFieldName?: string;
    generalFieldPluralName?: string;
    generalFieldIdName?: string;
    generalFieldPluralIdName?: string;

    constructor(public entityName: string, public sourceEntityName?: string, public fieldTargets: IEntityFieldTargets = {}) {
        this.generalFieldName = StringUtils.toCamelCase(entityName);
        this.generalFieldPluralName = this.generalFieldName + "s";
        this.generalFieldIdName = this.generalFieldName + "Id";
        this.generalFieldPluralIdName = this.generalFieldIdName + "s";
    }
}