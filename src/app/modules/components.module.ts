import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CaixaDeEntradaComponent } from './caixa-de-entrada/caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormGroupComponent } from '../components/form-group/form-group.component';


@NgModule({
  declarations: [
    CadastroComponent,
    CaixaDeEntradaComponent,
    LoginComponent,
    FormGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CaixaDeEntradaComponent,
    CadastroComponent,
    LoginComponent,
    FormGroupComponent
  ]
})
export class ComponentsModule { }
