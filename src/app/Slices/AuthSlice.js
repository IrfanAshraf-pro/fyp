import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    role:'Student'
}

const AuthSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        setRole:(state,action)=>{
            state.role=action.payload.item
        },
        
    }
})

export default AuthSlice.reducer
export const {setRole}=AuthSlice.actions