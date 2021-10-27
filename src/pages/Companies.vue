<template>
  <div class="companies">
    <CompanyList :showList="showList"/>
    <transition name="bou">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import CompanyList from "@/pages/CompanyList";
export default {
  name: "Companies",
  components: {CompanyList},
  computed: {
    showList(){
      return this.$route.path === '/companies'
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.showList = !this.showList
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
}
</script>
