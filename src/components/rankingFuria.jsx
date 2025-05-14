import React from "react";
import vitalityLogo from "../assets/logos/vitality.png";
import spiritLogo from "../assets/logos/spirit.png";
import mouzLogo from "../assets/logos/mouz.png";
import naviLogo from "../assets/logos/natusvincere.png";
import auroraLogo from "../assets/logos/aurora.png";
import mongolzLogo from "../assets/logos/themongolz.png";
import g2Logo from "../assets/logos/g2.png";
import falconsLogo from "../assets/logos/falcons.png";
import fazeLogo from "../assets/logos/faze.png";
import liquidLogo from "../assets/logos/liquid.png";
import gamerLegionLogo from "../assets/logos/gamerlegion.png";
import virtusProLogo from "../assets/logos/vp.png";
import threeDMAXLogo from "../assets/logos/3dmax.png";
import complexityLogo from "../assets/logos/complexity.png";
import astralisLogo from "../assets/logos/astralis.png";
import painLogo from "../assets/logos/pain.png";
import furiaLogo from "../assets/logo.png";
import mibrLogo from "../assets/logos/mibr.png";
import sawLogo from "../assets/logos/saw.png";
import m80Logo from "../assets/logos/m80.png";
import defaultLogo from "../assets/logos/default.png";

