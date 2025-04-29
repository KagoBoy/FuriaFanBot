import express from 'express';
import cors from 'cors';
import axios from 'axios';

import Match from './models/Match';
const app = express();
const PORT = 3001;

// Configuração básica do CORS para permitir requisições do frontend
app.use(cors({
  origin: 'http://localhost:5173' // Permite apenas requisições do seu frontend
}));

// Rota para obter os dados das partidas
app.get('/api/matches', async (req, res) => {
  try {
    const response = await axios.get('https://api.pandascore.co/csgo/matches?search[name]=furia', {
      headers: {
        'accept': 'application/json',
        'authorization': 'Bearer qEhE7ZpYUoddzxd-s3KpGL-EyBoj1nmRcwEjJXCLQiMVuE408-M'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao acessar PandaScore API:', error);
    res.status(500).json({ error: 'Erro ao obter dados da API' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});