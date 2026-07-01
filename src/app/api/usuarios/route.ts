import { NextRequest, NextResponse } from "next/server";
import { Usuario } from "@/classes/Usuario";
import { cadastrarUsuario, listarUsuario } from "@/data/usuariosData";


export async function GET() {
    const usuarios = await listarUsuario();
    return NextResponse.json(usuarios,
        {
            status: 200
        }
    );

}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const usuario = new Usuario(
        0,
        body.nome,
        body.email,
        body.endereco,
        body.senha,
    );
    const erro = usuario.validar();

    if (erro) {
        return NextResponse.json(
            { erro: erro },
            { status: 400 }
        );
    }

    const idNovoUsuario = await cadastrarUsuario(usuario);
    return NextResponse.json(
        {
            mensagem: "Usuario cadastrado com sucesso.",
            id:idNovoUsuario
        },

        {status:201}

    );
    
}