export default function RankingFuria() {
  const rankingData = {
    lastUpdated: new Date().toISOString(),
    teams: [
      {
        position: 1,
        name: "Vitality",
        points: 1000,
        players: ["apEx", "ropz", "ZywOo", "flameZ", "mezii"],
        logo: vitalityLogo,
      },
      {
        position: 2,
        name: "Spirit",
        points: 645,
        players: ["chopper", "sh1ro", "magixx", "zont1x", "donk"],
        logo: spiritLogo,
      },
      {
        position: 3,
        name: "MOUZ",
        points: 582,
        players: ["Brollan", "torzsi", "Spinx", "jimpphat", "xertioN"],
        logo: mouzLogo,
      },
      {
        position: 4,
        name: "Natus Vincere",
        points: 481,
        players: ["Aleksib", "iM", "b1t", "jL", "w0nderful"],
        logo: naviLogo,
      },
      {
        position: 5,
        name: "Aurora",
        points: 413,
        players: ["MAJ3R", "XANTARES", "woxic", "Wicadia", "jottAAA"],
        logo: auroraLogo,
      },
      {
        position: 6,
        name: "The Mongolz",
        points: 407,
        players: ["bLitz", "Techno", "Senzu", "mzinho", "910"],
        logo: mongolzLogo,
      },
      {
        position: 7,
        name: "G2",
        points: 381,
        players: ["Snax", "huNter", "malbsMd", "hades", "HeavyGod"],
        logo: g2Logo,
      },
      {
        position: 8,
        name: "Falcons",
        points: 331,
        players: ["Niko", "Magisk", "TeSeS", "mONESY", "kyxsan"],
        logo: falconsLogo,
      },
      {
        position: 9,
        name: "FaZe",
        points: 269,
        players: ["karrigan", "rain", "ELiGE", "frozen", "broky"],
        logo: fazeLogo,
      },
      {
        position: 10,
        name: "Liquid",
        points: 129,
        players: ["NAF", "NertZ", "Twistzz", "siuhy", "ultimate"],
        logo: liquidLogo,
      },
      {
        position: 11,
        name: "GamerLegion",
        points: 108,
        players: ["REZ", "ztr", "Tauson", "sl3nd", "PR"],
        logo: gamerLegionLogo,
      },
      {
        position: 12,
        name: "Virtus.pro",
        points: 186,
        players: ["electroNic", "FL1T", "fame", "FL4MUS", "ICY"],
        logo: virtusProLogo,
      },
      {
        position: 13,
        name: "3DMAX",
        points: 168,
        players: ["bodyy", "Maka", "Lucky", "Ex3rcice", "Graviti"],
        logo: threeDMAXLogo,
      },
      {
        position: 14,
        name: "Complexity",
        points: 129,
        players: ["JT", "hallzerk", "Grim", "Cxzi", "nicx"],
        logo: complexityLogo,
      },
      {
        position: 15,
        name: "Astralis",
        points: 92,
        players: ["device", "stavn", "jabbi", "Staehr"],
        logo: astralisLogo,
      },
      {
        position: 16,
        name: "pain",
        points: 78,
        players: ["dgt", "biguzera", "dav1deuS", "nqz", "snow"],
        logo: painLogo,
      },
      {
        position: 17,
        name: "FURIA",
        points: 68,
        players: ["fallen", "yuurih", "YEKINDAR", "KSCERATO", "molodoy"],
        logo: furiaLogo,
      },
      {
        position: 18,
        name: "MIBR",
        points: 68,
        players: ["exit", "Lucaozy", "saffee", "brnz4n", "insani"],
        logo: mibrLogo,
      },
      {
        position: 19,
        name: "SAW",
        points: 58,
        players: ["MUTiRiS", "story", "Ag1l", "AZUWU", "cej0t"],
        logo: sawLogo,
      },
      {
        position: 20,
        name: "M80",
        points: 55,
        players: ["slaxz", "Swisher", "reck", "s1n", "Lake"],
        logo: m80Logo,
      },
    ],
  };

  return (
    <div className="relative z-10 bg-[#0a0a0a] rounded-3xl shadow-[0_0_80px_20px_rgba(255,238,88,0.08)] p-4 md:p-8 w-full max-[400px]:w-[95%] md:w-11/12 max-w-6xl mx-auto">
      <div className="bg-g------------------------ray-800 p-4 md:p-6 rounded-lg mb-6 border-l-4 border-yellow-500">
        <div className="flex flex-col">
          <div className="flex items-center mb-3">
            <img
              src={rankingData.teams[16].logo}
              alt="FURIA"
              className="w-8 h-8 md:w-12 md:h-12 mr-3"
              onError={(e) => (e.target.src = defaultLogo)}
            />
            <div>
              <h2 className="text-base md:text-2xl font-bold">
                <span className="text-yellow-400">
                  #{rankingData.teams[16].position}
                </span>{" "}
                - {rankingData.teams[16].name}
              </h2>
              <p className="text-xs md:text-lg text-gray-300">
                {rankingData.teams[16].points} pontos HLTV
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 md:gap-4 gap-2">
            {rankingData.teams[16].players.map((player, index) => (
              <div key={index} className="text-center">
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-gray-700 mx-auto mb-1 flex items-center justify-center text-yellow-400 text-xs md:text-base font-bold">
                  {player.charAt(0).toUpperCase()}
                </div>
                <p className="text-xs font-medium truncate">{player}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabela de ranking */}
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead className="bg-gray-700 hidden md:table-header-group">
            <tr className="text-xs md:text-base">
              <th className="px-3 py-2 md:px-6 md:py-3 text-left">#</th>
              <th className="px-3 py-2 md:px-6 md:py-3 text-left">Time</th>
              <th className="px-3 py-2 md:px-6 md:py-3 text-left">Pontos</th>
              <th className="px-3 py-2 md:px-6 md:py-3 text-left hidden md:table-cell">
                Jogadores
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {rankingData.teams.map((team) => (
              <tr
                key={team.position}
                className={`hover:bg-gray-700 ${
                  team.name === "FURIA" ? "bg-gray-800" : ""
                }`}
              >
                <td className="text-sm md:text-base px-3 py-2 md:px-6 md:py-4 align-top md:align-middle">
                  #{team.position}
                </td>
                <td className="px-3 py-2 md:px-6 md:py-4 font-medium align-top md:align-middle">
                  <div className="flex items-start">
                    <img
                      src={team.logo || defaultLogo}
                      alt={`${team.name} logo`}
                      className="w-4 h-4 md:w-6 md:h-6 mr-2 mt-1 flex-shrink-0 object-contain"
                      onError={(e) => (e.target.src = defaultLogo)}
                    />
                    <span className="text-base md:text-2xl truncate max-w-[115px] max-[400px]:max-w-[60px] md:max-w-none">
                      {team.name}
                    </span>
                  </div>
                </td>
                <td className="text-sm md:text-base px-3 py-2 md:px-6 md:py-4 align-top md:align-middle">
                  {team.points}
                </td>
                <td className="px-3 py-2 md:px-6 md:py-4">
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {team.players.map((player, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-600 px-1 py-0.5 md:px-2 md:py-1 rounded"
                      >
                        {player}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center text-gray-400 text-sm">
        Dados estáticos - Atualizado em{" "}
        {new Date(rankingData.lastUpdated).toLocaleString("pt-BR")}
      </div>
    </div>
  );
}
