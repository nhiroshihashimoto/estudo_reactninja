# Segunda aplicação React

## Conteúdo

- [Webpack](#webpack)
    - [Webpack](#webpack)
        - [Instalação Devesenvolvedor Local](#instalação-dev-local)
        - [Instalação Global](#instalação-global)
    - [Webpack Servidor](#webpack-servidor)
        - [Instalação Devesenvolvedor Local](#instalação-devesenvolvedor-local)
        - [Instalação Global](#instalação-servidor-global)
        - [Iniciar Servidor](#iniciar-servidor)
- [Modularização](#modularização)
- [React e ReactDOM](#react-e-reactdom)
    - [Instalação](#instalação)
    - [index.js](#index.js)
    - [app.js](#app.js)
    - [Primeira Aplicação](#primeira-aplicação)
- [Babel](#babel)
    - [Instalação das libs](#instalação-das-libs)
    - [Dependências](#dependências)
    - [Configuração com o Webpack](#configuração-com-o-webpack)
    - [JSX](#jsx)
        - [Instalação](#instalação)
        - [Uso](#uso)
- [React Hot Loader](#react-hot-loader)
    - [Instalação](#instalação)
    - [Importação no Webpack](#importação-no-webpack)
    - [Importação do Plugin](#importação-do-plugin)
    - [Importação no Babel](#importação-no-babel)
    - [Componente de Visualização](#componente-de-visualização)
        - [AppContainer](#appcontainer)
        - [Substituição de Módulo](#substituição-de-módulo)
        - [Refatoração](#refatoração)
- [npm start](#npm-start)
    - [Arquivo de Inicialização](#arquivo-de-inicialização)
    - [Importação](#importação)


# **Webpack**
> Empacotador de módulos estáticos para aplicações JavaScript modernas.

## Instalação Dev Local
Instale executando o código abaixo no Terminal:
```
npm install --save-dev webpack@1
```

## Instalação Global
Instale executando o código abaixo no Terminal:
```
npm install -g webpack@1
```

Crie o arquivo `webpack.config.js` com o código abaixo:
```
'user strict'

const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    }
}
```

# **Webpack Servidor**
> Webpack para uso no servidor

Crie o diretório `/src/` e dentro crie um arquivo `index.js` com o código abaixo:
```
console.log('webpack está funcionando')
```

## Instalação Devesenvolvedor Local
Instale executando o código abaixo no Terminal:

```
npm install --save-dev webpack-dev-server@1
```

> Ele irá gerar um arquivo `bundle.js` dentro de um novo diretório `/dist/`.

Crie um arquivo `index.html` padrão e importe o *bundle.js* usando o código abaixo dentro do *\<body>*:
```
<script src="dist/bundle.js">
```
## Instalação Servidor Global
Instale executando o código abaixo no Terminal:
```
npm install -g webpack-dev-server@1
```
Adicione **publicPath** no arquivo `webpack.config.js`
```
module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    }
}
```
 > Caso queira usar um path diferente para testes, mude o **publicPath** de `/dist/` para `/static/`  em `webpacj.config.js` e no `index.html`

## Módulo Source-map
> Utilizado para debug mais direto.

Adicione o código abaixo no arquivo `module.exports`
```
devtool: 'source-map',
```

Exemplo:
```
module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    }
}
```
> Caso ocorra algum erro, adicione essa linha após a instalação da lib JSX

## Iniciar Servidor
Para iniciar o servidor, execute o código abaixo no Terminal:
```
webpack-dev-server
```

# Modularização
> Ao decorrer das aplicações de grande porte, pode ficar confusa a organização do código. A modularização é utilizada para impedir esse problema.

Crie um arquivo chamado `app.js` dentro da pasta `/src/` e adicione o código abaixo para exportar a função `sum`.
```
'user strict'
function sum( val1, val2 ){
    return val1 + val2
}

module.exports = sum
```
No arquivo `index.js`, importe a função adicionando o código abaixo:
```
'user strict'
var sum = require('./app')

console.log( sum( 1, 2 ) )
```

# React e ReactDOM
> Biblioteca JavaScript com foco em criar interfaces de usuário em páginas web.

## Instalação
Instale as libs executando o código abaixo no Terminal:
```
npm install --save react@15.4 react-dom@15.4
```

## index.js
O arquivo **index.js** é o arquivo de início da aplicação do React

## app.js
O arquivo **app.js** é o arquivo que irá conter todos os componentes da aplicação.

## Primeira Aplicação

Criando a primeira aplicação em React.

Substitua o código do arquivo `app.js` para o código abaixo:
```
var React = require('react')

var Title = React.createClass({
    render: function () {
        return React.createElement('h1', null, 'Título')
    }
})

module.exports = Title
```

Substitua o código do arquivo `index.js` para o código abaixo:
```
var React = require('react')
var ReactDOM = require('react-dom')
var Title = require('./app')

ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)

console.log('webpack está funcionando!')
```

# Babel
> Babel é um transcompilador de JavaScript usado para converter o código ECMAScript 2015+ em uma versão compatível com versões anteriores de JavaScript.

## Instalação das libs
Instale as libs **Core, Loader, Preset-es2015 e Preset-Stage** executando o código abaixo no Terminal:
```
npm install --save-dev babel-core@6 babel-loader@6 babel-preset-es2015@6 babel-preset-stage-0@6
```

## Dependências
> Após a instalação das libs, você deverá importar as libs no Babel.

Crie um arquivo na raíz `.babelrc` com o código JSON abaixo:
```
{
    "presets": ["es2015","stage-0"]
}
```
Este arquivo informa ao Babel as dependências que ele deve utilizar.

## Configuração com o Webpack
> Para utilizar o Babel junto com o Webpack, devemos informar para o Webpack:
> - Os tipos de arquivos que o Babel irá ler (Regex)
> - Diretório dos arquivos ignorados
> - Diretório de transcompilação dos arquivos para o Webpack.
> - Loader que executará sua função (Babel)

No arquivo `webpack.config.js`, adicione o código abaixo dentro de `module.exports`
```
module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel'
    }]
}
```
# JSX
> Lib para fazer com que o Babel reconheça o JSX

## Instalação
Instale executando o código abaixo no Terminal:
```
npm install --save-dev babel-preset-react@6
```
Importe a lib atualizando o .babelrc como no código abaixo:
```
{
    "presets": ["es2015","stage-0","react"]
}
```
## Uso
> No arquivo `app.js`

De:
```
return React.createElement('h1', null, 'Título')
```

Para:
```
return <h1>Título</h1>
```

> Importando elemento no `index.js`

De:
```
React.createElement(Title)
```

Para:
```
<Title />
```

# React Hot Loader
> Lib para atualizar a árvore dos componentes do React, invés da aplicação toda.

## Instalação
Instale executando o código abaixo no Terminal:
```
npm install --save-dev react-hot-loader@3.0.0-beta.2
```
## Importação no Webpack
Adicione o código abaixo no arquivo `webpack.config.js`
```
entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
],
```
- `'react-hot-loader/patch'` -> **Dependência padrão**
- `'webpack-dev-server/client?http://localhost:3000'` -> **Execução só no client**
- `'webpack/hot/only-dev-server'` -> **Usar Hot Loader só quando o Dev-Server estiver executando**

## Importação do Plugin

Adicione a requisição do plugin no início do arquivo `webpack.config.js`
```
const webpack = require('webpack')
```

Adicione a entrada do **plugin** no arquivo `webpack.config.js` depois de `output`
```
plugins: [
    new webpack.HotModuleReplacementPlugin()
],
```

## Importação no Babel
Adicione a entrada abaixo no arquivo `.babelrc`
```
"plugins": ["react-hot-loader/babel"]
```

## Componente de Visualização
> Para o Hot Loader **verificar** alguma atualização automaticamente, é necessário utilizar a aplicação dentro do componente **\<AppContainer>**

Substitua o código de `app.js` para o abaixo:
```
'user strict'

import React from 'react'

const App = React.createClass({
    render: function () {
        return <div>Título</div>
    }
})

export default App
```

### AppContainer
Importe o componente **AppContainer** no arquivo `index.js` e insira o componente **\<App />** dentro do **\<AppContainer>** conforme o código abaixo:
```
'user strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
)
```
> O procedimento acima é somente para a verificação de alguma mudança dentro do componente **\<AppContainer>**.

### Substituição de Módulo
Para substituição, você deve usar o **module.hot.accept** após o **render()** conforme o código abaixo:
```
if(module.hot){
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.querySelector('[data-js="app"]')
        )
    })
}
```
> O **module.hot.accept** é utilizado para sobrescrever a aplicação quando o componente estiver pronto para atualização

### Refatoração
```
'user strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

const renderApp = (NextApp) =>{
    render(
        <AppContainer>
            <NextApp />
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    )
}

renderApp(App)

if(module.hot){
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default
        renderApp(NextApp)
    })
}

```

# npm start
> As instruções abaixo serve para criarmos um modo de execução do servidor pelo comando `npm start`

## Arquivo de Inicialização
Crie um arquivo chamado `server.js` e adicione o código abaixo para definirmos a lógica de inicialização:
```
'user strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath, 
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
}).listen(3000, (err) => {
    if(err){
        return console.log(err)
    }
    console.log('Listening on http://localhost:3000')
})
```

## Importação
Importe a inicialização no arquivo `package.json`
```
"scripts": {
    "start": "node server.js"
},
```

# Linter: Standard Loader
>  Ferramenta de análise estática de código. Ou seja, uma ferramenta que analisa código-fonte para acusar erros de programação, bugs, erros estilísticos, e construções suspeitas.

## Instalação
Instale executando o código abaixo no Terminal:
```
npm install --save-dev standard standard-loader@4
```
## Importação
Adicione como pre-loader dentro de **module** no arquivo `webpack.config.js` antes da execução do Babel
```
preLoaders: [{
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'standard'
}],
```

## Regras
O Standard Loader usa a lib **eslint** modificada para a verificação nos arquivos.

Para criar uma regra de remoção de 2 espaços para 4 e desativar indentação de 2 espaços para JSX, insira o código abaixo no arquivo **eslintrc.json** dentro de `../node_modules/standard`
```
"rules":{
    "indent": [2, 4],
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off"
}
```

# Webpack Validator
> Lib para validação das configurações do webpack

Instale executando o código abaixo no Terminal:
```
npm install --save-dev webpack-validator
```
Adicione requisição no arquivo `webpack.config.js`
```
const validate = require('webpack-validator')
```
Englobe o escopo com a função **validate()** importada

```
module.exports = validate( {} )
```