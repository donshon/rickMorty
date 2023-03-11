
import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import About from './pages/About/About';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import UserContextProvider from './contexts/UserContext';
import ThemeContextProvider from './contexts/ThemeContext';



function App() {
  return (
    // <BrowserRouter>
    //netlify.com
      //<HashRouter>
      <ThemeContextProvider>
      <UserContextProvider>
        <Header />
        <Routes>
          
          <Route path="/about" element={<About />}/>
          <Route path="/details/:id" element={<CharacterDetails />}/>
          <Route path="/" element={<Homepage />}/>
        </Routes>
      </UserContextProvider>
      </ThemeContextProvider>
     // </HashRouter>
    //</BrowserRouter>
  );
}

export default App;
