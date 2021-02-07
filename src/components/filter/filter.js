import React from 'react';
import PropTypes from 'prop-types';

export default function Filtre({ value, onChangeFiter }) {
  return (
    <>
      <label>
        Find contacts by name
        <input
          name="filter"
          type="text"
          value={value}
          onChange={e => onChangeFiter(e.target.value)}
        />
      </label>
    </>
  );
}

Filtre.propTypes = {
  value: PropTypes.string,
  onChangeFiter: PropTypes.func,
};
