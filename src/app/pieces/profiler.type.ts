export interface ProfileJson {
    version: number;
    buffer:  BufferElement[];
}

export interface BufferElement {
    source:     string;
    duration:   number;
    directives: BufferDirective[];
}

export interface BufferDirective {
    children:   DirectiveChild[];
    directives: DirectiveDirective[];
    type:       string;
}

export interface DirectiveChild {
    children:   ChildChild[];
    directives: FluffyDirective[];
    type:       string;
}

export interface ChildChild {
    children:   any[];
    directives: PurpleDirective[];
    type:       string;
}

export interface PurpleDirective {
    isElement:       boolean;
    isComponent:     boolean;
    lifecycle:       OutputsClass;
    outputs:         Outputs;
    name:            string;
    changeDetection?: number | null;
}

export interface OutputsClass {
}


export interface Outputs {
    TestArea_Template_button_click_0_listener?: number;
}

export interface FluffyDirective {
    isComponent:      boolean;
    isElement:        boolean;
    name:             string;
    outputs:          OutputsClass;
    lifecycle:        PurpleLifecycle;
    changeDetection?: number;
}

export interface PurpleLifecycle {
    ngOnChanges?: number;
}

export interface DirectiveDirective {
    isElement:       boolean;
    isComponent:     boolean;
    lifecycle:       OutputsClass;
    outputs:         OutputsClass;
    name:            string;
    changeDetection: number;
}