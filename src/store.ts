import { writable } from "svelte/store";
import type { Todo } from "./types";

const DUMMY_DATA = [
  {
    title: "Buy Food",
    status: false,
    createdAt: new Date(),
  },
  {
    title: "Buy Dog",
    status: false,
    createdAt: new Date(),
  },
  {
    title: "Buy Rice",
    status: false,
    createdAt: new Date(),
  },
  {
    title: "Buy Water",
    status: false,
    createdAt: new Date(),
  },
];

const createTodos = () => {
  let todos: Todo[] = DUMMY_DATA;
  const { subscribe, set, update } = writable(todos);
  return {
    subscribe,
    addTodo: (todo: any) => {
      update((todos) => [...todos, todo]);
    },
    toggleStatus: (id: number) => {
      update((todos) => {
        todos[id].status = !todos[id].status;
        return todos;
      });
    },
    deleteTodo: (id: number) => {
      update((todos) => {
        todos.splice(id, 1);
        return todos;
      });
    },
  };
};

export const todos = createTodos();
