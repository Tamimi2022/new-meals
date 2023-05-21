import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Help() {
    const [ help, setHelp ] = useState([])
    const { search } = useParams()

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(response => response.json())
        .then(data => {
            setHelp(data.meals)
        })
    }, [search])
  return (
    <div>
        <Link to='/' className='btn btn-primary'>Back To Menu </Link>
        
        {help.map(meal => {
            return (
                <div key={meal.idMeal}>
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt='img' width={400}/>
                    <p>{meal.strTags}</p>
                    <p>{meal.strArea}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Help