"use client"

import { listReducer } from "@/reducers/listReducer";
import { Item } from "@/types/Item";
import { useReducer, useState } from "react";

export default function Home() {
  const [list, dispatch] = useReducer(listReducer,[]);
  const [addField, setAddField] = useState('');
  const handleAddButton = () => {
    if(addField.trim() === '') return false;

    dispatch({
      type: 'add',
      payload: {
        text: addField.trim()
      }
    });

    setAddField('');
  }

  const handleDoneCheckbox = (id:number) => {
    dispatch({
      type: 'toggleDone',
      payload: { id }
    });
  }

  const handleEdit = (id:number) => {
    const item = list.find(it => it.id === id);
    if(!item) return false;
      const newText = window.prompt("Editar tarefa", item.text);
      if(!newText || newText.trim() === '') return false;

      dispatch({
        type: 'editText',
        payload:{
          id,
          newText
        }
      })
  }

  const handleRemove = (id:number) => {
    if(!window.confirm('Tem certeza que deseja excluir?')) return false;

    dispatch({
      type: 'remove',
      payload: { id }
    });

  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl my-4">Lista de tarefas</h1>
      <div className="bg-gray-900 max-w-2xl mx-auto flex rounded-md border border-gray-400 p-4 my-4">
        <input 
        type="text" 
        className="flex-1 border rounded-md outline-none border-white p3 bg-transparent text-white pl-2"
        placeholder="Digite a tarefa"
        value={addField}
        onChange={e=>setAddField(e.target.value)}/>
        <button 
        className="p-4"
        onClick={handleAddButton}>Adicionar</button>
      </div>
      <ul className="max-w-2xl mx-auto">
        {list.map(item=>(
          <li className="flex items-center p-3 my-3 border-b border-gray-600" key={item.id}>
            <input 
            type="checkbox" 
            className="w-5 h-8 mr-4"
            checked={item.done} 
            onClick={()=> handleDoneCheckbox(item.id)}/>
            <p className="flex-1 text-lg">{item.text}</p>
            <button onClick={() => handleEdit(item.id)} className="mx-4 hover:text-gray-500">Editar</button>
            <button onClick={() => handleRemove(item.id)} className="mx-4 hover:text-gray-500">Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
