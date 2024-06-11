import React from 'react';
import './Header.css';
import {useNavigate} from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <header className="header">
        <div className="logo">DAMAYO</div>
        <div className="auth-buttons">
          <button className="sign-in" onClick={handleLoginClick}>Sign in</button>
          <button className="create-account">Create an account</button>
        </div>
      </header>  
    );
};

export default Header;