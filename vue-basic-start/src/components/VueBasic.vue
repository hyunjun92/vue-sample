<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>맛보기</h2>
    <ul>
      <li>  
        <router-link to="/VueRendering">1. Vue 렌더링</router-link>
      </li>
      <li>
        <router-link to="/VueFor">2. Vue For문</router-link>
      </li>
      <li>
        <router-link to="/VueHandling">3. 사용자 입력 핸들링</router-link>
      </li>
      <li>
        <router-link to="/VueCompMain">4. 컴포넌트 사용</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VueBasic",
  data() {
    return {
      msg: "Vue 기본 문법 맛보기"
    };
  }
};
</script>


<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
