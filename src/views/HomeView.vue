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
            <div class="cart">
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
                  <i class="fa-solid fa-xmark  closeIcon" @click="Openmenu()"></i>
                </div>
              </div>
            </aside>
          </transition>

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
            <img :src="getImageUrl(`goToMenu${index+1}.jpg`)" alt="gotomenu">
            <span>{{ item }}</span>
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
            <img :src="getImageUrl(`browse${index+1}.png`)" alt="browsePic">
            {{ item }}
          </div>
        </div>
      </div>
    </section>

    <section class="popularNear">
      <div class="popularContent container">
        <h2>Popular Near You</h2>
        <div class="row">
          <div class="col-PC-3 col-T-4 col-12 popularCard" v-for="(item,index) in popular1">
            <span class="tags" v-if="item.tag">
              Flat 30% Off
            </span>
            <img :src="getImageUrl(`popular${index+1}.jpg`)" alt="popularPic">
            <div class="bottomCard">
              <div class="popularTitle">
                <h2>{{ item.name }}</h2>
                <span>
                  <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                  <span style="font-weight: bold;">4.5</span>/5
                </span>
              </div>
              <div class="popularPrice">
                <span>$20</span>• Cofee, set menu • 15 - 20 min
              </div>
            </div>
          </div>
          <div class="col-PC-3 col-T-4 col-12 popularCard" v-for="(item,index) in popular2">
            <span class="tags" v-if="item.tag">
              Flat 30% Off
            </span>
            <img :src="getImageUrl(`popular${index+1}.jpg`)" alt="popularPic">
            <div class="bottomCard">
              <div class="popularTitle">
                <h2>{{ item.name }}</h2>
                <span>
                  <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                  <span style="font-weight: bold;">4.5</span>/5
                </span>
              </div>
              <div class="popularPrice">
                <span>$20</span>• Cofee, set menu • 15 - 20 min
              </div>
            </div>
          </div>
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

export default {
  data() {
    return {
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
    Openmenu() {
      this.menuOpen = !this.menuOpen
    },
    handleScroll() {
      // 取得 banner 的高度
      const bannerHeight = document.querySelector('.banner').offsetHeight;
      // 滾動超過 banner 的高度時，顯示 Mainheader
      this.visible = window.scrollY > bannerHeight;
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
    // 監聽滾動事件
    window.addEventListener('scroll', this.handleScroll);

  },
  destroyed() {
    // 組件被摧毀時移除滾動事件監聽器
    window.removeEventListener('scroll', this.handleScroll);
  },
  components:{
    Mainheader,
  },
}
</script>
