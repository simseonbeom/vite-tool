import { loadStorage } from "./storage";
import { addTodo, deleteTodo, getCompletedTodos, toggleTodo, updateTodo } from "./todo";
import type { Todo } from "./type";
import S from "/src/style.module.css";

/* 

todolist 구조를 가진 태그를 만들어 화면에 렌더링 해주세요.
css module을 사용해 스타일링을 해주세요.

생성된 DOM 요소를 잡아 form 이벤트를 바인딩 해주세요.
input의 value값을 가져와주세요.

render함수를 만들어 아이템을 appendChild를 사용해 렌더링 해주세요.

*/

const tag = `

  <div class="${S.container}">
    <button type="button" class="completed">완료 항목만 보기</button>
    <hr />
    <form>
      <label for="todo">할 일 : </label>
      <input type="text" id="todo"/>
      <button type="submit">추가</button>
    </form>
    
    <hr />

    <ul id="renderPlace">
    </ul>
  </div>
`;

document.querySelector("#app")!.insertAdjacentHTML("beforeend", tag);

let toggle = false;
const input = document.querySelector("#todo") as HTMLInputElement;
const list = document.querySelector("#renderPlace") as HTMLUListElement;
const form = document.querySelector("form");
const completed = document.querySelector('.completed') as HTMLButtonElement
function empty(){
  return `
    <div class="${S.empty}">
      <h3>오늘은 무슨 일을 할까? 🤔</h3>
    </div>
  `
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  if (!input.value.trim()) return;
  addTodo(input.value.trim());
  input.value = "";
  render();
}

function render(showCompleted:boolean = false) {
  const todos: Todo[] = showCompleted ? getCompletedTodos() : loadStorage();

  if(showCompleted){
    completed.textContent = '전체 항목 보기'
  }else{
    completed.textContent = '완료 항목 보기'
  }

  list.innerHTML = todos.length < 1 ? empty() : '';

  todos.forEach((todo:Todo) => {
    const li = document.createElement("li");
    li.dataset.id = String(todo.id);
    li.innerHTML = `
      <input name="checkbox" type="checkbox" ${todo.completed ? "checked" : ""} />
      <span contenteditable="true">${todo.content}</span>
      <button type="button" class="delete">삭제</button>
    `;

    const checkbox = li.querySelector("input")!;
    const span = li.querySelector("span")!;
    const btn = li.querySelector("button")!;

    checkbox.addEventListener("change", () => {
      toggleTodo(todo.id);
      render(toggle);
    });

    btn.addEventListener("click", () => {
      deleteTodo(todo.id);
      render(toggle);
    });

    span.addEventListener("blur", () => {
      
      const newContent = span.textContent?.trim() || "";
      if (newContent && newContent !== todo.content) {
        updateTodo(todo.id, newContent);
        render(toggle);
      }
    });

    list.appendChild(li);
  });

}

render();



function handleCompleted(){

    render(!toggle);
    toggle = !toggle
}



form?.addEventListener("submit", handleSubmit);
completed.addEventListener("click", handleCompleted);


















