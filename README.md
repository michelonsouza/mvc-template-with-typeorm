### MVC Skeleton
#### Este projeto visa criar um esqueto MVC para NodeJS

Não é nada muito complexo, apenas para estudo e ajudar alguém caso necessário.

_Para mais informações de como utilizar `remote-containers` acesse: [remote-container-config](https://code.visualstudio.com/docs/remote/create-dev-container)_

Do mais espero ter ajudado alguém.

Lembrando que não está no melhor design pattern do mundo, mas ajuda em pequenos projetos.

#### Utilizando este repositório
Para iniciar o projeto, copie e cole na raiz do projeto o arquivo `.env.example`.

Renomeio para `.env`. Altere as variáveis de ambiente conforme necessitar.

Também existe um arquivo `.env` dentro da pasta `.devcontainer`, copie o conteúdo do `.env` da raiz do projeto para dentro deste arquivo, é necessáruio para o docker.

Altere, também, o arquivo `initdb.sql` que se encontra dentro da pasta `.devcontainer/scripts`.

o mesmo tem essa aparência:
```sql
CREATE DATABASE projectdb;

\c projectdb

DROP EXTENSION IF EXISTS "uuid-ossp";
CREATE EXTENSION "uuid-ossp";
```

Altera onde está escrito `projectdb` para o mesmo database que vc colocou nos arquivos `.env`.

Provávelmente o `VSCODE` deve pedir uma extensão para rodar os containers do node e, nesse caso, do postgres. Instale a extensão para `remote-containers` e, com o docker funcionando, deixe o mesmo baixar as imagens e executar os containers.

Caso ocorra um erro na primeira execução, aperte o botão `retry` na janela que vai aparecer. Funcionará normalmente.

#### Instalando dependências
Com o container rodando você não se entrará no bash de sua máquina, mas sim no do container node criado na inicialização.

Tendo isso em vista, execute em seu terminal integrado do vscode:

```bash
yarn
```

SIM, yarn. Essa instância do node já acompanha `yarn` nativamente, se preferir usar `npm`, fique a vontade.

#### Rodando as migrations
Antes de rodar as migrations que existem, execute o seguinte comando no terminal integrado do vscode:
```bash
yarn init:ormconfig
```

Esse comando irá criar o arquivo de configuração do `typeorm` baseado no ambiente sendo o padrão `development`

Agora execute o comando:
```bash
yarn typeorm migration:run && yarn seed:run
```

Para o banco de dados já terminaram as configurações.

Execute o comando:
```bash
yarn dev
```

Este comando executa a aplicação com `ts-node-dev` ja com watch e ignorando erros do typescript.

O eslint também está integrado, porém pode ser alterado a vontade.

Do mais eu acredito que, para quem tem uma familiaridade básica com MVC e Node não terá muitos problemas de uso.

_Espero ajudar alguém com esse repositório_.

_Muito Obrigado a todos_