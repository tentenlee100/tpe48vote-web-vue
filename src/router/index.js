import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Girls from '@/components/Girls'
import Day2 from '@/components/Day2/Day2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Girls',
      component: Girls
    },
    {
      path: '/day2',
      name: 'Day2',
      component: Day2
    },
  ]
})
