import { createApp } from 'vue'
import anime from "animejs"

import App from './App.vue'
import router from './router'


import './assets/main.css'

const app = createApp(App)

app.use(anime)

app.use(router)
app.mount('#app')
