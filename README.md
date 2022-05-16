# study_count_server

## Servidor da Aplicação Study Count

Repositório do Frontend : https://github.com/Vialc/nlw-return-rocketseat


## Disclaimer:

Esse projeto é uma extensão do NLW da Rocketseat. Durante o evento, desenvolvemos um widget de feedbacks nomeado como Feedget. 
Ao final do evento, a aplicação backend era capaz de:

- receber até 3 tipos de feedbacks diferentes;
- tirar um print da tela do usuário e enviar para o servidor;
- Assim que o feedback fosse submetido, disparar um e-mail para um administrador.

Esse projeto abordou temas como princípio de Inversão de dependências do Solid e Testes unitários com jest

Ao final do evento foi proposto que espandíssemos a aplicação, adicionando novas funcionalidades, tanto no backend quanto no frontend.

# Milha Extra NLW - Implementações realizadas:

Com o objetivo de explorar o máximo possível os temas abordados eu decidi, a partir do Feedget, criar uma plataforma de gerenciamento de estudos.

## O Study Count.

As funcionalidades adicionadas foram:

- cadastro de usuários para acesso ao sistema;
- Possibilidade de cadastrar até 12 matérias por usuário.
- Possibilidade de armazenar o tempo registrado pelo usuário.

## Para realizar essas novas funcionalidades, foi desenvolvida a seguinte estrutura:

- 4 tabelas relacionais para comportar a regra de negócio sendo elas: user, student, matter, count
- relacionamento 1-1 entre user e student
- relacionamento 1-N entre student e matter e student e count
- relacionamento N-N entre matter e count

A adição das novas entidades manteve o princípio de inversão de depêndências aplicado.

Todas as Querys que alimentam o sistema são feitas através da CLI do Prisma, inclusive nested querys para em uma única requisição armazenar dados em mais de uma tabela, evitando perda de performance