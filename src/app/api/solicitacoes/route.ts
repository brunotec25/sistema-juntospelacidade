import { NextRequest, NextResponse } from "next/server"
import { consultarSolicitacoes } from "@/data/solicitacoesData";

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