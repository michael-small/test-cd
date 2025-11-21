import { Component } from '@angular/core';
import { TestArea } from '../../../../pieces/test-area..component';
import { AsyncPipe } from '@angular/common';
import { combineLatest, map, of } from 'rxjs';

@Component({
  selector: 'app-derived-observable-default-CD',
  imports: [TestArea, AsyncPipe],
  template: `
    <app-test-area>
      <span #txt>derived-observable-default-cd-advanced: 
        {{obs1$ | async}} + {{obs2$ | async}} and {{obs3$ | async}} with {{obs4$ | async}} all together is {{derivedObservable1$ | async}}
        {{obs5$ | async}} + {{obs6$ | async}} and {{obs7$ | async}} with {{obs8$ | async}} all together is {{derivedObservable2$ | async}}
        {{obs9$ | async}} + {{obs10$ | async}} and {{obs11$ | async}} with {{obs12$ | async}} all together is {{derivedObservable3$ | async}}
      </span>
    </app-test-area>
  `,
})
export class DerivedObservableDefaultCDAdvanced {
  obs1$ = of(123)
  obs2$ = of(456)
  obs3$ = of('abc')
  obs4$ = of('def')

  obs5$ = of(123)
  obs6$ = of(456)
  obs7$ = of('abc')
  obs8$ = of('def')

  obs9$ = of(123)
  obs10$ = of(456)
  obs11$ = of('abc')
  obs12$ = of('def')
  
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
}
