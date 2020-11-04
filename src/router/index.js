import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: ()=>import('../views/Main.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: ()=>import('../views/home/Home.vue')
            },
            {
                path: '/player',
                name: 'player',
                component:()=>import('../views/player/Player.vue'),
                children: [
                    {
                        path: '/gift',
                        name: 'gift',
                        component: ()=>import('../views/player/children/Gift.vue')
                    }
                ]
            },
            {
                path: '/game',
                name: 'game',
                component: ()=>import('../views/game/Game.vue'),
                children: [
                    {
                        path: '/list',
                        name: 'list',
                        component: ()=>import('../views/game/children/List.vue')
                    },
                    {
                        path: '/special',
                        name: 'special',
                        component: ()=>import('../views/game/children/Special.vue')
                    }
                ]
            },
            {
                path: '/message',
                name: 'message',
                component: ()=>import('../views/message/Message.vue'),
                children: [
                    {
                        path: '/read',
                        name: 'read',
                        component: ()=>import('../views/message/children/Read.vue')
                    },
                    {
                        path: '/unread',
                        name: 'unread',
                        component: ()=>import('../views/message/children/Unread.vue')
                    }
                ]
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
