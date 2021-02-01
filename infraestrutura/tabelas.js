class Tabelas {

    init(conexao){
        this.conexao = conexao
    }

    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS `atendimentos` (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text);'
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Atendimentos criada com sucesso!')
            }
        })
    }
}

module.exports = new Tabelas