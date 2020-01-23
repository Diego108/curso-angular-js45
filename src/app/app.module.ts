import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuleRoteamento } from './modules/app.routes';
import { ComponentsModule } from './modules/components.module';
import { HeaderComponent } from './components/header/header.component';
import { FormFieldDirective } from './components/form-group/directives/form-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormFieldDirective
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    ModuleRoteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
