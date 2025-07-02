import { loadStorage, saveStorage } from "./storage";
import type { TodoList } from "./type";


let todos:TodoList = loadStorage();

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


export function deleteTodo(id:number):void{

  todos = todos.filter(todo => todo.id !== id);
  saveStorage(todos)

}


export function toggleTodo(id:number):void{
  todos = todos.map(todo => 
    todo.id === id ? { ...todo,completed: !todo.completed } : todo
  )
  saveStorage(todos);
}

// {id:10,content:'밥먹기',completed:false}

export function updateTodo(id:number,newContent:string):void{
  // todos = 
  todos = todos.map(todo => 
    todo.id === id ? {...todo,content:newContent} : todo
  )
  saveStorage(todos);
}

















