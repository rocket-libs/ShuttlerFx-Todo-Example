import React, { useState, useEffect } from 'react';
import ShuttlerFx from 'shuttler-framework';
import TodoRespository from '../Shuttler/TodoRespository';
import TodoState from '../Shuttler/TodoState';
import TodoItem from '../Data/TodoItem';
import TodoModel from '../Shuttler/TodoModel';
import TodoStateHelper from '../Services/TodoStateHelper';

let shuttlerFx: ShuttlerFx<TodoRespository,TodoState,TodoItem> = new ShuttlerFx<TodoRespository,TodoState,TodoItem>(new TodoModel());
export default function MainTodoScreen(){
    const [shuttlerChangeId, setShuttlerChangeId] = useState("");
    new TodoStateHelper(shuttlerFx);
    useEffect(() => {
        const initializeShuttlerFx = () : () => void => {
            const shuttlerCleanUp = shuttlerFx.subscribe((model: TodoModel) => setShuttlerChangeId(model.state.changeId));
            return function cleanup() {
                shuttlerCleanUp();
            }
        }
        return initializeShuttlerFx();
    },[shuttlerChangeId])
    
    return  <>
                {dataEntry()}
                {table()}
            </>
    
}

const dataEntry = () => {
    return  <>
                <div>Enter Label</div>
                <input type="text" onChange={(e:any) => shuttlerFx.pushToTarget({displayLabel: e.target.value})} />

                <div style={{marginTop:'30px'}}>Enter Priority</div>
                <input type="text" onChange={(e:any) => shuttlerFx.pushToTarget({priority: e.target.value})} />

                <div style={{marginTop:'30px'}} ><input type="button" value="Add To List" onClick={submitToServer} /></div>
            </>
}

const submitToServer = () => {
    if(!shuttlerFx.state.isValidTodo(shuttlerFx.target)){
        alert("your data is invalid");
    }else{
        const newItem = shuttlerFx.target;
        const cachedRepo = shuttlerFx.repository.todoItems;
        cachedRepo.push(newItem);
        shuttlerFx.pushToRepository({todoItems: cachedRepo})
        
    }
}

const table = () => {
    return  <div style={{marginTop:'30px'}}>
                <table style={{border:"1px #000 solid"}}>
                    <th>Label</th>
                    <th>Priority</th>
                    {lineItems()}
                </table>
            </div>
}

const lineItems = () => {
    return  <tbody>
                {shuttlerFx.repository.todoItems.map(singleTodoItem => {
                    return  <tr>
                                <td>{singleTodoItem.displayLabel}</td>
                                <td>{singleTodoItem.priority}</td>
                            </tr>
                })}
            </tbody>
}