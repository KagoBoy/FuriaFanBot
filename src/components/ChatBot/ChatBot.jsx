import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const respostas = {
  "quando é o próximo jogo": "🔥 O próximo jogo da FURIA é sábado, às 18h, contra a G2!",
  "qual foi o resultado do último jogo": "Vencemos a NAVI por 16x12! 🏆",
  "quem são os jogadores da furia": "KSCERATO, yuurih, chelo, saffee e arT! 🐆",
  "quero jogar o quiz": "🎯 Clique no botão 'Começar Quiz' para testar seu conhecimento!",
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    const botResponseText = buscarResposta(input.toLowerCase());
    const botMessage = { text: botResponseText, sender: "bot" };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const buscarResposta = (pergunta) => {
    for (let chave in respostas) {
      if (pergunta.includes(chave)) {
        return respostas[chave];
      }
    }
    return "🤔 Não entendi... tente perguntar de outra forma!";
  };

  return (
    <div className="fixed bottom-30 right-60 flex flex-col items-end">
      {/* Botão flutuante */}
      <button 
        onClick={toggleChat} 
        className="bg-purple-700 p-3 rounded-full shadow-lg hover:bg-purple-800 transition"
      >
        <MessageSquare className="text-white" size={28} />
      </button>

      {/* Caixa de Chat */}
      {isOpen && (
        <div className="mt-2 w-100 bg-black/90 backdrop-blur-md border border-purple-700 rounded-lg p-4 shadow-lg flex flex-col">
          <div className="h-64 overflow-y-auto mb-2 flex flex-col gap-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md max-w-[80%] ${
                  msg.sender === "user" ? "bg-purple-500 self-end" : "bg-gray-700 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <input
              type="text"
              className="flex-1 p-2 rounded-l-md bg-gray-800 text-white outline-none"
              placeholder="Digite sua pergunta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-purple-700 p-2 rounded-r-md hover:bg-purple-800"
            >
              📤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
