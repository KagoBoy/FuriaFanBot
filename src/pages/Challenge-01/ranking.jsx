import React from "react";
import BackgroundLights from "../../components/BackgroundLights";
import QuizFuria from "../../components/quizFuria";
import FuriaChatbot from "../../components/ChatBot/ChatBot";
import RankingFuria from "../../components/rankingFuria";
import Header from "../../components/Header/header";

export default function TelaRanking() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden flex items-center justify-center">
      <BackgroundLights />
      <div className="relative z-10 bg-[#0a0a0a] rounded-3xl shadow-[0_0_80px_20px_rgba(168,85,247,0.3)] p-10 w-9/10 flex flex-col items-center text-white mt-10 mb-10">
        <Header/>
        <h1 className="text-3xl font-bold text-yellow-400">Ranking HLTV - CS2</h1>
        <div className="flex-1 flex items-center justify-center">
            <RankingFuria/>
        </div>
        
        <div className="p-4 mt-6 flex flex-col w-80 h-50">
            <FuriaChatbot />
        </div>

      </div>
    </div>
  );
}
