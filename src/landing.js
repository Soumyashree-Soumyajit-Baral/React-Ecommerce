import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import App from "./App"
import Wishlist from "./components/wishlist/wishlist"

import React from 'react'

const Landingpage = () => {
    const [wishList, setWishList] = useState([]);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/wishlist' element={<Wishlist  wishList={wishList} setWishList={setWishList} />}></Route>
                    <Route path='/' element={<App wishList={wishList} setWishList={setWishList}/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Landingpage