import { IEntityFieldConfiguration } from "./entity-field-configuration";
import { RepositoryWrapper } from "./repository-wrapper";

export class RepositoryManager {
    private static _instance: RepositoryManager;

    static getInstance() {
        if (RepositoryManager._instance != null) {
            RepositoryManager._instance = new RepositoryManager();
        }
        return RepositoryManager._instance;
    }

    registerRepositoryWrapper(repo: RepositoryWrapper, entityConfig: IEntityFieldConfiguration) {
        
    }
}