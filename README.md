# Inicialização do Projeto

## Setup do ambiente local com Docker

Execute o comando `docker run --publish 80:80 --publish 22:22 --hostname localhost wlsf82/gitlab-ce` e aguarde até o ambiente inicializar (isso pode levar alguns minutos), e então acesse a URL http://localhost/ para definir a senha o usuário `root`.

### Criando um Access Token

1. Faça login com o usuário `root` com a senha definida na seção anterior
2. Clique no avatar do usuário no canto superior direito da tela, clique no link _Settings_, e então clique o menu lateral esquerdo na opção _Access Tokens_
3. No campo nome, digite o valor `curso-cypress-intermediario`, na seção _Scopes_ marque a opção 'api', e então clique no botão 'Create personal access token'

> Uma mensagem de que o token foi criado com sucesso deve ser exibida, além do token propriamente dito. Copie o token clicando no botão à direita do campo e guarde-o para utilizar na aula 2.

### Adicionando uma chave SSH

1. No terminal, digite o seguinte comando e pressione ENTER `ssh-keygen -t ed25519 -C "root@example.com"`
2. Será solicitado um caminho para salvar a chave. Pressione ENTER para aceitar o caminho padrão
3. Será solicitada uma senha. Pressione ENTER para que a senha não seja necessária
4. Será solicitado que repita a senha. Pressione ENTER novamente para que a senha não seja necessária
5. No terminal, digite o seguinte comando e pressione ENTER para copiar a chave pública recém criada para a área de transferência `pbcopy < ~/.ssh/id_ed25519.pub`
6. Logado na aplicação com o usuário `root`, clique no avatar do usuário no canto superior direito da tela, clique no link _Settings_, e então clique no menu lateral esquerdo na opção _SSH Keys_
7. Cole sua chave SSH pública no campo key. O campo Title deve ser automaticamente preenchido
8. Por fim, clique no botão Add key

> Você também encontrará instruções sobre como gerar a chave SSH em sistema operacional Windows na própria aplicação em teste a partir da seguinte URL http://localhost/help/ssh/README#generating-a-new-ssh-key-pair (**instruções em Inglês**).

## Setup do projeto de testes com Cypress

### Clonando o projeto

1. Acesse a URL https://github.com/douglaslang/curso-cypress-intermediario/tree/solucao-douglas-lang
2. Clique no botão 'Code'
3. Clique no botão 'Clone'
4. Escolha uma das opções (_Clone with SSH_ ou _Clone with HTTPS_) e então clique no botão _Copy URL_ ao lado do campo da opção escolhida
5. No terminal, no diretório onde você armazena seus projetos de software, digite `git clone [URL copiada no passo anteior] e pressione ENTER
6. Por fim, acesso o diretório do projeto recém clonado (`cd curso-cypress-intermediario/`)

### Inicializando o NPM

No terminal, dentro do diretório `curso-cypress-intermediario/`, execute o comando `npm init -y` (este comando irá criar o arquivo `package.json` na raiz do projeto)

### Inicializando o arquivo .gitignore

No mesmo diretório, crie um arquivo chamado `.gitignore`, com o seguinte conteúdo:

```.gitignore
.DS_Store
cypress.env.json
cypress/screenshots/
cypress/videos/
node_modules/
temp/
```

### Criando o diretório `temp/`

Na raiz do projeto, crie um diretório chamado `temp/`. Este diretório será utilizado posteriormente para o teste de clone de projeto.

### Instalando o Cypress

No terminal, na raiz do projeto, execute o comando `npm i cypress@9.7.0 -D` (este comando irá instalar o Cypress como dependência de desenvolvimento, além de criar o arquivo `package-lock.json` e o diretório `node_modules/`)

### Instalando o Faker

No terminal, na raiz do projeto, execute o comando `npm i @faker-js/faker -D` (este comando irá instalar o Faker como dependência de desenvolvimento.

### Instalando o Uuid

No terminal, na raiz do projeto, execute o comando `npm i uuid -D` (este comando irá instalar o Uuid como dependência de desenvolvimento.

### Inicializando o Cypress

No terminal, na raiz do projeto, execute o comando `npx cypress open` (este comando irá abrir o Cypress em modo interativo e irá criar a estrutura inicial para os testes automatizados)

#### Configurando o projeto de testes automatizados

1. Feche a aplicação Electron do Cypress
2. Abra o arquivo `cypress.json` criado na raiz do projeto e altere seus conteúdo pelo seguinte:

```json
{
    "baseUrl": "http://localhost/"
}
```

3. Ainda na raiz do projeto, crie um arquivo chamado `cypress.env.json` com os seguintes dados:

```json
{
    "user_name": "root",
    "user_password": "password-do-usuario-root-definido-anteriormente",
    "gitlab_access_token": "access-token-criado-anteriormente"
}
```