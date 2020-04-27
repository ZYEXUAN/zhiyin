import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Classify from '../views/Classify'
import Broadcast from '../views/Broadcast'
import Complete from '../views/Complete'
import Login from '../views/Login'
import Ranking from '../views/Ranking'
import Register from '../views/Register'

import My from '../views/My'
import Feedback from '../views/My/Feedback'
import Follow from '../views/My/Follow'
import Purchase from '../views/My/Purchase'
import History from '../views/My/History'
import Subscription from '../views/My/Subscription'
import Voucher from '../views/My/Voucher'

import Search from '../views/Search'
import SearchResult from '../views/SearchResult'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/classify', component: Classify },
    { path: '/broadcast', component: Broadcast },
    { path: '/complete', component: Complete },
    { path: '/login', component: Login },
    { path: '/ranking', component: Ranking },
    { path: '/Register', component: Register },
    {
      path: '/my',
      component: My,
      children: [
        {
          path: 'feedback',
          component: Feedback
        },
        {
          path: 'history',
          component: History
        },
        {
          path: 'subscription',
          component: Subscription
        },
        {
          path: 'voucher',
          component: Voucher
        },
        {
          path: 'follow',
          component: Follow
        },
        {
          path: 'purchase',
          component: Purchase
        },
        {
          path: '',
          redirect: '/my'
        }
      ]
    },
    { path: '/search', component: Search },
    { path: '/searchResult', component: SearchResult },
    { path: '/', redirect: '/home' }
  ]
})

export default router
