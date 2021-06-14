import { GenericEntity } from "./generic-entity";
import { GenericEntityIdType } from "./generic-entity-id-type";
import { ArrayUtils } from "./util/array-utils";

export class Repository<T extends GenericEntity = any>
{
    entityMap: { [id: number]: T } = {}
    entityArray: T[] = [];

    findEntityRequest: (id) => Promise<T>;
    postRequest: (object: T) => Promise<T | any>;
    putRequest: (object: T) => Promise<T | any>;
    deleteRequest : (id : GenericEntityIdType) => Promise<any>;

    getById(id: any): T | null {
        return this.entityMap[id];
    }

    putEntity(entity: T) {
        ArrayUtils.addOrChange(this.entityArray, a => a.id === entity.id, entity, entity.id == null)
        this.entityMap[entity.id] = entity;
    }

    removeEntity(id: any) {
        ArrayUtils.removeByCondition(this.entityArray, a => a.id == id);
    }

    addEntity(entity: T) {
        if (entity.id != null) {
            if (!this.entityMap[entity.id]) {
                this.putEntity(entity);
            }
            else {
                throw "Kombin unable to add entity because of has a item whose id is same with entity that is trying to be added. If do you want edit a item, use putEntity"
            }
        }
        else {
            throw "Kombin unable to add entity because of has no id"
        }
    }

    editEntity(entity: T) {
        if (entity.id != null) {
            this.putEntity(entity);
        }
        else {
            throw "Kombin unable to edit entity because of has no id"
        }
    }

}