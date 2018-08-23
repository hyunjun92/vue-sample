<template>
  <div>
    <ul v-for="(todo, i) in todos" :key="todos.id" class="list-unstyled">
      <li>
        {{i+1}}. {{todo.title}} <span v-on:click="delTodo(i)" class="close" aria-hidden="true">&times;</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'todoList',
    props: ['todos'],
    methods: {
      // 부모 컴포넌트에서 이벤트 핸들러를 사용하기 위해 정의
      delTodo(todo) {
        this.$emit('del-todo', todo);
      }
    }
  };
</script>