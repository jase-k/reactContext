import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import {AppContext} from '../App'

const NavBar = () => {
    const {name} = useContext(AppContext)
    console.log(useContext(AppContext))
    // console.log(name)
    return (
        <div className="bg-info text-white">
            <p>Hi {name}</p>
        </div>
    );
};

NavBar.propTypes = {};

export default NavBar;