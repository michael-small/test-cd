import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map, of } from 'rxjs';
import { TestArea } from '../../../pieces/test-area..component';

@Component({
  selector: 'app-derived-observable-onpush-CD',
  imports: [TestArea, AsyncPipe],
  template: `
      <app-test-area>
      <span #txt>derived-observable-onpush-CD: {{derivedObservable$ | async}}</span>
    </app-test-area>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DerivedObservableOnpushCD {
  plainObservable$ = of('test');
  derivedObservable$ = this.plainObservable$.pipe(map((res) => res + ' derived'));
}
