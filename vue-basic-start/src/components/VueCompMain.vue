<template>
  <div>
    4. Vue 사용자 입력 핸들링 VueCompMain
    <br><br>

      <!-- todo-item 컴포넌트의 인스턴스 만들기 -->
      <todo-item></todo-item>

  </div>
</template>

<script>
import VueCompList from './VueCompList';
export default {
  name: 'VueComp',
  data() {
    return {
      msg1: 'Vue 이벤트 리스너 [v-on]',
      msg2: 'Vue 양방향 바인딩 [v-model]'
    };
  },
  components: {
    'todo-item': VueCompList
  }
};
</script>