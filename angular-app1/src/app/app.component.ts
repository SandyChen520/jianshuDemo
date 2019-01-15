import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './pakeages/popup/popup.service';
import {PopupComponent } from './pakeages/popup/popup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(injector: Injector, public popup: PopupService) {
    const PopupElement = createCustomElement(PopupComponent, {injector});
    customElements.define('popup-element', PopupElement);
    console.log(popup);
  }
}
