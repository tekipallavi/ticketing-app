import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[check-input]'
})

export class CheckInputDirective{
  
  constructor(private element: ElementRef){

  }

  @HostListener('keydown',['$event'])
  onKeyDown(event: KeyboardEvent){
    const regExp = new RegExp(/^[0-9]*(\.[0-9]*){0,1}$/g);
    const keyCodes : Object = {'backspace' : 8 , 'leftarrow' : 37, 'uparrow' : 38, 'rightarrow' : 39, 'downarrow' : 40,
   'delete' : 46 , 'decimal' : 110};  
   if(Object.values(keyCodes).indexOf(event.keyCode)=== -1 && !regExp.test(event.key)){     
        event.preventDefault();       
   }

  }
} 