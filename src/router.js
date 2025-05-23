import { createRouter, createWebHistory } from "vue-router"; 
const router = createRouter({  
    history: createWebHistory(),  
    routes: 
    [    
        {      
            path: "/",      
            name: "main",      
            component: () => import("./components/views/mainPage.vue"),    
        },    
    ],
}); export default router;