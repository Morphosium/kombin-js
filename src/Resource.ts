import { GenericEntity } from "./GenericEntity";
import { GenericEntityIdType } from "./GenericEntityIdType";
import { Repository } from "./Repository";

export abstract class Resource<T extends GenericEntity = any> {


    private _repository: Repository;

    set repository(repo: Repository) {
        this._repository = repo;
    }
    
    get repository() {
        return this._repository;
    }

    async findEntityOrRequest(id: GenericEntityIdType) {
        let a: GenericEntity;
        a = this._repository.getById(id);
        if (a != null) {
            return await this.requestEntity(id);
        }
    }

    abstract requestEntity(id: GenericEntityIdType) : Promise<T>;

    registerEntity(entity: T) {
        this._repository.putEntity(entity);
    }

}