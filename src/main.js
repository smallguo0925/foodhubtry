//樣式
import "./assets/scss/style.scss"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


//引入fontawesome
import '@fortawesome/fontawesome-free/css/all.css'

//引入view ui
import ViewUIPlus from 'view-ui-plus'
import "view-ui-plus/dist/styles/viewuiplus.css";


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ViewUIPlus)
app.mount('#app')
