import React from 'react'
import "./wishlist.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../store/slices/cartSlice'

const Wishlist = () => {
    // const handleRemove=(d)=>{
    //     // console.log(d)
    //     let arr=props.wishList.filter((data)=>data.id !==d)
    //     alert("Item will be removed from Your wishList")
    //     props.setWishList([...arr])

    // }
    const dispatch=useDispatch()
    const handleRemove=(d)=>{
        alert("Item will be removed from Your wishList")
        dispatch(removeFromCart(d))
    }
    const wishList=useSelector((state)=>{
        return state.carts
    })

    return (
        <>
            <h1 className='header1'>Wish List</h1>
            <div>
                {
                    wishList.map((k, i) => {
                        return (
                            <div className='parent' key={k.id}>
                                <div className='cart' >
                                    <h3>{k.title}</h3>
                                    <h1>Price :{k.price} Rs.</h1>
                                    <img src={k.image} alt=""></img>
                                    <button className='wish' onClick={()=>handleRemove(i)}>Remove</button>
                                    <p>{k.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Wishlist;