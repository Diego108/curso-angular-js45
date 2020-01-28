import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const rotas: Routes = [
    {
        path: 'cadastro',
        loadChildren: () => import('./cadastro/cadastro.module')
        .then(module => module.CadastroModule)
    },
    {
        path: 'inbox',
        loadChildren: () => import('./caixa-de-entrada/caixa-de-entrada.module')
        .then(module => module.CaixaDeEntradaModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module')
        .then(module => module.LoginModule)
    },
    {
        path: '',
        redirectTo: 'inbox',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class RoteamentoModule { }