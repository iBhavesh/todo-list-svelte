import { writable } from "svelte/store";
import type { Todo } from "./types";

const createTodos = () => {
  let todos: Todo[] = [];
  if (localStorage.getItem("todos") !== null) {
    todos = JSON.parse(localStorage.getItem("todos")!);
  }
  const { subscribe, set, update } = writable(todos);
  return {
    subscribe,
    addTodo: (todo: any) => {
      update((todos) => {
        localStorage.setItem("todos", JSON.stringify([...todos, todo]));
        return [...todos, todo];
      });
    },
    toggleStatus: (id: number) => {
      update((todos) => {
        const index = todos.findIndex((todo) => todo.id === id);
        todos[index].status = !todos[index].status;
        localStorage.setItem("todos", JSON.stringify(todos));
        return todos;
      });
    },
    deleteTodo: (id: number) => {
      update((todos) => {
        todos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(todos));
        return todos;
      });
    },
  };
};

export const todos = createTodos();
