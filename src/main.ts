import { createApp } from 'vue'
import { ElButton, ElSelect, ElRow } from 'element-plus'
import App from './App.vue'
// 如果要使用.scss样式文件，则需要引入base.scss文件
import 'element-plus/packages/theme-chalk/src/base.scss'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$ELEMENT = { size: 'medium', zIndex: 3000 }
app.use(ElButton)
app.use(ElSelect)
app.use(ElRow)
app.use(router)
app.mount('#app')
