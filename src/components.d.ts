/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MButton {
        "color": string;
        "disabled": boolean;
        "icon": string;
        "type": string;
    }
    interface MIcon {
        "icon": string;
    }
    interface MyComponent {
    }
}
declare global {
    interface HTMLMButtonElement extends Components.MButton, HTMLStencilElement {
    }
    var HTMLMButtonElement: {
        prototype: HTMLMButtonElement;
        new (): HTMLMButtonElement;
    };
    interface HTMLMIconElement extends Components.MIcon, HTMLStencilElement {
    }
    var HTMLMIconElement: {
        prototype: HTMLMIconElement;
        new (): HTMLMIconElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "m-button": HTMLMButtonElement;
        "m-icon": HTMLMIconElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MButton {
        "color"?: string;
        "disabled"?: boolean;
        "icon"?: string;
        "type"?: string;
    }
    interface MIcon {
        "icon"?: string;
    }
    interface MyComponent {
    }
    interface IntrinsicElements {
        "m-button": MButton;
        "m-icon": MIcon;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "m-button": LocalJSX.MButton & JSXBase.HTMLAttributes<HTMLMButtonElement>;
            "m-icon": LocalJSX.MIcon & JSXBase.HTMLAttributes<HTMLMIconElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
