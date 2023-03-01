
import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About/About';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import UserContextProvider from './contexts/UserContext';
import ThemeContextProvider from './contexts/ThemeContext';



function App() {
  return (
    <BrowserRouter>
      <HashRouter basename="/">
      <ThemeContextProvider>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/details/:id" element={<CharacterDetails />}/>
        </Routes>
      </UserContextProvider>
      </ThemeContextProvider>
      </HashRouter>
    </BrowserRouter>
  );
}

export default App;
