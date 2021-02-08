import styled from 'styled-components'

interface Props {
  remove?: boolean;
  mr?: string;
  onClick: () => void;
  type: any;
}

const Button = styled.button<Props>`
  background-color: ${({ remove }) => (remove ? '#d4493a' : '#57b846')};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  height: 42px;
  line-height: 1.2; 
  min-width: 160px;
  margin-right: ${({ mr }) => mr};
  padding: 0 10px;
  transition: all 0.4s;    

  &:hover {
    background-color: #333333;
  }

  &:focus {
    border: 1px solid #333333;
    outline: none;
  }
`

export default Button
