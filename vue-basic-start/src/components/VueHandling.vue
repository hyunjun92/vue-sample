<template>
  <div>
     3. Vue 사용자 입력 핸들링
    <br><br>
    <div>
      <p>{{ msg1 }}</p>
      <button v-on:click="reverseMessage">메시지 뒤집기</button>
    </div><br><br>

    <div>
      <p>{{ msg2 }}</p>
      <input v-model="msg2">
    </div>

  </div>
</template>

<script>
export default {
  name: 'VueHandling',
  data() {
    return {
      msg1: 'Vue 이벤트 리스너 [v-on]',
      msg2: 'Vue 양방향 바인딩 [v-model]'
    };
  },
  methods: {
    reverseMessage: function() {
      this.msg1 = this.msg1
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>