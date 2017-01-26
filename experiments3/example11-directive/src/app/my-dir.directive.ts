import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  //
  selector: '[appMyDir]',
  exportAs: 'eee',
  host: {
    '(click)': 'displayMessage($event)'
  }
})
export class MyDirDirective {
  @Input() message: String;

  constructor(_elementRef: ElementRef) {
    console.log(_elementRef.nativeElement);
  }

  displayMessage(event) {
    console.log(this.message);
    event.preventDefault();
  }

}
