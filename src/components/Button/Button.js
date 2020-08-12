import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  background-color: ${({ remove, theme }) => (remove ? theme.remove : theme.add)};
  border: 1px solid transparent;
  border-radius: 4px;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  margin-left: ${({ mr }) => mr};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
`;

export default Button;
