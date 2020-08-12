import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  width: 19%;
  display: inline-block;
  font-weight: 700;
  text-transform: capitalize;
`;

const Label = ({ id, value, srOnly }) => (
  <StyledLabel className={srOnly ? 'sr-only' : undefined} htmlFor={`${value}-${id}`}>
    {value}
  </StyledLabel>
);

export default Label;

Label.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  srOnly: PropTypes.bool,
};

Label.defaultProps = {
  srOnly: false,
};
