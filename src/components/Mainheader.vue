<template>
  <div id="header">
    <div class="headerWrapper container">
      <div class="logo">
          <img src="../assets/images/foodhub-logo.png" alt="logo">
      </div>
      <div class="localSearchContent">
        <div class="local">
          <i class="fa-solid fa-location-dot"></i>
          <span class="localName">New York</span>
        </div>
        <div class="gps">
          <button><img src="../assets/images/gpsIcon.svg" alt="gps"></button>
        </div>
        <div class="searchBar">
          <input type="text" placeholder="Search for restaurant ">
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

      </div>

      <div class="account">
          <img src="../assets/images/accountIcon.svg" alt="account">
          <span class="accountName">ACCOUNT</span>
      </div>
      <div class="cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <span>(8)</span>
      </div>
      <!-- 漢堡 -->
      <button class="menu" @click="Openmenu()">
        <i class="fa-solid fa-bars"></i>
      </button>
      <transition name="slide-left">
        <aside class="hamWrapper openMenu" v-if="menuOpen">
          <div class="hamTitle">
            <span>Navbar</span>
            <i class="fa-solid fa-xmark  closeIcon"  @click="Openmenu()"></i>
          </div>

        </aside>
      </transition>







    </div>






  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
    data() {
        return {
            menuOpen: false,
        }
    },
    methods: {
        Openmenu(){
            this.menuOpen=!this.menuOpen
            
        }
    },
    mounted() {
        // 監聽路由切換
    this.$router.afterEach(() => {
      this.menuOpen = false; // 關閉漢堡選單
    });

    },
}
</script>
