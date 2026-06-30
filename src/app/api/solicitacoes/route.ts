import { NextRequest, NextResponse } from "next/server";
import { Solicitacao } from "@/classes/Solicitacao";
import {listarSolicitacoes,cadastrarSolicitacoes} from "@/data/solicitacoesData";

export async function GET () {
    const solicitacoes = await listarSolicitacoes();
    return NextRequest.json (solicitacoes, {status:200});
    
}

export async function POST (request : NextRequest) {
    const body = await request.json();

    const solicitacoes = new Solicitacao(
        0,
        body.Solicitacao_id,
        body.data_inicio,
        body.data_fim,

    );
    const erro = solicitacoes.validar();

    if(erro) {
        return NextResponse.json(
            {erro: erro},
            {status: 400}
        );
    }

    const idNovaSolicitacao = await cadastrarSolicitacoes(solicitacoes);
    return NextResponse.json(
        {
            mensagem : "Solicitação cadastrada com sucesso.",
            id: idNovaSolicitacao
        },
        {status: 201}
    )
    
}