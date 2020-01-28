import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoteamentoModule } from './roteamento.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RoteamentoModule
  ],
  exports: [
    RoteamentoModule
  ]
})
export class ComponentsModule { }
