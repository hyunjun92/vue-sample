<template>
  <div>
    <ul v-for="(todo, i) in todos" :key="todos.id" class="list-unstyled">
      <li>{{i+1}}. {{todo.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'todoList',
    props: ['todos']
  };
</script>