<script>
import Vue from 'vue'
import VuejsPaginate from 'vuejs-paginate'
Vue.component('paginate', VuejsPaginate)
export default {
  name: "Paginate",
  data() {
    return{
      langs: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Ruby', 'Python', 'Erlang'],
      paginate: ['languages'],
      shown: false
    }
  }
}
</script>
