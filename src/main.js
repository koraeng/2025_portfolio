import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

// Font Awesome 설정
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'  // 👉 추가
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faCircleChevronRight)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
