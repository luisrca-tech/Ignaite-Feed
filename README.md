# React + TypeScript + Vite

## Fundamento Do React JS 

O react segue um padrão de SPA - Single Page Aplication.
SPA & SSR - são rendering patterns (padrões de renderização).

A principal diferença entre SSR e SPA, é que: Quando escolhemos usar o conceito
mais antigo de renderização, no caso SSR, o backend fica responsavel por mandar
todo nosso contéudo HTML / CSS / JS para o meu browser, tornando assim uma rende
rização mais lenta...
  Já no modelo de SPA, temos um conceito mais atual e que ganhou potência da gra
nde maioria das aplicações... Nela, nosso backend fica responsavel apenas por re
tornar os dados armazenados no meu banco de dados, em formato de JSON,
e o react, fica responsavel por enviar todo o contéudo para o nosso browser.

### JSON 

Json é um modo que temos de conversar, interagindo o back com o front, ou vice-versa.
Json é muito utilizado, e ele consegue ser interpretado em qualquer lugar...

#### Bundlers and compillers
  Começando por compillers, compillers nada mais são que compiladores de código,
ele é responsavel por converter nosso código de um formato para outro... basica
mente, ele atualiza uma sintaxe que não é interpretada pelo browser, em uma sintaxe
que o browser entenda...

  Já em bundlers, ele é responsavel por entender, importar, e exportar o nosso
arquivo, para um arquivo de bundle, esses arquivos são melhores interpretados
pelo navegador, facilitando a conversão, não precisando estar todos declarados,
ou em alguma tag <Script>.
_____

## vite

  O vite utiliza os ECMA script modules nativos, não sendo necessario bundlers,
e ele mesmo compila os códigos, não precisando de compillers... Por isso usamos.
_____

### Conceitos de Propriedades

  Basicamente o conceito de propriedades, são atributos que damos para nossas 
variavéis, onde conseguimos alterar esses atributos.
  No react, podemos fazer isso a nivel de componentes, isso faz com que, no mesmo
componente como temos de exemplo POST.TSX, ele se repete, porem, com propriedades
diferentes, isso torna nosso código menos repetitivo, e mais performatico, para
fazer isso basta apenas declararmos quais as propriedades eu recebo naquele com
ponente, e dentro do meu componente eu consigo acessa-las por meio de props, ou
uma forma mais comum, por meio de desestruturaçãoo de props.
_____

## Desestruturação de props
  Nada mais é que, ao resgatar minhas props, que eu declarei no meu componente,
eu desestruturar, separar cada propriedade em um objeto, dessa forma eu consigo
acessar de maneira resumida, sem utilizar props. em tudo.
_____

``` js
### Passando minhas props
<Post Author="" content=""/>

  ### Resgatando e desestruturando minhas props em objetos...
export function Post({Author, content}){
  return (
    <div> 
    ### Usando minhas props
      <strong>{author}</strong>
      <p>{content}</p>
    <div/>
  );
}

```

### Programação imperativa x Programação declarativa

  Na programação imperativa, nos dizemos pro nosso código oq deve ser feito, todo
o  passo a passo ate se chegar ao resultado... EX: Receita de bolo.

  Já  na Programação declarativa, nos começamos a impor condições que precisam
  acontecer para eu chegar em tal resultado, é a forma que mais utilizamoos para
  organizar nossos códigos.

  ### Key no React

  ## Por que unica?

3 momentos que um componente  é renderizado novamente no react.

1° quando o estado se altera.
2° quando  a propriedade se altera.
3° quando um componente pai é renderizado noovamente, os filhos também são rende
rizados.

  Isso é muito importante no react, tendo em vista esse conhecimento, falando a 
nivel  empresarial, um site com +500 post para serem renderizados, e a cada alte
ração eles serão renderizados novamente... A key nesse aspecto é essencial, pois
ela por si so memoriza  essas chaves unicas de cada elemente individualmente, e
torna mais facil e rapido a renderização...

  EX: 
Suponha que temos 4 elemntos respectivamente, e sua key seja o {id}, propriedade
individual de cada elemento, e eu quero adicionar mais um elemento a app. A key
vai  avisar pro react, ou melhor, ela vai gravar as keys dos elementos que ja es
tavam em tela, e vai renderizar somente os novos componentes atualizados, isso 
ajuda muito na performace da aplicação...

  ##### Não é viável o uso do indice de cada elemento dentro de um array[].


