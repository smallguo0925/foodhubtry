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
          <div class="cart" @click="Opencart()">
            <i class="fa-solid fa-cart-shopping" ></i>
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
            <div class="navbarContent">
              <div class="navbarItem" v-for="(item,index) in navbar">
              {{ item }}
              </div>
            </div>
          </div>
        </aside>
      </transition>
      
      <!-- 購物車選單 -->
      <div class="cartMenu" v-if="cartOpen">
        <div class="cartTitle">
          <div class="cartTitleLeft"><i class="fa-solid fa-bag-shopping" style="margin-right: 10px;"></i>Item</div>
          <i class="fa-solid fa-xmark fa-xl" style="color: #D23F57;" @click="Opencart()" ></i>
        </div>
        <div class="cartWrapper row" v-for="(item,index) in cartData" :key="item.id" >
          <div class="cartItem" >
            <div class="cartItemLeft">
              <div class="addSubtract">
                <!-- 加減盒 -->
                <button class="add"><i class="fa-solid fa-plus" style="color: #D23F57;" @click="quantityChangePlus(index)"></i></button>
                <input type="number" :value="item.count" readonly>
                <button class="sub"><i class="fa-solid fa-minus" style="color: #D23F57;" @click="quantityChangeMinus(index)"></i></button>
              </div>
              <div class="prodPic">
                <img src="../assets/images/reviews1.png" class="prodPic">
              </div>
              <div class="prodInfo">
                <!-- 商品資訊 -->
                {{ item.name }}
                <span>${{ item.price }}x{{ item.count }}</span>
                <span>{{ item.price * item.count }}</span>
              
              </div>
            </div>
            <div class="closeIcon">
              <i class="fa-solid fa-xmark fa-xl closeIcon" style="color: gray;" @click="itemChangeDel(index)"></i>
            </div>
          </div>
        </div>
      </div>
    </div>






  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { useCartStore } from "../stores/cart";//引入pinia
import { mapState, mapActions } from "pinia";

export default {
    data() {
        return {
          menuOpen: false,
          cartOpen:false,
          piniaCart:[],
          navbar:['Dashboards','Review','Photos','Order List','Order History','Followers','Bookmarks','Restaurant'],
        }
    },
    computed: {
    //使用 mapState 輔助函數將/src/stores/cart裡的state/data 映射在這裡
    // !!!要寫在computed
    ...mapState(useCartStore, [
        "cartData",
        "totalNumofCart",
        "getQuantityById",
        ]),
    },
    methods: {
      ...mapActions(useCartStore, [
      "getLocalCartData",
      'reduceFromCart',
      'increaseFromCart',
      'itemDelFormCart',
      ]),
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
        quantityChangeMinus(product) {
          this.reduceFromCart(this.cartData[product]);
        },
        quantityChangePlus(product) {
          this.increaseFromCart(this.cartData[product]);
        },
        itemChangeDel(product) {
          this.itemDelFormCart(this.cartData[product]);
        },

        


    },
    mounted() {
    // 監聽路由切換
    this.$router.afterEach(() => {
      this.menuOpen = false; // 關閉漢堡選單
    });
    },
    created() {
    this.getLocalCartData();
    },

}
</script>
