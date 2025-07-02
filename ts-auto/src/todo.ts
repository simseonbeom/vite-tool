import { saveStorage } from "./storage";
import type { TodoList } from "./type";


let todos:TodoList = [];

// todos 데이터를 로컬 스토리지에 저장해주세요.

export function addTodo(content:string):void{
  const newTodo = {
    id:Date.now(),
    content:content,
    completed:false
  }

  todos.push(newTodo);

  saveStorage(todos)

  
}





















