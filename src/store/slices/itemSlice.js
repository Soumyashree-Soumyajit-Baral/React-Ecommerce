import {createSlice} from "@reduxjs/toolkit";

const itemSlice= createSlice({
    name:"AllItems",
    initialState:[],
    reducers:{
        setList(state,action){
            // for(let i=0;i<action.payload.length;i++){
            //     state.push(action.payload[i])
            // }
            return action.payload
        }
    }
})

export default itemSlice.reducer;

export const {setList}=itemSlice.actions;