import { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import Spinner from "../components/spinner";
import { CategoryList } from "../components/CategoryList";

function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      console.log(data.categories);
      setCatalog(data.categories);
    });
  }, []);

  return (
    <>{!catalog.length ? <Spinner /> : <CategoryList catalog={catalog} />}</>
  );
}

export { Home };
