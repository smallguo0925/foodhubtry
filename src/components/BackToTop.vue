<template>
    <div id="backToTop">
        <div class="openChat" @click="scrollToTop">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <circle cx="12" cy="12" r="5" fill="black" />
                <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/> -->
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            scrollToTop() {
                window.scrollTo({
                top: 0,
                behavior: "smooth"})
            },
        },
        mounted() {
            document.addEventListener('click', this.ClickChatBox);
        },
    }
</script>

