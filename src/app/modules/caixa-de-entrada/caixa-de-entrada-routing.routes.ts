import { Routes, RouterModule } from '@angular/router';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { NgModule } from '@angular/core';

const rotas: Routes = [
    {
        path: '',
        component: CaixaDeEntradaComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(rotas) ],
    exports: [ RouterModule ]
})
export class CaixaDeEntradaRouting{ }