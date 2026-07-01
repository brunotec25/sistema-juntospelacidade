import { NextRequest, NextResponse } from "next/server";
import { Solicitacao } from "@/classes/Solicitacao";
import {buscarSolicitacoesPorId,editarSolicitacoes,excluirSolicitacoes}from "@/data/solicitacoesData";

type Params = {
    params: Promise<{
        id: string;
    }>;
}

export async function GET (request : Request, {params} : Params){
const {id} = await params;
const idSolicitacoes = Number (id);

if (isNaN(idSolicitacoes)) {
        return NextResponse.json(
            {erro:"ID inválido"},
            {status: 400}
        );
    };

    const solicitacoes = await buscarSolicitacoesPorId(idSolicitacoes);
    if(!solicitacoes) {
      return NextResponse.json(
        {erro: "Solicitação não encontrada"},
        {status: 404 }
      );
    };
    return NextResponse.json(
        solicitacoes,
        {status:200}
    );
}
export async function PUT (request: Request ,{params}:Params) {
    const {id} = await params;
    const idSolicitacoes = Number (id);
    const body = await request.json();

    if(isNaN(idSolicitacoes)){
        return NextResponse.json(
            {erro: "ID inválido."},
            {status: 400}

        );
    };

     const solicitacoes = new Solicitacao(
        0,
        body.Solicitacao_id,
        body.data_inicio,
        body.data_fim,
        Number(body.pessoas_id_pessoas),
        Number(body.enderecos_id_Enderecos),
        body.tipo
    );

    const erro = solicitacoes.validar();
    
    if(erro){
        return NextResponse.json(
            {erro: erro},
            {status: 400}
        );
    }
    const resultado = await editarSolicitacoes(idSolicitacoes,solicitacoes);
    if (!resultado) {
        return NextResponse.json(
            { erro: "Solicitações não encontrada. " },
            { status: 404 }
        );
    }
    return NextResponse.json(
        { Mensagem: "Solicitações atualizada com sucesso" },
        { status: 200 }
    );
}

export async function DELETE (request : Request, {params}: Params) {
    const {id} = await params;
    const idSolicitacoes = Number(id);

    if(isNaN(idSolicitacoes)){
        return NextResponse.json (
            {erro: "ID inválido"},
            {status:400}
        );
    };
    
    const resultado = await excluirSolicitacoes(idSolicitacoes);
    if (!resultado){
        return NextResponse.json(
            {erro: "Solicitação não encontrado."},
            {status: 404}
        );
    }

    return NextResponse.json(
        {erro: " Solicitação excluida com sucesso"},
        {status: 200}
    );
}