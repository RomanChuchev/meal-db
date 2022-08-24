import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
      <div className="container-fluid ">
        <h1 className="lead left-right-line-short-header" href="#">
          React Meal
        </h1>
        <div>
          <button
            className="btn btn-outline-light btn-header m-2 btn-sm"
            rel="noreferrer"
            target="_blank"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <a
            className="btn btn-outline-light btn-header btn-sm"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/RomanChuchev/"
            role="button"
          >
            Repo
          </a>
        </div>
      </div>
    </nav>
  );
}

export { Header };
