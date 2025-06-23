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
        {
            path: "/resume",      
            name: "resume",      
            component: () => import("./components/views/ResumePage.vue"),   
        }, 
        {
            path: "/web",      
            name: "web",      
            component: () => import("./components/views/WebProject.vue"),   
        } 
    ],
}); export default router;