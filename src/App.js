import React from 'react'
import SearchItem from './SearchItem'
import Header from './Header'
import Content from './Content'
import AddItem from './AddItem'
import Footer from './Footer'

function App() {

  const [items, setItems] = React.useState(JSON.parse(localStorage.getItem('shoppinglist')))

  const [newItem, setNewItem] = React.useState('')
  const [search, setSearch] = React.useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = {id, checked: false, item};
    const listItems = [...items, newItem]
    setAndSaveItems(listItems)
  }

  function handleCheck(id) {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setAndSaveItems(listItems)
  }

  function handleDelete(id) {
    const listItems = items.filter(item => item.id !== id)
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header />
      <AddItem
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Content 
        items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        setItems = {setItems}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer/>
    </div>
  );
}

export default App;
