<template>
  <div>
    VueCompMain에서 지역컴포넌트로 선언 후 사용
    <br><br>

      <ul>
        <li>VueCompList 1</li>
        <li>VueCompList 2</li>
        <li>VueCompList 3</li>
        <li>VueCompList 4</li>
      </ul>

  </div>
</template>

<script>
export default {
  name: 'VueCompList'
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
