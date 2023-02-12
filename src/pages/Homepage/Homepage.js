import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import CharacterCard from './../../components/CharacterCard/CharacterCard';
import './Homepage.css'
import Search from './../../components/Search/Search';
import { ThemeContext } from './../../contexts/ThemeContext';


function Homepage() {

  //create state
  const [characters, setCharacters] = useState([])

  //extract theme value
  const {darkMode, setDarkMode} = useContext(ThemeContext);

  useEffect(
    ()=>{
      axios.get("https://rickandmortyapi.com/api/character")
      .then(res => {
        setCharacters(res.data.results)

      })
      .catch(err => console.log(err))
    }, []
  )

  return (
    <div className={darkMode? "home-container home-dark": "home-container"}>
      <Search setCharacters={setCharacters}/>
      <h1>Main Characters</h1>
      <div className="characters-container">
        {
          characters.map(
            item=><CharacterCard character={item} key={item.id}/>
          )
        }
      </div>
    </div>
  )
}

export default Homepage