import { ProfileJson } from "./profiler.type"

export type Tally = {
      cdProfile: ProfileJson | undefined,
      primitive: 'async' | 'signals',
      changeDetection: 'OnPush' | 'Default',
      derived: boolean
}