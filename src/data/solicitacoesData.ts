import {conexao} from "@/lib/conexao";
import { Solicitacao } from "@/classes/Solicitacao";

export async function consultarSolicitacoes(descricao:string) {
    const termoBusca = `%${descricao}%`;
    const [resultado] = await conexao.query(
        "SELECT descricao, data_inicio, data_fim from solicitacoes WHERE descricao like ?",
        [termoBusca]
    );
    return resultado;
}


export async function listarSolicitacoes(){
    const [resultado] = await conexao.query(
        "Select descricao, data_inicio, data_fim FROM solicitacoes"
    );

    return resultado;
}
    
export async function buscarSolicitacoesPorId(id: number){
const [resultado]:any = await conexao.query(
    "SELECT  descricao, data_inicio, data_fim  from solicitacoes where id =?",
    [id]
);
return resultado [0];
}
   
export async function  cadastrarSolicitacoes(solicitacao: Solicitacao){
const [resultado]: any= await conexao.query(
    "INSERT INTO solicitacoes (descricao, data_inicio, data_fim, pessoas_id_pessoas, enderecos_id_Enderecos, tipo)  VALUES (?,?,?,?,?,?)",
    [
    solicitacao.descricao,
    solicitacao.data_inicio,
    solicitacao.data_fim,
    solicitacao. pessoas_id_pessoas,
    solicitacao.enderecos_id_Enderecos,
    solicitacao.tipo
    ]
);
return resultado.insertId;
}
 
export async function  editarSolicitacoes(id: number, solicitacao: Solicitacao) {
    const [resultado]: any = await conexao.query(
        "UPDATE solicitacoes SET descricao, data_inicio, data_fim where id=?",
    [
    solicitacao.descricao,
    solicitacao.data_inicio,
    solicitacao.data_fim
    ]
    );
    return resultado .affctedRows > 0;
}

export async function excluirSolicitacoes(id:number){
    const [resultado]: any =await conexao.query(
        "DELETE FROM solicitacoes where id=?",
        [id]
    );
    return resultado.affctedRows>0;
}
  


        
        

     

    


