import React from 'react';
import { Items } from 'base/types';
import styled from 'styled-components';
import Form from 'components/Form/Form';

const FormWrapper = styled.div`
  margin-left: 15px;
`;

type FormListProps = {
  forms: Items[];
  parentType?: string;
};

const FormList = ({ forms, parentType = '' }: FormListProps) => {
  return (
    <>
      {forms.map(form => (
        <FormWrapper key={form.id}>
          <Form
            id={form.id}
            question={form.question}
            type={form.type}
            conditionType={form.conditionType}
            conditionValue={form.conditionValue}
            parentType={parentType}
          />
          {form.items && <FormList forms={form.items} parentType={form.type} />}
        </FormWrapper>
      ))}
    </>
  );
};
FormList.displayName = 'FormList';

export default FormList;
