import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CaixaDeEntradaComponent } from './caixa-de-entrada/caixa-de-entrada.component';

const rotas: Routes = [
    {
        path: '',
        pathMatch:'full',
        redirectTo: 'inbox'
    },
    {
        path: 'login',
        component: LoginComponent 
    },
    {
        path: 'inbox',
        component: CaixaDeEntradaComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent 
    }
]

export const ModuleRoteamento = RouterModule.forRoot(rotas);