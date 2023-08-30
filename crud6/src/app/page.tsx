"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () => {
  const [itemInput, setItemInput] = useState('');

  const [list, setList] = useState<TodoItem[]>([
    {id:1, label: "Fazer dever", checked: true},
    {id:2, label: "Fazer dever", checked: false}

  ]);

  const handleAddButton = () => {
    if(itemInput.trim() === "") return;
    setList([ ...list, {id:list.length+1, label: itemInput, checked: false}]);
    setItemInput('');
  }

  const deleteItem = (id: number) => {
    setList(list.filter(item => item.id !== id));
  }

  const toogleItem = (id:number) => {
    let newList = [...list];

    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
      }
    }

    // Método com laço de repeticao
    // for(let i in newList) {
    //   if(index === parseInt(i)) {
    //     newList[i].checked = !newList[i].checked;
    //   }
    // }

    setList(newList);
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl text-white">
      <h1 className="text-4xl mt-5">Lista de tarefas</h1>
      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">
        <input
          type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adicionar</button>
      </div>
      <p>{list.length} - Itens na lista</p>
      <ul>
      {list.map((item) => (
          <li key={item.id}>
            [{item.id}] - 
            <input onClick={() => toogleItem(item.id)} type="checkbox" checked={item.checked} className="w-5 h-5 mr-2"/> -  
             {item.label} - <button onClick={()=> deleteItem(item.id)} className="hover:underline">Deletar </button></li>
          ))}
        </ul>
    </div>
  )
};

export default Page;