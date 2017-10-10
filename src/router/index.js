import Vue from 'vue'
import Router from 'vue-router'
import GoodList from './../view/GoodList'

Vue.use(Router)

export default new Router({
	mode:'hash',
  routes: [
    {
      path: '/goods/:goodsId/user/:name',
      name: 'GoodList',
      component: GoodList,
    }
  ]
})
