import ShuttlerFx from "shuttler-framework";
import TodoRespository from "../Shuttler/TodoRespository";
import TodoState from "../Shuttler/TodoState";
import TodoItem from "../Data/TodoItem";

let shuttlerFx: ShuttlerFx<TodoRespository,TodoState,TodoItem>;
export default function initializeHelper(shuttlerFxProp: ShuttlerFx<TodoRespository,TodoState,TodoItem>){
        shuttlerFx = shuttlerFxProp;
        shuttlerFx.state.isValidTodo = this.isValidTodo;
}


const isValidTodo =  () : boolean => {
    if(!shuttlerFx.target){
        return false;
    }else{
        if(shuttlerFx.target.displayLabel && shuttlerFx.target.priority){
            return true;
        }else{
            return false;
        }
    }
}

