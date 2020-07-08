<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 4-1: Header
</h3>

<blockquote align="center">“Transportai um punhado de terra todos os dias e fareis uma montanha.”</blockquote>



## :rocket: Sobre o desafio

Esse é o primeiro desafio da sequência de criação de um site de aulas particulares. A ideia é que você aplique, em pequenas doses, os conhecimentos aprendidos nas aulas. Nessa primeira etapa, você deve criar um header com dois links: `Teachers` e `Students` (aproveite a estrutura criada no módulo 03)

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:

- Deve ser aplicado um background;
- Deve ser utilizada a fonte Roboto;
- Utilize o conceito de `box-sizing` e o seletor `+` para centralizar os seus links;
- Utilize o `after` e o `transition` para aplicar um efeito visual nos links quando o mouse passar por cima.

<br>
<h3 align="center">
  Desafio 4-2: Card do Professor
</h3>

<blockquote align="center">“Sua única limitação é você mesmo!”</blockquote>

## :rocket: Sobre o desafio

Nessa etapa você de utilizar o browser-sync e criar um card para apresentação das informações do professor.

### Browser-sync

Utilizando as libs `browser-sync` e `npm-run-all` e rode os processos da sua aplicação e do `browser-sync` em paralelo.

### Card

Esse componente deve ser divido em duas seções: imagem e detalhes. As seguintes informações são obrigatórias:

- Imagem randômica de uma coleção de professores (utilize a api do unsplash);
- Nome completo;
- Idade;
- Grau de escolaridade (ex.: Doutorado);
- Tipo de aula (presencial ou à distância);
- Acompanhamento (ex.: Matemática e Física);
- Desde (data de cadastro na plataforma).

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:

- A imagem deve ocupar 40% do card e os detalhes 60%.
- Utilize o seletor `first-child` e `border-top` para estilizar as divisórias entre os items.
- Utilize o seletor `nth-child()` para estilizar o label (ex.: Desde) e valor (ex.: 02/02/2020) do item.
- Utilize o `keyframes` e o `animation` para fazer uma animação do card.
- Utilize o `box-shadow` para aplicar uma sombra no card.

<hr/>

<h3 align="center">
  Desafio 4-3: Formulário e Rota de cadastro do Professor
</h3>

<blockquote align="center">“Tudo deveria se tornar o mais simples possível, mas não simplificado.”</blockquote>

## :rocket: Sobre o desafio

Nessa etapa você deve criar um formulário de cadastro do professor e uma rota do tipo `post` que irá realizar as validações e salvar os dados enviados.

### Formulário

Os seguintes campos são necessaŕios:

- Avatar url: campo do tipo `url` para cadastrar o caminho da imagem do professor;
- Nome completo: campo do tipo `text`;
- Data de nascimento: campo do tipo `date`;
- Grau de escolaridade: campo do tipo `select` ([documentação do select](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select)) que deve conter as opções **Ensino Médio Completo, Ensino Superior Completo, Mestrado e Doutorado**;
- Tipo de aula: campo do tipo `radio` que deve conter as opções **Presencial e À distância**;
- Área de atuação: campo do tipo `text` que deve conter as informações das matérias que o professor pode lecionar.

### Rota

Crie um arquivo `teachers.js` na raiz do seu projeto e faça a validação de todos os campos utilizando `keys` e o constructor `Object`. Além disso, utilize o método `writeFile` da lib `fs` para gerar um arquivo json que irá conter um array de todos os professores cadastrados. Ao final desses dois processos (validação e salvamento), faça o redirecionamento para a página de listagem de professores.

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio.



## :calendar: Entrega

Esse desafio **não precisa ser entregue** e não receberá correção. Após concluí-lo, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.

---

Feito com :purple_heart: by [Rocketseat](https://rocketseat.com.br) :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
