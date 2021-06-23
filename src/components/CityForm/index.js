import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CityForm = props => {
  const [city, setCity] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(city);
    setCity('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-city"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder={props.placeholder}
      />
    </form>
  );
}

CityForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CityForm;