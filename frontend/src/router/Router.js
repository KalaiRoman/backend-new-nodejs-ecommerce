
import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from '../protectedrouter/Productedrouter';
import Home from '../pages/home/Home';
import Signin from '../pages/auth/Signin';
import ProductView from '../pages/ProductView/ProductView';
import AllProducts from '../pages/allproducts/AllProducts';
import Cart from '../pages/cart/Cart';
import Tabcheck from '../pages/tabcheck/Tabcheck';
import Signup from '../pages/auth/Signup';
import Otp from '../pages/auth/Otp';

function Router() {
    const Login = lazy(() => import('../pages/auth/Signin'));
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="signin" element={<Signin />}></Route>
                    <Route path="signup" element={<Signup />}></Route>
                    <Route path="otp" element={<Otp />}></Route>

                    <Route path="productview/:id" element={<ProductView />}></Route>
                    <Route path='allproducts' element={<AllProducts />}></Route>
                    <Route path='cart' element={<Cart />}></Route>
                    <Route path='tabs' element={<Tabcheck />}></Route>
                    <Route element={<ProtectedRoutes></ProtectedRoutes>}>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default Router