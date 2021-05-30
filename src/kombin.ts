import { EntityConfiguration } from "./entity-configuration";
import { Repository } from "./repository";

class Kombin {
    repositoryEntityMap = {};

    registerRepository(repo : Repository, entityFieldConfig : EntityConfiguration) {
        this.putRepoWithConfiguration(repo, entityFieldConfig);
    }

    putRepoWithConfiguration(repo: Repository<any>, entityFieldConfig: EntityConfiguration) {
        this.repositoryEntityMap[entityFieldConfig.entityName] = repo;
        this.repositoryEntityMap[entityFieldConfig.generalFieldIdName] = repo;
        this.repositoryEntityMap[entityFieldConfig.generalFieldName] = repo;
        
    }
}