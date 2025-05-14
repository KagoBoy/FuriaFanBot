import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar se o menu está aberto
  const [currentPath, setCurrentPath] = useState(""); // Estado para armazenar a rota

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);


  const getNavItemClass = (path) => 
    `hover:bg-yellow-400 rounded-lg p-2 transition duration-300 ${
      currentPath === path ? "bg-yellow-500" : ""
    }`;
  return (
    <div className="w-full">
      <header className="flex items-center justify-between mb-10">
        <img src={logo} alt="Logo da Furia" className="w-20 h-20" />

        {/* Botão do menu hamburguer (visível apenas em mobile) */}
        <button
          className="md:hidden bg-yellow-500 hover:bg-yellow-400 rounded-lg p-2 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-xl">
            <li>
              <a
                className={getNavItemClass("/")}
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={getNavItemClass("/jogos")}
                href="/jogos"
              >
                Jogos
              </a>
            </li>
            <li>
              <a
                className={getNavItemClass("/quiz")}
                href="/quiz"
              >
                Quiz
              </a>
            </li>
            <li>
              <a
                className={getNavItemClass("/ranking")}
                href="/ranking"
              >
                Ranking
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Menu dropdown (aparece apenas em mobile quando aberto) */}
      {isMenuOpen && (
        <div className="z-50 md:hidden w-50 top-30 right-10 bg-[#1a1a1a] rounded-lg p-4 absolute">
          <ul className="flex flex-col gap-4 text-xl">
            <li>
              <a
                className={getNavItemClass("/")}
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={getNavItemClass("/jogos")}
                href="/jogos"
              >
                Jogos
              </a>
            </li>
            <li>
              <a
                className={getNavItemClass("/quiz")}
                href="/quiz"
              >
                Quiz
              </a>
            </li>
            <li>
              <a
                className={getNavItemClass("/ranking")}
                href="/ranking"
              >
                Ranking
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
