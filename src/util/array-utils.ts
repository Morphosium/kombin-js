export class ArrayUtils {
    public static removeByCondition<T>(array : Array<T>, condition : (t : T) => boolean) {
        const index = array.findIndex(condition);
        if (index > -1) {
            array.splice(index,1);
        }
    }

    public static addOrChange<T>(array : Array<T>, condition : (t : T) => boolean, item : T, onlyAdd = false) {
        if (!onlyAdd) {
            const index = array.findIndex(condition);
            if (index > -1) {
                array[index] = item;
            }
            else {
                array.push(item);
            }
        }
        else {
            array.push(item);
        }
    }
}