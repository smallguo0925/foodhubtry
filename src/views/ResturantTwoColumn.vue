<template>
    <div id="RestaurantTwo">
        <div class="container">
            <ul class="bread">
                <router-link to="/">Home</router-link>
                <i class="fa-solid fa-angle-right fa-2xs"></i>
                <router-link to="/">New York</router-link>
                <i class="fa-solid fa-angle-right fa-2xs"></i>
                <span>Restaurants</span>
            </ul>
            <div class="filter">
                <div class="typeFilter">
                    <div class="type" @click="activeType(0)" :class="{'tabActive' : filterTypeActive === 0}">
                        Delivery
                        <span :class="{ 'underline': filterTypeActive === 0 }"></span>
                        <span :class="{ 'typeHover': filterTypeActive === 0 }"></span>
                    </div>
                    <div class="type" @click="activeType(1)"
                    :class="{'tabActive' : filterTypeActive === 1}">
                        Dining Out
                        <span :class="{ 'underline': filterTypeActive === 1 }"></span>
                        <span :class="{ 'typeHover': filterTypeActive === 1 }"></span>
                    </div>
                    <div class="type" @click="activeType(2)"
                    :class="{'tabActive' : filterTypeActive === 2}">
                        Nightlife
                        <span :class="{ 'underline': filterTypeActive === 2 }"></span>
                        <span :class="{ 'typeHover': filterTypeActive === 2 }"></span>
                    </div>

                </div>
                <button type="button">FILTER</button>
            </div>

            <div class="menuWrapper row">
                <div class="col-PC-12 col-12">
                    <div class="box">
                        <div class="menuLeft" :class="{ 'mobileMenu': mobileShowCategories}" v-if="CategoriesOpen">
                            <div class="categoriesContent ">
                                <div class="categoriesTitle">
                                    <h3>Categories</h3>
                                    <i class="fa-solid fa-x" @click="OpenCategories()"></i>
                                </div>
                                <div>
                                    <div class="categories" v-for="(item, index) in categories">
                                        <label class="categoriesOptions">
                                            <input type="checkbox">{{ item }}
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <h3>Categories</h3>
                                    <div class="categories" v-for="num in 4">
                                        <label class="categoriesOptions">
                                            <input type="checkbox" >4+
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <h3>Sort by</h3>
                                    <div class="categories" v-for="(item, index) in categories">
                                        <label class="sortBy">
                                            <input type="radio" name="sort">popularity
                                        </label>
                                    </div>
                                </div>

                                <div class="cost">
                                    <h3>Cost per person</h3>
                                    <div class="sliderBox">
                                        <Slider v-model="costValue" range :step="10" show-tip="always">
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menuRight row">
                            <button type="button" class="showCategories" @click="OpenCategories()">
                                <i class="fa-solid fa-bars"></i>
                                Categories
                            </button>

                            <h2 class="col-12 col">184 Delivery Restaurants in New York</h2>
                            <productCard class="col-PC-4 col-T-6 col-12" v-for="(item, index) in prod" :name="item.name"
                                :tag="item.tag" :img="getImageUrl(`popular${index + 1}.jpg`)" />
                            <productCard class="col-PC-4 col-T-6 col-12" v-for="(item, index) in prod" :name="item.name"
                                :tag="item.tag" :img="getImageUrl(`popular${index + 1}.jpg`)" />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import productCard from "@/components/productCard.vue"


export default {

    data() {
        return {
            costValue:[0,100],
            mobileShowCategories:window.innerWidth < 768,
            CategoriesOpen:true,
            filterTypeActive: 0,
            prod: [
                { name: 'Starbucks', tag: true, type: 'Pizza' },
                { name: 'Mughal Masala', tag: true, type: 'Shshi' },
                { name: 'Woondal', tag: false, type: 'Soup' },
                { name: 'Red Chillise', tag: true, type: 'Dessert' }
            ],
            categories: ['Pizza', 'Sushi', 'Dessert', 'Soup'],
        };
    },
    methods: {
        activeType(i) {
            this.filterTypeActive = i;
        },
        getImageUrl(paths) {
            //取得圖片路徑
            return new URL(`../assets/images/${paths}`, import.meta.url).href;
        },
        OpenCategories() {
        this.CategoriesOpen = !this.CategoriesOpen
        },
        handelResize(){
            //視窗小於768px
            this.mobileShowCategories = window.innerWidth < 768;
            if (this.mobileShowCategories) {
                this.CategoriesOpen=false
            }else{
                this.CategoriesOpen=true
            }
        },
        handleClickOutside(e) {
            const mobileMenu = document.querySelector('.mobileMenu');
            if (mobileMenu && !mobileMenu.contains(e.target)) {
                this.OpenCategories();
            }
        },
    },
    mounted() {
        window.addEventListener('resize', this.handelResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handelResize);
    },
    components: {
        productCard,
    },
};
</script>