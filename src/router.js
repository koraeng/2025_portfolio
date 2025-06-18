import { createRouter, createWebHashHistory } from "vue-router"; 
const router = createRouter({  
    history: createWebHashHistory(),  
    routes: 
    [    
        {      
            path: "/",      
            name: "main",      
            component: () => import("./components/views/mainPage.vue"),    
        },    
    ],
}); export default router;