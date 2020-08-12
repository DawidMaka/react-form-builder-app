import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/Form/FormField/FormField';
import Select from 'components/Select/Select';

const Input = ({ id, value, name, type, parentType, placeholder, onChange }) => (
  <>
    {parentType !== 'yes/no' ? (
      <FormField
        id={`${name}-${id}`}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete
        onChange={onChange}
      />
    ) : (
      <Select id={id} value={value} name={name} parentType={parentType} onChange={onChange} />
    )}
  </>
);

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  parentType: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  parentType: '',
};
