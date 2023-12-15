import { FaGithub, FaLinkedin } from 'react-icons/fa6';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h4 className="logo">
          NEW<span className="no-shadow">S</span>
        </h4>
        <p>
          NewNewNews is a frontend application built using React. This interface
          serves as the user-facing component of an{' '}
          <a href="https://github.com/aislingkelly/new-new-news">
            API-driven backend
          </a>
          , meant to mimic platforms like Reddit. The focus is on providing an
          interface that facilitates access to the application's features. The
          React framework enables interaction with the backend.
        </p>
      </div>
      <div className="get-in-touch">
        <h4>Get in touch</h4>
        <a href="https://www.linkedin.com/in/kellya45/">
          <FaLinkedin />
        </a>{' '}
        <a href="https://github.com/aislingkelly/nc-news">
          {' '}
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
