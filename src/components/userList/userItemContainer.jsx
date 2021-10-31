import { connect } from 'react-redux';
import UserItem from './userItem';

const mapStateToProps = (state, { user }) => {
  return {
    fullName: user.fullName,
    id: user.id,
    email: user.email,
  };
};

const UserItemContainer = connect(mapStateToProps)(UserItem);

export default UserItemContainer;
