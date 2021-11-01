Crie `package.json` com `{}`

# Jest
> Ferramenta de teste

## Exemplo
```
expect(1).toBe(1)
console.assert(1 === 1, '1 é igual a 1')
```

## Instalação do `jest-cli`:
```
npm install --save-dev jest-cli@21
```
Diretório de teste: `/__tests__/*`

Arquivos de teste: `nome.test.js` ou `nome.spec.js`

Adicionar executável do Jest no `package.json`:
```
"scripts":{
    "test": "jest --coverage",
    "test:watch": "npm test -- --watch"
},
```
> Parâmetro `--coverage` é para mostrar cobertura de código (porcentagem)

> Parâmetro `"test:watch": "npm test -- --watch"` utiliza o `test` com atualização automática.

## Limpar cache
> O Jest faz cache dos testes e o utiliza para otimização.
```
npm test -- --no-cache
```

# Chai
> Escrita laica para as asserções

## Exemplo
```
const expect = require('chai').expect
expect(sum).to.be.a('function')
```

## Instalação
```
npm i --save-dev chai
```

# Babel
> Usar ECMAScript 6 (2015)

## Exemplo
ECMAScript 5 (2009)
```
const map = require('./map').map
module.exports = map () =>{}
```
ECMAScript 6 (2015)
```
import map from './map'
export default map
```

## Instalação
```
npm install --save-dev babel-core@6 babel-jest@21 babel-preset-es2015 babel-preset-stage-0
```
Crie um arquivo na raíz chamado `.babelrc` com o código abaixo:
```
{
    "presets": ["es2015", "stage-0"]
}
```
> Obs: Se você estiver tendo algum erro relacionado ao "Handlebars", crie um arquivo chamado `jest.config.js` na raiz do seu projeto com o código:
```
module.exports = {
  coverageReporters: ['json', 'lcovonly', 'text', 'clover']
}
```