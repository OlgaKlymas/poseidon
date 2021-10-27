<template>
  <div class="main-layout">
    <Header/>
    <div class="main-layout__wrapper">
      <Sidebar/>
      <main>
        <Container>
          <transition name="fade">
           <router-view/>
          </transition>
          <News/>
        </Container>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Container from "@/components/Container";
import News from "@/components/News";
export default {
name: "MainLayout",
  components: {News, Container, Sidebar, Header},
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  }
}
</script>
