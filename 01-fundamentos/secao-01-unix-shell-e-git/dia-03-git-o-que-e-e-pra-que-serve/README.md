### Aula 1.3:

- **************************git init →************************** inicia o git no repositório atual
- ****************************git add <arquivo> →**************************** adiciona as modificações em staging, que indica que as alterações estão próximas do commit.
    - **************************************************git add . →************************************************** adiciona todas as modificações do diretório e sub diretórios em staging
- ******************************git commit -m “mensagem”→****************************** adiciona um commit e pode adicionar um comentário
- ******************git checkout -b <nome do checkpoint> →****************** adiciona checkpoint (cria uma branch)
    - **********************************************************git checkout <nome da branch> →********************************************************** vai para a branch desejada, ou commits anteriores
- **********git branch********** → reporta os branches existentes e em qual você está
    - **************************************************git branch -m <name> →************************************************** renomeia o branch que está sendo usado no momento
    - ****************************************git branch -d <name> →**************************************** deleta a branch
- **************************************************************git merge <nome da branch> →************************************************************** mescla a branch deseja com a atual, geralmente a main.
- ****************************************git stage —restore →**************************************** tira o branch do staging, mas não altera as modificações feitas nele.