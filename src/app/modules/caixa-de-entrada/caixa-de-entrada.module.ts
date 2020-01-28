import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { LoginRouting } from '../login/login-routing.routes';
import { CaixaDeEntradaRouting } from './caixa-de-entrada-routing.routes';



@NgModule({
  declarations: [
    CaixaDeEntradaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CaixaDeEntradaRouting
  ],
  exports: [ 
    CaixaDeEntradaComponent
  ]
})
export class CaixaDeEntradaModule { }
