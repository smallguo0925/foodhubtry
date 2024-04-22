
<template>
  <Mainheader />
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Mainheader from "./components/Mainheader.vue"

export default {

  components:{
    Mainheader,
    RouterView,
  }
}


</script>

<style scoped>

</style>
