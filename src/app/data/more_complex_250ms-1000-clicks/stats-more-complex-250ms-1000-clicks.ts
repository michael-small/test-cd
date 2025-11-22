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
      <section>
        <h3>Default CD</h3>

        <h4>Directives</h4>
        <app-tallied-data [data]="defaultDerivedObservable" [type]="'directives'" />
        <app-tallied-data [data]="defaultDerivedSignal" [type]="'directives'" />

        <h4>Duration</h4>
        <app-tallied-data [data]="defaultDerivedObservable" [type]="'duration'" />
        <app-tallied-data [data]="defaultDerivedSignal" [type]="'duration'" />

        <h4>Test Area</h4>
        <app-tallied-data [data]="defaultDerivedObservable" [type]="'testArea'" />
        <app-tallied-data [data]="defaultDerivedSignal" [type]="'testArea'" />
      </section>

      <section>
        <h3>OnPush CD</h3>

        <h4>Directives</h4>
        <app-tallied-data [data]="onPushDerivedObservable" [type]="'directives'" />
        <app-tallied-data [data]="onPushDerivedSignal" [type]="'directives'" />

        <h4>Duration</h4>
        <app-tallied-data [data]="onPushDerivedObservable" [type]="'duration'" />
        <app-tallied-data [data]="onPushDerivedSignal" [type]="'duration'" />

        <h4>Test Area</h4>
        <app-tallied-data [data]="onPushDerivedObservable" [type]="'testArea'" />
        <app-tallied-data [data]="onPushDerivedSignal" [type]="'testArea'" />
      </section>
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
