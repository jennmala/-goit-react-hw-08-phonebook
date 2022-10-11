import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  FormWrap,
  FormLabel,
  Input,
  RegLogBtn,
} from 'components/RegisterPage/RegisterPage.styled';
import { login } from 'redux/auth/auth-operations';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const onFormSumit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    reset();
    navigate('/');
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2>LogIn</h2>
      <FormWrap onSubmit={onFormSumit}>
        <FormLabel htmlFor="">
          E-Mail
          <Input
            type="email"
            name="email"
            required
            value={email}
            onChange={onInputChange}
          />
        </FormLabel>

        <FormLabel htmlFor="">
          Password
          <Input
            type="password"
            name="password"
            required
            value={password}
            onChange={onInputChange}
          />
        </FormLabel>

        <RegLogBtn>Log In</RegLogBtn>
      </FormWrap>
    </>
  );
};
