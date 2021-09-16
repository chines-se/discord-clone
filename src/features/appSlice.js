import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const appSlice = createSlice({
  name: 'app',
  initialState:{
    channelId : null,
    channelName : null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setChannelInfo: (state,action) => {
 
      state.channelId = action.payload.channelId;
      state.channelName =  action.payload.channelName;
    },

    
  },

});

export const { setChannelInfo } = appSlice.actions;


export const selectChannelId = (state) => state.app.channelId;

export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
