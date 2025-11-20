import { Component, computed, signal } from '@angular/core';
import { TestArea } from '../../../pieces/test-area..component';

@Component({
  selector: 'app-derived-signal-default-CD',
  imports: [TestArea],
  template: `
    <app-test-area>
      <span #txt>derived-signal-default-cd: {{ derviedSignal() }}</span>
    </app-test-area>
  `,
})
export class DerivedSignalDefaultCD {
  readonly plainSignal = signal('test');
  readonly derviedSignal = computed(() => this.plainSignal() + ' derived');
}
