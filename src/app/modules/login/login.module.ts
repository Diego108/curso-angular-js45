import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared.module';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login-routing.routes';



@NgModule({
  declarations: [ 
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRouting
  ],
  exports: [ 
    LoginComponent
  ]
})
export class LoginModule { }
