import { useState, useRef } from "react";
import { QuizService } from "../services/quizService";
import fallen from "../assets/furia/fallen.jpeg";
import fallenechello from "../assets/furia/fallenechello.jpeg";
import probleminha from "../assets/furia/download.gif";
import furia from "../assets/furia/furia.jpeg";

export default function QuizFuria() {
  const [quizState, setQuizState] = useState("start"); // 'start', 'playing', 'results'
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [userAnswer, setUserAnswer] = useState(null);
  const [progress, setProgress] = useState({
    current: 0,
    total: 5,
    percentage: 0,
  });
  const [results, setResults] = useState({ score: 0, total: 0 });

  const quizService = useRef(new QuizService());

  const resultImages = [
    {
      src: fallen,
      alt: "fallen",
    },
    {
      src: fallenechello,
      alt: "fcallen e chello",
    },
    {
      src: furia,
      alt: "furia",
    },
    {
      src: probleminha,
      alt: "probleminha",
    },
  ];

  const [randomImage, setRandomImage] = useState(null);

  // Iniciar novo quiz
  const startQuiz = () => {
    const firstQuestion = quizService.current.startNewQuiz();
    setCurrentQuestion(firstQuestion);
    setQuizState("playing");
    setUserAnswer(null);
    startTimer();
    updateProgress();
  };

  // Temporizador
  const startTimer = () => {
    quizService.current.startTimer(
      (time) => {
        setTimeLeft(time);
      },
      () => {
        handleTimeOut();
      }
    );
  };

  const handleTimeOut = () => {
    setUserAnswer(-1); // Indica que o tempo acabou
    quizService.current.stopTimer();
  };

  // Verificar resposta
  const checkAnswer = (selectedIndex) => {
    quizService.current.stopTimer();
    const result = quizService.current.checkAnswer(selectedIndex);
    setUserAnswer({
      selected: selectedIndex,
      correct: result.correctIndex,
    });
  };

  // Próxima pergunta
  const nextQuestion = () => {
    const nextQuestion = quizService.current.nextQuestion();
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
      setUserAnswer(null);
      startTimer();
      updateProgress();
    } else {
      // Fim do quiz
      setResults(quizService.current.getResults());
      setRandomImage(
        resultImages[Math.floor(Math.random() * resultImages.length)]
      );
      setQuizState("results");
    }
  };

  // Atualizar progresso
  const updateProgress = () => {
    setProgress(quizService.current.getProgress());
  };

  // Estilo para opções de resposta
  const getOptionClass = (index) => {
    if (userAnswer === null) {
      return "w-full bg-gray-800 text-white p-3 mb-2 text-left hover:bg-yellow-500 hover:text-black transition cursor-pointer";
    }

    if (index === userAnswer.correct) {
      return "w-full bg-green-600 text-white p-3 mb-2 text-left cursor-not-allowed";
    }

    if (index === userAnswer.selected && index !== userAnswer.correct) {
      return "w-full bg-red-600 text-white p-3 mb-2 text-left cursor-not-allowed";
    }

    return "w-full bg-gray-800 text-gray-500 p-3 mb-2 text-left cursor-not-allowed";
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-center min-h-[40vh] max-h-[40vh] flex flex-col justify-between">
      <h2 className="text-2xl font-bold mb-4">Quiz FURIA CS:GO</h2>

      {quizState === "start" && (
        <div className="mb-8">
          <p className="mb-6">Teste seu conhecimento sobre o time!</p>
          <button
            onClick={startQuiz}
            className="bg-yellow-500 text-black px-6 py-2 font-bold rounded hover:bg-red-600 hover:text-white cursor-pointer transition duration-300"
          >
            Começar Quiz
          </button>
        </div>
      )}

      {quizState === "playing" && currentQuestion && (
        <>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">
              {progress.current}. {currentQuestion.question}
            </h3>

            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => userAnswer === null && checkAnswer(index)}
                className={getOptionClass(index)}
                disabled={userAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="w-full bg-gray-800 h-4 mb-4 rounded-full">
            <div
              className="bg-yellow-500 h-4 rounded-full"
              style={{ width: `${progress.percentage}%` }}
            ></div>
          </div>

          <div className="flex justify-between mb-6">
            <span>
              Pergunta {progress.current}/{progress.total}
            </span>
            <span
              className={`font-bold ${timeLeft <= 3 ? "text-red-600" : ""}`}
            >
              {timeLeft}s
            </span>
          </div>

          {userAnswer !== null && (
            <button
              onClick={nextQuestion}
              className="bg-yellow-500 text-black px-6 py-2 font-bold rounded hover:bg-red-600 hover:text-white cursor-pointer transition duration-300"
            >
              {progress.current < progress.total
                ? "Próxima Pergunta"
                : "Ver Resultado"}
            </button>
          )}
        </>
      )}

      {quizState === "results" && (
        <div className="mb-8"> 
          {randomImage && (
            <div className="mb-6">
              <img
                src={randomImage.src}
                alt={randomImage.alt}
                className="mx-auto max-h-60 rounded-lg"
              />
              <p className="mt-2 text-sm text-gray-400"></p>
            </div>
          )}

          <h3 className="text-xl font-bold mb-4">Seu resultado:</h3>
          <p className="text-lg mb-4">
            Você acertou {results.score} de {results.total} perguntas!
          </p>
          

          <button
            onClick={startQuiz}
            className="bg-yellow-500 text-black px-6 py-2 font-bold rounded hover:bg-red-600 hover:text-white"
          >
            Tentar Novamente
          </button>
        </div>
      )}
    </div>
  );
}
