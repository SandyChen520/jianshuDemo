import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from './popup.component';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class PopupService {

  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }
  
  showAsElement(message: string){
    const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;
    
    popupEl.addEventListener('closed', () => {
      const timer = setTimeout(() =>{
        document.body.removeChild(popupEl);
        clearTimeout(timer);
      },500)
    });
    popupEl.message = message;
    document.body.appendChild(popupEl);

  }
  showAsComponent(message: string) {
    // Create element
    const popup = document.createElement('popup-component');
 
    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);
 
    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);
 
    // Listen to the close event
    popupComponentRef.instance.closed.subscribe(() => {
      const timer1 = setTimeout(() =>{
        document.body.removeChild(popup);
        this.applicationRef.detachView(popupComponentRef.hostView);
        clearTimeout(timer1);
      },500)
      
    });
 
    // Set the message
    popupComponentRef.instance.message = message;
 
    // Add to the DOM
    document.body.appendChild(popup);
  }

}
