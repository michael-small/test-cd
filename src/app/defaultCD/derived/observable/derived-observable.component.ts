import { Component } from '@angular/core';
import { TestArea } from '../../../pieces/test-area..component';
import { AsyncPipe } from '@angular/common';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-derived-observable-default-CD',
  imports: [TestArea, AsyncPipe],
  template: `
    <app-test-area>
      <span #txt>derived-observable-default-cd: {{ derivedObservable$ | async }}</span>
    </app-test-area>
  `,
})
export class DerivedObservableDefaultCD {
  plainObservable$ = of('test');
  derivedObservable$ = this.plainObservable$.pipe(map((res) => res + ' derived'));
}
