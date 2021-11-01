import React from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../App';
import { useContext } from 'react';

const Form = () => {
    const {setName} = useContext(AppContext)
    return (
        <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" id="name"  onChange={(e) => setName(e.target.value)}/>
        </form>
    );
};

Form.propTypes = {};

export default Form;