<template>
  <div>
    <cmOrderTable></cmOrderTable>
  </div>
</template>

<script>
import cmOrderTable from '@/components/common/cmOrderTable'
export default {
  name: 'order',
  data(){
    return {
      title: '',
      items:[]
    }
  },
  components: {
    'cmOrderTable': cmOrderTable
  }
}
</script>