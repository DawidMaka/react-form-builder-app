import React from 'react';
import { ItemKeys } from 'base/types';

type State = {
  handleAddItem: (parent: string) => void;
  handleRemoveItem: (id: string) => void;
  handleUpdateItem: (name: ItemKeys, value: string, id: string) => void;
};

const PageContext = React.createContext<State | undefined>(undefined);

export default PageContext;
