import React from 'react';
import Home from './components/Home';
import LoginForm from './components/LoginForm';

const routes = [
    {
        path : '/home',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/loginform',
        main : () => <LoginForm />
    },
];

export default routes;