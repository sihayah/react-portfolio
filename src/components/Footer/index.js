import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../Footer/style.css';

const Footer = () => {
    return (
        <footer className="w-100 mt-auto d-flex flex-row bottom-nav">
            <a href="https://github.com/sihayah" target= "_blank" rel= "noreferrer" className="badge badge-pill badge-dark">
            <FontAwesomeIcon icon={ faGithub } />
            </a>
            <a href="https://www.linkedin.com/in/sihaya-harris/" target= "_blank" rel= "noreferrer" className="badge badge-pill badge-dark">
            <FontAwesomeIcon icon={ faLinkedin } />
            </a>
            <a href="https://www.instagram.com/blablahyaya/" target= "_blank" rel= "noreferrer" className="badge badge-pill badge-dark">
            <FontAwesomeIcon icon={ faInstagram } />
            </a>
        </footer>
    )
}

export default Footer;