### UseState no React

  No react temos estados, os estados são variáveis que, quando eu cria-las, eu quero
que o componente monitore elas para mim, então serve pra quando eu quiser que o  react
monitore valores que são alterados em variaveis e me entregue eles, eu uso o state.

O useState sempre retorna um valor com dois arrays[]. O primeiro array serve como
um array de armazenamento do meu estado, ja o segundo é acompanhado por "Set
+ nome da variavel com inicial Maiúscula. Esse segundo array é responsavel pela
"alteração" (que na verdade é criada um novo contexto) da minha 
variavel, e ele também avisa o react quando faz a mudança, fazendo com que o react
exiba na interface.


  ### Spread Operator: "..."
  Acompanhado por 3 pontos antes da variavel que armazena os valores (array[1]), esses "..."
são responsaveis por pegar todos os valores atuais da minha variavel e exibi-los
assim eu não preciso transcrever todos.

### Comunicação entre componentes.

  No react, a unica forma de termos comunicação entre componentes, para que os 
dois consigam se enxergar, a unica maneira é fazendo isso através das propriedades,

E como propriedades dos meus componentes no react, podemos passar, numeros, strings
objetos, como também podemos passar funções, e essas funções vão possibilitar a
comunicação entre comp.
  Basicamente, temos como enviar uma função de um componente pai, para ser execu
tada no componente filhoo, ou vice-versa, são muitas possibilidades...

```js
  export function Post() {

    ### Criando a função no meu componente pai
    function DeleteComment(comment) {
      console.log('deletar o comentário')
    }
    ### Enviando a função pro meu componente filho
    <Comment key={comment} onDeleteComment={DeleteComment} />

    ### Resgatando a função no componente filho
    export function Comment({content, onDeleteComment}) {
      function handleDeleteComment(content) {
        ### Usando minha função em outra função do componente filho
        onDeleteComment(content);
      }
    }
   };

   ```
  ##### Conceito de Imutabilidade

  Na imutabilidade, pregamos que, as variáveis não sofrem mutação, ao se alterar
a variavel, estamos criando um novo espaço na memoria, seguindo o conceito de 
estado, então quando criamos [comments, setComments], quando alteramos setComments
não estamos mudando comments, mas sim, criando um novo valor(espaço), na memória.
Isso acontece de maneira mais rapida, por isso o react adota esse requesito de 
criação...

  ### metodo Filter no React:
  É interessante falar sobre este metodo filter, ele percorre nosso array[], e,
para tudo que for true, ele retorna de volta, e tudo que for false ele deleta, 
essa é uma das formas que temos no react, para deletar itens.

### Validações de textarea.
  [Required]: O campo de texto como obrigatorio.
  [onInvalid]: Serve para alterarmos a mensagem do aviso de campo obrigatorio.
  passando uma função para ele, e alteramos setCustomValidity. Buscando com
  o event.target.setCustomValidity("..."); Porém acontece da validação não 
  sumir mais da tela, pra isso precisamos ir na função de onChange={} e voltar
  event.target.setCustomValidity('') para ('');
  [disabled]: newCommentText.length === 0: Basicamente estou falando que, quando
  a quantidade de palavras do meu campo de texto for identica a 0, eu vou deixar
  o botão desabilitado, "disabled" é uma prop de button. E para diferenciar isso
  visualmente para o usuario, eu posso estilizar disabled. (rever em post.module.css).

### Closures no React

```js
const [likes, setLikes] = useState(0) {
  setLikes(likes + 1); [1];
  console.log()
  setLikes(likes + 1); [2];
}

```
  Um erro muito comúm, que precisamos cuidar no react, é sobre o conceito de
closures. No codigo acima, podemoos observar que, quisemos usar a alteração do
estado duas vezes na mesma execução, porém, no conceito de closures, isso não é
possivel, pois, quando fazemos a alteração do estado, o react cria um novo contexto
para aquele estado, e não altera, ou seja, o contexto alterior [1], vai ser 0. 
Diferente do contexto [2], que vai ser o valor atualizado na função.

### OBS:
 Sempre que você for atualizar uma informação no react, e essa info depende do
valor que ela tinha anteriormente, ou seja, depende dela mesma, é importantissimo
fazer da seguinte forma.

