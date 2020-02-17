import ShuttlerFx from "shuttler-framework";
import TodoRespository from "../Shuttler/TodoRespository";
import TodoState from "../Shuttler/TodoState";
import TodoItem from "../Data/TodoItem";



export default class TodoStateHelper{
    shuttlerFx: ShuttlerFx<TodoRespository,TodoState,TodoItem>
    constructor(shuttlerFx: ShuttlerFx<TodoRespository,TodoState,TodoItem>){
        this.shuttlerFx = shuttlerFx;

        this.shuttlerFx.state.isValidTodo = this.isValidTodo;
    }


    isValidTodo () : boolean {
        if(!this.shuttlerFx.target){
            return false;
        }else{
            if(this.shuttlerFx.target.displayLabel && this.shuttlerFx.target.priority){
                return true;
            }else{
                return false;
            }
        }
    }

}