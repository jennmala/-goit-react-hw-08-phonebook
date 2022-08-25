import styled from '@emotion/styled';

export const FormWrap = styled.form`
  margin-top: 30px;
  margin-bottom: 20px;
  width: 250px;
  padding: 10px;
  border: 1px solid grey;
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  display: block;
`;

export const RegLogBtn = styled.button`
  width: 100px;
  padding: 5px;
  background-color: #3b6856;
  border-radius: 3px;
  color: #ffffff;

  :hover {
    background-color: #539f81;
  }

  :disabled {
    opacity: 0.5;
  }
`;
