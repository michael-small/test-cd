export type ProfileJson = {
  buffer: ProfileBuffer[];
  version: number;
};

export type ProfileBuffer = {
  source: Source;
  duration: number;
  directives: BufferDirective[];
};

export type BufferDirective = {
  children: any[];
  directives: DirectiveDirective[];
  type: Type;
}

export type DirectiveDirective = {
  isElement: boolean;
  isComponent: boolean;
  lifecycle: Lifecycle;
  outputs: Outputs;
  name: Name;
  changeDetection: number;
}

export type Lifecycle = {}

export type Name = '_App';

export type Outputs = {
  [key: string]: number;
}

export type Type = 'element';

export type Source = string;
