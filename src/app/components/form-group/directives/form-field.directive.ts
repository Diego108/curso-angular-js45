import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[cmailFormField]'
})
export class FormFieldDirective implements OnInit{

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    const campo = this.element.nativeElement;
    campo.id = campo.name;
    campo.setAttribute('placeholder', '')
    campo.classList.add('mdl-textfield__input');
  }

}
