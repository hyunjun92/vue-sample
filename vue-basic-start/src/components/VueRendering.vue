<template>
  <div>
    1. Vue 렌던링
    <br><br>

    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'VueRendering',
  data() {
    return {
      msg:
        'Vue.js의 핵심은 간단한 템플릿 구문을 사용해 선언적으로 DOM에 데이터를 렌더링하는 것입니다.'
    };
  }
};
</script>