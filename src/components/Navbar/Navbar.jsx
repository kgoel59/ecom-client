import React from 'react';

const Navbar = ({name, children}) => {
    return (
        <nav className="navbar navbar-dark bg-primary">
              <div className="navbar-brand"><h3>{name}</h3></div>
              <div>
                {children}
              </div>
        </nav>
    );
};

export default Navbar;