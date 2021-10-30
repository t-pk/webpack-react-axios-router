import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ id, name, email }) => (
  <li key={id}>
    <strong>{name}</strong>
    <div>{email}</div>
    <br />
  </li>
);

UserItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserItem;
