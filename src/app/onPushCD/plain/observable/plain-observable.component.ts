import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TestArea } from '../../../pieces/test-area..component';

@Component({
  selector: 'app-plain-observable-onpush-CD',
  imports: [TestArea, AsyncPipe],
  template: `
      <app-test-area>
      {{plainObservable$ | async}}
    </app-test-area>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlainObservableOnpushCD {
  plainObservable$ = of('test');
}