```js
function handleLikeComment() {
  ### acessando o valor atual do estado com state, e retornando o valor atual + 1.
  setLikeCount((state) => {
    return state + 1
  })
}

```
### Se eu duplicar essa alteração de setLikeCount, vai começar somar + 2 nos likes.


#### Fundamentos do TypeScript

 O typeScript tem como um dos fundamentos, a tipagem por cima da linguagem de JS,
EX 1:

```js
function sumAge(users) {
  const sum = 0

  for(const user of users) {
    sum += user.age;
  }

  return sum;
}

sumAge(0, 'teste');

```
No exemplo acima, o JS me deixa chamar qualquer coisa no escopo dessa função, sem
estar totalmente declarada se a informação que eu tenho sobre esta função. Podendo
ser um número, uma string, um boolean, sem coontar que eu não consigo saber de onde
vem .age, se ela é uma propriedade e onde está sendo utilizada.
  No JS podemos mudar o valor de uma constante, o editor não vai reclamar, porém,
pordem ocasionar erros futuros.

### const = constante;
### let = let it change;

  No TypeScript, ao usarmos, o nosso editor de código fica mais inteligente, se
tudo estiver tipado na maneira certa, facilita muito na hora de codar. Segue o EX 2:

```ts
### Interface é muito utilizada para passar tipagens para uma lista com varios tipos
interface user {
  name: string;
  bio: string;
  age: number;
}

### Adiciono a tipagem de "users" para "users: user[]", agora users tem como tipo,
um array, que dentro existe objetos com suas respectivas tipagens.
function sumAge(users: user[]) {
 ### Trocando de "const" para "let", pois não se muda o valor de uma constante.
  let sum = 0

  for(const user of users) {
    sum += user.age;
  }

  return sum;
}

### Agora eu so posso passar para essa função, um array, e dentro desse array,
estão meus objetos, com suas respectivas tipagens.
sumAge([
  {
    name: "Luis",
    bio: "programming student",
    age: 21
  }
];

```
  Na fomra que estava o exemplo 1. Mudando para TS, meu editor de código começa a
reclamar, pois ele não sabe que tipo de informação esta declarada dentro do meu users
ele fica perdido... Para isso precisamos fazer as seguintes alterações.

### Inferencia de tipos TS
  O TS consegue identificar o tipo da função, ou da variavel, dependendo do retorno
da mesma, temos como exemplo:

```ts
function sumAge(users: user[] {

 let sum = 0

  for(const user of users) {
    sum += user.age;
  }

  return sum;
});

const sumOfAllUserAge = sumAge([
  {
    name: "";
    bio: "";
    age: 21
  }
])

```

Sabemos que "let" é um numero, e que dentro do meu "for" eu retorno outro numero,
que é uma soma, então eu não preciso dizer pra minha variavel sumOfAllUserAge que
seu tipo é um [number], isso o TS ja consegue interpretar.

### ! no TS serve para "forçar" o ts a confiar em vc que o elemente vai existir.

Ao tratar de Objetos no TS, e em funções no geral, eu não posso declarar a
tipagem de cada propriedade do objeto, eu preciso declarar o tipo do objeto inteiro.

### Generics
  Generics no TS nada mais são que atributos do proprio TS, assim como existe as
propriedades das funções, temos generics para as tipagens do TS. <>

### utilizar "?" antes dos : para falar que uma propriedade é opcional no TS

#### Extensões de Interface TS

  Extensões de interfaces, são extends do TS que existem diversas propriedades ja
alocadas dentro dessas importações, dessa forma vc consegue utilizar todas essas
props, pegando {...props}, claro que so funciona com propriedades que ja existem
no react, seja de imagens, funções, etc...

  imgHTMLAttributes: foi um exemplo que utilizamosn no projeto para resgatar a
extensão onde existe todas as props de uma imagem no geral.
  Para isso precisamos extender nossa interface: interface NameProps extends imgHTMLAttributes
e tambem preciso dizer que meu Generics é <HtmlImageElement>, ou seja, um elemento
de uma imagem HTML. 

Dessa forma, atraves de [...props], com spread operator, eu consigo resgatar todos
os valores comuns de uma imagem, como "src", "alt", "title", sem contar que posso
resgatar eventos como "onClick".