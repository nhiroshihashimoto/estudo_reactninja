# Uso da aplicação React
> Depois das importações dos módulos

## Conteúdo

- [Props](#props)
- [Atributos modificados HTML](#atributos-modificados-html)
- [Função Pura e Impura](#função-pura-e-impura)
    - [Funções Puras](#funções-puras)
    - [Funções Puras](#funções-impuras)

## Props
> Usado para enviar propriedades do componente pai para o filho. O modo de uso é parecido com o de parâmetros no Javascript

Envie uma propriedade para o filho conforme exibido abaixo:
```
<Title name='propriedade' />
```
Capture a propriedade no filho usando:
```
{this.props.name}
```

## Atributos modificados HTML
> Os argumentos **class** e **for** no JS são utilizados da própria linguagem e causam conflito com parêmetros do HTML.

Mudança de HTML para JSX:
```
<div className='container'>
    <label htmlFor='input'>Input</label>
    <input type='text id='input' />
</div>
```

# Função Pura e Impura
## Funções Puras
São funcões que manipulam/necessitam **somente dos dados inseridos** como parâmetro à ela, **retornando um valor preciso**.

## Funções Impuras
São funções que manipulam/necessitam de **variáveis externas** à sua função, ou são funções que possuem **retorno aleatório**.

# Key
As chaves ajudam o React a identificar quais itens sofreram alterações, foram adicionados ou removidos. As chaves devem ser atribuídas aos elementos dentro de um array para dar uma identidade estável aos elementos.

Exemplo:
```
{['blue', 'yellow', 'green'].map((e,index) => (
    <Square key={index} color={e} />
))}
```

# Adicionar eventos globais no Stardad
> O Lint Standard por padrão identifica o **alert** como uma ação de violação.

Insira o código abaixo depois de **"dependencies"** no arquivo `package.json` para correção desse problema.
```
"standard": {
    "globals": [
        "alert"
    ]
}
```