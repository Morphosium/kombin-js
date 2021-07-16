import { GenericEntity } from "./generic-entity";
import { GenericEntityIdType } from "./generic-entity-id-type";
import { ArrayUtils } from "./util/array-utils";

export class Repository<T extends GenericEntity = any>
{
    entityMap: { [id: number]: T } = {}
    entityArray: T[] = [];


    getById(id: any): T | null {
        return this.entityMap[id];
    }

    putEntity(entity: T) {
        ArrayUtils.addOrChange(this.entityArray, a => a.id === entity.id, entity, entity.id == null)
        this.entityMap[entity.id] = entity;
    }

    removeEntity(id: GenericEntityIdType) {
        ArrayUtils.removeByCondition(this.entityArray, a => a.id == id);
    }

}