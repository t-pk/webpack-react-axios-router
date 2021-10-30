import { TOKEN_KEY } from '../constants';

const initUser = {
  username: 'admin',
  password: 'admin',
};

class Authentication {
  constructor() {}

  userLogin = (user) => {
    if (
      initUser.username === user.username &&
      initUser.password !== user.password
    )
      return null;
    localStorage.setItem(TOKEN_KEY, TOKEN_KEY);
    return user;
  };
}

const authentication = new Authentication();

export default authentication;
