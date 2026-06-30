import { NextResponse } from "next/server";
import { validarLogin } from "@/data/loginData";

export async function POST(request:NextResponse) {
    const body = await request.json();

    const login = body.login;
    const senha = body.senha;

    const resultado = await validarLogin(login,senha);

    if(!resultado){
        NextResponse.json(
            {
                mensagem: "Dados Invalidos.",
                status: 401
            }
        );
    }

    NextResponse.json({
        mensagem: "Login realizado com sucesso.",
        status: 200
    });
   
    
}