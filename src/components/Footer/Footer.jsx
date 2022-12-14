import "./footer.css";

function Footer() {
  return (
    <footer className="bg-primary text-start text-white">
      <div className="footer-copyright ">
        <div className="position-relative">
          <div className="container p-2 small">
            © {new Date().getFullYear()} Copyright Text
          </div>
          <a
            className="btn btn-outline-light btn-floating btn-footer position-absolute top-0 end-0"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/RomanChuchev/shop-project"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
