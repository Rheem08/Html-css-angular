import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective {

  constructor(eleRef:ElementRef) {
    eleRef.nativeElement.style.background= 'teal';
    
   }

}
