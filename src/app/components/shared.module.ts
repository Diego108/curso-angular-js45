import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormFieldDirective } from './form-group/directives/form-field.directive';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FormGroupComponent,
    FormFieldDirective,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FormGroupComponent,
    FormFieldDirective,
    HeaderComponent   
  ]
})
export class SharedModule { }
