# Planejamento Financeiro
`Projeto Futurizando | CIÊNCIAS DA COMPUTAÇÃO | 1° Semestre/2023 `

## Participantes
* Arthur Braga de Campos Tinoco  
* Cecília Fernandes Silva Costa
* David Gomes Vieira
* Guilherme Meyer Guimarães
* Henrique Guimarães e Silva
* Henrique Lima da Cunha Pereira

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

Sob o contexto vivenciado na economia e na população brasileira, durante os últimos 10 anos, viu-se muito da subvalorização do Real sobre os demais produtos/artigos comprados diariamente, como alimentos, vestuário, equipamentos eletrônicos, entre outros. Gastos considerados essenciais, como água, luz, moradia, aluguel, plano de saúde, subiram a um ritmo gritante, durante esse período, o que ocasionou em um amplo endividamento da população, principalmente às classes mais carentes.

## Objetivos

Como matriz do nosso projeto, pretendemos desenvolver uma aplicação web, de certa forma parecida com as funcionalidades do "Microsoft Excel", afim de prover, de forma responsiva e direta, um planejamento personalidade e atento às necessidades do usuário, seja quais forem as demandas, além como forma de compreensão sobre as finanças próprias, quais urgências atender e o que pode ser deixado para uma futura compra.

## Justificativa

É de grande comoção o momento atual que o país passa, sobretudo economicamente, em que o custo de vida nunca esteve tão alto como nesse momento, durante os últimos 10 anos. Desta forma, como proposta envolvida a área da computação, pode ser visto uma possibilidade de concentrar esforços sobre esses indivíduos, afim de amenizar os impactos gerados pela alta dos juros, inflação alta e desvalorização do salário mínimo, contribuindo não apenas com a população endividada, quanto também uma possibilidade de informar e perpetuar boas práticas de educação financeira.

## Público-Alvo

Para este projeto, é de total interesse do grupo no foco ao atendimento de 3(três) públicos-alvos, sendo esses: **pessoas com baixa renda, pessoas com dificuldade em gerir o próprio dinheiro e pessoas consumistas**. Desta forma, podemos capacitar à cada grupo, com experiências personalizadas às suas necessidades, formatos e soluções para retirar esses individuos do endividamento, criação de um fundo de emergência, opções de investimentos, sugestão de compra com base no histórico, dentre outros.
 
# Especificações do Projeto

A partir daqui, será utilizado as ferramentas e propriedades do Design Thinking para filtrar as personas, como parâmetros de proposta de valor, além de entrevistas com potenciais usuários e feedbecks interativos que ajudam a esclarecer ideias.

## Personas, Empatia e Proposta de Valor
* Para melhor explicação e detalhamento, acesse o link do Design Thinking realizado na plataforma Miro: https://miro.com/app/board/uXjVMYCYaT4=/
> **Persona 1 - Carlos**
> 
> ![Exemplo de Persona](images/Persona.png)
> 
> **Persona 2 - Maria Clara**
> 
> ![Exemplo de Persona](images/Persona%20(1).png)
> 
> **Persona 3 - Erick**
> 
> ![Exemplo de Persona](images/Persona%20(2).png)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Carlos  | Agilidade em organizar finanças           | Não esquecer de fazê-las               |
|Carlos       | Alertas sobre gastos                 | Evitar que haja excesso nas contas mensais |
|Carlos       | Planejar as férias                 | Permitir que haja uma economia adequada durante o ano |
|Maria Clara       | entender melhor o mercado financeiro                 | investir e conseguir uma renda a mais com certa segurança |
|Maria Clara      | ter mais opção na hora de pagar                 | Não ficar encurralada sobre possíveis multas com juros altos |
|Maria Clara       | Planejar suas compras                 | Gradualmente ir comprando, com base na prioridade e valor, aquilo que é de seu interesse|
|Erick      | Gastar menos                 | Não se manipular e ficar sem nada no fim do mês |
|Erick      | Praticidade em implementar suas finanças                 | Não ficar agarrado e ter uma facilidade em entender seu dinheiro na hora de organizar |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastro do usuário | ALTA | 
|RF-002| Permitir que o usuário personalize suas necessidades | ALTA |
|RF-003| Informações sobre a entrada/saída de dinheiro   | ALTA |
|RF-004| Alertas de gasto excessivos/dicas para controle  | ALTA |
|RF-005| Histórico de compras   | MÉDIA |
|RF-006| Lista de desejos/planejador de sonhos   | MÉDIA |
|RF-007| Acesso a investimentos e informações simplificadas sobre o mercado financeiro   | MÉDIA |
|RF-008| Formato de pagamento   | BAIXO |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O algortimo deve planejar quais as prioridades daquele indivíduo  | ALTA |
|RNF-002| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA |
|RNF-003| Automatizar o processo de verificação para entrada/saída de capital | MÉDIA |
|RNF-004| Interconexão com diversos formatos de investimentos para atender casos diversos de usuários | MÉDIA |
|RNF-005| Sugerir correções/reclamações sobre planejamentos/processos mal-executados/desconforme à necessidade do usuário | MÉDIA |
|RNF-006| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto deve ser servir como guia, não educador     |
|04| Não deve ocorrer aporte financeiro sobre a aplicação  |
|05| A aplicação não deve induzir o usuário ao erro ou perda de capital        |

# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

......  COLOQUE AQUI O SEU TEXTO ......

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro | https://miro.com/app/board/uXjVMYCYaT4=/ |
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m2-20231-planejamento-financeiro/tree/master/codigo | 
|Protótipo Interativo | Figma | https://www.figma.com/file/t2Q10paPmVpPQvPUGNZHgO/Untitled?node-id=0%3A1&t=5St5OME1WnknA65k-1 |
| Apresentação do grupo | Canva | https://www.canva.com/design/DAFgliD4tRo/91ohZSLe3EDAVMoGCV5XUg/edit?utm_content=DAFgliD4tRo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton |
|Hospedagem do site | GitHub Pages | *pendente* | 
| Ferramente de comunicação | WhatsApp |  |
| Editor do Código | Visual Studio Code | |

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o Git, sendo que o Github foi utilizado para hospedagem do repositório `Planejamento Financeiro`.

> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
