import { ISubject } from "./subject";


/**
 * Basic observable structure for listening events
 */
export interface IObserver<T = any> {
    update(subject: ISubject, param: T): void;
}

/**
 * Basic observable structure for listening events
 */
export abstract class Observer<T = any> implements IObserver<T> {
    abstract update(subject: ISubject, param: T): void;
}
