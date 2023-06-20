import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user', 
    initialState: {
        is_loading: false,
        is_signout: false, 
        access_token: "",
        token_type: "",
        scope: [], 
        refresh_token: "",
        expires_in: "",    
    },
    reducers: {
        addData: (state, action) => {
            prevState = state
            state = {
                is_loading: prevState.is_loading, 
                is_signout: prevState.is_signout, 
                ...action.payload,
            }
        }
    }
});

export const { addData } = userSlice.actions;

export default userSlice.reducer;