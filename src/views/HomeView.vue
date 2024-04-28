<template>
  <div id="home">

    <section class="banner">
      <div class="homeHeader container">
        <div class="headerContent ">
          <img src="../assets/images/foodhub-logo.png" alt="logo" class="logo">
          <div class="headerLeft">
            <div class="account">
              <img src="../assets/images/accountIcon.svg" alt="account">
              <span class="accountName">ACCOUNT</span>
            </div>
            <div class="cart" @click="Opencart()">
              <i class="fa-solid fa-cart-shopping"></i>
              <span>(8)</span>
            </div>
            <!-- 漢堡 -->
            <button class="menu" @click="Openmenu()">
              <i class="fa-solid fa-bars" style="color:#fff;"></i>
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
      <div class="headerText container">
        <div class="row">
          <h1>Discover the best food & drinks in <span>New York</span> </h1>
          <p>The meals you love, delivered with care</p>
        </div>

        <div class="row">
          <div class="localSearchContent">

            <div class="local">
              <i class="fa-solid fa-location-dot fa-xl"></i>
              <span class="localName">New York</span>
            </div>

            <div class="gps">
              <img src="../assets/images/gpsIcon.svg" alt="gps" >
              Locate Me
            </div>
            <div class="searchBar">
              <input type="text" placeholder="Search for restaurant ">
            </div>
            <span class="searchBtn">Search</span>
          </div>

        </div>
      </div>
    </section>

    <!-- 這裡要再放MainHeader -->
    <Mainheader v-if="visible"/>

    <section class="goToMenu">
      <div class="cardContent container">
        <div class="row">
          <div class="col-PC-3 col-T-4 col-12 menuCard" v-for="(item,index) in goToMenu">
            <RouterLink to="/foodmenu">
              <img :src="getImageUrl(`goToMenu${index+1}.jpg`)" alt="gotomenu">
              <span>{{ item }}</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="collections">
      <div class="collectionText container">
        <h2>Collections</h2>
        <div class="textAndView">
          <span>Explore curated lists of top restaurants, cafes, pubs, and bars in New York, based on trends</span>
          <a href="">View all collections</a>
        </div>
        <div class="row">
          <div class="col-PC-3 col-T-4 col-12 collectionCard" v-for="num in 4">
            <div class="collectionTitle" >
              <p>{{ collections[num-1] }}</p>
              <span>30 places ></span>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="browse">
      <div class="browseContent container">
        <h2>Browse By Cuisine</h2>
        <div class="row" >
          
          <div class="col-PC-2 col-T-4 col-12 circleOfBrowse" v-for="(item,index) in browse">
            <RouterLink to="/foodmenu">
              <img :src="getImageUrl(`browse${index+1}.png`)" alt="browsePic">
              {{ item }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="popularNear">
      <div class="popularContent container">
        <h2>Popular Near You</h2>
        <div class="row">
          <productCard class="col-PC-3 col-T-4 col-12" v-for="(item,index) in popular1"
            :name="item.name"
            :tag="item.tag"
            :img="getImageUrl(`popular${index+1}.jpg`)"
          />
          <productCard class="col-PC-3 col-T-4 col-12" v-for="(item,index) in popular2"
            :name="item.name"
            :tag="item.tag"
            :img="getImageUrl(`popular${index+1}.jpg`)"
          />
        </div>
      </div>
    </section>


    <section class="getMobileApp">
      <div class="getContent container">
        <img src="../assets/images/App.4927ff9.png" alt="appPic">
        <div class="getAppText">
          <h1>Get the Mobile App</h1>
          <span>We will send you a link, open it on your phone to download the app</span>
          <div class="check">
            <label class="checkboxLabel">
              <input type="radio" name="checkbtn" > Email
            </label>
            <label class="checkboxLabel">
              <input type="radio" name="checkbtn"> 
              Phone
            </label>
          </div>
          <div class="enterEmail">
            <input type="text" placeholder="Email">
            <span>SEARCH</span>
          </div>
          <span>Download App from</span>
          <div class="downloadPic">
            <img src="../assets/images/google-play.430ca54.png" alt="google">
            <img src="../assets/images/app-store.63e3986.png" alt="appStore">
          </div>
        </div>
      </div>

    </section>


  </div>
</template>




<script>
import { RouterLink } from "vue-router";
import Mainheader from "@/components/Mainheader.vue"
import productCard from "@/components/productCard.vue"
import { useCartStore } from "../stores/cart";//引入pinia
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      navbar:['Dashboards','Review','Photos','Order List','Order History','Followers','Bookmarks','Restaurant'],

      cartOpen:false,
      emailSelected: false,
      phoneSelected: false,
      menuOpen: false,
      visible: false,
      goToMenu:['Order Food Online','Go Out For Meal', 'Nightlife & Clubs','Pro Membership'],
      collections:['Most Searched of 2020','Best Opening of 2020','Trending This Week','Best of New York'],
      browse:['Italian','Chinese','Japanese','Indian','Thai Food','Mexican'],
      popular1:[  { name: 'Starbucks', tag: true },
      { name: 'Mughal Masala', tag: true },
      { name: 'Woondal', tag: false },
      { name: 'Red Chillise', tag: true }],
      popular2:[  { name: 'Mughal Masala', tag: true },
      { name: 'Starbucks', tag: false },
      { name:'Red Chillise' , tag: false },
      { name:'Woondal' , tag: true }],
    }
  },
  methods: {
    ...mapActions(useCartStore, [
      "getLocalCartData",
      'reduceFromCart',
      'increaseFromCart',
      'itemDelFormCart',
      ]),

    Opencart(){
          this.cartOpen=!this.cartOpen
        },

    Openmenu() {
      this.menuOpen = !this.menuOpen
    },
    getImageUrl(paths) {
      //取得圖片路徑
      return new URL(`../assets/images/${paths}`, import.meta.url).href;
    },
    handleScroll(){
      //取得banner的高度
      const bannerHeight = document.querySelector('.banner').offsetheight;
      //滾超過banner高度就讓visible=true
      this.visible=window.scrollY>bannerHeight
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
    // 監聽滾動事件
    window.addEventListener('scroll', this.handleScroll);

  },
  destroyed() {
    // 組件被摧毀時移除滾動事件監聽器
    window.removeEventListener('scroll', this.handleScroll);
  },
  components:{
    Mainheader,
    productCard,
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

}
</script>
