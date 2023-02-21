import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButton]'
})



export class ButtonDirective {


  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.bacgroundColor = 'Blue';
    this.elementRef.nativeElement.style.color = 'Red';
    this.elementRef.nativeElement.style.fontfamily = 'cursive';
    this.elementRef.nativeElement.style.width = '150px';
    this.elementRef.nativeElement.style.height = '50px';
    this.elementRef.nativeElement.style.fontSize = '30px';
    this.elementRef.nativeElement.style.textAlign = 'center';
    this.elementRef.nativeElement.style.borderRadius = '10px';
  }
  @HostListener('mouseenter') onMuseEnter() {
    this.elementRef.nativeElement.nativeElement.style.bacgroundColor = 'green';
  }

  @HostListener('mouseleave') onMuseLeave(): void {
    this.elementRef.nativeElement.nativeElement.style.bacgroundColor = 'Blue';
  }

}
