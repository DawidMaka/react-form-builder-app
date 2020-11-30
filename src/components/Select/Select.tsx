import React from 'react';
import { Values } from 'base/types';

const Select = React.memo<JSX.IntrinsicElements['select'] & { parenttype?: string; name: string }>(
  ({ ...props }) => (
    <select {...props}>
      {!props.parenttype && (
        <>
          <option value="text">Text</option>
          <option value="yes/no">Yes/no</option>
          <option value="number">Number</option>
        </>
      )}
      {props.name === Values.ConditionType && <option value="equals">Equals</option>}
      {props.parenttype === Values.Number && (
        <>
          <option value="greather than">Greather than</option>
          <option value="less than">Less than</option>
        </>
      )}
      {props.name === Values.ConditionValue && (
        <>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </>
      )}
    </select>
  ),
);
Select.displayName = 'Select';

export default Select;
