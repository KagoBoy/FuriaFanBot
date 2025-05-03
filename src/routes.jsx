import {Routes, Route} from 'react-router-dom';
import Home from './pages/Challenge-01';
import TelaJogos from './pages/Challenge-01/jogos';
import TelaQuiz from './pages/Challenge-01/quiz';

function RoutesComponent() {

    return (
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jogos" element={<TelaJogos/>} />
        <Route path="/quiz" element={<TelaQuiz/>} />
        <Route path="/ranking" element={<div>Ranking</div>} />
        </Routes>
    );

}

export default RoutesComponent;