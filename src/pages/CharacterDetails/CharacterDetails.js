import React, {useEffect} from 'react'
import './CharacterDetails.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function CharacterDetails() {
    //need id from url
    const {id} = useParams();
    //create state for character data
    const [character, setCharacter] = React.useState()

    useEffect(
        () => {
            //call api get info on this character
            axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => {
                setCharacter(res.data)
            })
            .catch(err => console.log(err))
        }, []
    )

  return (
    <div className="details-container">
        <img src={character?.image}/>
        <div className="char-info">
            <h3>{character?.name}</h3>
            <ul>
                <li>{character?.gender}</li>
                <li>{character?.species}</li>
                <li>{character?.status}</li>
            </ul>
        </div>
    </div>
  )
}

export default CharacterDetails