import { ItemKeys } from 'base/types'
import React from 'react'

type State = {
  handleAddItem: (parent: string) => void;
  handleRemoveItem: (id: string) => void;
  handleUpdateItem: (name: ItemKeys, value: string, id: string) => void;
};

const PageContext = React.createContext<State | undefined>(undefined)

export default PageContext
