export class Usuario {
    id: Number;
    nome: string;
    email: string;
    endereco: string;
    senha: string;
        
    constructor (
        id:number,
        nome:string,
        email:string,
        endereco:string,
        senha:string
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
        this.senha = senha;
    }
    validar(): string | null {
        if(!this.nome || this.nome.trim().length === 0){
            return "O Nome é obrigatório."
        }
        if(!this.email || this.email.trim().length === 0) {
            return "O E-mail é obrigatório."
        }
        if(!this.endereco || this.endereco.trim().length === 0) {
            return "O Endereço é obrigatório."
        }
        if(!this.senha || this.senha.trim().length === 0) {
            return "A Senha é obrigatório."
        }
        return null;
    }
    
}