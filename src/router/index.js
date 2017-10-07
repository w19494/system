import Vue from 'vue'
import VueRouter from 'vue-router'
// import Hello from '@/components/Hello'          
import Index from '@/components/Index'
import Readme from '@/components/Readme'
import UserInfo from '@/components/UserInfo'
import Table from '@/components/Table'
import Case from '@/components/Case'
import Form from '@/components/Form'
import Editor from '@/components/Editor'
import StudentsInf from '@/components/StudentsInf'
import StudentsList from '@/components/StudentsList'
import StudentsAdd from '@/components/StudentsAdd'
import StudentsUpdata from '@/components/StudentsUpdata'
import NewFilm from '@/components/NewFilm'

const Foo = { template: '<div>这是foo内容...</div>' }
const Bar = { template: '<div>这是bar内容...</div>' }

const User = {
  template: `<div>User{{ $route.params.id }}</div>`
}         //动态路由

Vue.use(VueRouter)
export default new VueRouter({
  routes: [

    {
      path: '/index',redirect: '/index/readme',
      component:Index,
      children:[
        {path: 'readme',component: Readme},
        {path: 'userinfo',component: UserInfo}
      ]
    },
    {
      path: '/table',
      component: Table
    },
    { path: '/case',
      component: Case,
      children:[
        {path:'form',component:Form},
        {path:'editor',component:Editor}
      ]
    },
    { path: '/studentsInf',
      component: StudentsInf,
      children:[
        {path:'studentsList',component:StudentsList},
        {path:'studentsAdd',component:StudentsAdd},
        {path:'studentsUpdata',component:StudentsUpdata}
      ]
    },
    {
      path:'/newFilm',component:NewFilm,
    },
  ]
})

