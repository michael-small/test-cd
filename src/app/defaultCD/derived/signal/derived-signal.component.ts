import { Component, computed, signal} from '@angular/core';
import { TestArea } from '../../../pieces/test-area..component';

@Component({
  selector: 'app-derived-signal-default-CD',
  imports: [TestArea],
  template: `
      <app-test-area>
      <span #txt>derived-signal-default-cd: {{derviedSignal()}}</span>
    </app-test-area>
  `,
})
export class DerivedSignalDefaultCD {
    plainSignal = signal('test');
    derviedSignal = computed(() => this.plainSignal() + ' derived')
}
