export class User {

    name: String;
    username: String;
    senha: String;
    phone: String;
    avatar: String;

    constructor({nome, username, senha, phone, avatar}){
        
        this.name = nome;
        this.username = username;
        this.senha = senha;
        this.phone = phone;
        this.avatar =  avatar;
    }
}
