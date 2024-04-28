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

            <div class="menuWrapper row">
                <div class="col-PC-12 col-12">
                    <div class="tagsWrapper" >
                        <div class="tags" v-for="(tag,index) in menuTags" :key="index" @click="activeTags(index)"
                        :class="{'tabActive' : tagsActive === index}"
                        >
                            {{ tag }}
                            <span :class="{ 'underline': tagsActive === index }"></span>

                        </div>
                    </div>

                    <div class="viewWrapper">
                        <div class="viewItem" id="tab1" v-show="this.tabsOpen===0">
                        <!-- 左邊選單右邊商品 -->
                            <div class="row">
                                <div class="col-12 col-PC-12">
                                    <div class="boxWrapper">
                                        <div class="typeOfProd" :class="{ 'mobileType': mobileShowCategories}" v-if="typeOpen">
                                            <!-- 左邊選單 -->
                                            <i class="fa-solid fa-x" @click="OpenCategories()"></i>

                                            <div class="typeContent" v-for="(item,typeIndex) in typeofProd" 
                                            @click="activeTypes(typeIndex)"
                                            >
                                                {{ item }}
                                                <span :class="{'activeLine':typeActive===typeIndex}"></span>
                                            </div>
                                        </div>
                                        <div class="prodList">
                                            <button class="openType" @click="OpenCategories()">
                                                <i class="fa-solid fa-bars"></i>
                                                Categories
                                            </button>
                                            <h2 class="col-12">{{this.typeofProd[chooseIndex].replace(/\s*\(\d+\)/, '') }}</h2>
                                            <div class="col-12 col-PC-12 prodContent" v-for="(prod,prodIndex) in prodContent" :key="prodIndex" v-show="this.typeActive===prod.typeId1 || this.typeActive===prod.typeId2">
                                                <div class="prodCard"> 
                                                    <div class="prodPic"></div>
                                                    <div class="prodText">
                                                        <h5>{{ prod.prodNam }}</h5>
                                                        <span class="mustTry">MUST TRY</span>
                                                        <span>
                                                            <i class="fa-solid fa-star" style="color: #FFD43B;" v-for="num in 5"></i>
                                                            　(57)
                                                        </span>
                                                        <p>
                                                            <span class="twentyFive">$99</span>
                                                            <span class="twentyTwo">${{prod.price}}</span>
                                                            <span class="cost10">10% off</span>
                                                        </p>
                                                        <span>(4 Pcs mutton in chicken keema gravy)</span>
                                                    </div>
                                                </div>
                                                <button class="add" @click="addCart(prodIndex)">
                                                    ADD　+
                                                </button>

                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="viewItem" id="tab2" v-show="this.tabsOpen===1">
                        <!-- 預約表單 -->
                            <div class="row">
                                <div class="col-12 col-T-6 col-PC-6 inputWrapper">
                                    <div class="row">
                                        <div class="selectbox col-12 col-T-6">
                                            <select class="selectDate">
                                                <option value="" selected disabled hidden>Seleted Date</option>
                                                <option value="Foo">Foo</option>
                                                <option value="Bar">Bar</option>
                                                <option value="Fizz">Fizz</option>
                                                <option value="Buzz">Buzz</option>
                                            </select>
                                        </div>
                                        <div class="col-12 col-T-6 selectbox">
                                            <select class="numGuest">
                                                <option value="" selected disabled hidden >Number of Guests</option>
                                                <option value="Foo">Foo</option>
                                                <option value="Bar">Bar</option>
                                                <option value="Fizz">Fizz</option>
                                                <option value="Buzz">Buzz</option>
                                            </select>
                                        </div>
                                        <div class="col-12 col-T-6 " v-for="(item,index) in inputPlaceholder">
                                            <input type="text" :placeholder="inputPlaceholder[index]" class="inputBox">
                                        </div>
                                        <button type="button" class="bookBtn">BOOK</button>
                                    </div>
                                    
                                </div>
                                <div class="col-12 col-T-6 col-PC-6 imgBox">
                                    <img src="../assets/images/download-app.c757568.png" alt="app">
                                </div>
                            </div>
                        </div>
                        <div class="viewItem" id="tab3" v-show="this.tabsOpen===2">
                        <!-- 評價 -->
                            <div class="row">
                                <div class="col-12 col-T-6 board">
                                    <!-- 留言區 -->
                                    <div class="allMsg" v-for="num in 3">
                                        <div class="avatorName">
                                            <!-- 頭像跟名字 -->
                                            <img :src="getImageUrl(`people${num}.png`)" alt="avator">
                                            <div class="name">
                                                <h3>Abriella Bond</h3>
                                                <span>2 Reviews, 9 Followers</span>
                                            </div>
                                        </div>
                                        <div class="stars">
                                            <!-- 星星評分 -->
                                            <span><i class="fa-solid fa-star" style="color: #FFD43B;" v-for="num in 5"></i></span>
                                            <p>4.0</p>
                                            <span>3 Days Ago</span>
                                        </div>
                                        <div class="message">
                                            <!-- 留言 -->
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</p>
                                        </div>
                                        <div class="messageImg " v-if="num!=3 && num!=2">
                                            <img src="../assets/images/reviews1.png" alt="reviews">
                                            <img src="../assets/images/reviews2.png" alt="reviews">
                                        </div>
                                        <div class="like">
                                            <span>4 Likes, 2 Comments</span>
                                        </div>
                                        <div class="likeCommentBtn">
                                            <button>
                                                <i class="fa-regular fa-thumbs-up" style="color: gray;"></i>
                                                Like
                                            </button>
                                            <button>
                                                <i class="fa-regular fa-message" style="color: gray;"></i>
                                                Comment
                                            </button>
                                            
                                        </div>
                                        <div class="msgReply" v-if="num!=3 && num!=2" v-for="n in 2">
                                            <div class="replyAvator">
                                                <img :src="getImageUrl(`people${n+1}.png`)" alt="replyAvator">
                                                <h3>{{ this.people[1] }}</h3>
                                            </div>
                                            <div class="replyContent">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-T-6 ">
                                    <div class="imgBox"></div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { useCartStore } from "../stores/cart";//引入pinia
