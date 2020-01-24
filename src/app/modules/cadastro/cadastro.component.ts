import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formularioDeCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
    username: new FormControl('', [Validators.required, Validators.pattern('[A-Z]*')]),
    senha: new FormControl('', [Validators.required]),
    avatar: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  validAllFields(){

    this.formularioDeCadastro.markAllAsTouched();
  }

  handleCadastroUsuario(){
    
    if(this.formularioDeCadastro.valid){
      this.formularioDeCadastro.reset();
    }
    else {
      this.validAllFields();
    }
  }
}
