import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function SingleRecipe() {
    const { id } = useParams(); // For specific meal
    const [ single, setSingle ] = useState([])


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            setSingle(data.meals)
            console.log(data)
            //const single = { strMeasure1, strMeasure9, strMeasure11, strMeasure13 }
        })
    }, [id])
    
  return (
    <div>
        <Link to='/' className='btn btn-primary'>Back To Menu </Link>
        
        {single.map(meal => {
            return (
                <div key={meal.idMeal}>
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt='img'/>
                    <h2>{meal.strTags}</h2>
                  
                    <p>Info: {meal.strMeasure1}</p>
                    <p>{meal.strMeasure9}</p>
                    <p>{meal.strMeasure11}</p>
                    <p>{meal.strMeasure13}</p>
                    <p>{meal.strTags}</p>
                </div>
            )
        })}
    </div>
  )
}

export default SingleRecipe