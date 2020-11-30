import React from 'react';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';

type FormsTemplateProps = {
  addItemFn: (value: string) => void;
};

const FormsTemplate = ({ children, addItemFn }: React.PropsWithChildren<FormsTemplateProps>) => (
  <>
    <Heading>Form Builder</Heading>
    {children}
    <Button onClick={() => addItemFn('-1')} type="button">
      Add Input
    </Button>
  </>
);
FormsTemplate.displayName = 'FormsTemplate';

export default FormsTemplate;
