import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../layout'
import Consult from '../pages/product/consult'
import Register from '../pages/product/register'

const AppRouter: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/prods/consult" element={<Consult />} />
            <Route path="/*" element={<Navigate to='/prods/consult'/>} />
        </Routes>
    </Layout>
)

export default AppRouter