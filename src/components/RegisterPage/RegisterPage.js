import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { FormWrap, FormLabel, Input, RegLogBtn } from './RegisterPage.styled';
import { register } from 'redux/auth/auth-operations';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
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

    dispatch(register({ name, email, password }));
    toast.success('Registration successfully');
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2>Registration</h2>
      <FormWrap onSubmit={onFormSumit}>
        <FormLabel htmlFor="">
          Name
          <Input
            type="text"
            name="name"
            required
            value={name}
            onChange={onInputChange}
          />
        </FormLabel>

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

        <RegLogBtn>Register</RegLogBtn>
      </FormWrap>
    </>
  );
};
