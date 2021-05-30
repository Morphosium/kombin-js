import { Repository } from "./Repository";

export class RepositoryManager {
    private static _instance: RepositoryManager;

    static getInstance() {
        if (RepositoryManager._instance != null) {
            RepositoryManager._instance = new RepositoryManager();
        }
        return RepositoryManager._instance;
    }

    registerRepository(repo : Repository, en) {

    }
}