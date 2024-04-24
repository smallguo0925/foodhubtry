
<template>
  <Mainheader v-if="showHeader"/>
  <RouterView />
  <MainFooter />
  <BackToTop />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Mainheader from "./components/Mainheader.vue"
import MainFooter from "./components/MainFooter.vue"
import BackToTop from "./components/BackToTop.vue"


export default {
  data() {
    return {
      showHeader: true
    };
  },
  components:{
    Mainheader,
    MainFooter,
    BackToTop,
    RouterView,
  },
  mounted() {
    this.$watch('$route', () => {
      // 根據路由名稱決定是否隱藏 MainHeader
      this.showHeader = this.$route.name !== 'home';
    });
  }
}


</script>

<style scoped>

</style>
