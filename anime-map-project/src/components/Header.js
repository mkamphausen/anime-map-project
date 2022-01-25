import React from 'react';

import Button from 'react-bootstrap/Button';


const Header = (props)  => (
        <header className="top">
            <h1>
                Anime Map
            </h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
            <Button>Test</Button>
        </header>
);

export default Header;
