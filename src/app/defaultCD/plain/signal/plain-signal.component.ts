import { Component, signal } from '@angular/core';
import { TestArea } from '../../../pieces/test-area..component';

@Component({
  selector: 'app-plain-signal-default-CD',
  imports: [TestArea],
  template: `
    <app-test-area>
      <span #txt>plain-signal-default-CD: {{ plainSignal() }}</span>
    </app-test-area>
  `,
})
export class PlainSignalDefaultCD {
  plainSignal = signal('test');
}
