import {conexao} from "@/lib/conexao";
import {Usuario} from "@/classes/Usuario";

export async function validarLogin() {
    const [resultado] = await conexao.query (
        "SELECT * FROM juntospelacidade WHERE cpf = ? or  cnpj =?"
    );
    return resultado;
}