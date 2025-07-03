
import { handleDragEnd, handleDragOver, handleDragStart } from './handler';
import { fetchMemo } from './service/service';
import '/src/style.css';



export const main = document.querySelector('main') as HTMLElement;




window.addEventListener('DOMContentLoaded',()=>{
  fetchMemo();
})

main.addEventListener('dragstart',handleDragStart);
main.addEventListener('dragover',handleDragOver);
main.addEventListener('dragend',handleDragEnd);








