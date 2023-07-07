import {createSlice} from "@reduxjs/toolkit"

const initialState = {
   user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
   loading: false,
};

const profileSlice = createSlice({
    name:"profile",
    initialState:initialState,
    reducers:{
        setUser(state,value){
            // state is nothing but the data of your application only
            state.user = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
          },
    },
});

export const {setUser,setLoading} = profileSlice.actions;
export default profileSlice.reducer;