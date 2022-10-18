import React from 'react'
import {useState} from 'react'

export default function Liste({
    list,
    handleDelete,
    handleEdit
}) {

    
    const [newListTitle, setNewListTitle] = useState(list.title)
    
    const handleChange = (e) => {
        e.preventDefault();
        if (list.complete === true) {
            setNewListTitle(list.title);
        } else {
            list.title = "";
            setNewListTitle(e.target.value);
        }
    }

  return (

    <div>
        <article>
        <h1>Hej</h1>
        <input 
        type="text"
        value={list.title === "" ? newListTitle : list.title}
        onChange={handleChange}></input>
        <div>
            <button onClick={() => handleEdit(list, newListTitle)}>Edit</button>
            <button onClick={() => handleDelete(list.id)}>Delete</button>
        </div>
        </article>
    </div>
  )
}



