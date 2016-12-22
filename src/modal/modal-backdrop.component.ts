import { Component, ElementRef, Renderer } from '@angular/core';

import { ClassName } from './modal-options.class';

export class ModalBackdropOptions {
  public animate:boolean = true;

  public constructor(options:ModalBackdropOptions) {
    Object.assign(this, options);
  }
}

/** This component will be added as background layout for modals if enabled */
@Component({
  selector: 'bs-modal-backdrop',
  template: '',
  // tslint:disable-next-line
  host: {'class': ClassName.BACKDROP}
})
export class ModalBackdropComponent {
  public get isAnimated():boolean {
    return this._isAnimated;
  }

  public set isAnimated(value:boolean) {
    this._isAnimated = value;
    this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
  }

  public get isShown():boolean {
    return this._isShown;
  }

  public set isShown(value:boolean) {
    this._isShown = value;
    this.renderer.setElementClass(this.element.nativeElement, `${ClassName.IN}`, value);
    this.renderer.setElementClass(this.element.nativeElement, `${ClassName.ACTIVE}`, value);
  }

  public element:ElementRef;
  public renderer:Renderer;

  protected _isAnimated:boolean;
  protected _isShown:boolean = false;

  public constructor(element:ElementRef, renderer:Renderer) {
    this.element = element;
    this.renderer = renderer;
  }
}
