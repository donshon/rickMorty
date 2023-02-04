
import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About/About';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
