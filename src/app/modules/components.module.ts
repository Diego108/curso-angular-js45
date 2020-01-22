import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CaixaDeEntradaComponent } from './caixa-de-entrada/caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroComponent,
    CaixaDeEntradaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CaixaDeEntradaComponent,
    CadastroComponent
  ]
})
export class ComponentsModule { }
