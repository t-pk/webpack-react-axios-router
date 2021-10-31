import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ id, fullName, email }) => (
  <li key={id}>
    <strong>{fullName}</strong>
    <div>{email}</div>
    <br />
  </li>
);

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserItem;
