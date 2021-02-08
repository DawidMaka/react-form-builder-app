import styled from 'styled-components'
import { Items } from 'base/types'
import React from 'react'
import Form from 'components/Form'

const FormWrapper = styled.div`
  margin-left: 15px;
`

type FormListProps = {
  forms: Items[];
  parentType?: string;
}

const FormList = React.memo(({ forms, parentType = '' }: FormListProps) => (
  <>
    {forms.map((form) => (
      <FormWrapper key={form.id}>
        <Form
          id={form.id}
          question={form.question}
          type={form.type}
          conditionType={form.conditionType}
          conditionValue={form.conditionValue}
          parentType={parentType}
        />
        {form.items ? (
          <FormList
            forms={form.items}
            parentType={form.type}
          />
        ) : null}
      </FormWrapper>
    ))}
  </>
))

export default FormList
