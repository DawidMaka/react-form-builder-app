import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/Form/FormField/FormField';

const Select = ({ id, value, name, parentType, ...props }) => (
  <FormField as="select" id={`${name}-${id}`} value={value} name={name} {...props}>
    {parentType === '' && (
      <>
        <option value="text">Text</option>
        <option value="yes/no">Yes/no</option>
        <option value="number">Number</option>
      </>
    )}
    {name === 'condition' && <option value="equals">Equals</option>}
    {parentType === 'number' && (
      <>
        <option value="greather than">Greather than</option>
        <option value="less than">Less than</option>
      </>
    )}
    {name === 'conditionValue' && (
      <>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </>
    )}
  </FormField>
);

export default Select;

Select.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  parentType: PropTypes.string,
};

Select.defaultProps = {
  parentType: '',
};
