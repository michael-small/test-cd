export interface ProfileJson {
    version: number;
    buffer:  BufferElement[];
}

export interface BufferElement {
    duration:   number;
    directives: BufferDirective[];
}

export interface BufferDirective {
    children:   DirectiveChild[];
    directives: DirectiveDirective[];
}

export interface DirectiveChild {
    children:   ChildChild[];
    directives: FluffyDirective[];
}

export interface ChildChild {
    children:   any[];
    directives: PurpleDirective[];
}

export interface PurpleDirective {
    name:            string;
    changeDetection?: number | null;
}
export interface FluffyDirective {
    name:             string;
    changeDetection?: number;
}

export interface DirectiveDirective {
    name:            string;
    changeDetection: number;
}