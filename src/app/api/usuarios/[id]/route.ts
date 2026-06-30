import {NextResponse} from "next/server";
import { Usuario } from "@/classes/Usuario";
import { buscarUsuarioPorID,editarUsuario,excluirUsuario, } from "@/data/usuariosData";

type Params = {
    params: Promise<{
        id: string;
    }>;
};
export async function GET(request: Request, { params }: Params) {
    const { id } = await params;
    const idUsuario = Number(id);


    if (isNaN(idUsuario)) {
        return NextResponse.json(
            { erro: "ID inválido" },
            { status: 400 }
        );
    };

    const usuario = await buscarUsuarioPorID(idUsuario);
    if (!Usuario) {
        return NextResponse.json(
            { erro: " Usuario não encontrada" },
            { status: 404 }
        );
    };
    return NextResponse.json(
        Usuario,
        { status: 200 }
    );

}

export async function PUT(request: Request, { params }: Params) {
    const { id } = await params;
    const idUsuario = Number(id);
    const body = await request.json();

    if (isNaN(idUsuario)) {
        return NextResponse.json(
            { erro: "ID inválido" },
            { status: 400 }
        );
    };
    const usuario = new Usuario(
        idUsuario,
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
    const resultado = await editarUsuario(idUsuario,usuario);
    if (!resultado) {
        return NextResponse.json(
            { erro: "Ferramenta não encontrada. " },
            { status: 404 }
        );
    }
    return NextResponse.json(
        { Mensagem: "Ferramenta atualizada com sucesso" },
        { status: 200 }
    );


}

export async function DELETE(request: Request, { params }: Params) {
    const { id } = await params;
    const idUsuario = Number(id);


    if (isNaN(idUsuario)) {
        return NextResponse.json(
            { erro: "ID inválido" },
            { status: 400 }
        );
    };

const resultado = await excluirUsuario(idUsuario);

if (!resultado) {
        return NextResponse.json(
            { erro: "Usuario não encontrada. " },
            { status: 404 }
        );
    }
    return NextResponse.json(
        { Mensagem: "Usuario excluida com sucesso" },
        { status: 200 }
    );

}



