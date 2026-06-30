export class Solicitacao {
    id: number;
    descricao: string;
    data_inicio: Date;
    data_fim: Date;

    constructor(
        id: number,
        descricao: string,
        data_inicio: Date,
        data_fim: Date,

    ) {


        this.id = id;
        this.descricao = descricao;
        this.data_inicio = data_inicio;
        this.data_fim = data_fim;

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

        return null;
    }
}