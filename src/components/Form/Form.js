import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Button from 'components/Button/Button';
import PageContext from 'context';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';

const StyledForm = styled.form`
  margin-bottom: 15px;
  padding: 20px;
  width: 530px;
  border: 2px solid black;
  color: black;
  background-color: darksalmon;
`;

const FormFields = styled.div`
  margin-bottom: 15px;
`;

const ButtonsWrapper = styled.div`
  text-align: right;
`;

const Form = ({
  id, question, type, parentType, condition, conditionValue,
}) => {
  const { addItem, removeItem, updateItem } = useContext(PageContext);

  return useMemo(
    () => (
      <StyledForm>
        {parentType !== '' && (
          <FormFields>
            <Label id={id} value="condition" />
            <Select
              id={id}
              value={condition}
              name="condition"
              parentType={parentType}
              onChange={(e) => {
                const { name, value } = e.target;

                updateItem(name, value, id);
              }}
            />
            <Label id={id} value="condition value" srOnly />
            <Input
              id={id}
              value={conditionValue}
              name="conditionValue"
              type={parentType === 'number' ? 'number' : 'text'}
              parentType={parentType}
              placeholder="Enter your value"
              onChange={(e) => {
                const { name, value } = e.target;

                updateItem(name, value, id);
              }}
            />
          </FormFields>
        )}
        <FormFields>
          <Label id={id} value="question" />
          <Input
            id={id}
            value={question}
            name="question"
            type="text"
            placeholder="Enter your question"
            onChange={(e) => {
              const { name, value } = e.target;

              updateItem(name, value, id);
            }}
          />
        </FormFields>
        <FormFields>
          <Label id={id} value="type" />
          <Select
            id={id}
            value={type}
            name="type"
            onChange={(e) => {
              const { name, value } = e.target;

              updateItem(name, value, id);
            }}
          />
        </FormFields>
        <ButtonsWrapper>
          <Button type="button" onClick={() => addItem(id)}>
            Add Sub-Input
          </Button>
          <Button type="button" remove mr="5px" onClick={() => removeItem(id)}>
            Delete
          </Button>
        </ButtonsWrapper>
      </StyledForm>
    ),
    [id, question, type, parentType, condition, conditionValue],
  );
};

export default Form;

Form.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  parentType: PropTypes.string.isRequired,
  condition: PropTypes.string,
  conditionValue: PropTypes.string,
};

Form.defaultProps = {
  condition: '',
  conditionValue: '',
};
