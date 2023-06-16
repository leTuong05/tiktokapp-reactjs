import HeaderOnly from "../components/GlobalStyles/Layout/HeaderOnly"
import Following from "../pages/Following"
import Home from "../pages/Home"
import Upload from "../pages/Upload"


// public routes là khi không cần login
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
]
// private routes là khi  cần login
export const privateRoutes = [

]