# DashboardSpotify
Dashboard Spotify no Power BI 

Para integrar os dados dos artistas mais ouvidas no Spotify com o Power BI, você pode usar a API do Spotify para obter as informações e, em seguida, criar uma tabela no Power BI. O script em Python a seguir utiliza a biblioteca spotipy, que é uma forma simples de acessar a API do Spotify.

Passos:

Passo a passo:
Abra o terminal ou Prompt de Comando.
Rode o código Python diretamente (sem PowerShell, se possível).
Certifique-se de que o Python esteja corretamente instalado e que você esteja executando o script em um ambiente Python.


Instale a biblioteca spotipy:

1. Acesse o prompt de comando (win + R), cmd
2. pip install spotipy

![image](https://github.com/user-attachments/assets/bd23d354-e75a-46e0-bf94-a04702143ec1)

3. Crie uma aplicação no Spotify Developer Dashboard para obter o Client ID e Client Secret.

![image](https://github.com/user-attachments/assets/9d8fc2f5-bec3-4f40-9aa5-4c6ea77eedde)


![image](https://github.com/user-attachments/assets/717b5d6f-50d2-491a-924d-fb8f25eefff8)


![image](https://github.com/user-attachments/assets/1fa3bc82-3348-4aa7-8485-153847880a48)


Passos para corrigir:
Instalar o pacote necessário no ambiente Python do Power BI:

Abra o terminal ou prompt de comando e execute o seguinte comando para instalar o matplotlib e outras dependências que possam estar faltando:


pip install matplotlib pandas

Verificar o ambiente Python no Power BI:

O Power BI usa o Python que está instalado no seu computador. Certifique-se de que você está usando o mesmo ambiente Python no Power BI em que você instalou o pacote. Para verificar, siga esses passos:

No Power BI, vá em Arquivo > Opções e configurações > Opções.
Em Opções, navegue até Script Python.
Verifique o caminho do Python que está configurado no Power BI e garanta que seja o mesmo onde você instalou os pacotes.

Passo 1: Instalar o pacote requests no Python
Instalar via PIP:
Abra o terminal do seu sistema (como Prompt de Comando no Windows ou terminal no Linux/Mac).

Execute o seguinte comando para instalar o pacote requests:

pip install requests


2. Certifique-se de que o requests e o pandas estão instalados:
O erro pode estar relacionado à falta de bibliotecas no ambiente Python configurado no Power BI. Para garantir que as bibliotecas necessárias estejam instaladas, execute os seguintes comandos no terminal:

bash
Copiar
Editar
pip install requests pandas


1️⃣ Crie um aplicativo no Spotify Developer
Acesse Spotify Developer Dashboard.
Faça login com sua conta do Spotify.
Clique em "Create an App".
Dê um nome ao app (exemplo: MeuAppSpotify) e uma descrição.
Clique em "Create" e aceite os termos.


Para gerar um token com o escopo user-top-read no Spotify, siga este passo a passo detalhado:

🚀 Passo a passo para gerar um token com user-top-read
Esse escopo permite acessar as músicas e artistas mais tocados na sua conta do Spotify.

1️⃣ Crie um aplicativo no Spotify Developer
Acesse Spotify Developer Dashboard.
Faça login com sua conta do Spotify.
Clique em "Create an App".
Dê um nome ao app (exemplo: MeuAppSpotify) e uma descrição.
Clique em "Create" e aceite os termos.


2️⃣ Obtenha seu Client ID e Client Secret
No dashboard, clique no app que você criou.
Vá até a aba "Settings".
Copie o Client ID e o Client Secret.

3️⃣ Configure o Redirect URI
O Redirect URI é necessário para autenticar seu usuário no Spotify.

No dashboard do Spotify, clique no seu app.
Vá até "Edit Settings".
Em "Redirect URIs", adicione:
http://localhost:8888/callback
Clique em Save.



5. Clique no app criado:

   ![image](https://github.com/user-attachments/assets/0276c100-34c3-4411-9919-3d38d1346930)

6. adicione http://localhost:8888/callback no Spotify Developer Dashboard.
   
7. Vá em Settings

   ![image](https://github.com/user-attachments/assets/61e27e2b-82c1-4945-9d50-494a8f798a22)

8. Copie seu Client ID e Client Secret (será necessário pegar essa string para adicionar no script python posteriormente e clique View Client secret

![image](https://github.com/user-attachments/assets/6115bee0-c8ae-4bb1-9b84-3df0600901e4)

![image](https://github.com/user-attachments/assets/4132a9d7-c128-4cf7-84f1-b61225237fda)

8. 





4. Crie uma pasta local, por exemplo:
     c:\spotify-token

5. Use um editor de texto ou de código para criar o seguinte código:



1️⃣ Criar um Script Python no Power BI
No Power BI, vá até "Transformar Dados" > "Editor de Consultas".
Clique em Nova Fonte → Script do Python.
Cole um script Python para fazer chamadas na API do Spotify e trazer os dados.


✅ 1. Verifique se o Python está corretamente instalado no Power BI
No Power BI, vá em "Arquivo" → "Opções e Configurações" → "Opções".
Vá até "Scripts do Python".
Em "Detecção automática", verifique se o Power BI está reconhecendo seu Python instalado.
Se necessário, selecione manualmente o caminho onde o Python está instalado.
🔹 Dica: Recomendo usar a versão mais recente do Python 3.9 ou superior.


✅ 5. Atualize os Pacotes do Python
No terminal, rode os comandos abaixo para garantir que suas bibliotecas estão atualizadas:

sh
Copiar
Editar
pip install --upgrade requests pandas


Passo 2: Integrar ao Power BI
Para integrar o código Python ao Power BI e obter as playlists do Spotify:

Adicione um script Python no Power BI:

No Power BI Desktop, clique em Transformar Dados.
No Editor de Consultas, clique em Transformar Dados > Script Python.
Cole o código Python adaptado no campo de script.
















