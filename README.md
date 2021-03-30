# News Reader
> Aplicativo para leitura de notícias. Desenvolvido com o objetivo de avaliação profissional.

<p align="center" target="_blank">
  <img src="https://img.shields.io/badge/React-17.0.1-purple?style=plastic&logo=React">
  <img src="https://img.shields.io/badge/React%20Native-0.64.0-blue?style=plastic&logo=React">
</p>
<p align="center" target="_blank">
  <img src="https://img.shields.io/badge/Javascript%20Tests-passed-%2331C453?style=plastic&logo=github">
  <img src="https://img.shields.io/badge/Android%20build-passed-%2331C453?style=plastic&logo=github">
  <img src="https://img.shields.io/badge/iOS%20build-passed-%2331C453?style=plastic&logo=github">
</p>

<p align="center" target="_blank">
:link:| &nbsp;<a href="#page_with_curl-Descrição" target="_blank">Descrição</a> &nbsp;  | &nbsp; <a href="#books-Bibliotecas">Bibliotecas</a> &nbsp; | &nbsp; <a href="#shell-ambiente-de-desenvolvimento-teste-e-uso">Ambiente de teste e uso</a> &nbsp; | &nbsp; <a href="#floppy_disk-Como-Instalar">Como instalar</a> &nbsp; | &nbsp; <a href=":camera: Apresentação">Apresentação</a> &nbsp; | &nbsp; <a href="https://github.com/SDamasceno-Dev/newsreader/blob/main/LICENSE.md">Licença</a> &nbsp; |
</p>

# :page_with_curl: Descrição
O app **News Reader** tem como objetivo apresentar uma proposta de aplicativo que com as seguintes funcionalidades: 
- Cadastro;
- Leitura;
- Edição;
- Exclusão de notícias.

Essas notícias são armazenadas em memória do dispositivo celular, sem qualquer integração com API's externas.


# :books: Bibliotecas
Abaixo estão listadas as dependências, com a sua respectiva versão, utilizadas para o desenvolvimento desse aplicativo:

<details><summary>Dependências</summary>
  <ul>
    <li><a href="https://www.npmjs.com/package/@react-native-community/masked-view">@react-native-community/masked-view</a> [^0.1.10]</li>
    <li><a href="https://www.npmjs.com/package/@react-navigation/bottom-tabs">@react-navigation/bottom-tabs</a> [^5.11.8]</li>
    <li><a href="https://www.npmjs.com/package/@react-navigation/native">@react-navigation/native</a> [^5.9.3]</li>
    <li><a href="https://www.npmjs.com/package/@react-navigation/stack">@react-navigation/stack</a> [^5.14.3]</li>
    <li><a href="https://www.npmjs.com/package/moment">moment</a> [^2.29.1]</li>
    <li><a href="https://www.npmjs.com/package/prop-types">prop-types</a> [^15.7.2]</li>
    <li><a href="https://www.npmjs.com/package/react">react</a> [17.0.1]</li>
    <li><a href="https://www.npmjs.com/package/react-native">react-native</a> [0.64.0]</li>
    <li><a href="https://www.npmjs.com/package/react-native-gesture-handler">react-native-gesture-handler</a> [^1.10.3]</li>
    <li><a href="https://www.npmjs.com/package/react-native-get-random-values">react-native-get-random-values</a> [^1.6.0]</li>
    <li><a href="https://www.npmjs.com/package/react-native-reanimated">react-native-reanimated</a> [^2.0.1]</li>
    <li><a href="https://www.npmjs.com/package/react-native-safe-area-context">react-native-safe-area-context</a> [^3.2.0]</li>
    <li><a href="https://www.npmjs.com/package/react-native-screens">react-native-screens</a> [^2.18.1]</li>
    <li><a href="https://www.npmjs.com/package/react-native-vector-icons">react-native-vector-icons</a> [^8.1.0]</li>
    <li><a href="https://www.npmjs.com/package/styled-components">styled-components</a> [^5.2.1]</li>
    <li><a href="https://www.npmjs.com/package/uuid">uuid</a> [^8.3.2]</li>
  </ul>
</details>

<details><summary>Dependências de desenvolvimento</summary>
  <ul>
  <li><a href="https://www.npmjs.com/package/@babel/core">@babel/core"</a> [^7.12.9]</li>
<li><a href="https://www.npmjs.com/package/@babel/runtime">@babel/runtime"</a> [^7.12.5]</li>
<li><a href="https://www.npmjs.com/package/@react-native-community/eslint-config">@react-native-community/eslint-config</a> [^2.0.0]</li>
<li><a href="https://www.npmjs.com/package/@types/styled-components">@types/styled-components</a> [5.1.6]</li>
<li><a href="https://www.npmjs.com/package/babel-jest">babel-jest</a> [^26.6.3]</li>
<li><a href="https://www.npmjs.com/package/eslint">eslint</a> [7.14.0]</li>
<li><a href="https://www.npmjs.com/package/eslint-config-airbnb">eslint-config-airbnb</a> [^18.2.1]</li>
<li><a href="https://www.npmjs.com/package/eslint-config-prettier">eslint-config-prettier</a> [^8.1.0]</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-import">eslint-plugin-import</a> [^2.22.1]</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-jsx-a11y">eslint-plugin-jsx-a11y</a> [^6.4.1]</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-prettier">eslint-plugin-prettier</a> [^3.3.1]</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-react">eslint-plugin-react</a> [^7.21.5]</li>
<li><a href="https://www.npmjs.com/package/eslint-plugin-react-hooks">eslint-plugin-react-hooks</a> [^4]</li>
<li><a href="https://www.npmjs.com/package/jest">jest</a> [^26.6.3]</li>
<li><a href="https://www.npmjs.com/package/metro-react-native-babel-preset">metro-react-native-babel-preset</a> [^0.64.0]</li>
<li><a href="https://www.npmjs.com/package/prettier">prettier</a> [^2.2.1]</li>
<li><a href="https://www.npmjs.com/package/react-test-renderer">react-test-renderer</a> [17.0.1]</li>
  </ul>
