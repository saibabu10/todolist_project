import { useState } from "react"

export function EditTodoForm({editTodo,task}){
const [newItem,setNewItem]= useState("")

function handleSubmit(e){
    e.preventDefault()
    if(newItem === "") return

    editTodo(newItem,task.id)
    
      setNewItem("")
  }
  return (
    <form onSubmit={handleSubmit} className='new-item-form'>
    <div className='form-row'>
      <label htmlFor='item' >Task To Be Added</label>
      <input value={newItem}
     onChange={e => setNewItem(e.target.value)} 
      type="text" id="item" />
        </div>
    <button className="btn"> update task</button>
  </form>
  )
}

