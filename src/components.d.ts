/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MAlert {
        "close": boolean;
        "icon": string;
        "light": boolean;
        "type": 'default' | 'primary' | 'info' | 'warn' | 'danger' | 'success';
    }
    interface MBreadcrumb {
        "current": number | string;
        "list": string[] | string;
        "separator": string;
    }
    interface MButton {
        "color": 'primary' | 'warn' | 'success' | 'danger';
        "disabled": boolean;
        "icon": string;
        "loading": boolean;
        "type": 'primary' | 'dashed' | 'hollow' | 'text' | 'flat';
    }
    interface MCard {
        "inline": boolean;
    }
    interface MDialog {
        "actions": { cancel?: string; confirm?: string };
        "content": string;
        "destroy": () => Promise<void>;
        "icon": string;
        "name": string;
        "type": any;
    }
    interface MIcon {
        "color": string;
        "icon": string;
        "size": string | number;
    }
    interface MImage {
        "alt": string;
        "fit": 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
        "retry": (url: any) => Promise<void>;
        "src": string;
    }
    interface MMessage {
        "addMessage": (text: any, icon: any, actions: any) => Promise<void>;
        "canDelete": boolean;
        "destroy": (node: HTMLElement) => Promise<void>;
        "icon": string;
        "type": string;
    }
    interface MMessageBox {
    }
    interface MProgress {
        "color": 'primary' | 'warn' | 'danger' | 'success';
        "progress": string;
        "showProgress": boolean;
    }
    interface MTag {
        "close": boolean;
        "color": 'primary' | 'info' | 'warn' | 'success' | 'danger' | string;
        "destroy": () => Promise<void>;
        "outline": boolean;
    }
    interface MyComponent {
    }
}
declare global {
    interface HTMLMAlertElement extends Components.MAlert, HTMLStencilElement {
    }
    var HTMLMAlertElement: {
        prototype: HTMLMAlertElement;
        new (): HTMLMAlertElement;
    };
    interface HTMLMBreadcrumbElement extends Components.MBreadcrumb, HTMLStencilElement {
    }
    var HTMLMBreadcrumbElement: {
        prototype: HTMLMBreadcrumbElement;
        new (): HTMLMBreadcrumbElement;
    };
    interface HTMLMButtonElement extends Components.MButton, HTMLStencilElement {
    }
    var HTMLMButtonElement: {
        prototype: HTMLMButtonElement;
        new (): HTMLMButtonElement;
    };
    interface HTMLMCardElement extends Components.MCard, HTMLStencilElement {
    }
    var HTMLMCardElement: {
        prototype: HTMLMCardElement;
        new (): HTMLMCardElement;
    };
    interface HTMLMDialogElement extends Components.MDialog, HTMLStencilElement {
    }
    var HTMLMDialogElement: {
        prototype: HTMLMDialogElement;
        new (): HTMLMDialogElement;
    };
    interface HTMLMIconElement extends Components.MIcon, HTMLStencilElement {
    }
    var HTMLMIconElement: {
        prototype: HTMLMIconElement;
        new (): HTMLMIconElement;
    };
    interface HTMLMImageElement extends Components.MImage, HTMLStencilElement {
    }
    var HTMLMImageElement: {
        prototype: HTMLMImageElement;
        new (): HTMLMImageElement;
    };
    interface HTMLMMessageElement extends Components.MMessage, HTMLStencilElement {
    }
    var HTMLMMessageElement: {
        prototype: HTMLMMessageElement;
        new (): HTMLMMessageElement;
    };
    interface HTMLMMessageBoxElement extends Components.MMessageBox, HTMLStencilElement {
    }
    var HTMLMMessageBoxElement: {
        prototype: HTMLMMessageBoxElement;
        new (): HTMLMMessageBoxElement;
    };
    interface HTMLMProgressElement extends Components.MProgress, HTMLStencilElement {
    }
    var HTMLMProgressElement: {
        prototype: HTMLMProgressElement;
        new (): HTMLMProgressElement;
    };
    interface HTMLMTagElement extends Components.MTag, HTMLStencilElement {
    }
    var HTMLMTagElement: {
        prototype: HTMLMTagElement;
        new (): HTMLMTagElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "m-alert": HTMLMAlertElement;
        "m-breadcrumb": HTMLMBreadcrumbElement;
        "m-button": HTMLMButtonElement;
        "m-card": HTMLMCardElement;
        "m-dialog": HTMLMDialogElement;
        "m-icon": HTMLMIconElement;
        "m-image": HTMLMImageElement;
        "m-message": HTMLMMessageElement;
        "m-message-box": HTMLMMessageBoxElement;
        "m-progress": HTMLMProgressElement;
        "m-tag": HTMLMTagElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MAlert {
        "close"?: boolean;
        "icon"?: string;
        "light"?: boolean;
        "type"?: 'default' | 'primary' | 'info' | 'warn' | 'danger' | 'success';
    }
    interface MBreadcrumb {
        "current"?: number | string;
        "list": string[] | string;
        "onLink"?: (event: CustomEvent<{ index: number }>) => void;
        "separator"?: string;
    }
    interface MButton {
        "color"?: 'primary' | 'warn' | 'success' | 'danger';
        "disabled"?: boolean;
        "icon"?: string;
        "loading"?: boolean;
        "type"?: 'primary' | 'dashed' | 'hollow' | 'text' | 'flat';
    }
    interface MCard {
        "inline"?: boolean;
    }
    interface MDialog {
        "actions"?: { cancel?: string; confirm?: string };
        "content"?: string;
        "icon"?: string;
        "name"?: string;
        "type"?: any;
    }
    interface MIcon {
        "color"?: string;
        "icon": string;
        "size"?: string | number;
    }
    interface MImage {
        "alt"?: string;
        "fit"?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
        "src": string;
    }
    interface MMessage {
        "canDelete"?: boolean;
        "icon"?: string;
        "type"?: string;
    }
    interface MMessageBox {
    }
    interface MProgress {
        "color"?: 'primary' | 'warn' | 'danger' | 'success';
        "progress"?: string;
        "showProgress"?: boolean;
    }
    interface MTag {
        "close"?: boolean;
        "color"?: 'primary' | 'info' | 'warn' | 'success' | 'danger' | string;
        "onClose"?: (event: CustomEvent<{ node: HTMLElement; destroy: () => void }>) => void;
        "outline"?: boolean;
    }
    interface MyComponent {
    }
    interface IntrinsicElements {
        "m-alert": MAlert;
        "m-breadcrumb": MBreadcrumb;
        "m-button": MButton;
        "m-card": MCard;
        "m-dialog": MDialog;
        "m-icon": MIcon;
        "m-image": MImage;
        "m-message": MMessage;
        "m-message-box": MMessageBox;
        "m-progress": MProgress;
        "m-tag": MTag;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "m-alert": LocalJSX.MAlert & JSXBase.HTMLAttributes<HTMLMAlertElement>;
            "m-breadcrumb": LocalJSX.MBreadcrumb & JSXBase.HTMLAttributes<HTMLMBreadcrumbElement>;
            "m-button": LocalJSX.MButton & JSXBase.HTMLAttributes<HTMLMButtonElement>;
            "m-card": LocalJSX.MCard & JSXBase.HTMLAttributes<HTMLMCardElement>;
            "m-dialog": LocalJSX.MDialog & JSXBase.HTMLAttributes<HTMLMDialogElement>;
            "m-icon": LocalJSX.MIcon & JSXBase.HTMLAttributes<HTMLMIconElement>;
            "m-image": LocalJSX.MImage & JSXBase.HTMLAttributes<HTMLMImageElement>;
            "m-message": LocalJSX.MMessage & JSXBase.HTMLAttributes<HTMLMMessageElement>;
            "m-message-box": LocalJSX.MMessageBox & JSXBase.HTMLAttributes<HTMLMMessageBoxElement>;
            "m-progress": LocalJSX.MProgress & JSXBase.HTMLAttributes<HTMLMProgressElement>;
            "m-tag": LocalJSX.MTag & JSXBase.HTMLAttributes<HTMLMTagElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
