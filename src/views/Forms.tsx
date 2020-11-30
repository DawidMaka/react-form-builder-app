import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PageContext from 'context';
import { Item, Items, ItemKeys } from 'base/types';
import FormsTemplate from 'templates/FormsTemplate';
import FormsList from 'components/FormsList/FormsList';
import { useStateWithLocalStorage } from '../utils';

const convertItems = (items: Items[], id: string) =>
  items.reduce((result: Items[], originalItem) => {
    const item = { ...originalItem };

    if (item.parent !== id) {
      return result;
    }

    const subItems = convertItems(items, item.id);

    if (subItems.length) {
      item.items = subItems;
    }

    return [...result, item];
  }, []);

const removeItem = (items: Item[], id: string): Item[] => {
  const filtered = items.filter(item => item.id !== id);
  const children = items.filter(item => item.parent === id).map(({ id }) => id);

  return children.reduce((items, child) => removeItem(items, child), filtered);
};

const addItem = (parent: string) => {
  const newItem: Item = {
    id: uuidv4(),
    question: '',
    type: 'text',
    parent: parent,
  };

  if (parent !== '-1') {
    newItem.conditionType = '';
    newItem.conditionValue = '';
  }

  return newItem;
};

function updateItem(name: ItemKeys, value: string, id: string, items: Items[]) {
  const arr = items.map(item => {
    if (item.id === id) {
      item[name] = value;
    }

    if (item.parent === id && name === 'type') {
      item.conditionType = '';
      item.conditionValue = '';
    }

    return item;
  });

  return arr;
}

const Forms = () => {
  const [items, setItems] = useStateWithLocalStorage('data');

  const handleAddItem = (parent: string) => setItems(items => [...items, addItem(parent)]);
  const handleRemoveItem = (id: string) => setItems(items => removeItem(items, id));
  const handleUpdateItem = (name: ItemKeys, value: string, id: string) =>
    setItems(items => updateItem(name, value, id, items));

  return (
    <PageContext.Provider
      value={{
        handleAddItem,
        handleRemoveItem,
        handleUpdateItem,
      }}
    >
      <FormsTemplate addItemFn={handleAddItem}>
        <FormsList forms={convertItems(items, '-1')} />
      </FormsTemplate>
    </PageContext.Provider>
  );
};
Forms.displayName = 'Forms';

export default Forms;
