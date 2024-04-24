
<template>
  <Mainheader />
  <RouterView />
  <MainFooter />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Mainheader from "./components/Mainheader.vue"
import MainFooter from "./components/MainFooter.vue"

export default {

  components:{
    Mainheader,
    MainFooter,
    RouterView,
  }
}


</script>

<style scoped>

</style>
