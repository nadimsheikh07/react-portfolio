import React from 'react';
import { Link } from 'react-router-dom';

export const WebHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>

                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>

                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>

                    </li>
                </ul>
            </nav>
        </header>
    )
}