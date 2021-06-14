import { Observer } from "./base/observer";
import { ISubject } from "./base/subject";


export class EventObserve<T = any> extends Observer<T> {

    constructor(private updateEvent: (param : T) => any) {
        super();
    }

    update(subject: ISubject, param : T): void {
        this.updateEvent(param);
    }

}
