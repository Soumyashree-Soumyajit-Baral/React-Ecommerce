import { createSlice } from "@reduxjs/toolkit";

const pageSlice=createSlice({
    name:"pageNumber",
    initialState:0,
    reducers:{
        setPage(state,action){
            return action.payload
        }
    }
})

export default pageSlice.reducer;
export const {setPage} = pageSlice.actions