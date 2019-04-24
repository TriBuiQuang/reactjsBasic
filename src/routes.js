
import Directer from './components/Directer.jsx';
import LoginForm from './components/LoginForm.jsx';
import Home from './components/Home.jsx';

const routes = [
    {
        path: "/login",
        component: LoginForm,
        layout: "/auth"
    },
    {
        path: "/home",
        component: Home,
        layout: ""
    },  
    {
        path: "/",
        component: Directer,
        layout: ""
    },  
];

export default routes;