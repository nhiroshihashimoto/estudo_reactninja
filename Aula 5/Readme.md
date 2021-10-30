# Trabalhando com libs de terceiros no React

## Manipulação do DOM fora do React
> Use a propriedade ref para manipular o DOM fora do React

<input type='text' **ref={(node) => this.myInput = node}** />

Quando o componente é desmontado, o React irá limpar o `this.myInput`