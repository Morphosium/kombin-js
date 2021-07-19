import { RepositoryWrapper } from "../repository/repository-wrapper";
import { StringUtils } from "../util/string-utils";

export interface ICombineConfig {
    wrapper: RepositoryWrapper
    plural : boolean,
    target : "ID" | "OBJECT",
    targetFieldName : string;
}

export class CombineConfig implements ICombineConfig {
    public constructor(
        public wrapper: RepositoryWrapper,
        public plural : boolean, 
        public target : "ID" | "OBJECT",
        public targetFieldName : string) {

    }
}

export class Combiner {
    combins: { [fieldName: string]: ICombineConfig };

    constructor() {
        this.combins = {};
    }

    registerCombine(wrapper: RepositoryWrapper, ...fieldNames: string[]) {
        for (let index = 0; index < fieldNames.length; index++) {
            const fieldName = fieldNames[index];
  
            const generalFieldName = StringUtils.toCamelCase(fieldName);
            const generalFieldNamePlural = generalFieldName + "s";
            const generalFieldIdName = generalFieldName + "Id";
            const generalFieldIdNamePlural = generalFieldIdName + "s";

            this.combins[generalFieldName] = new CombineConfig(wrapper, false, "ID", generalFieldIdName);
            this.combins[generalFieldNamePlural] = new CombineConfig(wrapper, false, "ID", generalFieldIdNamePlural);
            this.combins[generalFieldIdName] = new CombineConfig(wrapper, false, "OBJECT", generalFieldName);
            this.combins[generalFieldIdNamePlural] = new CombineConfig(wrapper, false, "OBJECT", generalFieldNamePlural);

        }
    }

    reviewObject(obj: Object) {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const field = obj[key];
                const config = this.combins[field];
                if (config.plural && (field )) {}
            }
        }
    }


}