import { useState, useEffect } from 'react';
import { fetchMatches } from '../../services/api-jogos';

const MatchInfo = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchMatches();
        setMatches(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return {
      date: date.toLocaleDateString('pt-BR'),
      time: date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
  };

  if (loading) return <div className="text-center py-4">Carregando dados das partidas...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Erro: {error}</div>;
  if (!matches || matches.length === 0) return <div className="text-center py-4">Nenhuma partida encontrada.</div>;

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {matches.map((match, index) => {
        const tournamentName = match.serie?.full_name || 'Torneio desconhecido';
        const matchDate = match.games?.length > 0 ? 
          formatDateTime(match.games[0].begin_at) : 
          { date: 'Data desconhecida', time: 'Hora desconhecida' };
        
        const team1 = match.opponents?.[0]?.opponent;
        const team2 = match.opponents?.[1]?.opponent;
        const winnerId = match.winner_id;
        const isFinished = match.status === 'finished';

        if (!team1 || !team2) return null;

        const winnerInfo = isFinished && winnerId ? 
          `Vencedor: ${winnerId === team1.id ? team1.name : team2.name}` : 
          '';

        return (
          <MatchItem 
            key={match.id || index}
            tournamentName={tournamentName}
            matchDate={matchDate}
            team1={team1}
            team2={team2}
            winnerId={winnerId}
            isFinished={isFinished}
            winnerInfo={winnerInfo}
            games={match.games}
            formatDateTime={formatDateTime}
          />
        );
      })}
    </div>
  );
};

// Componente separado para cada item de partida
const MatchItem = ({ tournamentName, matchDate, team1, team2, winnerId, isFinished, winnerInfo, games, formatDateTime }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden mb-4">
      {/* Cabeçalho clicável - Parte ajustada */}
      <div 
        className="p-4 hover:bg-gray-800 cursor-pointer transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          {/* Time 1 - Largura fixa */}
          <div className={`flex items-center space-x-3 ${winnerId === team1.id ? 'text-green-400' : 'text-white'} w-2/5`}>
            <img 
              src={team1.image_url} 
              alt={`${team1.name} logo`} 
              className="w-10 h-10 object-contain"
              onError={(e) => e.target.style.display = 'none'} 
            />
            <div className="min-w-0">
              <div className="font-semibold truncate">{team1.name}</div>
              <div className="text-xs text-gray-400">{team1.acronym || 'N/A'}</div>
            </div>
          </div>

          {/* Container central - Agora perfeitamente centralizado */}
          <div className="flex flex-col items-center justify-center w-1/5 px-2">
            <div className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-1">MD3</div>
            <div className="text-lg font-bold text-gray-300">VS</div>
            <svg 
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 mt-1 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Time 2 - Largura fixa */}
          <div className={`flex items-center justify-end space-x-3 ${winnerId === team2.id ? 'text-green-400' : 'text-white'} w-2/5`}>
            <div className="min-w-0 text-right">
              <div className="font-semibold truncate">{team2.name}</div>
              <div className="text-xs text-gray-400">{team2.acronym || 'N/A'}</div>
            </div>
            <img 
              src={team2.image_url} 
              alt={`${team2.name} logo`} 
              className="w-10 h-10 object-contain"
              onError={(e) => e.target.style.display = 'none'} 
            />
          </div>
        </div>
      </div>

      {/* Conteúdo expandido - Mantido EXATAMENTE como estava */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4">
          {/* Informações do torneio */}
          <div className="border-t border-gray-700 pt-3">
            <h2 className="text-lg font-bold text-gray-300">{tournamentName}</h2>
            <div className="text-sm text-gray-400">Data: {matchDate.date} às {matchDate.time}</div>
          </div>

          {/* Vencedor */}
          {isFinished && winnerInfo && (
            <div className="bg-green-900/30 text-green-400 text-sm p-2 rounded text-center">
              {winnerInfo}
            </div>
          )}

          {/* Detalhes das partidas */}
          {games?.length > 0 && (
            <div className="bg-gray-800 p-3 rounded-lg">
              <h3 className="font-bold text-gray-300 mb-2">Detalhes das partidas:</h3>
              <ul className="space-y-2">
                {games.map((game, gameIndex) => (
                  <li key={game.id || gameIndex} className="flex justify-between items-center text-sm border-b border-gray-700 pb-2 last:border-0">
                    <div>
                      <span className="font-medium">Partida {game.position || 'N/A'}</span>
                      {game.begin_at && (
                        <span className="text-gray-400 ml-2">{formatDateTime(game.begin_at).time}</span>
                      )}
                    </div>
                    <div>
                      <span className={game.winner?.id === team1.id ? 'text-green-400' : 'text-red-400'}>
                        {game.winner?.id === team1.id ? team1.acronym || team1.name : team2.acronym || team2.name} venceu
                      </span>
                      {game.length && (
                        <span className="text-gray-400 ml-2">({Math.floor(game.length / 60)}min)</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MatchInfo;