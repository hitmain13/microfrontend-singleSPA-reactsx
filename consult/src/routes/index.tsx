import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import AppRouter from './app.routes'

const Routes: React.FC = () => {

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default Routes