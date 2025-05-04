// services/api-jogos.js

const BASE_URL = 'https://furia-fan-bot-ebon.vercel.app/' 
 

export const fetchMatches = async (params = {}) => {
  try {
    // Converte os parâmetros em query string formatada corretamente
    const queryParams = new URLSearchParams();
    
    // Processa cada parâmetro
    for (const [key, value] of Object.entries(params)) {
      if (Array.isArray(value)) {
        // Para arrays (ex: filter[status])
        value.forEach(v => queryParams.append(key, v));
      } else if (value !== undefined && value !== null) {
        // Para valores simples
        queryParams.append(key, value);
      }
    }

    const response = await fetch(`${BASE_URL}/api/matches?${queryParams.toString()}`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Erro ao buscar partidas');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro na API:', error);
    throw new Error(error.message || 'Falha na comunicação com o servidor');
  }
};

export const fetchUpcomingMatches = async (params = {}) => {
  try {
    const queryParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (Array.isArray(value)) {
        // Para arrays (ex: filter[status])
        value.forEach(v => queryParams.append(key, v));
      } else if (value !== undefined && value !== null) {
        // Para valores simples
        queryParams.append(key, value);
      }
    }
    
    const response = await fetch(`${BASE_URL}/api/upcoming-matches?${queryParams.toString()}`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Erro ao buscar próximas partidas');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
  }
};