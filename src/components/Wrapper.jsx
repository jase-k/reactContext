import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import FormWrapper from './FormWrapper';

const Wrapper = () => {
    return (
        <div>
            <NavBar />
            <FormWrapper />
        </div>
    );
};

Wrapper.propTypes = {};

export default Wrapper;