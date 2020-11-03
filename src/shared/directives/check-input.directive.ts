import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[check-input]'
})

export class CheckInputDirective{
  keyCodes : Object = {'leftarrow' : 37, 'uparrow' : 38, 'rightarrow' : 39, 'downarrow' : 40}  
  constructor(private element: ElementRef){

  }

  @HostListener('window:keydown',['$event'])
  onKeyDown(event: KeyboardEvent){
    if(Object.values(this.keyCodes).indexOf(event.keyCode)!== -1){
        event.preventDefault();
    }
  }
} 