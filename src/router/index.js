import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import SliderOperation from '@/components/SliderOperation/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/sliderOper',
      name: 'SliderOper',
      component: SliderOperation
    }
  ]
})
