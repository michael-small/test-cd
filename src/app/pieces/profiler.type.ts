export type ProfileJson = {
    buffer: ProfileBuffer[];
    version: number;
}

export type ProfileBuffer = {
    source:     Source;
    duration:   number;
    directives: BufferDirective[];
}

export interface BufferDirective {
    children:   any[];
    directives: DirectiveDirective[];
    type:       Type;
}

export interface DirectiveDirective {
    isElement:       boolean;
    isComponent:     boolean;
    lifecycle:       Lifecycle;
    outputs:         Outputs;
    name:            Name;
    changeDetection: number;
}

export interface Lifecycle {
}

export type Name = "_App"

export interface Outputs {
    [key: string]: number;
}

export type Type = "element"

export type Source = string;