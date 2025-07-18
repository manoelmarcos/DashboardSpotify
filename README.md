# DashboardSpotify no Power BI

Resultado final desse projeto:

![image](https://github.com/user-attachments/assets/d90d40e6-9429-4fef-839e-125052612be7)


## Configurando sua API para obter os dados do Spotify 

Para integrar os dados dos artistas mais ouvidas de sua conta no Spotify com o Power BI, você pode usar a API do Spotify para obter as informações e, em seguida, obter uma tabela no Power BI. O script em Python a seguir utiliza a biblioteca spotipy, que é uma forma simples de acessar a API do Spotify.

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


Abra o terminal ou Prompt de Comando.
Rode o código Python diretamente (sem PowerShell, se possível).

## Gere um código de autorização para acessar dados da API

- Crie uma pasta local, por exemplo:
     c:\spotify-token
   
- Você vai precisar de dois script, um em javascript e outro em python

Crie o seguinte arquivo (javascript) utilizando o notepad++ ou algum editor de código: 

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

(Verifique se o node está instalado)

![image](https://github.com/user-attachments/assets/ddbe9e9d-c13a-4c0a-b303-1f880a54b481)


Crie o seguinte script python para gerar um token utilizando o notepad++ ou algum editor de código: 

**getSpotifyToken.js**

```python
import requests
from urllib.parse import urlencode

CLIENT_ID = "" // Adicione aqui seu client_id obtido pela aplicação que você criou no Dashboard Spotify
REDIRECT_URI = "http://localhost:8888/callback"

auth_url = "https://accounts.spotify.com/authorize?" + urlencode({
    "client_id": CLIENT_ID,
    "response_type": "code",
    "redirect_uri": REDIRECT_URI,
    "scope": "user-top-read user-read-recently-played" 
})

print("Acesse este link para autorizar:", auth_url)

```

Execute esse código no prompt de comando 

Copie o endereço gerado e adicione no browser
![image](https://github.com/user-attachments/assets/38740ca3-404b-4636-a375-a8899fa86c0a)

![image](https://github.com/user-attachments/assets/2e10cdfc-2c81-468b-8ad7-7c028d727e93)



# Verificar o ambiente Python no Power BI:

O Power BI usa o Python que está instalado no seu computador. Certifique-se de que você está usando o mesmo ambiente Python no Power BI em que você instalou o pacote. Para verificar, siga esses passos:

No Power BI, vá em Arquivo > Opções e configurações > Opções.
Em Opções, navegue até Script Python.
Verifique o caminho do Python que está configurado no Power BI e garanta que seja o mesmo onde você instalou os pacotes.

Para gerar um token com o escopo user-top-read no Spotify, siga este passo a passo detalhado:

🚀 Passo a passo para gerar um token com user-top-read
Esse escopo permite acessar as músicas e artistas mais tocados na sua conta do Spotify.


5. Use um editor de texto ou de código para criar o seguinte código:


## Verifique se o Python está corretamente instalado no Power BI

No Power BI, vá em "Arquivo" → "Opções e Configurações" → "Opções".

Vá até "Scripts do Python".

![image](https://github.com/user-attachments/assets/58ca8c5c-da76-4c59-9825-450bacc1f339)


Em "Detecção automática", verifique se o Power BI está reconhecendo seu Python instalado.
Se necessário, selecione manualmente o caminho onde o Python está instalado.
🔹 Dica: Recomendo usar a versão mais recente do Python 3.9 ou superior.

![image](https://github.com/user-attachments/assets/28f3e880-3fcb-4e8f-b1a7-19c27ee1dfa2)


# Obtendo os dados dos artistas mais ouvido em sua conta do Spotify

Para integrar o código Python ao Power BI e obter os artistas mais ouvidos em sua conta do  Spotify:


- Criar um Script Python no Power BI
No Power BI, vá até "Transformar Dados" > "Editor de Consultas".
Clique em Nova Fonte → Script do Python.

Cole um script Python para fazer chamadas na API do Spotify e trazer os dados.
Adicione um script Python no Power BI:

No Power BI Desktop, clique em Transformar Dados.
No Editor de Consultas, clique em Transformar Dados > Script Python.
Cole o código Python adaptado no campo de script.

![image](https://github.com/user-attachments/assets/f76ff1b5-b705-43b9-83c7-a8ea75f7ffa9)

![image](https://github.com/user-attachments/assets/8d8c31d7-d3b9-4475-a9f3-8cf5a2268548)

![image](https://github.com/user-attachments/assets/c9754a84-131f-4c15-855d-5d0b2f69d036)

![image](https://github.com/user-attachments/assets/80e314b6-b5f5-403a-b406-4d0c3490407b)


```python

import requests
import pandas as pd

# Insira seu token de acesso gerado com o escopo 'user-top-read'
token = "" -- adicione aqui o token gerado pelo script GeraToken.py

# URL da API do Spotify para obter os top artistas dos últimos 12 meses
url = "https://api.spotify.com/v1/me/top/artists?limit=10&time_range=long_term"

# Cabeçalhos da requisição
headers = {
    "Authorization": f"Bearer {token}"
}

# Fazer a requisição à API
response = requests.get(url, headers=headers)

# Verificar se a resposta foi bem-sucedida (status 200)
if response.status_code == 200:
    data = response.json()
    
    # Criar DataFrame com os artistas mais ouvidos
    top_artists_data = pd.DataFrame([
        {
            "Posição": i + 1,
            "Nome do Artista": artist["name"],
            "Popularidade": artist["popularity"],
            "Gêneros": ", ".join(artist["genres"]),
            "Seguidores": artist["followers"]["total"],
            "URL Spotify": artist["external_urls"]["spotify"],
            "Imagem do Artista": artist["images"][0]["url"] if artist["images"] else None
        }
        for i, artist in enumerate(data["items"])
    ])
    
else:
    print(f"Erro {response.status_code}: {response.json()}")

# Retornar o DataFrame para o Power BI
top_artists_data
```

![image](https://github.com/user-attachments/assets/b90f2ed7-98e9-4034-9080-55b00426cdb7)



![image](https://github.com/user-attachments/assets/fc44de3a-9552-47a3-adcf-0a6ac94c732d)


# Criando a visualização final

Agora é possível criar a visualização final:

-Utilize o background que está anexado neste repositório:

Após o carregamento da tabela com o top 10 artistas, basta apenas configurar os cards (arquivo PBIX disponível nesse repositório)

![image](https://github.com/user-attachments/assets/5dbe2baa-df85-4e2e-b6b9-75f04ea8d1ba)

Dashboard Final
![image](https://github.com/user-attachments/assets/ee5a3076-3109-4dbe-bb5c-b774d43036e2)

# Considere me oferecer um café ☕️😊

Se você está gostando do conteúdo gratuito e quer apoiar meu trabalho, pode me oferecer um café ☕️ com uma doação rápida e segura!

## Como doar

**Via Pix:**  
Envie a doação para a minha chave Pix:  
`a7fcd974-97a8-4a11-a8fe-cd4e01af668f`

---

**Via PayPal:**  
[![Doe pelo PayPal](https://img.shields.io/badge/Doar%20pelo-PayPal-005EA6?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/donate/?business=XHNZJAJU3MG58&no_recurring=0&item_name=Seu+apoio+%C3%A9+muito+importante+para+eu+continuar+criando+conte%C3%BAdos+de+qualidade+e+ajudar+mais+pessoas+a+aprender.&currency_code=BRL)

<img width="128" height="128" alt="QR Code" src="https://github.com/user-attachments/assets/9eaf16f3-d2c1-4ca1-8875-449722cbfe16" />


Seu apoio é muito importante para eu continuar criando conteúdos de qualidade e ajudar mais pessoas a aprender.

Muito obrigado! 🙏







