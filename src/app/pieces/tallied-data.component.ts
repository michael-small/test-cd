import { Component, computed, effect, input } from '@angular/core';
import { ProfileJson } from './profiler.type';
import { tallyProfiler } from './tally-profile';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tallied-data',
  template: `
      <p>{{talliedData() | json}}</p>
  `,
  imports: [JsonPipe]
})
export class TalliedData {
  data = input.required<{cdProfile: ProfileJson | undefined, primitive: 'async' | 'signals', changeDetection: 'OnPush' | 'Default', derived: boolean}>()

  talliedData = computed(() => {
    const data = this.data();
    return tallyProfiler(data.cdProfile, data.primitive, data.changeDetection, data.derived);
  })
}
