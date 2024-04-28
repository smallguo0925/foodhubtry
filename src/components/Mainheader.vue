<template>
  <div id="header">
    <div class="headerWrapper container">
        <div class="headerLeft">
          <RouterLink to="/">
            <div class="logo">
                <img src="../assets/images/foodhub-logo.png" alt="logo">
            </div>
          </RouterLink>
          <div class="localSearchContent">
            <div class="local">
              <i class="fa-solid fa-location-dot"></i>
              <span class="localName">New York</span>
            </div>
          
            <img src="../assets/images/gpsIcon.svg" alt="gps" class="gps">
          
            <div class="searchBar">
              <input type="text" placeholder="Search for restaurant ">
              <button>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="headerRight">
          <div class="account">
              <img src="../assets/images/accountIcon.svg" alt="account">
              <span class="accountName">ACCOUNT</span>
          </div>
          <div class="cart">
            <i class="fa-solid fa-cart-shopping" @click="Opencart()"></i>
            <span>(8)</span>
          </div>
          
          <!-- 漢堡 -->
          <button class="menu" @click="Openmenu()">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      <!--  漢堡選單 -->
      <transition name="slide-left">
        <aside class="hamWrapper " v-if="menuOpen">
          <div class="openMenu">
            <div class="hamTitle">
              <span>Navbar</span>
              <i class="fa-solid fa-xmark  closeIcon"  @click="Openmenu()"></i>
            </div>
          </div>
        </aside>
      </transition>
      
      <!-- 購物車選單 -->
      <Drawer title="Basic Drawer" :closable="true" v-model="cartOpen" transfer	="true">
        <div class="cartWrapper" v-for="(item,index) in piniaCart">
          <div class="cartItem" >
            <div class="addSubtract">
              <!-- 加減盒 -->+-{{ item }}
            </div>
            <div class="prodPic">
              <img src="../assets/images/reviews1.png" class="prodPic">
            </div>
            <div class="prodInfo">
              <!-- 商品資訊 -->
              {{ item.name }}
              $<span>{{ item.price }}</span>x1
              
            </div>
          </div>
          <div class="closeIcon">
          
          </div>
        </div>
      </Drawer>
    </div>






  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { useCartStore } from "../stores/cart";//引入pinia
export default {
    data() {
        return {
            menuOpen: false,
            cartOpen:false,
            piniaCart:[],
        }
    },
    methods: {
        Openmenu(){
          this.menuOpen=!this.menuOpen
            
        },
        Opencart(){
          this.cartOpen=!this.cartOpen
        },
        getImageUrl(paths) {
            //取得圖片路徑
            return new URL(`../assets/images/${paths}`, import.meta.url).href;
        },

    },
    mounted() {
    // 監聽路由切換
    this.$router.afterEach(() => {
      this.menuOpen = false; // 關閉漢堡選單
    });

    const cartData = JSON.parse(localStorage.getItem("addCart")); 
    this.piniaCart=cartData
    console.log(this.piniaCart);

    },
}
</script>
