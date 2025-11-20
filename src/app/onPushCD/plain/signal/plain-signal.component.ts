import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TestArea } from '../../../pieces/test-area..component';

@Component({
  selector: 'app-plain-signal-onpush-CD',
  imports: [TestArea],
  template: `
      <app-test-area>
      <span #txt>plain-signal-onpush-CD: {{plainSignal()}}</span>
    </app-test-area>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlainSignalOnpushCD {
    plainSignal = signal('test');
}