</details>

# :shell: Ambiente de desenvolvimento, teste e uso

Este módulo foi desenvolvido utilizando

```bash
Visual Studio Code
Version: 1.54.3
```

e testado utilizando o seguinte Sistema Operacional para Mobile e o seguinte dispositivo

```bash
Sistema Operacional: Android
Version: 7.0
Dispositivo: Galaxy Note5

Sistema Operacional: Android
Version: 10.0
Dispositivo: Emulador Android Studio

Sistema Operacional: iOS
Version: 12.0
Dispositivo: Emulador XCode
```

# :floppy_disk: Como Instalar

Para o bom funcionamento deste módulo, após a clonagem do Github, são necessárias algumas ações para a adequação da estrutura.

Antes de listar os passos necessários para o preparo do ambiente, é necessário que o computador onde irá rodar este módulo, já tenha instalado e devidamente configurado o [Git](https://git-scm.com/), [Node.JS >=v14.15.1 LTS](https://nodejs.org/en/) e o [Yarn >=v1.22.10](https://yarnpkg.com/). Todos esses pacotes podem ser instalados utilizando um **Gerenciador de pacotes** compatível com o seu sistema operacional ([Homebrew](https://brew.sh/) para macOS, [Chocolatey](https://chocolatey.org/) para Windows).

Com essa estrutura pronta, pode-se iniciar o preparo do ambiente para se rodar o aplicativo **News Reader**.

**1º Clonar o repositório**

Para se efetuar a clonagem desse repositório, de dentro da pasta  criada para o aplicativo News Reader, abra uma sessão no terminal do computador, de dentro dessa pasta, e execute o seguinte comando:

```bash
# Clona a pasta Mobile do Sistema Fastfeet
$ git clone https://github.com/SDamasceno-Dev/newsreader.git
```

**2º Acessar a pasta**

Acesse a pasta clonada

```bash
# Acessa a pasta clonada
$ cd newsreader
```

**3º Instalar as dependências**

Execute o Yarn para que todas as dependências sejam corretamente instaladas

```bash
# Instala todas as dependências necessárias
$ yarn
```

**4º Compilação do app**

Após a instalação das dependências, será necessária fazer a compilação e instalação do App.

Este App foi testado por meio de um dispositivo físico, conectado via cabo USB ao computador que foi utilizado para desenvolver e compilar o arquivo App, também com o uso de emuladores, tanto no Sistema Operacional Android quanto no Sistema Operacional iOS.

Dessa maneira, o procedimento para compilação e instalação do App ocorrerá com os seguintes passos:

***Android - Dispositivo físico***

* Verifique se o dispositivo a ter o App instalado está com o modo de **Depuração USB** habilitado. Para se verificar isso, você pode seguir os passos descritos [aqui](https://react-native.rocketseat.dev/usb/android) ou pesquisar na WEB o procedimento para a habilitação desse modo para o seu aparelho;
* Após o modo de **Depuração USB** habilitado, conecte o dispositivo ao computador onde será compilado o App;
* Verifique se o computador reconheceu o dispositivo. Para verificar isso execute o seguinte comando no terminal do computador o qual o celular está conectado
  ```bash
  adb devices
  ```
  Se tudo estiver ok, você visualizará um resultado parecido com esse

  ```bash
  List of devices attached
  85b6425628323057	device # Dispositivo físico
  ```

  Se estiver escrito device ao lado do ID do dispositivo significa que ele está pronto para rodar a aplicação. Nesse ponto basta executar o comando abaixo e aguardar a aplicação ser instalada no seu dispositivo.

  ```bash
  yarn android --deviceId=85b6425628323057
  ```

  Nesse momento será realizada a compilação e a instalação do App do Sistema Fastfeet para o dispositivo conectado no computador.

  ***Emuladores (iOS / Android) ***

  Para ambos os sistemas operacionais o procedimento é bem semelhante. Uma vez que o emulador já esteja em execução, basta executar o seguinte comando que o app será compilado e já será executado no emulador que esteiver ativo:

  *Android*
  ```bash
  yarn android
  ```

  *iOS*
  ```bash
  yarn ios
  ```

  # :camera: Apresentação
  
  Seguem abaixo algumas telas demonstrando a aparência do aplicativo.

  ![SignIn](https://user-images.githubusercontent.com/58818002/113037047-5e9fef00-916b-11eb-8ae5-fdd674e1f521.png)

  ![ListNews](https://user-images.githubusercontent.com/58818002/113037100-6bbcde00-916b-11eb-84a5-0c8b2cb03421.png)

  ![ReadNews](https://user-images.githubusercontent.com/58818002/113037147-78413680-916b-11eb-8c1d-9668229d8fc7.png)

  ![AddEditNews](https://user-images.githubusercontent.com/58818002/113037196-868f5280-916b-11eb-806e-f6aa304f9ce4.png)

  ---
Elaborado, criado e editado por **Sandro de Oliveira Damasceno** :space_invader:   [github!](https://github.com/SDamasceno-Dev) :octocat:
