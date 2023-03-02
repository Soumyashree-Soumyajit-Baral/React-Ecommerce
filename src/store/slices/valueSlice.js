import {createSlice} from "@reduxjs/toolkit"

const valueSlice=createSlice({
    name:'category',
    initialState:"",
    reducers:{
        setValue(state,action){
            return action.payload
        }
    }
})

export default valueSlice.reducer;
export const {setValue} = valueSlice.actions;