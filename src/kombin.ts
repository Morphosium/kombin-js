import { IEntityFieldConfiguration } from "./entity-field-configuration";
import { Repository } from "./repository";

class Kombin {


    registerRepository(repo : Repository, entityFieldConfig : IEntityFieldConfiguration) {
        this.putRepoWithConfiguration(repo, entityFieldConfig);
    }

    putRepoWithConfiguration(repo: Repository<any>, entityFieldConfig: IEntityFieldConfiguration) {
        this.repositoryEntityMap[entityFieldConfig.entityName] = repo;
        this.repositoryEntityMap[entityFieldConfig.generalFieldIdName] = repo;
        this.repositoryEntityMap[entityFieldConfig.generalFieldName] = repo;
        
    }
}