import { Link, NavWrap, LogoutBtn, AuthNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavWrap>
      <div>
        <Link to="/">Home</Link>
        <Link to="contacts">Contacts</Link>
      </div>

      <AuthNav>
        <Link to="register">Register</Link>
        <Link to="login">Log In</Link>
      </AuthNav>

      <LogoutBtn>Log Out</LogoutBtn>
    </NavWrap>
  );
};
