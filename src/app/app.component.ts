import { Component } from '@angular/core';
import { Email } from './model/email';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Campo declarado como boolean para fins de validação de abertura da tela para escrita de um novo e-mail.
   */
  private _isNewEmailOpen: boolean;

  /**
   * Campo declarado como e-mail para fins de recebimento de informação do front.
   */
  private email: Email = new Email();

  /**
   * Campo declarado como lista e-mail para fins de adição de e-mails escritos.
   */
  private emailList: Email[] = [];

  toggleEmail(){
    this._isNewEmailOpen = !this._isNewEmailOpen;
  }

  get isNewEmailOpen() {
    return this._isNewEmailOpen;
  }

  handleEmail(formEmail: NgForm){

    if(formEmail.valid){
      event.preventDefault();
      
      this.emailList.push(this.email);
      this.email = {};

      formEmail.reset();
      this.toggleEmail();
    }
  }
}
