const express = require('express');
const querystring = require('querystring');
const axios = require('axios'); // Para fazer requisições HTTP
const crypto = require('crypto');

const app = express();
const port = 8888;

const client_id = '8a068eccf6c04fd48c02835dd2f00feb';
const client_secret = 'c8942b0823414f91be6ca787b96e241d'; // 🔴 Não compartilhe essa informação publicamente!
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
