import { NextRequest, NextResponse } from "next/server"
import { consultarSolicitacoes, cadastrarSolicitacoes } from "@/data/solicitacoesData";
import { Solicitacao } from "@/classes/Solicitacao";

export async function GET(request:NextRequest) {
    const descricao = request.nextUrl.searchParams.get("descricao");

    if(!descricao) {
        return NextResponse.json(
            {mensagem: "O parametro descricao é obrigatorio na Url."},
            {status: 400}
        );
    }

const solicitacao = await consultarSolicitacoes(descricao);
return NextResponse.json(solicitacao, {status:200});
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