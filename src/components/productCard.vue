<template>
    <RouterLink to="/FoodMenu">
        <div class="popularCard">
            <span class="tags" v-if="tag">
                Flat 30% Off
            </span>
            <img :src="img" alt="popularPic">
            <div class="bottomCard">
                <div class="popularTitle">
                    <h2>{{ name }}</h2>
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
    </RouterLink>

</template>

<script>
import { RouterLink } from "vue-router";

export default {

    data() {
        return {

        };
    },
    props: [
        'tag',
        'name',
        'img',
    ],
};
</script>