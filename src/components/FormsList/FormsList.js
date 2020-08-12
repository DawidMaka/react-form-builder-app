import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from 'components/Form/Form';

const FormWrapper = styled.div`
  margin-left: 20px;
`;

const hasItems = items => items && items.length;

const FormList = ({ forms, parentType }) => (
  <>
    {forms.map(({ id, question, type, condition, conditionValue, items }) => (
      <React.Fragment key={id}>
        <Form
          id={id}
          question={question}
          type={type}
          condition={condition}
          conditionValue={conditionValue}
          parentType={parentType}
        />
        {hasItems(items) && (
          <FormWrapper>
            <FormList forms={items} parentType={type} />
          </FormWrapper>
        )}
      </React.Fragment>
    ))}
  </>
);

export default FormList;

FormList.propTypes = {
  forms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      condition: PropTypes.string,
      conditionValue: PropTypes.string,
      items: PropTypes.array,
    }),
  ),
  parentType: PropTypes.oneOf(['', 'text', 'number', 'yes/no']),
};

FormList.defaultProps = {
  parentType: '',
  forms: [],
};
