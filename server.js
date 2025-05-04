import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PANDASCORE_TOKEN = "qEhE7ZpYUoddzxd-s3KpGL-EyBoj1nmRcwEjJXCLQiMVuE408-M";

// Configuração do CORS
const allowedOrigins = [
  'https://furia-fan-bot-ebon.vercel.app',
  'https://furia-fan-bot-git-main-kagoboys-projects.vercel.app',
  'http://localhost:3001',
  'http://localhost:5173'
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'OPTIONS']
}));

// Middleware adicional para headers CORS
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Rota para partidas concluídas
app.get('/api/matches', async (req, res) => {
  try {
    const response = await axios.get('https://api.pandascore.co/csgo/matches?search[name]=furia&filter[finished]=true', {
      headers: {
        'accept': 'application/json',
        'authorization': `Bearer ${PANDASCORE_TOKEN}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao acessar PandaScore API:', error);
    res.status(500).json({ error: 'Erro ao obter dados da API' });
  }
});

// Rota para próximas partidas
app.get('/api/upcoming-matches', async (req, res) => {
  try {
    const response = await axios.get('https://api.pandascore.co/csgo/matches/upcoming?search[name]=FURIA', {
      headers: {
        'accept': 'application/json',
        'authorization': `Bearer ${PANDASCORE_TOKEN}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao acessar PandaScore API:', error);
    res.status(500).json({ error: 'Erro ao obter dados da API' });
  }
});

export default app;