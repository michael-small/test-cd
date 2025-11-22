import { Component, computed, signal } from '@angular/core';
import { TestArea } from '../../../../pieces/test-area..component';
import { interval } from 'rxjs';

@Component({
  selector: 'app-derived-signal-default-CD-with-changes',
  imports: [TestArea],
  template: `
    <app-test-area>
      <span #txt>derived-signal-default-cd-advanced-with-changes: 
        {{signal1()}} + {{signal2()}} and {{signal3()}} with {{signal4()}} all together is {{derivedSignal1()}}
        {{signal5()}} + {{signal6()}} and {{signal7()}} with {{signal8()}} all together is {{derivedSignal2()}}
        {{signal9()}} + {{signal10()}} and {{signal11()}} with {{signal12()}} all together is {{derivedSignal3()}}
      </span>
    </app-test-area>
  `,
})
export class DerivedSignalDefaultCDAdvancedWithChanges {
  signal1 = signal(123)
  signal2 = signal(456)
  signal3 = signal('abc')
  signal4 = signal('def')

  signal5 = signal(123)
  signal6 = signal(456)
  signal7 = signal('abc')
  signal8 = signal('def')

  signal9 = signal(123)
  signal10 = signal(456)
  signal11 = signal('abc')
  signal12 = signal('def')

  derivedSignal1 = computed(() => {
    return `${this.signal1() + this.signal2()}, ${this.signal3()}, ${this.signal4()}`
  })
  derivedSignal2 = computed(() => {
    return `${this.signal5() + this.signal6()}, ${this.signal7()}, ${this.signal8()}`
  })
  derivedSignal3 = computed(() => {
    return `${this.signal9() + this.signal10()}, ${this.signal11()}, ${this.signal12()}`
  })

    constructor() {
      interval(5000).subscribe(() => {
        this.signal1.set(this.signal1() + 1);
        this.signal2.set(this.signal2() + 1);
        this.signal3.set(this.signal3() + 'x');
        this.signal4.set(this.signal4() + 'y');
  
        this.signal5.set(this.signal5() + 1);
        this.signal6.set(this.signal6() + 1);
        this.signal7.set(this.signal7() + 'x');
        this.signal8.set(this.signal8() + 'y');
  
        this.signal9.set(this.signal9() + 1);
        this.signal10.set(this.signal10() + 1);
        this.signal11.set(this.signal11() + 'x');
        this.signal12.set(this.signal12() + 'y');
      })
    }
}
