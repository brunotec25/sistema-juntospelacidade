import {conexao} from "@/lib/conexao";
import { Usuario } from "@/classes/Usuario";

export async function listarUsuario(){
    const [resultado] = await conexao.query(
        "Select id, nome, email, senha  FROM usuario"
    );

    return resultado;
}
    
export async function buscarUsuarioPorId(id: number){
const [resultado]:any =await conexao.query(
    "SELEC id, nome, email, senha  from usuario where id =?",
    [id]
);
return resultado [0];
}
   
export async function  cadastrarUsuario(usuario:Usuario){
const [resultado]: any= await conexao.query(
    "INSERT INTO usuario (nome , email ,senha ,endereco)  VALUES (?,?,?,?)",
    [
    usuario.nome,
    usuario.email,
    usuario.senha,
    usuario.endereco
    ]
);


return resultado .insertId;
}
 
export async function  editarUsuario(id: number, usuario:Usuario) {
    const [resultado]: any = await conexao.query(
        "UPDATE usuario SET nome =?, email =?, senha=?, endereco=? where id=?",
    [
        usuario.nome,
        usuario.email,
        usuario.senha,
        usuario.endereco
    ]
    );


    return resultado .affctedRows >0;
}

export async function excluirUsuario(id:number){
    const [resultado]: any =await conexao.query(
        "DELETE FROM usuario where id=?",
        [id]
    );
    return resultado.affctedRows>0;
}
  


        
        

     

    


