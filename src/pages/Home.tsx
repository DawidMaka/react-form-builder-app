import { v4 as uuidv4 } from 'uuid'
import { Item, Items, ItemKeys } from 'base/types'
import React, { useMemo } from 'react'
import PageContext from 'context'
import { useStateWithLocalStorage } from 'utils'
import FormList from 'components/FormList'
import Button from 'components/styledComponents/Button'

const convertItems = (items: Items[], id: string) => (
  items.reduce((result: Items[], originalItem) => {
    const item = { ...originalItem }

    if (item.parent !== id) {
      return result
    }

    const subItems = convertItems(items, item.id)

    if (subItems.length) {
      item.items = subItems
    }

    return [...result, item]
  }, [])
)

const removeItem = (items: Item[], id: string): Item[] => {
  const filtered = items.filter((item) => item.id !== id)
  const children = items.filter((item) => item.parent === id).map(({ id }) => id)

  return children.reduce((items, child) => removeItem(items, child), filtered)
}

const addItem = (parent: string) => {
  const newItem: Item = {
    id: uuidv4(),
    question: '',
    type: 'text',
    parent,
  }

  if (parent !== '-1') {
    newItem.conditionType = ''
    newItem.conditionValue = ''
  }

  return newItem
}

function updateItem(name: ItemKeys, value: string, id: string, items: Items[]) {
  return items.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        [name]: value,
      }
    }

    if (item.parent === id && name === 'type') {
      return {
        ...item,
        conditionType: '',
        conditionValue: '',
      }
    }

    return item
  })
}

const Home = () => {
  const [items, setItems] = useStateWithLocalStorage('data')

  const handleAddItem = (parent: string) => setItems((items) => [...items, addItem(parent)])
  const handleRemoveItem = (id: string) => setItems((items) => removeItem(items, id))
  const handleUpdateItem = (name: ItemKeys, value: string, id: string) =>
    setItems((items) => updateItem(name, value, id, items))

  const convertedItems = useMemo(() => convertItems(items, '-1'), [items])
  const memoizedValue = useMemo(() => ({ handleAddItem, handleRemoveItem, handleUpdateItem }), [])

  return (
    <PageContext.Provider
      value={memoizedValue}
    >
      <header>
        <h1 className="sr-only">Form Builder</h1>
      </header>
      <main>
        <FormList
          forms={convertedItems}
        />
        <Button
          onClick={() => handleAddItem('-1')}
          type="button"
        >
          Add Input
        </Button>
      </main>
    </PageContext.Provider>
  )
}

export default Home
