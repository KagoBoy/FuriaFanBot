import { useState, useEffect, useRef } from 'react';
import logo from "../../assets/logo.png";
import "./chatbot.css";
import { fetchUpcomingMatches } from "../../services/api-jogos"; 

const FuriaChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá fã da FURIA! Como posso te ajudar hoje?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const fetchNextMatch = async () => {
    try {
      const matches = await fetchUpcomingMatches();
      
      if (!matches || matches.length === 0) {
        return "Não há jogos agendados no momento. Acompanhe nossas redes para novidades!";
      }
  
      const nextMatch = matches[0];
      const opponent = nextMatch.opponents?.find(o => !o.opponent.name.includes('FURIA'))?.opponent.name || "oponente a definir";
      const date = new Date(nextMatch.scheduled_at).toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      const streamUrl = nextMatch.streams_list?.[0]?.raw_url || 'furia.gg/live';
      const tournamentName = nextMatch.league?.name || 'Torneio sem nome';
  
      return `🎮 Próximo jogo da FURIA:\n🆚 ${opponent}\n📅 ${date}\n🏆 ${tournamentName}\n\nAcompanhe em: ${streamUrl}`;
    } catch (error) {
      console.error("Erro ao buscar próximo jogo:", error);
      throw error;
    }
  };

  const botResponses = {
    "história": {
      response: "🐯 A FURIA foi fundada em 2017 e revolucionou o cenário de CS:GO brasileiro! Em 2022, fizemos história sendo a primeira equipe BR a chegar no Top 1 da HLTV!",
      keywords: ["hist[oó]ria", "fundac[aã]ao", "origem", "come[cç]o", "in[ií]cio", "quando criaram"]
    },
    "jogadores": {
      response: "👥 Elenco atual (2024):\n- KSCERATO (Ídolo)\n- yuurih (Fuzileiro)\n- FalleN (Lenda)\n- YEKINDAR\n- molodoy\n\nTreinador: sidde\n\nQuer saber sobre algum específico?",
      keywords: ["jogadores", "elenco", "time", "player", "roster", "equipe", "quem joga"]
    },
    "próximo jogo": {
      response: async () => {
        try {
          return await fetchNextMatch();
        } catch (error) {
          console.error("Erro ao buscar próximo jogo:", error);
          return "Não consegui verificar o próximo jogo agora. Tente novamente mais tarde ou confira no site da FURIA!";
        }
      },
      keywords: ["pr[oó]ximo jogo", "pr[oó]ximo[s] jogo[s]", "quando joga", "pr[oó]xima[s] partida[s]", "calend[aá]rio", "agenda", "datas"]
    },
    "títulos": {
      response: "🏆 Principais títulos:\n- ESL Pro League S17 (2023)\n- IEM Dallas (2022)\n- EPL S13 (Top 4)\n- 4x Campeã Brasileira\n\nA FURIA já ganhou mais de $5M em premiações!",
      keywords: ["t[ií]tulos", "conquistas", "pr[eê]mios", "campeonatos", "vencer", "trof[eé]us", "conquista[s]"]
    },
    "ingressos": {
      response: "🎟️ Ingressos para os jogos:\n- Site oficial: www.furia.gg/tickets\n- Sympla: busca por 'FURIA CSGO'\n- Na porta do estádio (no dia do evento)\n\nDica: Siga nossas redes para alertas de venda!",
      keywords: ["ingresso[s]", "comprar ingresso[s]", "onde assistir", "bilhete[s]", "ticket[s]", "como assistir"]
    },
    "loja": {
      response: "🛍️ Loja oficial:\n- Camisetas assinadas pelo time\n- Mouses personalizados\n- Acessórios exclusivos\n\n🔗 furia.gg/loja\n\nTemos frete grátis para todo Brasil!",
      keywords: ["loja[s]", "produto[s]", "merch", "camiseta[s]", "jerseys", "comprar", "mouse", "headset"]
    },
    "redes sociais": {
      response: "📱 Redes sociais:\n- Twitter: @furiagg\n- Instagram: @furiagg\n- TikTok: @furia\n- YouTube: FURIA TV\n\nNos stories tem bastidor exclusivo! 😉",
      keywords: ["rede[s] sociais", "instagram", "twitter", "tiktok", "social media", "youtube", "discord", "facebook"]
    },
    "fallen": {
      response: "🔫 FalleN - O Sniper Lendário!\n- Maior ícone do CS brasileiro\n- Dono da FURIA desde 2023\n- 2x Major Champion (MLG 2016 e Boston 2018)\n\nCuriosidade: Ele criou a maior escola de CS do Brasil!",
      keywords: ["fallen", "gabriel", "toledo", "awp", "sniper", "lenda"]
    },
    "kscerato": {
      response: "💥 KSCERATO - O Fuzileiro!\n- Ídolo da FURIA desde 2018\n- Top 20 do mundo por 3 anos seguidos\n- Apelido: 'O Predador'\n\nSeu estilo agressivo é nossa marca registrada!",
      keywords: ["kscerato", "kaike", "cerato", "fuzil", "entry", "predador"]
    },
    "estádio": {
      response: "🏟️ Arena FURIA:\n- Local: São Paulo (SP)\n- Capacidade: 500 pessoas\n- Experiência completa com meet & greet\n\nPróximo evento aberto: 25/11 - FURIA vs MIBR",
      keywords: ["est[aá]dio[s]", "arena[s]", "casa[s]", "onde jogam", "local", "endereco", "sede"]
    },
    "patrocinadores": {
      response: "🤝 Principais parceiros:\n- HyperX (Periféricos)\n- Mercado Livre (Patrocínio Master)\n- Banco Master\n- TNT Energy Drink\n\nNosso time só cresce com esses apoios!",
      keywords: ["patrocinador[e][s]", "parceiro[s]", "hyperx", "mercado livre", "banco master", "tnt", "sponsor"]
    },
    "jogador x": {
      response: "🔍 Posso te contar sobre:\n- KSCERATO\n- yuurih\n- FalleN\n- chelo\n- VINI\n\ndigite o nome do jogador que quer saber mais!",
      keywords: ["jogador", "sobre", "informacao", "biografia", "carreira"]
    },
    "elogio": {
      response: "💛 Obrigado pelo apoio! A FURIA é grande por ter fãs incríveis como você! Vamos juntos rumo ao Top 1! #VEMFURIA",
      keywords: ["amo", "love", "incrivel", "demais", "brabo", "lindo", "perfeito", "melhor"]
    },
    "piada": {
      response: "😄 Por que o KSCERATO não usa escada?\nPorque ele já prefere entrar rushando! #FURIAstyle\n\nQuer outra? Me diga 'conta outra'!",
      keywords: ["piada[s]", "humor", "meme", "engracado", "zoera", "rir"]
    },
    "guias": {
      response: "🎮 Guias FURIA:\n- Como jogar como KSCERATO: furia.gg/playlikeks\n- Configs do time: furia.gg/settings\n- Estratégias: furia.gg/strats\n\nQuer dicas de CS?",
      keywords: ["guia[s]", "dica[s]", "tutorial", "como jogar", "config", "configuracao", "crosshair"]
    },
    "default": {
      response: "🤔 Não entendi... Posso te ajudar com:\n- História da FURIA\n- Elenco atual\n- Próximos jogos\n- Títulos\n- Ingressos\n- Loja oficial\n\nPergunte algo como: 'Quando é o próximo jogo?'"
    }
  };

  const createFlexibleRegex = (keywords) => {
    // Adiciona suporte a plurais opcionais (s no final)
    const pluralAwareKeywords = keywords.map(keyword => {
      // Caso especial para palavras terminadas com 'ão' -> 'ões'
      if (keyword.includes('[aã]o')) {
        return keyword.replace('[aã]o', '[aã]o(?:s|es)?');
      }
      // Adiciona 's' opcional no final das palavras
      return keyword.replace(/(\w+)(\]|\))/g, '$1s?$2');
    });
  
    return new RegExp(`\\b(${pluralAwareKeywords.join("|")})\\b`, "i");
  };

  const findBestResponse = async (userInput) => {
    const normalizedInput = userInput.toLowerCase();
    
    for (const [topic, data] of Object.entries(botResponses)) {
      if (topic === "default") continue;
      
      const regex = createFlexibleRegex(data.keywords);
      if (regex.test(normalizedInput)) {
        return typeof data.response === 'function' 
          ? await data.response() 
          : data.response;
      }
    }
    
    return botResponses.default.response;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "" || isLoading) return;

    setIsLoading(true);
    
    // Adiciona mensagem do usuário
    setMessages(prev => [...prev, { text: inputValue, sender: "user" }]);
    setInputValue("");

    try {
      const response = await findBestResponse(inputValue);
      setMessages(prev => [...prev, { text: response, sender: "bot" }]);
    } catch (error) {
      console.error("Erro ao gerar resposta:", error);
      setMessages(prev => [...prev, { 
        text: "Ocorreu um erro ao processar sua pergunta. Tente novamente mais tarde.", 
        sender: "bot" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 md:bottom-40 md:right-40 lg:bottom-40 lg:right-40 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-gray-900 border-2 border-yellow-500 rounded-t-lg flex flex-col">
          <div className="bg-yellow-500 text-black p-3 font-bold rounded-t-lg flex justify-between items-center">
            <span>FURIA Bot</span>
            <button onClick={() => setIsOpen(false)} className="text-black">
              ✕
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${msg.sender === "bot" ? "text-left" : "text-right"}`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${msg.sender === "bot" 
                    ? "bg-gray-700 text-white bot-message" 
                    : "bg-yellow-500 text-black"}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left">
                <div className="inline-block p-2 rounded-lg bg-gray-700 text-white">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-gray-700 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-gray-800 text-white p-2 rounded-l focus:outline-none"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              className="bg-yellow-500 text-black px-4 rounded-r font-bold hover:bg-yellow-400 disabled:opacity-50"
              disabled={isLoading}
            >
              →
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-yellow-500 text-black p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all"
        >
          <img src={logo} alt="Chat" className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

export default FuriaChatbot;