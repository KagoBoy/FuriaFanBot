import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 3001;
const PANDASCORE_TOKEN = 'qEhE7ZpYUoddzxd-s3KpGL-EyBoj1nmRcwEjJXCLQiMVuE408-M';

// Configuração básica do CORS para permitir requisições do frontend
app.use(cors({
  origin: 'https://furia-fan-bot-ebon.vercel.app/' // Permite apenas requisições do seu frontend
}));

// Rota para obter os dados das partidas
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

app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});