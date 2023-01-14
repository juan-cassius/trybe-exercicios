### Aula 1.1:

- **cd** (change directory) → direciona o terminal para dentro de um diretório. Com o **..**, volta para o diretório anterior;
- **ls** (list) → lista os arquivos visíveis dentro do diretório.
    - **-a →** mostra os arquivos que são invisíveis;
- **mkdir** (make director) → intuitivamente, faz um diretório;
- ******cp****** (copy) ************************************************************************<nome do arquivo copiado> <nome do novo arquivo>************************************************************************ → intuitivamente, copia um arquivo
- **touch <nome do arquivo>.<tipo do arquivo>** → cria um arquivo do tipo especificado;
- **rm** (remove) → remove um arquivo, **rmdir**, remove um diretório;
    - Para apagar um diretório que tem algum arquivo, deve-se usar o **rm -fr**;
- **cat** → lista o que tem dentro do arquivo escolhido;
- **mv** (move) → intuitivamente, move o arquivo escolhido e diretórios vazios, usando ****************************************************************************mv <nome do arquivo> <local desejado>/****************************************************************************
    - Para mudar o nome, usa-se ****************************mv <nome do arquivo> <nome alterado>****************************
- ********less******** → é parecido com o comando ******cat******, porém, ele mostra em páginas.
    - Para pesquisar um nome dentro da lista, basta escrever **************************/nome buscado**************************;
- **********head********** → mostra os 10 primeiros valores/linhas do arquivo escolhido.
    - Esse valor ainda pode ser limitado com o **************head -#;**************
- **********tail********** → é igual o comando ********head********, mas invés de mostrar os primeiros, mostra os últimos, podendo ser limitado da mesma forma;
- ****************************************************grep <nome> <arquivo> →**************************************************** busca dentro do arquivo, gerando uma lista;
    - ************-i →************ busca não case sensitive. Podendo ser somado à outros, como nos abaixo.
    - **-iv →** busca não case sensitive dos nomes ******SEM****** o especificado.
    - ******-in →****** indica a posição
    - ****************-ic →**************** indica o número de repetições
- ****wc (world count)→**** gera 3 valores, sendo eles:
    1. quantidade de linhas
    2. quantidade de palavras
    3. quantidade de caracteres
    - **-l →** mostra apenas as linhas
    - **************-w →************** mostra apenas as palavras
    - **************-c →************** mostra apenas os caracteres
- MECANISMOS DE AJUDA:
    - **whatis**
    - **apropos**
- ********* → **símbolo curinga que significa tudo!** Pode ser restringido, especificando o tipo dos arquivos que deseja selecionar com esse símbolo.