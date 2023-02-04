import React, {useState} from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {
    //create state to hold search value
    const [searchValue, setSearchValue] = useState('')

    // const handleChange = (e) => {
    //     //store input
    //     setSearchValue(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        //call api to get matching characters
        axios.get(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
        .then(res => {
            setCharacters(res.data.results)
            //clear textbox
            setSearchValue('')
        })
        .catch(err => {
            if(err.response.status === 404) {
                alert("No match")
            } else {
                console.log(err)
            }
        }
        )
    }

  return (
    <form onSubmit={handleSubmit} className="search-container" value={searchValue}>
        <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search All Characters" />
    </form>
  )
}

export default Search