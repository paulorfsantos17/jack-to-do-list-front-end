# TO-DO-LIST JACK (Front-end)

##
  Este projeto foi feito para o processo seletivo de estágio da Jack.
  É um to-do-list que esta sendo feito como react nele contém  autentificação  via cookies,
  teste unitários no componentes e teste e2e nas paginas.

## Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca para construção de interfaces de usuário
- [react-cookie](https://www.npmjs.com/package/react-cookie) - Biblioteca para gerenciamento de cookies
- [Vitest](https://vitest.dev/) - Framework para testes unitários
- [Playwright](https://playwright.dev/) - Framework para testes end-to-end
- [Vite](https://vitejs.dev/) - Ferramenta de construção e desenvolvimento
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utilitário
- [Zod](https://github.com/colinhacks/zod) - Biblioteca de validação de esquemas
- [MSW](https://mswjs.io/) - Biblioteca para mock de APIs durante o desenvolvimento e testes

## Como rodar o Front-end
 
  1. Clone o repositório:
   ```
    git clone https://github.com/paulorfsantos17/jack-to-do-list-front-end.git
  ```
  2. Navegue até o diretório do projeto:
  ```
    cd jack-to-do-list-front-end
  ``` 

  3. cd jack-to-do-list-front-end
  ```
    pnpm install
  ```

  4. Antes de rodar a aplicação, configure as variáveis de ambiente do .env usando o .env.example como referência.

  5. Inicie o servidor de desenvolvimento:
  ```
    pnpm dev
  ```

  ## Explicação dos Scripts

  - **`dev`:**
  ```
    vite
  ```
  Inicia o servidor de desenvolvimento do Vite, que compila e serve a aplicação em modo de desenvolvimento. O Vite fornece recarga automática e uma experiência de desenvolvimento rápida.

  - **`build`:**
  ```
    tsc -b && vite build
  ```
  Compila o TypeScript (se estiver usando TypeScript) e, em seguida, executa o build do Vite para criar uma versão otimizada da aplicação para produção.

  - **`lint`:**
  ```
    eslint . --fix
  ```
  Executa o ESLint em todos os arquivos do projeto e corrige automaticamente os problemas encontrados, se possível. O ESLint ajuda a manter a qualidade e a consistência do código.


  - **`dev:test`:**
  ```
   vite --port 50789 --mode test
  ```
  Inicia o servidor de desenvolvimento do Vite em uma porta específica (50789) e no modo de teste. Isso permite testar a aplicação em um ambiente de desenvolvimento separado, sem interferir no ambiente de desenvolvimento principal. O MSW (Mock Service Worker) é usado para simular as respostas da API, permitindo que o Playwright realize testes end-to-end (e2e) sem a necessidade de um backend real. Também pode ser utilizado para testar a aplicação de forma isolada.

  - **`dev:preview`:**
  ```
   vite preview
  ```
    Inicia um servidor para visualizar a versão de produção da aplicação após o build. É útil para verificar como a aplicação se comporta antes do deploy final.

  ## Teste unitários como usar: 

  Para executar os testes unitários, utilize os seguintes scripts:

  - **`test`:**
      ```
        vitest
      ```
       Executa os testes unitários usando o Vitest. É uma ferramenta de teste para JavaScript e TypeScript.

  - **`test:watch`:**
      ```
        vitest --watch
      ```
       Executa os testes unitários em modo de observação, o que significa que os testes serão executados novamente automaticamente quando mudanças são detectadas no código.

  - **`test:coverage`:**
      ```
       vitest --coverage
      ```
      Executa os testes unitários e gera um relatório de cobertura de código, mostrando quais partes do código foram cobertas pelos testes.

      - **`dev:test`:**
      ```
       vite --port 50789 --mode test
      ```
      Inicia o servidor de desenvolvimento do Vite em uma porta específica (50789) e no modo de teste. Isso permite testar a aplicação em um ambiente de desenvolvimento separado, sem interferir no ambiente de desenvolvimento principal. O MSW (Mock Service Worker) é usado para simular as respostas da API, permitindo que o Playwright realize testes end-to-end (e2e) sem a necessidade de um backend real. Também pode ser utilizado para testar a aplicação de forma isolada.

  ## Test (e2e)

  Rodando teste unitário
  - **`test:e2e`:**
   ```
    exec playwright test
   ```
   Executa os testes end-to-end utilizando o Playwright. Esses testes verificam o comportamento da aplicação em um ambiente completo e simula a interação do usuário com a interface.
  - **`test:e2e:ui`:**
  ```
   exec playwright test --ui
  ```
  Executa os testes end-to-end com uma interface de usuário interativa. Isso é útil para visualizar e depurar os testes em tempo real, proporcionando uma visão mais detalhada da execução dos testes.


  ## Notas
  - Variáveis de Ambiente: Certifique-se de criar o arquivo .env com as variáveis necessárias, baseando-se no arquivo .env.example.
  - Testes: O projeto inclui testes unitários e testes end-to-end. Certifique-se de que todos os testes estão passando antes de fazer qualquer modificação significativa.
  - Os scripts test:e2e e test:e2e:ui executam automaticamente o script dev:test, que inicia o servidor de desenvolvimento do Vite em uma porta específica (50789) e no modo de teste. Isso é feito usando a configuração do Playwright definida no arquivo playwright.config.ts.