import {
  Link,
  NavWrap,
  LogoutBtn,
  AuthNav,
  UserNav,
  HelloField,
  Name,
} from './Navigation.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoggedIn, getUserName, getToken, logout } from 'redux/auth';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  return (
    <NavWrap>
      <div>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="contacts">Contacts</Link>}
      </div>

      {isLoggedIn ? (
        <UserNav>
          <HelloField>
            Hello, <Name>{userName}</Name>!
          </HelloField>
          <LogoutBtn onClick={() => dispatch(logout(token))}>Log Out</LogoutBtn>
        </UserNav>
      ) : (
        <AuthNav>
          <Link to="register">Register</Link>
          <Link to="login">Log In</Link>
        </AuthNav>
      )}
    </NavWrap>
  );
};
