import styled, { css } from 'styled-components';

const FormField = styled.input.attrs(() => ({
  autoComplete: 'off',
}))`
  width: 80%;
  height: 34px;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);

  ${({ name }) =>
    name === 'condition' &&
    css`
      width: 45%;
      margin-right: 2%;
    `}

  ${({ name }) =>
    name === 'conditionValue' &&
    css`
      width: 33%;
    `}
`;

export default FormField;
