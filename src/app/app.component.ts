import { Component } from '@angular/core';
import { Email } from './model/email';

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

  toggleEmail(){
    this._isNewEmailOpen = !this._isNewEmailOpen;
  }

  get isNewEmailOpen() {
    return this._isNewEmailOpen;
  }

  setValue(event, key: string){

    this.email[key] = event.target.value;
    console.log(this.email);
  }
}
