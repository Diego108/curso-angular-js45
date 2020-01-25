import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formularioDeCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
    username: new FormControl('', [Validators.required, Validators.pattern('[A-Z]*')]),
    senha: new FormControl('', [Validators.required, Validators.minLength(5)]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4,5}')]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this))
  });

  mensagensDeErro: HttpErrorResponse;

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  ngOnInit() {
  }

  validaImagem(fieldAvatar: FormControl) {
    return this.httpClient.head(
      fieldAvatar.value,
      {
        observe: 'response'
      }).pipe(
        map((response: HttpResponseBase) => {
          return response.ok ? null : { urlInvalida: true }
        }),
        catchError((error) => {
          return [{ urlInvalida: true }]
        })
      )
  }

  validAllFields() {
    this.formularioDeCadastro.markAllAsTouched();
  }

  handleSignUpUsuario() {

    if (this.formularioDeCadastro.valid) {

      const userData = new User(this.formularioDeCadastro.value);

      console.log(userData);

      this.httpClient.post('http://localhost:3200/users', userData).subscribe((resposta) => {
                const dados = resposta;
                console.log(dados);
                setTimeout(() => {
                  this.router.navigate(['']);
                }, 1000);
              },
              (httpErrorResponse: HttpErrorResponse) => {
                this.mensagensDeErro = httpErrorResponse.error.body;
              }
            ); 
      this.formularioDeCadastro.reset();
    }
    else {
      this.validAllFields();
    }
  }
}
