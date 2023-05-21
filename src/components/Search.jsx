import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {
    const [ theSearch, setTheSearch ] = useState('')
    const navigate = useNavigate() // For navigate to other page

    const submitHanlder = ((event) => {
        event.preventDefault()
        navigate('/help/' + theSearch)
        console.log('Submited!!')
    })
  return (
    <form onSubmit={submitHanlder} className='form-search'>
       <FaSearch></FaSearch>
       <label>Search Your Favourite Meals</label>
       <input type='text' placeholder='Search... ' value={theSearch} 
       onChange={(event) => setTheSearch(event.target.value)}/>
    </form>
  )
}

export default Search