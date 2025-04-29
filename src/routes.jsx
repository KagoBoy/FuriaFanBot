import {Routes, Route} from 'react-router-dom';
import Home from './pages/Challenge-01';
import TelaJogos from './pages/Challenge-01/jogos';

function RoutesComponent() {

    return (
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jogos" element={<TelaJogos/>} />
        <Route path="/contact" element={<div>Quiz</div>} />
        <Route path="/contact" element={<div>Ranking</div>} />
        </Routes>
    );

}

export default RoutesComponent;