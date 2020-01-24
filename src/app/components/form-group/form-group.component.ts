import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Atributos } from './model/atributos';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {

  atributos: Atributos = {};

  @Input()
  campo = new FormControl();

  constructor(private element: ElementRef) { }

  ngOnInit() {

    const campoInput = this.element.nativeElement.querySelector('input');
    this.atributos.idCampo = campoInput.name;
    this.atributos.labelCampo = campoInput.name.replace(campoInput.name[0], campoInput.name[0].toUpperCase());
  }
}
