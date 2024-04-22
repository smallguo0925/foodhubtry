<template>
    <div id="header">
        <div class="headerWrapper">
            <div class="logo">
                <img src="../assets/images/foodhub-logo.png" alt="logo">
            </div>
            <div class="localSearchContent">
              <div class="local">
                <i class="fa-solid fa-location-dot"></i>
                <span>New York</span>
              </div>
              <div class="gps">
                <button><img src="../assets/images/gpsIcon.svg" alt="gps"></button>
              </div>
              <input type="text" placeholder="Search for restaurant ">
              <button>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>

            </div>

            <div class="account">
                <img src="../assets/images/accountIcon.svg" alt="account">
                <span>ACCOUNT</span>
            </div>
            <div class="cart">
              <i class="fa-solid fa-cart-shopping"></i>
              <span>(8)</span>
            </div>
            <!-- 漢堡 -->
            <button>
              <i class="fa-solid fa-bars"></i>
            </button>

        </div>






    </div>
</template>

<script>
export default {

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>