import React from 'react';
import { Avatar } from '@material-ui/core';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';


function Header() {

    const [{user}] = useStateValue();

   
    return (
        // BEM Naming Convention
        <div className="header">
            <div className="header__left"> 

                <Link to="/">
                    <Avatar title="Avatar" className="header__avatar" src={user?.photoURL} alt={user?.displaName} />
                </Link>
                <AccessTimeIcon title="time" />

            </div>

            <div title="searchBar" className="header__search">
                <SearchIcon />
                <input type="text" className="header__input" placeholder="Search Slack Clone" />
               
            </div>
  
            <div title="Help" className="header__right" >
                <Link className="link" to="/chatbot">
                    <HelpOutlineIcon title="Help Icon" />
                </Link>
            </div>
        </div>
    )
}

export default Header
