import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import App from "./App"
import Wishlist from "./components/wishlist/wishlist"
import Login from "./components/login/login"
import Signup from "./components/signup/signup"

import React from 'react'

const Landingpage = () => {
    const [wishList, setWishList] = useState([]);
    const [allUser, setAllUser] = useState([])
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path='/wishlist' element={<Wishlist  wishList={wishList} setWishList={setWishList} />}></Route>
                    <Route path='/home' element={<App wishList={wishList} setWishList={setWishList}/>}></Route>
                    <Route path='/' exact element={<Signup  allUser={allUser} setAllUser={setAllUser} />}></Route>
                    <Route path='/login' element={<Login allUser={allUser} />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Landingpage