import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
import Spiner from "../components/spinner";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strInstructions,
    strYoutube,
  } = recipe;

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {recipe.length ? (
        <Spiner />
      ) : (
        <>
          <div className="recipe">
            <div>
              <h2>{strMeal}</h2>
              <img className="recipe-img" src={strMealThumb} alt={strMeal} />
              <h4>Category: {strCategory}</h4>
              {strArea ? <h4>Area: {strArea}</h4> : null}
            </div>
            <div className="wrapper">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(recipe).map((key) => {
                    if (key.includes("Ingredient") && recipe[key]) {
                      return (
                        <tr className="table-secondary" key={key}>
                          <td>{recipe[key]}</td>
                          <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <p>Instructions: {strInstructions}</p>

          {strYoutube ? (
            <div>
              <h5>Wideo recipe</h5>
              <iframe
                title={strYoutube}
                src={"https://www.youtube.com/embed/" + strYoutube.slice(-11)}
                allowFullScreen
              />
            </div>
          ) : null}
        </>
      )}
    </>
  );
}
export { Recipe };
