import BackgroundLights from "../../components/BackgroundLights";
import ChatBot from "../../components/ChatBot/ChatBot";
import MatchInfo from "../../components/MatchInfo/MatchInfo";


export default function TelaJogos() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden flex items-center justify-center">
      {/* Brilhos de fundo */}

      <BackgroundLights />
      {/* Card central */}
      <div className="relative z-10 bg-[#0a0a0a] rounded-3xl shadow-[0_0_80px_20px_rgba(168,85,247,0.3)] p-10 w-9/10  flex flex-col items-center text-white">
        {/* Conteúdo */}
        <header className="flex items-center justify-between w-full mb-10">
          <img
            src="./src/assets/logo.png"
            alt="Logo da Furia"
            className="w-20 h-20"
          />
          <nav>
            <ul className="flex gap-8 text-xl">
              <li>
                <a
                  className=" hover:bg-yellow-500 rounded-lg p-2 transition duration-300"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-yellow-400 rounded-lg p-2 transition duration-300 bg-yellow-500"
                  href="/jogos"
                >
                  Jogos
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-yellow-500 rounded-lg p-2 transition duration-300"
                  href="/quiz"
                >
                  Quiz
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-yellow-500 rounded-lg p-2 transition duration-300"
                  href="/ranking"
                >
                  Ranking
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col items-center gap-8">
          <h1 className="text-5xl font-bold text-purple-400 text-center">
            Resultados das Partidas FURIOSAS!
          </h1>
          
          <MatchInfo />
          {/* Chatbot */}
          <div className="p-4 mt-10 flex flex-col w-80 h-50">
            <ChatBot />
          </div>
        </main>
      </div>
    </div>
  );
}
