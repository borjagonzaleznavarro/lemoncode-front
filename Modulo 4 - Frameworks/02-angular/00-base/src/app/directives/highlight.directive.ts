import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {

  }

  @Input() color: string = 'yellow';

  @HostListener('mouseenter')
  onMouseEnterEvent() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeaveEvent() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
