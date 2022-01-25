import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaStore from './store'
import './index.css'
// import ArcoVue from "@arco-design/web-vue"
// 支持markdown 语法高亮
import 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markup-templating'
// 支持SVG
import 'virtual:svg-icons-register'
createApp(App).use(router).use(piniaStore).mount('#app')
