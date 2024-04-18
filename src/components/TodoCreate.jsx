import React, { useState } from "react"
import '../App.css'

function TodoCreate({onCreateTodo}){

    const[newTodo,setNewTodo]=useState('');

    const clearInput=()=>{
        setNewTodo('');
    }


    const createTodo=()=>{
        if(!newTodo)return;
        
        const request={
            id:Math.floor(Math.random()*99999999),
            content:newTodo
        }
        onCreateTodo(request)
        clearInput();
    }
    return(
        <div className="todo-create">
            <input value={newTodo}
            onChange={(e)=>setNewTodo(e.target.value)}
            className="todo-input" type="text"placeholder="Todo Giriniz" />
            <button className="todo-create-button" onClick={createTodo}>Todo Oluştur</button>
        </div>
    )
}
export default TodoCreate