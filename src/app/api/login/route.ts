import { NextResponse } from "next/server";
import { validarLogin } from "@/data/loginData";

export async function POST(request:NextResponse) {
    const body = await request.json();

    const documento = body.cpf || body.cnpj;

    let resultado;

    if("cpf" in body){
        const senha = body.senha;
        const cnpj = "0";

        resultado = validarLogin(documento,cnpj,senha);
    }

    if ("cnpj" in body) {
        const senha = body.senha;
        const cpf = "0";

        resultado = validarLogin(cpf,documento,senha);
    }

    if(!resultado){
        NextResponse.json(
            {
                mensagem: "Dados Invalidos.",
                status: 404
            }
        );
    }

    NextResponse.json({
        mensagem: "Login realizado com sucesso.",
        status: 200
    });
   
    
}