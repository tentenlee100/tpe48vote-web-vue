import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Girls from '@/components/Girls'
import WorkType1 from '@/components/WorkType1/WorkType1'
import WorkType2 from '@/components/WorkType2/WorkType2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Girls',
      component: Girls
    },
    {
      path: '/type1',
      name: 'WorkType1',
      component: WorkType1
    },
    {
      path: '/type2',
      name: 'WorkType2',
      component: WorkType2
    },
  ]
})
