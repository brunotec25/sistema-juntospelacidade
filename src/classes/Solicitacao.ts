export class Solicitacao {
    id: number;
    descricao: string;
    data_inicio: string;
    data_fim: string;
    pessoas_id_pessoas: number;
    enderecos_id_Enderecos:number;
    tipo:string;

    constructor(
        id: number,
        descricao: string,
        data_inicio: string,
        data_fim: string,
        pessoas_id_pessoas: number,
        enderecos_id_Enderecos:number,
        tipo:string
    ) {


        this.id = id;
        this.descricao = descricao;
        this.data_inicio = data_inicio;
        this.data_fim = data_fim;
        this.pessoas_id_pessoas =pessoas_id_pessoas;
        this.enderecos_id_Enderecos = enderecos_id_Enderecos;
        this.tipo = tipo;
    }

    validar(): string | null {
        if (!this.descricao || this.descricao.trim().length === 0) {
            return "O campo descrição não pode ser nulo";
        }

        if (!this.data_inicio) {
            return "A data de início é obrigatória";
        }

        if (!this.data_fim) {
            return "A data de fim é obrigatória";
        }
        if (this.pessoas_id_pessoas > 0) {
            return "ID é obrigatório";
        }
        if (this.enderecos_id_Enderecos > 0) {
            return "ID é obrigatório";
        }
         if (!this.tipo || this.tipo.trim().length === 0) {
            return "Tipo do usuario é obrigatório";
        }

        return null;
    }
}