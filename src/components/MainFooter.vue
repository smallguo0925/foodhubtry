<template>
    <div id="mainFooter">
        <!-- 上面popular的部分 -->
        <div class="container">
            <div class="row">
                <div class="col-PC-12 col-12">
                    <h2>Popular Localities In & Around New York</h2>
                </div>
                <div class="topFooter row">
                    <div class="col-PC-3 col-T-6 col-12" v-for="num in 4">
                        <div class="col-PC-12 content" v-for="(item,index) in popular">
                            <a href="">
                                {{ item }}<span>{{ places[index] }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 下面有LOGO的footer -->
        <div class="container">
            <div class="bottomFooter row">
                <!-- LOGO -->
                <div class="col-PC-3 col-12 bottomFooterLogo">
                    <img src="../assets/images/foodhub-logo.png" alt="logo" class="logo">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, obcaecati nostrum at quidem debitis maiores officiis quos hic culpa ipsa ab quo aut harum dolores vel similique ad maxime.
                    <div class="donloadApp">
                        <img src="../assets/images/google-play.430ca54.png" alt="googleplay">
                        <img src="../assets/images/app-store.63e3986.png" alt="appstore">
                    </div>
                </div>
                <div class="col-PC-3 col-T-6 col-12">
                    <h3>About Us</h3>
                    <div class="content" v-for=" item in about">
                        <a href="">
                            {{ item }}
                        </a>
                    </div>
                </div>
                <div class="col-PC-3 col-T-6 col-12">
                    <h3>Customer Care</h3>
                    <div class="content" v-for=" item in CustomerCare">
                        <a href="">
                            {{ item }}
                        </a>
                    </div>
                </div>
                <div class="col-PC-3 col-T-6 col-12">
                    <h3>Contact Us</h3>
                    <div class="content" v-for=" item in ContactUs">
                        {{ item }}
                    </div>
                    <div class="icons">
                        <i class="fa-brands fa-facebook" ></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-google"></i>
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
            popular:['Newport','Brooklyn','Chinatown','Chelsea','Coney Island'],
            places:['(26 places)','(14 places)','(10 places)','(20 places)','(6 places)'],
            about:['Careers','Our Stores','Our Cares','Terms & Conditions','Privacy Policy'],
            CustomerCare:['Help Center','How to Buy','Track Your Order','Corporate & Bulk Purchasing','Return & Refunds'],
            ContactUs:['Jalalabad 20/1,Shah Farid RoadSylhet, Bangladesh.Email:uilib@gmail.com Phone:+880 1123456780','Sylhet, Bangladesh.','Email: uilib@gmail.com','Phone: +880 1123 456 780'],
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>