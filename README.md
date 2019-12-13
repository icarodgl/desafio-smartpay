# Você domina a Força?

Guerreiro Luke é um pesquisador de uma empresa (República S/A) que realiza vários levantamentos de relatórios sobre produtos e estabelecimentos da região da Grande Vitória. Todos os dias ele cataloga vários itens novos e vários novos estabelecimentos, organizando tudo dentro de várias planilhas tal como seu chefe e pai (Darth Vader) ordena. Acontece que, além de todo esse trabalho ser feito manualmente, para recuperar algumas informações às vezes demora muito tempo, o que deixa o chefe de Luke furioso. Por isso, Princesa Leia, uma colega de Luke, sugeriu a construção de um dispositivo que realizasse esse procedimento de forma automática e fornecesse as informações requeridas pelo patrão em muito menos tempo. Infelizmente eles não sabem de ninguém que domine a Força para iniciar e guiá-los nessa difícil missão. Será que você pode ajudá-los?

O desafio é que você desenvolva um **programa** que permita realizar as seguintes buscas: 
1. Dado o nome de um produto, retornar uma listagem de quais **estabelecimentos** que possuem ele, junto com o **bairro** e **cidade** de cada estabelecimento.
2. Passado o nome de uma categoria, retornar uma listagem de **produtos** que fazem parte dela e em qual  **estabelecimento** (nome) se encontra, ordenando em ordem alfabética o nome dos produtos.
3. Dado o CNPJ de um estabelecimento, retornar uma listagem de todos os **produtos** dele, em ordem *alfabética*.

O arquivo **produtos.txt** contém as informações dos produtos no formato semelhante ao que segue:

| Nome  | Categoria  | Estabelecimento |
|---|---|---|
| Hambúrguer-de-Soja  |  Hambuguer  |  Rick's S/A |
| Churrasco-de-Berinjela  |  Carnes  |  Churrascaria-Dudu  |
| Pizza-de-Calabresa |  Massa |  Pizzaria-Cleber S/A |

O arquivo **estabelecimentos.csv** contém as informações de todos os estabelecimentos no formato semelhante ao que segue:

| Estabelecimento  | CNPJ  | Bairro |  Cidade |
|---|---|---|---|
| Rick's S/A  | 55091455000151  |  Centro  |  Vila Velha  | 
| Churrascaria-Dudu | 10740748000184  |  Centro  |  Vitoria |
| Pizzaria-Cleber S/A | 50761347000125 |  Maruipe  |  Vitoria |

**Escolha as tecnologias e técnicas que você vai usar e tente montar uma solução completa para rodar a aplicação**.

Para enviar o resultado, basta realizar um **Fork** deste repositório e **abrir um Pull Request**, **com seu nome**.  

**É importante comentar que deve ser enviado apenas o código fonte. Não aceitaremos códigos compilados**.

Por fim, o candidato deve atualizar o Readme.md com as seguintes informações: 
1. Documentação da solução;
2. Lista dos diferenciais implementados 

## Avaliação

O programa será avaliado levando em conta os seguintes critérios:

| Critério  | Valor | 
|---|---|
| Legibilidade do Código e Organização |  25  |
| Documentação do Código|  25  |
| Reutilização  e Modularização da Solução|  25  |
| Tratamento de Erros| 25| 
| Total| 100|

A pontuação do Jedi será a soma dos valores obtidos nos critérios acima.

## Diferenciais 

O Jedi pode aumentar a sua pontuação na seleção implementando um ou mais dos itens abaixo:

| Item  | Pontos Ganhos | 
|---|---|
| Criar um [serviço](https://martinfowler.com/articles/microservices.html) com o problema |  30  |
| Utilizar banco de dados| 5|
| Implementar o padrão de programação da tecnologia escolhida |  20  |
| Qualidade de [Código com SonarQube](https://about.sonarcloud.io/) |  15  |
| Implementar testes unitários |  10  |
| Implementar testes com BDD |  10  |
| Implementar integração com [Travis](https://travis-ci.org/) (ou outros)  |  15  |
| Implementar usando Docker| 15|
| Total| **120**|

A nota final do Jedi será acrescido dos pontos referente ao item implementado corretamente.

Cada item listado como diferencial deverá ser explicitado durante as fases de entrevista e mostra da solução do candidato.

## Penalizações

O Jedi será desclassifiado nas seguintes situações:

1. Submeter um solução que não funcione; 
2. Não cumprir no mínimo 60% de cada um dos critérios da seção **Avaliação**
3. Solução Plagiada

### *May the code be with You!*

## Referências

Missão elaborada segundo o modelo do Mestre Jedi [Paulo S. S. Júnior](https://github.com/paulossjunior) no Episódio XX [(Teste para o ESPM)](https://github.com/prodest/venha-para-es-palma-mao).