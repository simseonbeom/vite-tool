export type MemoData = {
  id: number;
  priority: "high" | "medium" | "easy";
  title: string;
  description: string;
  hits: number;
};

function createMemo({
  id,
  priority,
  title,
  description,
  hits,
}: MemoData): string {
  return `
    <article class="memo ${priority}" data-id="${id}" draggable="true">
      <header class="memo-header">
        <span class="badge">${priority}</span>
        <button type="button" class="delete">
          <img src="/trash.svg" alt="삭제 아이콘" />
        </button>
      </header>

      <div class="contents">
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
      <footer class="memo-footer">
        <img src="/user.svg" alt="유저 아이콘" />
        <span class="hit">${hits}</span> watch
        <img src="/drag.svg" class="drag" alt="드래그 아이콘" />
      </footer>
    </article>
  `;
}

export function renderMemo(target: HTMLElement | null, data: MemoData): void {
  target?.insertAdjacentHTML("beforeend", createMemo(data));
}
