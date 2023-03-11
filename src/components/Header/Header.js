import React, {useContext} from 'react'
import './Header.css'
import { UserContext } from './../../contexts/UserContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';


function Header() {
  //extract value from global context
  //NOTE use {} not []
  const {userName, setUserName} = useContext(UserContext);
  
  //extract theme values
  const {darkMode, setDarkMode} = useContext(ThemeContext);

  const handleTheme = () => {
    setDarkMode(!darkMode)
    //save in local storage
    localStorage.setItem("darkMode", !darkMode)
  }

  return (
    <div className={darkMode? "header-container header-dark": "header-container"}>
        <div className="header-links">
            <Link to="/"><a>Home</a></Link>
            <Link to="/about"><a>About</a></Link>
        </div>
        <div className="welcome">
          <p>Welcome {userName}</p>
          <button onClick={handleTheme}>
            {darkMode? "Light Mode":"Dark Mode"}
          </button>
        </div>
    </div>
  )
}

export default Header