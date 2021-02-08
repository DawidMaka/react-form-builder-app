import { Values } from 'base/types'
import React from 'react'

const Select = React.memo<JSX.IntrinsicElements['select'] & { parenttype?: string; }>(
  ({ ...props }) => (
    <select {...props}>
      {!props.parenttype ? (
        <>
          <option value="text">Text</option>
          <option value="yes/no">Yes/no</option>
          <option value="number">Number</option>
        </>
      ) : null}
      {props.name === Values.ConditionType ? <option value="equals">Equals</option> : null}
      {props.parenttype === Values.Number ? (
        <>
          <option value="greather than">Greather than</option>
          <option value="less than">Less than</option>
        </>
      ) : null}
      {props.name === Values.ConditionValue ? (
        <>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </>
      ) : null}
    </select>
  ),
)

export default Select
