import BackgroundLights from "../../components/BackgroundLights";

export default function Challenge01() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden flex items-center justify-center">
      {/* Brilhos de fundo */}
      
      <BackgroundLights />
      {/* Card central */}
      <div className="relative z-10 bg-[#0a0a0a] rounded-3xl shadow-[0_0_80px_20px_rgba(168,85,247,0.3)] p-10 w-9/10  flex flex-col items-center text-white">
        
        {/* Conteúdo */}
        <header className="flex items-center justify-between w-full mb-10">
          <img src="./src/assets/logo.png" alt="Logo da Furia" className="w-20 h-20" />
          <nav>
            <ul className="flex gap-8 text-xl">
              <li><a href="#home">Home</a></li>
              <li><a href="#jogos">Jogos</a></li>
              <li><a href="#quiz">Quiz</a></li>
              <li><a href="#ranking">Ranking</a></li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col items-center gap-8">
          <h1 className="text-5xl font-bold text-purple-400 text-center">Bem-vindo, FURIA Lover!</h1>

          {/* Último Resultado e Próximo Jogo */}
          <div className="flex gap-8 mt-8">
            <div className="bg-black/50 p-6 rounded-lg shadow-inner">
              <p>Último Resultado:</p>
              <p>FURIA 16 x 12 NAVI</p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg shadow-inner">
              <p>Próximo Jogo:</p>
              <p>Sáb | 18h | vs G2</p>
            </div>
          </div>

          {/* Botões */}
          <div className="flex gap-6 mt-8">
            <button className="bg-purple-700 hover:bg-purple-500 px-6 py-3 rounded-lg font-semibold shadow-lg shadow-purple-700/50 cursor-pointer">Começar Quiz</button>
            <button className="bg-yellow-500 hover:bg-yellow-400 px-6 py-3 rounded-lg font-semibold shadow-lg shadow-yellow-700/50 cursor-pointer">Ver Ranking</button>
          </div>

          {/* Chatbot */}
          <div className="bg-black/60 p-4 rounded-lg mt-10 flex flex-col shadow-inner w-80">
            <p className="text-gray-400 bg-black/50 shadow-inner">FURIA FanBot</p>
            <p>Olá! Quer saber quando é o próximo jogo?</p>
            <p>Digite: «agenda»</p>
          </div>
        </main>
      </div>
    </div>
  );
}
