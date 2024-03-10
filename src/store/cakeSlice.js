import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chockCake :5,
    vanillaCake:10,
    pineappleCake:7
}

const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        buyChocoCake(state){
          if(state.chockCake > 0){
            state.chockCake -= 1;
          }
        },
        buyVanillaCake(state){
            state.vanillaCake -=1
        },
        buyPineappleCake(state){
            state.pineappleCake -=1
        },
        addVanillaCake(state,data){
            console.log(data)

            state.vanillaCake = state.vanillaCake + data.payload
        },
        addChocoCake(state,data){
            state.chockCake = state.chockCake + data.payload
        },
        addPineappleCake(state,data){
            state.pineappleCake = state.pineappleCake + data.payload
        }
    }
})

export const {buyChocoCake,buyPineappleCake,buyVanillaCake,addVanillaCake,addChocoCake,addPineappleCake} = cakeSlice.actions
export default cakeSlice.reducer