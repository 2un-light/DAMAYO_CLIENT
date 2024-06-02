import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
        <div className="logo">DAMAYO</div>
        <div className="auth-buttons">
          <button className="sign-in">Sign in</button>
          <button className="create-account">Create an account</button>
        </div>
      </header>  
    );
};

export default Header;