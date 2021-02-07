import React from 'react';
import PropTypes from 'prop-types';

export default function ContactItem({ name, number, id, onRemove }) {
  return (
    <>
      <li key={id} name={name}>
        {`${name}: ${number}`}
        <button type="button" onClick={() => onRemove(name)}>
          Delete
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
