import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  color: string = 'red';
  constructor(private element:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      this.color
    );
  }
  @HostListener('mouseenter') mouseEnterEvent () {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'green'
    );
  }
  @HostListener('mouseleave') mouseEnterEvent2 () {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'white'
    );
  }
}
