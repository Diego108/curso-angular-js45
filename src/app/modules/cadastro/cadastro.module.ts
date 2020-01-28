import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared.module';
import { CadastroComponent } from './cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroRouting } from './cadastro-routing.routes';



@NgModule({
  declarations: [ 
    CadastroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CadastroRouting
  ],
  exports: [ 
    CadastroComponent
  ]
})
export class CadastroModule { }
