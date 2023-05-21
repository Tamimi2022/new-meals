import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'


function RecipeApi() {
    const [ food, setFood ] = useState([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then(response => response.json())
        .then(data => {
            setFood(data.meals)
            //console.log(data)
        })
    }, [])

  return (
    <section>
        <Search />

        {food.map(meal => {
            //const { strArea, strTags, strMeal, strMealThumb } = meal
            return (
                <div key={meal.idMeal}>
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt='img' width={400}/>
                    <p>{meal.strTags}</p>
                    <p>{meal.strArea}</p>
                    <Link to={`/meal/` + meal.idMeal}>
                        <button>Information Detail</button>
                    </Link>
                </div>
            )
        })}
    </section>
  )
}

export default RecipeApi