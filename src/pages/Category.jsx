import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import Spinner from "../components/spinner";
import { MealList } from "../components/MealList";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return <>{!meals.length ? <Spinner /> : <MealList meals={meals} />}</>;
}

export { Category };
