import BackgroundLights from "../../components/BackgroundLights";
import FuriaChatbot from "../../components/ChatBot/ChatBot";
import MatchInfo from "../../components/MatchInfo/MatchInfo";
import Header from "../../components/Header/header";


export default function TelaJogos() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden flex items-center justify-center">
      {/* Brilhos de fundo */}

      <BackgroundLights />
      {/* Card central */}
      <div className="relative z-10 bg-[#0a0a0a] rounded-3xl shadow-[0_0_80px_20px_rgba(168,85,247,0.3)] p-10 w-9/10 flex flex-col items-center text-white mt-10 mb-10">
        {/* Conteúdo */}
        <Header/>

        <main className="flex flex-col items-center gap-8 min-h-[70vh]">
          <h1 className="text-5xl font-bold text-purple-400 text-center">
            Resultados das Partidas FURIOSAS!
          </h1>
          <div className="max-w-2xs md:max-w-5xl">
            <MatchInfo/>
          </div>
          
          {/* Chatbot */}
          <div className="p-4 mt-10 flex flex-col w-80 h-50">
            <FuriaChatbot />
          </div>
        </main>
      </div>
    </div>
  );
}
