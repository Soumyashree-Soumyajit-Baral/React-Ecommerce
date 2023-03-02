
import './App.css';
import axiox from "axios";
import {useState, useEffect} from "react";
import ReactPaginate from "react-paginate"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './store/slices/cartSlice';
import { setList } from './store/slices/itemSlice';
import { setValue } from './store/slices/valueSlice';
import { setPage } from './store/slices/pageSlice';

function App(props) {
  // const [list, setList]=useState([])
  // const [pageNumber, setPageNumber]=useState(0)
  // const [selectValue,setSelectValue]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const cartItem=useSelector((state)=>{
    return state.carts
  })
  const list=useSelector((state)=>{
    return state.items
  })
  const selectValue=useSelector((state)=>{
    return state.category
  })
  const pageNumber=useSelector((state)=>{
    return state.pageNumber
  })

  const moviePerPage=2;
  const movieVisited=pageNumber*moviePerPage;
  const movieCount=Math.ceil(list.length/moviePerPage)
  let category=new Set(list.map((d)=>d.category))
  category=[...category]


  useEffect(()=>{
    axiox({
      url:"https://fakestoreapi.com/products",
      method:"get"
    }).then((res)=>{
      console.log(res.data)
      // setList(res.data)
      dispatch(setList(res.data))
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const handleWish=(dt)=>{
    // console.log(dt)
    // const cartItem=useSelector((state)=>{
    //   return state.carts
    // })
    let isPresent=false;
    for(let i=0;i<cartItem.length;i++){
      if(dt.id===cartItem[i].id){
        isPresent=true
      }
    }
    // for(let i=0;i<props.wishList.length;i++){
    //   if(dt.id===props.wishList[i].id){
    //     isPresent=true
    //   }
    // }
    if(isPresent){
      alert("Item is already Present in your cart.")
    }else{
      alert("Item will be added to your cart...!")
      // props.setWishList([...props.wishList,dt])
      dispatch(addToCart(dt))
    }
  }

  const changeCount=({selected})=>{
    // setPageNumber(selected)
    dispatch(setPage(selected))
  }
  
  const displayMovies=list.filter((d)=>{
    if(selectValue==="All" || selectValue===""){
      return d;
    }else{
      return d.category===selectValue;
    }
  }).slice(movieVisited, movieVisited+moviePerPage).map((k)=>{
    // console.log(k)
    return(
      <div className='parent' key={k.id}>
        <div className='cart' >
          <h3>{k.title}</h3>
          <h1>Price :{k.price} Rs.</h1>
          <img src={k.image} alt=""></img>
          <button className='wish' onClick={()=>handleWish(k)}>Add to wish list</button>
          <p>{k.description}</p>
        </div>
        </div>
      
    )
  })

  return (
    <div className="App">
      <header className='header'>
        <h1>Shoping App</h1>
        <button onClick={()=>navigate("/wishlist")} className="wb">Favorites Items</button>
        <select name="category" value={selectValue} onChange={(e)=>{dispatch(setValue(e.target.value))}}>
        {/* <select name="category" value={selectValue} onChange={(e)=>{setSelectValue(e.target.value)}}> */}
          <option id="All" value="All">All</option>
          {category.map((data,idx)=>{
            return <option value={data} key={idx}>{data}</option>
          })}
        </select>
      </header>
      {displayMovies}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={movieCount}
        onPageChange={changeCount}
        containerClassName={"paginationbtns"}
        previousLinkClassName={"previousbtn"}
        nextLinkClassName={"nextbtn"}
        activeClassName={"paginationActive"}
        disabledClassName={"paginationDisabled"}
      />
      
    </div>
  );
}

export default App;
