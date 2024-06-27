import HomeComp from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import LoginComp from './components/Login.vue';
import AddComp from './components/Add.vue';
import UpdateComp from './components/Update.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes=[
    {
        name:"HomeComp",
        component:HomeComp,
        path:'/'
    },
    {
        name:"SignUp",
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:"LoginComp",
        component:LoginComp,
        path:'/login'
    },
    {
        name:"AddComp",
        component:AddComp,
        path:'/add'
    },
    {
        name:"UpdateComp",
        component:UpdateComp,
        path:'/update/:id'
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;
