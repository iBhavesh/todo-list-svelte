<script lang="ts">
  import { todos } from "../../store";
  import TodoItem from "./TodoItem.svelte";
</script>

<ul>
  {#each $todos as todo}
    <TodoItem {todo} />
  {/each}
</ul>

<style>
  ul {
    padding: 0;
  }
</style>
