import React, { useContext, useMemo, ChangeEvent } from 'react';
import styled from 'styled-components/macro';
import { Values } from 'base/types';
import Button from 'components/Button/Button';
import PageContext from 'context';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';

const StyledForm = styled.div`
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

type FormProps = {
  id: string;
  question: string;
  type: string;
  parentType: string;
  conditionType?: string;
  conditionValue?: string;
};

const Form = ({ id, question, type, parentType, conditionType, conditionValue }: FormProps) => {
  const context = useContext(PageContext)!;

  return useMemo(
    () => (
      <StyledForm>
        {parentType !== '' && (
          <FormFields>
            <Label htmlFor={`conditionType-${id}`}>
              condition <span className="sr-only">type</span>
            </Label>
            <Select
              id={`conditionType-${id}`}
              className="form-control"
              value={conditionType}
              name="conditionType"
              parenttype={parentType}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                const name = e.target.name as Values.ConditionType;
                const value = e.target.value;
                context.handleUpdateItem(name, value, id);
              }}
            />
            <Label htmlFor={`conditionValue-${id}`} className="sr-only">
              condition value
            </Label>
            {parentType !== 'yes/no' ? (
              <Input
                autoComplete="off"
                className="form-control"
                id={`conditionValue-${id}`}
                value={conditionValue}
                name="conditionValue"
                type={parentType === 'number' ? 'number' : 'text'}
                placeholder="Enter your value"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const name = e.target.name as Values.ConditionValue;
                  const value = e.target.value;
                  context.handleUpdateItem(name, value, id);
                }}
              />
            ) : (
              <Select
                id={`conditionValue-${id}`}
                className="form-control"
                value={conditionValue}
                name="conditionValue"
                parenttype={parentType}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  const name = e.target.name as Values.ConditionValue;
                  const value = e.target.value;
                  context.handleUpdateItem(name, value, id);
                }}
              />
            )}
          </FormFields>
        )}
        <FormFields>
          <Label htmlFor={`question-${id}`}>question</Label>
          <Input
            autoComplete="off"
            className="form-control"
            id={`question-${id}`}
            value={question}
            name="question"
            type="text"
            placeholder="Enter your question"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const name = e.target.name as Values.Question;
              const value = e.target.value;
              context.handleUpdateItem(name, value, id);
            }}
          />
        </FormFields>
        <FormFields>
          <Label htmlFor={`type-${id}`}>type</Label>
          <Select
            className="form-control"
            id={`type-${id}`}
            value={type}
            name="type"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              const name = e.target.name as Values.Type;
              const value = e.target.value;
              context.handleUpdateItem(name, value, id);
            }}
          />
        </FormFields>
        <ButtonsWrapper>
          <Button type="button" mr="5px" onClick={() => context.handleAddItem(id)}>
            Add Sub-Input
          </Button>
          <Button type="button" remove onClick={() => context.handleRemoveItem(id)}>
            Delete
          </Button>
        </ButtonsWrapper>
      </StyledForm>
    ),
    [id, question, type, parentType, conditionType, conditionValue],
  );
};
Form.displayName = 'Form';

export default Form;
