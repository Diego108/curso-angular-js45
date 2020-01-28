import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro.component';
import { NgModule } from '@angular/core';

const rotas: Routes = [
    {
        path: '',
        component: CadastroComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(rotas) ],
    exports: [ RouterModule ]
})
export class CadastroRouting {}