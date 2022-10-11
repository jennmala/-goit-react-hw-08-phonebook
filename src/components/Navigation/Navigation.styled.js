import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavWrap = styled.nav`
  display: flex;
  border-bottom: 1px solid grey;
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 80px;
  text-decoration: none;
  color: #917171;
  font-weight: 500;
  border-radius: 20px;

  &.active {
    color: tomato;
    font-weight: 700;
  }
  :hover {
    background-color: #fed4de;
  }
`;

export const LogoutBtn = styled.button`
  width: 100px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 20px;
  background-color: #ffffff;

  color: #917171;

  :hover {
    background-color: #f8b1cf;
  }
`;

export const AuthNav = styled.div`
  margin-left: auto;
`;

export const UserNav = styled.div`
  display: flex;
  margin-left: auto;
`;

export const HelloField = styled.div`
  display: flex;
  margin-right: 25px;
  align-items: center;
  color: #917171;
`;

export const Name = styled.span`
  margin-left: 5px;
  font-weight: 700;
  color: tomato;
`;
