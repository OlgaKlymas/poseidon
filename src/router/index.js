import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/pages/Dashboard";
import Companies from "@/pages/Companies";
import NewCompany from "@/pages/NewCompany";
import Company from "@/pages/Company";
import Statistics from "@/pages/Statistics";
import Audience from "@/pages/Audience";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      default: Dashboard
    }
  },
  {
    path: '/dashboard',
    name: "Dashboard",
    component: Dashboard

  },
  {
    path: '/companies',
    name: "Companies",
    component: Companies,
    children: [
      {
        path: 'add-company',
        component: NewCompany
      },
      {
        path: 'company/:id',
        component: Company
      }
    ]
  },
  {
    path: '/company/:id',
    name: "Company",
    component: Company,
  },
  {
    path: '/add-company',
    name: "NewCompany",
    component: NewCompany,
  },
  {
    path: '/statistics',
    name: "Statistics",
    component: Statistics,
  },
  {
    path: '/audience',
    name: "Audience",
    component: Audience,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
