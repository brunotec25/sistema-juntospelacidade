import {conexao} from "@/lib/conexao";

export async function validarLogin(login:string,senha:string) {
    const [resultado] = await conexao.query (
        "SELECT * FROM juntospelacidade WHERE (cpf = ? or  cnpj =?) and senha = ?",
        [
            login,
            login,
            senha
        ]
    );
    return resultado.affectedRows > 0;
}