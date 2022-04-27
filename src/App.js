import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
import NavBar from './components/NavBar';
import './App.css';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quotes" element={<Quotes />} />
    </Routes>
  </>
);

export default App;
