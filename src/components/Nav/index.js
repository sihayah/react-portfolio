import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../Nav/style.css';

const Nav = () => {

    const tabs = [
        {
            title: "Portfolio",
            name: "portfolio",
            location: "/portfolio"
        },
        {
            title: "About",
            name: "about",
            location: "/"
        },
        {
            title: "Contact",
            name: "contact",
            location: "/contact"
        },
        {
            title: "Resume",
            name: "resume",
            location: "/resume"
        }
    ];
    const currentLocation = useLocation().pathname;  

    return(
        <>
            <FontAwesomeIcon className="hamburger" icon={ faBars } />
            <nav className="top-nav">
            
            {tabs.map((tab) => (
                <Link to={tab.location}
                    className=
                        {`link ${currentLocation === tab.location && 'nav-active'}`}
                    key={tab.name}
                    >
                    {tab.title}
                </Link>                      
            ))}
            </nav>        
        </>

    )
}

export default Nav;