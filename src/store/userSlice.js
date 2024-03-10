import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Arjit",
    email: "arjit@gmail.com",
    profilePic: null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginUser(state,data){
            // state.email = data.payload.email
            // state.name = data.payload.name

            state = data.payload

        },
        logoutUser(state){
            state = {
                name: null,
                email: null,
                profilePic: null
            }
        }
    }
})

export const {loginUser,logoutUser} = userSlice.actions
export default userSlice.reducer