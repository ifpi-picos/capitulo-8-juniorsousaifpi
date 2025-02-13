// userDatabase.js

// Banco de dados de usuários (lista)
const usuarios = [];

// Função para adicionar um novo usuário
function adicionarUsuario(nome, email, senha) {
  // Verificando se o email já existe no banco de dados
  const usuarioExistente = usuarios.find(usuario => usuario.email === email);
  if (usuarioExistente) {
    return 'Erro: Usuário com esse email já existe.';
  }

  // Adicionando o novo usuário (armazenando nome, email e senha)
  const novoUsuario = { nome, email, senha };
  usuarios.push(novoUsuario);
  return 'Usuário adicionado com sucesso!';
}

// Função para remover um usuário pelo email
function removerUsuario(email) {
  // Verificando se o usuário existe
  const indice = usuarios.findIndex(usuario => usuario.email === email);
  if (indice === -1) {
    return 'Erro: Usuário não encontrado.';
  }

  // Removendo o usuário
  usuarios.splice(indice, 1);
  return 'Usuário removido com sucesso!';
}

// Função para atualizar as informações de um usuário
function atualizarUsuario(email, novoNome, novaSenha) {
  // Procurando o usuário pelo email
  const usuario = usuarios.find(usuario => usuario.email === email);
  if (!usuario) {
    return 'Erro: Usuário não encontrado.';
  }

  // Atualizando as informações do usuário
  if (novoNome) usuario.nome = novoNome;
  if (novaSenha) usuario.senha = novaSenha;

  return 'Usuário atualizado com sucesso!';
}

// Função para buscar um usuário pelo email (apenas para visualização)
function buscarUsuario(email) {
  const usuario = usuarios.find(usuario => usuario.email === email);
  if (!usuario) {
    return 'Erro: Usuário não encontrado.';
  }
  // Retornando o nome e o email (não expomos a senha)
  return { nome: usuario.nome, email: usuario.email };
}

// Função para listar todos os usuários (sem expor senhas)
function listarUsuarios() {
  return usuarios.map(usuario => ({ nome: usuario.nome, email: usuario.email }));
}

// Exportando as funções públicas
module.exports = {
  adicionarUsuario,
  removerUsuario,
  atualizarUsuario,
  buscarUsuario,
  listarUsuarios
};
// app.js

// Importando o módulo do banco de dados de usuários
const userDB = require('./userDatabase');

// Adicionando usuários
console.log(userDB.adicionarUsuario('João Silva', 'joao@exemplo.com', '123456')); // Usuário adicionado com sucesso!
console.log(userDB.adicionarUsuario('Maria Oliveira', 'maria@exemplo.com', '654321')); // Usuário adicionado com sucesso!
console.log(userDB.adicionarUsuario('João Silva', 'joao@exemplo.com', '123456')); // Erro: Usuário com esse email já existe.

// Listando todos os usuários (sem senhas)
console.log('Lista de usuários:', userDB.listarUsuarios());

// Atualizando o usuário
console.log(userDB.atualizarUsuario('joao@exemplo.com', 'João S. Silva', 'newpassword123'));

// Buscando um usuário pelo email (sem senha)
console.log('Busca por João Silva:', userDB.buscarUsuario('joao@exemplo.com'));

// Removendo um usuário
console.log(userDB.removerUsuario('maria@exemplo.com'));

// Tentando buscar o usuário removido
console.log(userDB.buscarUsuario('maria@exemplo.com')); // Erro: Usuário não encontrado.