import { mapState, mapActions } from "pinia";

export default {

    data() {
        return {
            piniaData:[],
            people:[
                'Abriella Bond','Emmet McDermott','Abriella Bond'
            ],
            inputPlaceholder:['First Name','Last Name','Email','Phone'],
            chooseIndex:0,
            prodContent:[
                {id:1,prodNam:'Tandoori Chicken (Full)',typeId1:0,typeId2:1,price:50,prodImg:'popular4.jpg'},
                {id:2,prodNam:'Woondal',typeId1:0,typeId2:1,price:22.5,prodImg:'popular4.jpg'},
                {id:3,prodNam:'Starbucks',typeId1:0,typeId2:1,price:30,prodImg:'popular4.jpg'},
                {id:4,prodNam:'Red Chilies',typeId1:0,typeId2:6,price:10,prodImg:'popular4.jpg'},
            ],
            mobileShowCategories:window.innerWidth < 768,
            typeOpen:false,
            tabsOpen:0,
            typeActive:0,
            typeofProd:['Recomended (40)',
            'DPB Special Combos (10)',
            'Chineese Staters (30)',
            'Chinese Main Course (75)',
            'Indian Main Course (63)',
            'Rice & Pulao (7)',
            'Desserts (1)',
            'Soup & wonton (15)',
            'Accompaniment (4)',
            'Biryani (1)'
        ],
            tagsActive:0,
            menuTags:['Order Online','Book A Table','Reviews'],
        };
    },
    methods: {
        ...mapActions(useCartStore, [
        "getLocalCartData",
        ]),

        getImageUrl(paths) {
            //取得圖片路徑
            return new URL(`../assets/images/${paths}`, import.meta.url).href;
        },
        activeTags(i){
            this.tagsActive =i;
            this.tabsOpen = i;
        },
        activeTypes(i){
            this.typeActive =i;
            this.chooseIndex=i;
        },
        handelResize(){
            //視窗小於768px
            this.mobileShowCategories = window.innerWidth < 768;
            if (this.mobileShowCategories) {
                this.typeOpen=false
            }else{
                this.typeOpen=true
            }
        },
        OpenCategories() {
        this.typeOpen = !this.typeOpen
        },
        addCart(i){
            const cartStore = useCartStore()

            //把加入購物車的資料放進pinia
            cartStore.addCart(
                {id:this.prodContent[i].id,
                typeId1:this.prodContent[i].typeId1,
                typeId2:this.prodContent[i].typeId2,
                name:this.prodContent[i].prodNam,
                price:this.prodContent[i].price,
                prodImg:this.prodContent[i].prodImg
                }
            )
            this.piniaData=cartStore.cartData
            console.log(this.piniaData);
            
            this.getLocalCartData();
        },


    },
    computed: {
    //使用 mapState 輔助函數將/src/stores/cart裡的state/data 映射在這裡
    // !!!要寫在computed
    ...mapState(useCartStore, [
        "cartData",
        ]),
    },
    mounted() {
        window.addEventListener('resize', this.handelResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handelResize);
    },
    created() {
    this.getLocalCartData();
    },


};
</script>