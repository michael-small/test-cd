import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-list-item-signal',
  template: `
    <div>
      <p>
        list-item-signal: value1 {{ value1() }} + value2 {{ value2() }} = combined
        {{ valueCombined() }}; combined with input {{ inputVal() }} is
        {{ valueCombinedWithInput() }}
      </p>
    </div>
  `,
})
export class ListItemSignalComponent {
  inputVal = input.required<number>();

  value1 = signal(3);
  value2 = signal(5);

  valueCombined = computed(() => this.value1() + this.value2());

  valueCombinedWithInput = computed(() => this.valueCombined() + this.inputVal());
}
