import { EntityFieldConfiguration } from "../types/entity-field-configuration";
import { GenericEntity } from "../types/generic-entity";
import { GenericEntityIdType } from "../types/generic-entity-id-type";
import { Repository } from "./repository";
import { IRepositoryWrapperRequestResult } from "./repository-wrapper-request-result";

export abstract class RepositoryWrapper<T extends GenericEntity = any> {


    private _repository: Repository;

    set repository(repo: Repository) {
        this._repository = repo;
    }

    get repository() {
        return this._repository;
    }

    generateConfiguration() {
        
    }   

    abstract getEntityRequest(id: GenericEntityIdType): Promise<IRepositoryWrapperRequestResult<T>>;

    abstract addEntityRequest(entity: T): Promise<IRepositoryWrapperRequestResult<T>>;

    abstract editEntityRequest(entity: T): Promise<IRepositoryWrapperRequestResult<T>>;

    abstract removeEntityRequest(entity: T | { id: GenericEntityIdType }): Promise<IRepositoryWrapperRequestResult<T>>

    responseReview(response: IRepositoryWrapperRequestResult<T>, action: () => any) {
        if (response.state === "SUCCESS") {
            action();
        }
        else {
            console.error(response);
            throw "Request failed";
        }
        return response;
    }

    async findEntityOrRequest(id: GenericEntityIdType) {
        let a: GenericEntity;
        a = this._repository.getById(id);
        if (a != null) {
            const response = await this.getEntityRequest(id);
            this.responseReview(response, () => {
                const incoming = response.finalValue;
                if ((incoming != null) && (incoming.id != null)) {
                    this._repository.putEntity(incoming);
                    return incoming;
                }
                else {
                    return null;
                }
            });

        }
    }

    async addEntity(data: T) {
        const response = await this.addEntityRequest(data);
        return this.responseReview(response, () => this.repository.putEntity(response.finalValue));
    }

    async editEntity(data: T) {
        const response = await this.editEntityRequest(data);
        return this.responseReview(response, () => this.repository.putEntity(response.finalValue));
    }

    async deleteEntity(data: T) {
        const response = await this.removeEntityRequest(data);
        return this.responseReview(response, () => this.repository.removeEntity(response.finalValue.id));
    }

    registerEntity(entity: T) {
        this._repository.putEntity(entity);
    }

}