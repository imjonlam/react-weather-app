import React from 'react'
import PropTypes from 'prop-types';
import './index.css';

const ToggleSwitch = props => (
  <div>
    <input
      id={props.id}
      type="checkbox"
      className="toggle-switch-checkbox"
      checked={props.checked}
      onChange={e => props.onChange(e.target.checked)}
    />
    <label className="toggle-switch-label" htmlFor={props.id}>
      <span 
        className="toggle-switch-inner" 
        data-yes="Celsius" 
        data-no="Fahrenheit"
      />
      <span className="toggle-switch-switch" />
    </label>
  </div>
)

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToggleSwitch
