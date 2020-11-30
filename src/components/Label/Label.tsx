import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  width: 19%;
  display: inline-block;
  font-weight: 700;
  text-transform: capitalize;
`;

type LabelProps = {
  htmlFor: string;
  className?: string;
};

const Label = React.memo<React.PropsWithChildren<LabelProps>>(({ htmlFor, ...props }) => (
  <StyledLabel htmlFor={htmlFor} {...props} />
));
Label.displayName = 'Label';

export default Label;
