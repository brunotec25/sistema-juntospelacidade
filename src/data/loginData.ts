import {conexao} from "@/lib/conexao";

export async function validarLogin(cpf:string,cnpj:string,senha:string) {
    const [resultado] = await conexao.query (
        "SELECT * FROM juntospelacidade WHERE cpf = ? or  cnpj =? and senha = ?",
        [
            cpf,
            cnpj,
            senha
        ]
    );
    return resultado.affectedRows > 0;
}