
export default function install(router) { 
    router.beforeEach((to, from, next) => {
        console.log(to)
        const token = sessionStorage.getItem('token')
        if (token || to.path === '/login') {
            next();
            return
        }
        next('/login');
        
    })
    router.afterEach((to) => {
        document.title = to.meta && to.meta.title ? `${to.meta.title}-宿舍管理系统` : '宿舍管理系统'
    })
}