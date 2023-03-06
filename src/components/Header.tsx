import React from 'react';
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header>
            <Navigation/>
            <h1 className="text-center py-4">Star wars</h1>
        </header>
    );
};

export default Header;