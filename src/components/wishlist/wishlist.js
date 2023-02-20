import React from 'react'
import "./wishlist.css"

const Wishlist = (props) => {
    const handleRemove=(d)=>{
        // console.log(d)
        let arr=props.wishList.filter((data)=>data.id !==d)
        alert("Item will be removed from Your wishList")
        props.setWishList([...arr])

    }
    return (
        <>
            <h1 className='header1'>Wish List</h1>
            <div>
                {
                    props.wishList.map((k, i) => {
                        return (
                            <div className='parent' key={k.id}>
                                <div className='cart' >
                                    <h3>{k.title}</h3>
                                    <h1>Price :{k.price} Rs.</h1>
                                    <img src={k.image} alt=""></img>
                                    <button className='wish' onClick={()=>handleRemove(k.id)}>Remove</button>
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