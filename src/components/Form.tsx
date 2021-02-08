import styled from 'styled-components'
import { Values } from 'base/types'
import React, { useContext, ChangeEvent } from 'react'
import PageContext from 'context'
import Select from 'components/Select'
import Button from 'components/styledComponents/Button'

const StyledForm = styled.form`
  background: #fff;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 20px;
  width: 530px;
  font-size: 15px;
  color: #808080;

  label {
    display: inline-block;
    font-weight: 700;
    width: 19%;
  }

  input, select {
    background: transparent;
    border: none;
    border-bottom: 1px solid #b2b2b2;
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    color: #555555;
    font-size: 15px;
    line-height: 1.2;
    height: 45px;
    padding: 0 5px;
    width: 80%;

    &:focus {
      border: 1px solid #b2b2b2;
      outline: none;
    }
  }

  select[name='conditionType'] {
    width: 45%;
    margin-right: 2%;
  }

  input[name='conditionValue'], select[name='conditionValue'] {
    width: 33%;
  }
`

const FormGroup = styled.div`
  margin-bottom: 15px;
`

const ButtonsWrapper = styled.div`
  text-align: right;
`

type FormProps = {
  id: string;
  question: string;
  type: string;
  parentType: string;
  conditionType?: string;
  conditionValue?: string;
}

const Form = React.memo((
  {
    id, question, type, parentType, conditionType, conditionValue,
  }: FormProps,
) => {
  const { handleAddItem, handleRemoveItem, handleUpdateItem } = useContext(PageContext)!

  return (
    <StyledForm>
      {parentType !== '' ? (
        <FormGroup>
          <label htmlFor={`conditionType-${id}`}>
            Condition
            <span className="sr-only">type</span>
          </label>
          <Select
            id={`conditionType-${id}`}
            className="form-control"
            value={conditionType}
            name="conditionType"
            parenttype={parentType}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              const name = e.target.name as Values.ConditionType
              const { value } = e.target
              handleUpdateItem(name, value, id)
            }}
          />
          <label
            className="sr-only"
            htmlFor={`conditionValue-${id}`}
          >
            Condition value
          </label>
          {parentType !== 'yes/no' ? (
            <input
              autoComplete="off"
              className="form-control"
              id={`conditionValue-${id}`}
              value={conditionValue}
              name="conditionValue"
              type={parentType === 'number' ? 'number' : 'text'}
              placeholder="Enter your value"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const name = e.target.name as Values.ConditionValue
                const { value } = e.target
                handleUpdateItem(name, value, id)
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
                const name = e.target.name as Values.ConditionValue
                const { value } = e.target
                handleUpdateItem(name, value, id)
              }}
            />
          )}
        </FormGroup>
      ) : null}
      <FormGroup>
        <label htmlFor={`question-${id}`}>Question</label>
        <input
          autoComplete="off"
          className="form-control"
          id={`question-${id}`}
          value={question}
          name="question"
          type="text"
          placeholder="Enter your question"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const name = e.target.name as Values.Question
            const { value } = e.target
            handleUpdateItem(name, value, id)
          }}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor={`type-${id}`}>Type</label>
        <Select
          className="form-control"
          id={`type-${id}`}
          value={type}
          name="type"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            const name = e.target.name as Values.Type
            const { value } = e.target
            handleUpdateItem(name, value, id)
          }}
        />
      </FormGroup>
      <ButtonsWrapper>
        <Button
          mr="5px"
          onClick={() => handleAddItem(id)}
          type="button"
        >
          Add Sub-Input
        </Button>
        <Button
          onClick={() => handleRemoveItem(id)}
          remove
          type="button"
        >
          Delete
        </Button>
      </ButtonsWrapper>
    </StyledForm>
  )
})

export default Form
