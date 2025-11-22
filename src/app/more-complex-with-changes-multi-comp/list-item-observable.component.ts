import { AsyncPipe } from '@angular/common';
import { Component, computed, Input, input, signal } from '@angular/core';
import { combineLatest, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-list-item-observable',
  template: `
    <div>
      <p>
        list-item-observable: value1 {{ value1$ | async }} + value2 {{ value2$ | async }} = combined
        {{ valueCombined$ | async }}; combined with input {{ inputVal$ | async }} is
        {{ valueCombinedWithInput$ | async }}
      </p>
    </div>
  `,
  imports: [AsyncPipe],
})
export class ListItemObservableComponent {
  @Input({ required: true }) inputVal$!: Observable<number>;

  value1$ = of(3);
  value2$ = of(5);

  valueCombined$ = combineLatest([this.value1$, this.value2$]).pipe(
    map(([val1, val2]) => val1 + val2),
  );

  valueCombinedWithInput$ = combineLatest([this.valueCombined$, this.inputVal$]).pipe(
    map(([combined, inputVal]) => combined + inputVal),
  );
}
