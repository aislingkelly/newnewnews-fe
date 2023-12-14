import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h4>NewNewNews</h4>
        <p>
          New New News is a front-end application built using React. This
          interface serves as the user-facing component of an API-driven
          backend, meant to mimic platforms like Reddit. The focus is on
          providing an interface that facilitates access to the application's
          features. The React framework enables interaction with the backend.
        </p>
      </div>
      <div className="get-in-touch">
        <h4>Get in touch</h4>
        <FaLinkedin /> <FaGithub />
      </div>
    </footer>
  );
}

export default Footer;
