import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: 'user', 
    initialState: {
        is_loading: false,
        is_signout: false, 
        token_info : null, 
        // access_token: "",
        // token_type: "",
        // scope: [], 
        // refresh_token: "",
        // expires_in: "",    
    },
    reducers: {
        restoreToken: (state, action) => {
            const prevState = state
            state = {
                is_loading: false, 
                is_signout: prevState.is_signout, 
                token_info: action.payload,
            }
        }, 
        signIn: (state, action) => {
            const prevState = state
            state = {
                is_loading: prevState.is_loading, 
                is_signout: false,
                token_info: action.payload,
            }
        }, 
        signOut: (state, action) => {
            const prevState = state
            state = {
                is_loading: prevState.is_loading, 
                is_signout: true, 
                token_info: null,
            }
        }
    }
});

export const { restoreToken, signIn, signOut } = userSlice.actions;

export default userSlice.reducer;