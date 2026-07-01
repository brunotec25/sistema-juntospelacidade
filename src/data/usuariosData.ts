import { conexao } from "@/lib/conexao";
import { Usuario } from "@/classes/Usuario";

export async function listarUsuario() {
    const [resultado] = await conexao.query(
        "SELECT * FROM usuarios",
    );
    return resultado;
}
export async function buscarUsuarioPorID(id: number) {
    const { resultado }: any = await conexao.query(
        "SELECT * FROM usuarios WHERE id = ?",
        [id]

    );
    return resultado[0];

}

export async function cadastrarUsuario(usuario: Usuario) {
    const [resultado]: any = await conexao.query(
        "INSERT INTO usuario (nome,email,senha,endereco,tipo_usuario)values(?,?,?,?)",
        [

            usuario.nome,
            usuario.email,
            usuario.endereco,
            usuario.senha
        ]

    );
    return resultado.insertId;

}
export async function editarUsuario (id:number, usuario : Usuario) {
    const [resultado]: any =await conexao.query(
        "UPDATE usuario SET nome = ? , email = ?,senha = ? ,endereco = ?,tipo_usuario = ? WHERE id = ?",
    [

         usuario.nome,
         usuario.email,
         usuario.endereco,
         usuario.senha,
         id
    ]
    
    );
    return resultado.affectedRows > 0;
}

export async function  excluirUsuario (id:number) {
    const [resultado] :any = await conexao.query(
        [id]
    );
    return resultado.affectedRows > 0 ;
}