import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function CustomNavbar(props) {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light font-weight-bold"
            style={{ backgroundColor: '#e7dfd5' }}
        >
            <Link className="navbar-brand bold" to="/">
                Home
            </Link>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/articles">
                            Articles
                        </Link>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <SocialIcon
                        className="mr-md-3"
                        url="https://github.com/alex-rotariu"
                        target="_blank"
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/alex-rotariu-924665182/"
                        target="_blank"
                    />
                </div>
            </div>
        </nav>
    );
}
