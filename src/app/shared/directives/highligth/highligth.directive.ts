import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighligth]'
})
export class HighligthDirective implements OnInit {

  @Input() background: string = 'red';
  @Input() color: string = 'black';

  constructor( private element: ElementRef ) { 
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = this.background;
    this.element.nativeElement.style.color = this.color;
  }

}
