<template>
  <div class="pagination-wrap">
    <jw-pagination :items="data" :pageSize="pageSize" @changePage="onChange"></jw-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['data' , 'pageSize', 'onChangeFn'],
  methods:{
    onChange(){
      this.$emit('onChangePage')
    }
  }
}
</script>
