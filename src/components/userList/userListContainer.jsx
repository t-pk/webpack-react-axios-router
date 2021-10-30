import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserList from './userList';
import { actDelLanguage, actGetLanguage, actGetUser } from '../../actions';
import { usersSelector } from '../../selectors/usersSelector';

class UserListContainer extends Component {
  componentDidMount() {
    actDelLanguage();
    actGetLanguage();
    const { onGetUser } = this.props;
    onGetUser();
  }

  render() {
    const { users } = this.props;
    return <UserList users={users} />;
  }
}

const mapStateToProps = (state) => {
  return { users: usersSelector(state) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUser: () => {
      dispatch(actGetUser());
    },
  };
};

UserListContainer.defaultProps = {
  users: [],
};

UserListContainer.propTypes = {
  onGetUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user: PropTypes.string,
    }),
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
