import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TestArea } from '../../../pieces/test-area..component';

@Component({
  selector: 'app-plain-observable-onpush-CD',
  imports: [TestArea, AsyncPipe],
  template: `
      <app-test-area>
      <span #txt>plain-observable-onpush-CD: {{plainObservable$ | async}}</span>
    </app-test-area>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlainObservableOnpushCD {
  plainObservable$ = of('test');
}
