import React, { useState, useEffect } from 'react';
import { fetchMatches } from '../../services/api-jogos';
import { formatMatchDate, formatDay, formatTime } from '../../utils/dateFormatters';

const FuriaMatchesSummary = () => {
  const [lastMatch, setLastMatch] = useState(null);
  const [nextMatch, setNextMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [lastMatches, nextMatches] = await Promise.all([
          fetchMatches({ 
            team: 'FURIA',
            status: 'finished',
            sort: '-begin_at',
            limit: 1
          }),
          fetchMatches({
            team: 'FURIA',
            status: 'not_started',
            sort: 'begin_at',
            limit: 1
          })
        ]);

        setLastMatch(processLastMatch(lastMatches[0]));
        setNextMatch(processNextMatch(nextMatches[0]));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const processLastMatch = (match) => {
    if (!match) return null;
    
    const team1Score = match.results?.find(r => r.team_id === match.furia_id)?.score || '0';
    const team2Score = match.results?.find(r => r.team_id === match.opponents?.find(o => !o.opponent.name.includes('FURIA'))?.opponent.id)?.score || '0';
    
    return {
      team1: 'FURIA',
      team1_score: team1Score,
      team2: match.opponents?.find(o => !o.opponent.name.includes('FURIA'))?.opponent.name || 'Adversário',
      team2_score: team2Score,
      date: formatMatchDate(match.begin_at),
      tournament: match.serie?.name || 'Torneio',
      formatted_score: `${team1Score}x${team2Score}`
    };
  };

  const processNextMatch = (match) => {
    if (!match) return null;
    return {
      opponent: match.opponents?.find(o => !o.opponent.name.includes('FURIA'))?.opponent.name || 'Adversário',
      day: formatDay(match.begin_at),
      time: formatTime(match.begin_at),
      tournament: match.serie?.name || 'Torneio'
    };
  };

  if (loading) return <div className="text-center py-4">Carregando...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Erro: {error}</div>;

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-2xl mx-auto border-2 border-purple-600">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Último Resultado - Card Roxo - Layout Atualizado */}
        {lastMatch && (
          <div className="flex-1 border-2 border-purple-500 rounded-lg p-3 bg-gray-800">
            <h3 className="text-xs font-semibold text-purple-300 mb-1">ÚLTIMO RESULTADO</h3>
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xl font-bold">{lastMatch.team1}</span>
                <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text px-4">
                  {lastMatch.formatted_score}
                </span>
                <span className="text-xl font-bold">{lastMatch.team2}</span>
              </div>
              <div className="flex flex-col justify-between text-sm text-gray-400">
                <span>{lastMatch.date}</span>
                <span>{lastMatch.tournament}</span>
              </div>
            </div>
          </div>
        )}

        {/* Próximo Jogo - Card Dourado */}
        {nextMatch && (
          <div className="flex-1 border-2 border-yellow-500 rounded-lg p-3 bg-gray-800">
            <h3 className="text-xs font-semibold text-yellow-300 mb-1">PRÓXIMO JOGO</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-lg font-bold bg-yellow-500 text-gray-900 px-2 py-1 rounded">
                  {nextMatch.day}
                </div>
                <div className="text-lg font-bold">{nextMatch.time}</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium">vs {nextMatch.opponent}</div>
                <div className="text-xs text-gray-400">{nextMatch.tournament}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FuriaMatchesSummary;