import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'}) export class TestAreaService {
    #showTestArea$ = new BehaviorSubject(false);
    showTestArea$ = this.#showTestArea$.asObservable();

    toggleShowTestArea() {
        this.#showTestArea$.next(!this.#showTestArea$.value);
    }
}