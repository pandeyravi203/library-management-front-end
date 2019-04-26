import VueRouter from 'vue-router'
import Vue from 'vue'
import LibraryBody from '@/components/librarybody.vue'
import About from '@/components/About.vue'
import UserSignIn from '@/components/User-Management/UserSignIn.vue'

import LibraryHome from '@/components/libraryhome.vue'
import userStore from './store/user-store'
import store from './store/store'

var routes= [
    {
        path:'/',
        name:'LibraryBodyPage',
        component:LibraryBody,
        // beforeEnter:(to,from,next)=>{
        //     var currentUserSession=localStorage.getItem("currentUserSession")
        //      if(currentUserSession)
        //     {
        //         next('/sign')
        //     }
        //     else
        //     next()
        // }
    },
    {
        path:'/home',
        name:'LibraryHomePage',
        component:LibraryHome,
        // beforeEnter:(to,from,next)=>{
             
        //     if(this.$session.get("currentUserSession"))
        //     {
        //         next()
        //     }
        //     else
        //     {
        //         next('/')
        //     }
        // }
    },
    {
        path:'/aboutus',
        name:'About',
        component:About
    },
    {
        path:'/signin',
        name:'Sign In',
        component:UserSignIn
    },
    {
        path:'/logout',
     
        beforeEnter:(to,from,next)=>{
            userStore.state.currentUserId=''
            userStore.state.userLoggedInStatus='inactive'
            store.state.welcomeMessage=''
            userStore.jwtToken=undefined
            localStorage.removeItem("currentUserSession")
            next('/')
        },
       
        
    },
]

const router=new VueRouter({
    routes
})
router.beforeEach((to,from,next)=>{
    var currentUserSession=JSON.parse(localStorage.getItem("currentUserSession"))
    if(to.path=='/signin'||to.path=='/aboutus'||to.path=='/')
    {
        next()
    }
   else if(currentUserSession)
    {
        console.log(currentUserSession)
        userStore.state.currentUserRole=currentUserSession.role
        userStore.state.currentUserId=currentUserSession.id
        userStore.state.userLoggedInStatus=currentUserSession.stat
        userStore.state.currentUserName=currentUserSession.userName
        userStore.state.jwtToken=currentUserSession.token
        store.state.welcomeMessage="Hello ! "+currentUserSession.userName
        next()
    }
    else
    {
        if(to.path=='/')
        {
            next()
        }
        else
        next("/signin")
    }
})
export default router