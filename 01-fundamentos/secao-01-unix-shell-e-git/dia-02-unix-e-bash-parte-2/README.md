### Aula 1.2:

- ******************echo →****************** imprime uma mensagem no terminal que pode ser redirecionado para um arquivo de texto.
    - ********************************************************************echo ‘palavra’ > arquivo.txt →******************************************************************** redireciona a palavra/frase para o arquivo, se não houver nada, ele cria, ja houver algo, substitui.
    - ********************************************echo ‘palavra’ >> arquivo.txt →******************************************** adiciona no final a palavra/frase escrita.
- **************************************cat >> arquivo →************************************** vai redirecionar para adicionar mais de uma palavra/frase. Para sair, usa-se Ctrl+D (de done!)
- **************find →************** intuitivamente, procura um arquivo, fazendo: **************find <arquivo>**************
    - ********************************find. -name “nome”→******************************** procura em todos os arquivos que tenham o nome procurado
    - **************************************find . -type d →************************************** procurar diretórios
    - **************************************find . -type f →************************************** procurar arquivos
- ****************who →**************** por meio desse comando, pode-se identificar quem tem acesso às informações de determinado arquivo
- ********************chmod →******************** comando para mudar as permissões, sendo do usuário, grupo e outros usuários, respectivamente. Faz-se ****************chmob u/g/o/a (user, group, others, all) +/- (aumentar e retirar permissões) r/w/x (read, write, execute)****************