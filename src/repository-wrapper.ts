import { GenericEntity } from "./generic-entity";
import { GenericEntityIdType } from "./generic-entity-id-type";
import { Repository } from "./repository";

export abstract class RepositoryWrapper<T extends GenericEntity = any> {


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
            const incoming = await this.requestEntity(id);
            if ((incoming != null) && (incoming.id != null)) {
                this._repository.putEntity(incoming);
                return incoming;
            }
            else {
                return null;
            }
        }
    }

    abstract requestEntity(id: GenericEntityIdType): Promise<T>;

    registerEntity(entity: T) {
        this._repository.putEntity(entity);
    }

}