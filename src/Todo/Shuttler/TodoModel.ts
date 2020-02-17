import TodoRespository from "./TodoRespository";
import TodoState from "./TodoState";
import {IShuttlerModel} from "shuttler-framework";
import TodoItem from "../Data/TodoItem";

export default class TodoModel implements IShuttlerModel<TodoRespository,TodoState,TodoItem>{
    repository: TodoRespository = new TodoRespository();
    state: TodoState = new TodoState();
    target: TodoItem = new TodoItem();
}