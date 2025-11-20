import { Component } from '@angular/core';
import { of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TestArea } from '../../../pieces/test-area..component';

@Component({
  selector: 'app-plain-observable-default-CD',
  imports: [TestArea, AsyncPipe],
  template: `
      <app-test-area>
      <span #txt>plain-observable-default-cd: {{plainObservable$ | async}}</span>
    </app-test-area>
  `,
})
export class PlainObservableDefaultCD {
    plainObservable$ = of('test');
}
