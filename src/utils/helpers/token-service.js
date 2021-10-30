import { TOKEN_KEY } from '../../constants';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(accessToken) {
  localStorage.setItem(TOKEN_KEY, accessToken);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}
