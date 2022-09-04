import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        A portfolio piece by{" "}
        <a href="https://www.linkedin.com/in/dougiehawes/" target="blank">
          Dougie Hawes
        </a>{" "}
        applying React.js, Redux, and API calls to{" "}
        <a href="https://imdb-api.com/" target="blank">
          imdb-api
        </a>
      </p>
    </footer>
  );
};

export default Footer;
