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
                    <div class="type" v-for="(item, index) in types" @click="activeType(index)"
                        :class="{ 'tabActive': filterTypeActive === index }">
                        {{ item }}
                        <span :class="{ 'underline': filterTypeActive === index }"></span>
                        <span :class="{ 'typeHover': filterTypeActive === index }"></span>
                    </div>


                </div>
                <button type="button" @click="filterCategories()">FILTER</button>
            </div>

            <div class="menuWrapper row">
                <div class="col-PC-12 col-12">
                    <div class="box">
                        <div class="menuLeft" :class="{ 'mobileMenu': mobileShowCategories }" v-show="CategoriesOpen">
                            <div class="categoriesContent ">
                                <div class="categoriesTitle">
                                    <h3>Categories</h3>
                                    <i class="fa-solid fa-x" @click="OpenCategories()"></i>
                                </div>
                                <div>
                                    <div class="categories" v-for="(item, index) in categories">
                                        <label class="categoriesOptions">
                                            <input type="checkbox" v-model="checkedItems[index]">{{ item }}
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <h3>Categories</h3>
                                    <div class="categories" v-for="num in 4">
                                        <label class="categoriesOptions">
                                            <input type="checkbox">4+
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
                            <productCard class="col-PC-4 col-T-6 col-12" v-for="(item, index) in displayProd" :name="item.name"
                                :tag="item.tag" :img="getImageUrl(`popular${index + 1}.jpg`)" v-show="checkedItems" />
                            <productCard class="col-PC-4 col-T-6 col-12" v-for="(item, index) in displayProd" :name="item.name"
                                :tag="item.tag" :img="getImageUrl(`popular${index + 1}.jpg`)" v-show="checkedItems" />
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
            filtCategories: 0,
            checkedItems: [false,false,false,false],
            types: ['Delivery', 'Dining Out', 'Nightlife'],
            costValue: [0, 100],
            mobileShowCategories: window.innerWidth < 768,
            CategoriesOpen: true,
            filterTypeActive: 0,
            prod: [
                { name: 'Starbucks', tag: true, type: 'Pizza' },
                { name: 'Mughal Masala', tag: true, type: 'Sushi' },
                { name: 'Woondal', tag: false, type: 'Dessert' },
                { name: 'Red Chillise', tag: true, type: 'Soup' }
            ],
            displayProd: [],
            categories: ['Pizza', 'Sushi', 'Dessert', 'Soup'],
        };
    },
    methods: {
        filterCategories() {
            let anyChecked = false; // 標記是否有任何 checkbox 被勾選
            this.displayProd = []; // 清空 displayProd 陣列

            // 遍歷 checkedItems 陣列
            this.checkedItems.forEach((checked, index) => {
                // 如果該類別被勾選
                if (checked) {
                    anyChecked = true;
                    const categoryName = this.categories[index]; // 取得類別名稱
                    // 尋找與該類別名稱相同的物品並添加到 displayProd 中
                    this.prod.forEach(item => {
                        if (item.type === categoryName) {
                            this.displayProd.push(item);
                        }
                    });
                }
            });
                    // 如果所有 checkbox 都沒有被勾選，則將 displayProd 設置為 prod
            if (!anyChecked) {
                this.displayProd = this.prod;
            }
            console.log(this.displayProd);
        },
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
        handelResize() {
            //視窗小於768px
            this.mobileShowCategories = window.innerWidth < 768;
            if (this.mobileShowCategories) {
                this.CategoriesOpen = false
            } else {
                this.CategoriesOpen = true
            }
        },
        handleClickOutside(e) {
            const mobileMenu = document.querySelector('.mobileMenu');
            if (mobileMenu && !mobileMenu.contains(e.target)) {
                this.OpenCategories();
            }
        },
    },
    created() {
        this.filterCategories()
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