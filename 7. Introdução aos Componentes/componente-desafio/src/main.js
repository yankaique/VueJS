import Vue from 'vue'
import App from './App.vue'

import './plugins/vuetify'

import LateralMenu from './components/template/LateralMenu.vue'
import Toolbar from './components/template/Toolbar.vue'
import Carousel from './components/widgets/Carousel.vue'

Vue.config.productionTip = false
Vue.component('lateral-menu',LateralMenu );
Vue.component('toolbar', Toolbar);
Vue.component('carousel', Carousel);

new Vue({
  render: h => h(App),
}).$mount('#app')
