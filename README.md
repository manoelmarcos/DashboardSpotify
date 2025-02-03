# DashboardSpotify no Power BI

## Configurando sua API para obter os dados do Spotify 

Para integrar os dados dos artistas mais ouvidas no Spotify com o Power BI, você pode usar a API do Spotify para obter as informações e, em seguida, criar uma tabela no Power BI. O script em Python a seguir utiliza a biblioteca spotipy, que é uma forma simples de acessar a API do Spotify.

Passo a passo:

## Certifique-se de que o Python esteja corretamente instalado

1. Abra o Prompt de Comando (Win + R, digite cmd e pressione Enter).
   
   ![image](https://github.com/user-attachments/assets/82c72a48-f969-4f1d-9d1a-a7c13545b63d)

2. digite: python --version

   ![image](https://github.com/user-attachments/assets/75110f6e-c0f6-423e-8faf-e28f09aab68a)

3. Se o python não estiver instalado, siga esses passos:

   - Baixe o Instalador, acessando o site oficial do Python:
         🔗 https://www.python.org/downloads/
   - Clique no botão Download Python X.X.X (a versão mais recente disponível).
   - Abra o arquivo .exe que foi baixado.
   - Marque a opção "Add Python to PATH" (para poder rodar Python no terminal).
   - Clique em Install Now e aguarde.

##  Instale as bibliotecas necessárias

1. Abra o terminal ou prompt de comando e execute o seguinte comando para instalar o matplotlib e outras dependências que possam estar faltando:

pip install spotipy

   ![image](https://github.com/user-attachments/assets/bd23d354-e75a-46e0-bf94-a04702143ec1)

2. Instalar os pacotes necessários no ambiente Python:

pip install matplotlib pandas requests
![image](https://github.com/user-attachments/assets/8937eaf7-1cd4-410b-ad2b-ec7a1c1d81c4)

3. Verifique o caminho que o Python está instalado:

where python

![image](https://github.com/user-attachments/assets/b0d65726-5e2e-4407-962f-867db9a76d47)


## Crie uma aplicação no Spotify Developer Dashboard 

- Acesse Spotify Developer Dashboard.
- Faça login com sua conta do Spotify.
- Clique em "Create an App".

![image](https://github.com/user-attachments/assets/9d8fc2f5-bec3-4f40-9aa5-4c6ea77eedde)


- Dê um nome ao app (exemplo: MeuAppSpotify) e uma descrição.
- Configure o Redirect URI
- O Redirect URI é necessário para autenticar seu usuário no Spotify.
- Em "Redirect URIs", adicione:
- http://localhost:8888/callback
- Clique em Save.

- Clique em "Create" e aceite os termos.

Para obter o Client ID e Client Secret, acesse: 

![image](https://github.com/user-attachments/assets/1fa3bc82-3348-4aa7-8485-153847880a48)

# Obtenha seu Client ID e Client Secret
No dashboard, clique no app que você criou.
Vá até a aba "Settings".
Copie o Client ID e o Client Secret.
No dashboard do Spotify, clique no seu app.
Vá até "Edit Settings".


5. Clique no app criado:

   ![image](https://github.com/user-attachments/assets/0276c100-34c3-4411-9919-3d38d1346930)

6. adicione http://localhost:8888/callback no Spotify Developer Dashboard.
   
7. Vá em Settings

   ![image](https://github.com/user-attachments/assets/61e27e2b-82c1-4945-9d50-494a8f798a22)

8. Copie seu Client ID e Client Secret (será necessário pegar essa string para adicionar no script python posteriormente e clique View Client secret

![image](https://github.com/user-attachments/assets/6115bee0-c8ae-4bb1-9b84-3df0600901e4)

![image](https://github.com/user-attachments/assets/4132a9d7-c128-4cf7-84f1-b61225237fda)



# Verificar o ambiente Python no Power BI:

O Power BI usa o Python que está instalado no seu computador. Certifique-se de que você está usando o mesmo ambiente Python no Power BI em que você instalou o pacote. Para verificar, siga esses passos:

No Power BI, vá em Arquivo > Opções e configurações > Opções.
Em Opções, navegue até Script Python.
Verifique o caminho do Python que está configurado no Power BI e garanta que seja o mesmo onde você instalou os pacotes.

Para gerar um token com o escopo user-top-read no Spotify, siga este passo a passo detalhado:

🚀 Passo a passo para gerar um token com user-top-read
Esse escopo permite acessar as músicas e artistas mais tocados na sua conta do Spotify.


5. Use um editor de texto ou de código para criar o seguinte código:


1️⃣ Criar um Script Python no Power BI
No Power BI, vá até "Transformar Dados" > "Editor de Consultas".
Clique em Nova Fonte → Script do Python.
Cole um script Python para fazer chamadas na API do Spotify e trazer os dados.


## Verifique se o Python está corretamente instalado no Power BI

No Power BI, vá em "Arquivo" → "Opções e Configurações" → "Opções".

Vá até "Scripts do Python".


![image](https://github.com/user-attachments/assets/58ca8c5c-da76-4c59-9825-450bacc1f339)



Em "Detecção automática", verifique se o Power BI está reconhecendo seu Python instalado.
Se necessário, selecione manualmente o caminho onde o Python está instalado.
🔹 Dica: Recomendo usar a versão mais recente do Python 3.9 ou superior.

![image](https://github.com/user-attachments/assets/28f3e880-3fcb-4e8f-b1a7-19c27ee1dfa2)


Passo 2: Integrar ao Power BI
Para integrar o código Python ao Power BI e obter as playlists do Spotify:

Adicione um script Python no Power BI:

No Power BI Desktop, clique em Transformar Dados.
No Editor de Consultas, clique em Transformar Dados > Script Python.
Cole o código Python adaptado no campo de script.


Abra o terminal ou Prompt de Comando.
Rode o código Python diretamente (sem PowerShell, se possível).

## Gere o token para acessar dados da API

4. Crie uma pasta local, por exemplo:
     c:\spotify-token

Crie o seguinte arquivo utilizando o notepad++ ou algum editor de código: 

**getSpotifyToken.js**

```sh
const express = require('express');
const querystring = require('querystring');
const axios = require('axios'); // Para fazer requisições HTTP
const crypto = require('crypto');

const app = express();
const port = 8888;

const client_id = ''; // Adicione aqui seu client_id obtido pela aplicação que você criou no Dashboard Spotify
const client_secret = ''; // Adicione aqui seu client_id obtido pela aplicação que você criou no Dashboard Spotify 🔴 Não compartilhe essa informação publicamente!
const redirect_uri = 'http://localhost:8888/callback';

// Função para gerar string aleatória
function generateRandomString(length) {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
}

// Página de login
app.get('/login', (req, res) => {
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email playlist-read-private playlist-read-collaborative user-top-read';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

// Rota de callback (processa o código de autorização e troca pelo token de acesso)
app.get('/callback', async (req, res) => {
  const code = req.query.code || null;

  if (!code) {
    return res.status(400).send('Código de autorização ausente!');
  }

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token',
      querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri,
        client_id: client_id,
        client_secret: client_secret
      }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

    const { access_token, refresh_token } = response.data;
    
    res.send(`
      <h1>Autenticação bem-sucedida!</h1>
      <p>Access Token: ${access_token}</p>
      <p>Refresh Token: ${refresh_token}</p>
    `);
  } catch (error) {
    console.error('Erro ao obter token:', error.response ? error.response.data : error.message);
    res.status(500).send('Erro ao processar o login');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

Execute esse script como o Node:

(Verifique se o Note está instalado)












