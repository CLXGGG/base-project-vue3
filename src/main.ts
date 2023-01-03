import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.less'
import "jsoneditor/dist/jsoneditor.min.css";
// elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from "element-plus/lib/locale/lang/zh-cn";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// vxe
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

const app = createApp(App)

// element-plus全局注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.use(ElementPlus, { locale })
app.use(VXETable)

app.mount('#app')
