export { default as Head } from './head'
export { default as Foot } from './foot'
export { default as Person } from './person'
export { default as Recent } from './recent'
export { default as PostList } from './postList'
export { default as Pagination } from './pagination'

import Card from './Card'

import Vue from 'vue'
Vue.component('Card', Card)
