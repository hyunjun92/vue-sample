<template>
  <div>
    <!-- table 컴포넌트: v-bind(디렉티브) Element 객체의 속성 동적 데이터 바인딩 -->
    <cmBoardTable v-bind:items="items"></cmBoardTable>
  </div>
</template>

<script>
import cmBoardTable from '@/components/common/cmBoardTable'
export default {
  name: 'noticeBoard',
  data(){
    return {
      title: '',
      items:[]
    }
  },
  methods:{
    getBoardList () {
      this.$http.get('http://javalocal.mallstore.co.kr/sample/list.do?board=notice')
      .then((res) => {
        this.items = res.data.data.boardList
      })
    }
	},
  mounted(){
    this.getBoardList()
  },
  components: {
    'cmBoardTable': cmBoardTable
  }
}
</script>