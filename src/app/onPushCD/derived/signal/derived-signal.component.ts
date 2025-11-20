import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TestArea } from '../../../pieces/test-area..component';

@Component({
  selector: 'app-derived-signal-onpush-CD',
  imports: [TestArea],
  template: `
    <app-test-area>
      <span #txt>derived-signal-onpush-CD: {{ derviedSignal() }}</span>
    </app-test-area>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DerivedSignalOnpushCD {
  plainSignal = signal('test');
  derviedSignal = computed(() => this.plainSignal() + ' derived');
}
