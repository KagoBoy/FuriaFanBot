import BackgroundLights from "../../components/BackgroundLights";
import FuriaChatbot from "../../components/ChatBot/ChatBot";
import FuriaMatchesSummary from "../../components/MatchInfo/FuriaMatchs";
import logo from "../../assets/logo.png";

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden flex items-center justify-center">
      {/* Brilhos de fundo */}

      <BackgroundLights />
      {/* Card central */}
      <div className="relative z-10 bg-[#0a0a0a] rounded-3xl shadow-[0_0_80px_20px_rgba(168,85,247,0.3)] p-10 w-9/10  flex flex-col items-center text-white">
        {/* Conteúdo */}
        <header className="flex items-center justify-between w-full mb-10">
          <img
            src={logo}
            alt="Logo da Furia"
            className="w-20 h-20"
          />
          <nav>
            <ul className="flex gap-8 text-xl">
              <li>
                <a
                  className=" hover:bg-yellow-400 rounded-lg p-2 transition duration-300 bg-yellow-500"
                  href="/" 
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-yellow-400 rounded-lg p-2 transition duration-300"
                  href="/jogos"
                >
                  Jogos
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-yellow-400 rounded-lg p-2 transition duration-300"
                  href="/quiz"
                >
                  Quiz
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-yellow-400 rounded-lg p-2 transition duration-300"
                  href="/ranking"
                >
                  Ranking
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col items-center gap-8 min-h-[70vh]">
          <h1 className="text-5xl font-bold text-purple-400 text-center">
            Bem-vindo, FURIA Lover!
          </h1>

          <FuriaMatchesSummary/>

          

          {/* Botões */}
          <div className="flex gap-6 mt-8">
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
          <div className="p-4 mt-10 flex flex-col w-80 h-50">
            <FuriaChatbot />
          </div>
        </main>
      </div>
    </div>
  );
}
