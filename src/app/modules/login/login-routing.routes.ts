import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
 
const rotas: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [ RouterModule.forChild(rotas) ],
    exports: [ RouterModule ]
})
export class LoginRouting {}