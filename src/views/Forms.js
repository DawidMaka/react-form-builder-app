import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PageContext from 'context';
import FormsTemplate from 'templates/FormsTemplate';
import FormsList from 'components/FormsList/FormsList';
import { useStateWithLocalStorage } from '../utils';

const convertItems = (items, id) =>
  items.reduce((result, originalItem) => {
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

const filterItems = (items, id) => {
  const filtered = items.filter(item => item.id !== id);

  const children = items.filter(item => item.parent === id).map(({ id }) => id);

  return children.reduce((items, child) => filterItems(items, child), filtered);
};

const createItem = parent => {
  const newItem = {};
  newItem.id = uuidv4();
  newItem.question = '';
  newItem.type = 'text';
  newItem.parent = parent;

  if (parent !== '-1') {
    newItem.condition = '';
    newItem.conditionValue = '';
  }

  return newItem;
};

const updateProperties = (name, value, id, items) => {
  const arr = items.map(item => {
    const obj = item;

    if (obj.id === id) {
      obj[name] = value;
    }

    if (obj.parent === id && name === 'type') {
      obj.condition = '';
      obj.conditionValue = '';
    }

    return item;
  });

  return arr;
};

const Forms = () => {
  const [items, setItems] = useStateWithLocalStorage('data');

  const addItem = parent => setItems(items => [...items, createItem(parent)]);
  const removeItem = id => setItems(items => filterItems(items, id));
  const updateItem = (name, value, id) =>
    setItems(items => updateProperties(name, value, id, items));

  return (
    <PageContext.Provider
      value={{
        addItem,
        removeItem,
        updateItem,
      }}
    >
      <FormsTemplate addItem={addItem}>
        <FormsList forms={convertItems(items, '-1')} />
      </FormsTemplate>
    </PageContext.Provider>
  );
};

export default Forms;
