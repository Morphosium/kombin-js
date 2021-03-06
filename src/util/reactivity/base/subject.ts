import { Observer } from "./observer";

/**
 * Basic subject structure for event emitting without extra installations
 */
export interface ISubject<T = any> {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;

    /**
    * Triggers subscribed observers with provided value
    * @param param 
    */
    notify(param: T): void;
}


/**
 * Basic subject structure for event emitting without extra installations
 */
export class Subject<T = any> implements ISubject<T> {

    /**
     * Subscribed observers
     */
    private observers: Observer<T>[] = [];

    notify(param: T): void {
        for (const observer of this.observers) {
            observer.update(this, param);
        }
    }

    subscribe(observer: Observer<T>): void {
        if (this.observers.indexOf(observer) == -1)
            this.observers.push(observer);
    }
    unsubscribe(observer: Observer<T>): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) this.observers.splice(index, 1);
    }
}

