import React, { ComponentProps } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ remove: boolean; mr: string }>`
  color: #fff;
  background-color: ${({ remove, theme }) => (remove ? theme.remove : theme.add)};
  border: 1px solid transparent;
  border-radius: 4px;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  margin-right: ${({ mr }) => mr};
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

type ButtonProps = ComponentProps<typeof StyledButton>;

const Button = React.memo<ButtonProps>(({ ...props }) => {
  return <StyledButton {...props} />;
});
Button.displayName = 'Button';

export default Button;
