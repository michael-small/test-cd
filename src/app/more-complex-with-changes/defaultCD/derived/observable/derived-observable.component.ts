import { Component } from '@angular/core';
import { TestArea } from '../../../../pieces/test-area..component';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, combineLatest, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-derived-observable-default-CD-with-changes',
  imports: [TestArea, AsyncPipe],
  template: `
    <app-test-area>
      <span #txt>derived-observable-default-cd-advanced-with-changes: 
        {{obs1$ | async}} + {{obs2$ | async}} and {{obs3$ | async}} with {{obs4$ | async}} all together is {{derivedObservable1$ | async}}
        {{obs5$ | async}} + {{obs6$ | async}} and {{obs7$ | async}} with {{obs8$ | async}} all together is {{derivedObservable2$ | async}}
        {{obs9$ | async}} + {{obs10$ | async}} and {{obs11$ | async}} with {{obs12$ | async}} all together is {{derivedObservable3$ | async}}
      </span>
    </app-test-area>
  `,
})
export class DerivedObservableDefaultCDAdvancedWithChanges {
  obs1$ = new BehaviorSubject(123)
  obs2$ = new BehaviorSubject(456)
  obs3$ = new BehaviorSubject('abc')
  obs4$ = new BehaviorSubject('def')

  obs5$ = new BehaviorSubject(123)
  obs6$ = new BehaviorSubject(456)
  obs7$ = new BehaviorSubject('abc')
  obs8$ = new BehaviorSubject('def')

  obs9$ = new BehaviorSubject(123)
  obs10$ = new BehaviorSubject(456)
  obs11$ = new BehaviorSubject('abc')
  obs12$ = new BehaviorSubject('def')
  
  derivedObservable1$ = combineLatest([this.obs1$, this.obs2$, this.obs3$, this.obs4$]).pipe(
    map(([val1, val2, val3, val4]) => {
      return `${val1 + val2}, ${val3}, ${val4}`;
    }),
  )
    derivedObservable2$ = combineLatest([this.obs5$, this.obs6$, this.obs7$, this.obs8$]).pipe(
    map(([val1, val2, val3, val4]) => {
      return `${val1 + val2}, ${val3}, ${val4}`;
    }),
  )
    derivedObservable3$ = combineLatest([this.obs9$, this.obs10$, this.obs11$, this.obs12$]).pipe(
    map(([val1, val2, val3, val4]) => {
      return `${val1 + val2}, ${val3}, ${val4}`;
    }),
  )

  constructor() {
    interval(5000).subscribe(() => {
      this.obs1$.next(this.obs1$.value + 1);
      this.obs2$.next(this.obs2$.value + 1);
      this.obs3$.next(this.obs3$.value + 'x');
      this.obs4$.next(this.obs4$.value + 'y');

      this.obs5$.next(this.obs5$.value + 1);
      this.obs6$.next(this.obs6$.value + 1);
      this.obs7$.next(this.obs7$.value + 'x');
      this.obs8$.next(this.obs8$.value + 'y');

      this.obs9$.next(this.obs9$.value + 1);
      this.obs10$.next(this.obs10$.value + 1);
      this.obs11$.next(this.obs11$.value + 'x');
      this.obs12$.next(this.obs12$.value + 'y');
    })
  }
}
