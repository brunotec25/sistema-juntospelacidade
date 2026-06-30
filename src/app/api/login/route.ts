import { NextResponse } from "next/server";
import { Usuario } from "@/classes/Usuario";
import { validarLogin } from "@/data/loginData";

export async function POST(request:NextResponse) {
    const body = await request.json();

    const usuario = new Usuario(
        0,
        body.nome,
        body.email,
        body.senha,
        body.endereco
    );
    const erro = usuario.validar();
    if(erro) {
        return NextResponse.json(
            {erro: erro},
            {status:400}
        );
    }
}