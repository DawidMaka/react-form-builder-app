import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';

const FormsTemplate = ({ children, addItem }) => (
  <>
    <Heading>Form Builder</Heading>
    {children}
    <Button onClick={() => addItem('-1')} type="button">
      Add Input
    </Button>
  </>
);

export default FormsTemplate;

FormsTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  addItem: PropTypes.func.isRequired,
};
