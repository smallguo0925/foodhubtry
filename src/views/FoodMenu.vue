<template>
    <div id="foodMenu">
        <div class="foodMenuContent container">
            <ul class="bread">
                <router-link to="/">Home</router-link>
                <i class="fa-solid fa-angle-right fa-2xs"></i>
                <router-link to="/">New York</router-link>
                <i class="fa-solid fa-angle-right fa-2xs"></i>
                <span>Restaurants</span>
            </ul>

            <div class="foodinfo row">
                <!-- 左邊大圖 -->
                <div class="col-PC-6 col-T-6 col-12 imgWrapper">
                    <div class="bigPic">
                        <!-- 左邊大圖 -->
                        <div class="pic"></div>
                    </div>
                </div>
                <!-- 右邊四張小圖 -->
                <div class="col-PC-6 col-T-6 col-12 imgWrapper">
                    <div class="row">
                        <div class="col-6 col-PC-6 smallPic" v-for="num in 4">
                            <!-- 右邊四張小圖 -->
                            <img :src="getImageUrl(`foodMenu${num+1}.png`)" alt="food">
                        </div>
                    </div>
                </div>
                
                <!-- 下方資訊 -->
                <div class="col-PC-12 col-T-12 col-12 menuText">
                    <div class="titleAndStar">
                        <h2>Starbucks</h2>
                        <div class="stars">
                            <span>
                                <i class="fa-solid fa-star" style="color: #FFD43B;" v-for="num in 5"></i>
                            </span>
                            4.5 <span>(1004)</span>
                        </div>
                    </div>
                    <div class="contentText">
                        Coffee, signature roasts, light bite, quick bite, fast foods
                    </div>
                    <div class="contentText">
                        <i class="fa-solid fa-location-dot" style="color: gray;"></i>
                        The Dorothy Ross Friedman Residence, NY, US -
                        <a href="" class="showMap">Show Map</a>
                    </div>
                    <div class="contentText">
                        <i class="fa-regular fa-clock" style="color: gray;"></i>    
                        <span>Open Now</span>
                        <p>- Sun - Mon: 9am - 10pm</p>
                    </div>
                    <div class="contentText">
                        <i class="fa-solid fa-earth-americas" style="color: gray;"></i>
                        <a href="" class="starbucks">www.starbucks.com</a>                        
                    </div>
                </div>

            </div>












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
        getImageUrl(paths) {
            //取得圖片路徑
            return new URL(`../assets/images/${paths}`, import.meta.url).href;
        },
    },
};
</script>