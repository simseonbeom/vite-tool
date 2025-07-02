import { StorageKey, type Todo } from "./type";




export function saveStorage(todos:Todo):void{
  localStorage.setItem(StorageKey.TODOS,JSON.stringify(todos))
}











