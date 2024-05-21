![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

# <h1 align="center" style="font-size: 3rem;"> &copy; Maximum! <p style="font-size: 1rem;"> Juntos com você até o fim. </p></h1>

## <p align="center" style="margin-top: 4rem;">Com qual propósito o Maximum foi criado?</p>

-   #### Buscando fixar conhecimentos nas respectivas tecnologias utilizadas para o seu desenvolvimento.
-   #### Aprimorar Softs Skills e conhecimentos como Clean Architecture, Clean Code, Code Design, TDD, GitFlow e CI/CD.
-   #### Facilitar a criação de hábitos.
-   #### Prover organização aos usuários.
-   #### Ajudar o usuário a não esquecer de realizar suas tarefas.
-   #### Tornar a evolução como ser humano algo mais "visual e interativo".
-   #### Facilitar os processos do dia-a-dia.

## <p align="center" style="margin-top: 5rem;">Quais tecnologias estão sendo usadas no desenvolvimento do Maximum?</p>

### Front-End

-   TypeScript
-   React
-   Redux
-   Redux Toolkit
-   Styled-Components
-   SASS (SCSS)
-   Firebase
-   Firebase Authentication

### Back-End

-   TypeScript
-   Node
-   NPM
-   Express
-   Firebase Admin
-   Firebase Cloud Firestore (Banco de Dados)
-   Joi
-   Dotenv

### Ferramentas

-   Git
-   GitHub
-   Vite
-   Eslint

## <p style="margin-top: 5rem;">Funcionalidades do App</p>

### Autenticação

-   Registrar uma conta ( SignUp / Register )
-   Entrar em uma conta ( SignIn / Login )
-   Alterar a senha ( Confirmação por E-mail )
-   Esqueci a senha ( Confirmação por E-mail )

### Gerenciamento

-   Criar uma tarefa
-   Completar tarefa
-   Editar tarefa
-   Excluir tarefa
-   Buscar tarefa específica ( Filtrar )

-   Marcar todas tarefas como concluídas em um clique
-   Marcar todas tarefas como NÃO concluídas em um clique

-   Escolher ordenar as tarefas em ordem de criação ou por categorias

-   Criar categoria
-   Editar categoria
-   Excluir categoria
-   Atribuir categoria a tarefa
-   Remover categoria da tarefa
-   Filtrar por categorias

## <p style="margin-top: 5rem;">Estrutura do Banco De Dados (Firebase Cloud Firestore)</p>

### Sequência Lógica (Resumo)

1.  Banco-De-Dados: Aonde ficarão todas as Listas do Maximum.
2.  Usuários: Aonde ficaram listados todos usuários.
3.  Usuário-X: Aonde ficarão todos os dados do usuário X.
4.  Tarefas: Aonde ficaram os dados de cada tarefa do usuário.
5.  Tarefa-X: Aonde ficam os dados da tarefa.
6.  Categorias: Aonde ficaram os dados de cada categoria do usuário.
7.  Categoria-X: Aonde ficam os dados da categoria.

### Na prática

```bash
____Usuários
    |
    |
    |______Usuário 'X'
    |      |
    |      |______Tarefas
    |      |      |
    |      |      |_____Tarefa-X
    |      |            |__Name: "Ir na academia"
    |      |            |__Description: "Você consegue! Disciplina!"
    |      |            |__Created_at: "09/05/24"
    |      |            |__Conclusion_at: "10/05/24"
    |      |            |__Checked: true
    |      |
    |      |
    |      |
    |      |_____Categorias
    |            |
    |            |______Categoria-X
    |                   |
    |                   |__Name: "Casa"
    |                   |__Color: "Green"
	|
    |
    |
    |______Usuário 'Y'
    |
    | ... to be continued ...

```

### 1. O que um usuário pode inserir em uma única tarefa?

#### A tarefa é composta por alguns atributos, sendo alguns deles opcionais, e outros atribuídos automaticamente. Conheça cada um deles abaixo.

-   Nome: O nome que o usuário atribuiu a tarefa.
-   Criado em: Informa quando a tarefa foi criada. Ajuda a manter uma coêrencia na sequência das tarefas. ( Atribuído automaticamente )

-   Categorias: Permite separar tarefas por categorias específicas. ( Opcional )
-   Descrição: Uma descrição detalhada sobre oque deve ser realizado na tarefa. ( Opcional )
-   Data prevista: Serve para manter uma responsabilidade em realizar a tarefa até a data definida. ( Opcional )
-   Marcar: Define a tarefa como concluída.

### 2. Como a tarefa fica dentro do Banco De Dados?

```bash
Tarefa X {

    Name: "Comprar um presente para a minha filha."
    Color: "Rosa"
    Description: "Preciso comprar uma boneca para ela urgentemente! Terça é seu aniversário!"
    Created_at: "05/05/24"
    Conclusion_at: "11/05/24"
    Value: "250R$"
    Checked: true
 }
```

## <p style="margin-top: 5rem;">Contribuídores</p>
