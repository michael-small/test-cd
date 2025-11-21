import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncDerivedDefaultsProfile } from './derived/async/async-derived-default';
import { SignalsDerivedDefaultsProfile } from './derived/signals/signals-derived-default';
import { AsyncDerivedOnPushProfile } from './derived/async/async-derived-onpush';
import { SignalsDerivedOnPushProfile } from './derived/signals/signals-derived-onpush';
import { TalliedData } from '../../pieces/tallied-data.component';
import { Tally } from '../../pieces/tally.type';

@Component({
  selector: 'app-stats-more-complex-250ms-1000-clicks',
  template: `
    <section>
      <p>Default CD</p>
      <app-tallied-data [data]="defaultDerivedObservable" />
      <app-tallied-data [data]="defaultDerivedSignal" />

      <p>OnPush CD</p>
      <app-tallied-data [data]="onPushDerivedObservable" />
      <app-tallied-data [data]="onPushDerivedSignal" />
    </section>
  `,
  imports: [TalliedData],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsMoreComplex250ms1000Clicks {
  // default
  defaultDerivedObservable: Tally = {
    cdProfile: AsyncDerivedDefaultsProfile,
    primitive: 'async',
    changeDetection: 'Default',
    derived: true,
  };
  defaultDerivedSignal: Tally = {
    cdProfile: SignalsDerivedDefaultsProfile,
    primitive: 'signals',
    changeDetection: 'Default',
    derived: true,
  };

  // onpush
  onPushDerivedObservable: Tally = {
    cdProfile: AsyncDerivedOnPushProfile,
    primitive: 'async',
    changeDetection: 'OnPush',
    derived: true,
  };
  onPushDerivedSignal: Tally = {
    cdProfile: SignalsDerivedOnPushProfile,
    primitive: 'signals',
    changeDetection: 'OnPush',
    derived: true,
  };
}
