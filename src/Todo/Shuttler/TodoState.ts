import { ShuttlerState } from "shuttler-framework";
import TodoItem from "../Data/TodoItem";

export default class TodoState extends ShuttlerState{
    isValidTodo: (todo: TodoItem) => boolean = () => false;
    canSubmit: () => boolean = () => false;
}