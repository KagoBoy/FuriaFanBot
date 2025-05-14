import BackgroundLights from "../../components/BackgroundLights";
import FuriaChatbot from "../../components/ChatBot/ChatBot";
import FuriaMatchesSummary from "../../components/MatchInfo/FuriaMatchs";
import Header from "../../components/Header/header";


export default function Home() {

  return (
    
    <div className="relative bg-black min-h-screen max-h-screen overflow-hidden flex items-center justify-center">
      <BackgroundLights />
      <div className="relative z-10 bg-[#0a0a0a] rounded-3xl shadow-[0_0_80px_20px_rgba(168,85,247,0.3)] p-10 w-9/10 flex flex-col items-center  text-white mt-10 mb-10">
        <Header/>

        <main className="flex flex-col items-center gap-8 max-h-[70vh] md:min-h-[70vh]">
          <h1 className="text-3xl md:text-5xl font-bold text-purple-400 text-center">
            Bem-vindo, FURIA Lover!
          </h1>

          <div className="w-full max-h-[295px] overflow-y-auto">
            <FuriaMatchesSummary/>
          </div>
          

          

          {/* Botões */}
          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <button className="bg-purple-700 hover:bg-purple-500 px-6 py-3 rounded-lg font-semibold shadow-lg shadow-purple-700/50 cursor-pointer"
            onClick={() => window.location.href = "/quiz"}>
              Começar Quiz
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 px-6 py-3 rounded-lg font-semibold shadow-lg shadow-yellow-700/50 cursor-pointer"
            onClick={() => window.location.href = "/ranking"}>
              Ver Ranking
            </button>
          </div>

          
          {/* Chatbot */}
          <div className="w-full max-w-[90vw] max-h-[300px]">
            <FuriaChatbot />
          </div>
        </main>
      </div>
    </div>
  );
}