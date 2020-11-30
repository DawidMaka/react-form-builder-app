import React from 'react';

const Input = React.memo<JSX.IntrinsicElements['input']>(({ ...props }) => <input {...props} />);
Input.displayName = 'Input';

export default Input;
