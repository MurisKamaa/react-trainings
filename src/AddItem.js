import React from 'react'
import {FaPlus} from 'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = React.useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add item</label>
        <input
            type="text"
            autoFocus
            ref={inputRef}
            id='addItem'
            placeholder='add item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}
        ><FaPlus />
        </button>
    </form>
  )
}

export default AddItem