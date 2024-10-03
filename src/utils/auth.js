import { login } from '../components/redux/auth/authSlice';

export const checkAuth = (dispatch) => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  if (token && user) {
    // If token and user exist in localStorage, set the state by dispatching login
    dispatch(login({ token, user: JSON.parse(user) }));
  }
};
