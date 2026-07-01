export class Usuario {
    id: Number;
    cpf: string;
    nome: string;
    email: string;
    senha: string;
    endereco: string;
            
    constructor (
        id:number,
        cpf:string,
        nome:string,
        email:string,
        senha:string,
        endereco:string
    ) {
        this.id = id;
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.endereco = endereco;
    }
    validar(): string | null {
        if(!this.cpf || this.cpf.trim().length === 0){
            return "O Cpf é obrigatório."
        }
        if(!this.nome || this.nome.trim().length === 0){
            return "O Nome é obrigatório."
        }
        if(!this.email || this.email.trim().length === 0) {
            return "O E-mail é obrigatório."
        }
        if(!this.senha || this.senha.trim().length === 0) {
            return "A Senha é obrigatório."
        }
        if(!this.endereco || this.endereco.trim().length === 0) {
            return "O Endereço é obrigatório."
        }
        return null;
    }
    
}
