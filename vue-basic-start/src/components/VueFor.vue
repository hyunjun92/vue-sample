<template>
  <div>
    2. Vue For문
    <br><br>

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VueFor",
  data() {
    return {
      todos: [
        { text: "JavaScript 배우기" },
        { text: "Vue 배우기" },
        { text: "무언가 멋진 것을 만들기" }
      ]
    };
  }
};
</script>


<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>