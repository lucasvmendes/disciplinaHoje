## Aplicação

O projeto foi desenvolvido com o objetivo de aprendizado.
O site é capaz de cadastrar, buscar e deletar disciplinas no banco de dados, apresentando em tela apenas as correspondentes ao dia vigente, facilitando para o aluno saber quais matérias terá aula no dia.
#### Cadastro de Disciplinas
O site apresenta a possibilidade de cadastrar uma disciplina e o horário/dia da semana.
Utilizando o MongoDB, a disciplina é cadastrada no banco de dados a partir de um POST.
#### Visualização das Disciplinas do Dia
Na tela inicial o usuário consegue ver apenas as disicplinas que correspondem ao dia vigente.
As disciplinas são preenchidas na tela a partir de um GET.
#### Exclusão de Disciplinas
É possível excluir as disciplinas clicando na lata de lixo na tabela.
A disciplina é deletada do banco de dados a partir de um DELETE.

<img align="center" src="/views/DisciplinaHojeImagem.png"/>
