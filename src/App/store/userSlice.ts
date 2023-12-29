import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUserForm, IUserInitialState } from '../types/types';

const initialState: IUserInitialState = {
  loading: null
};

const URL = 'https://api.sbercloud.ru/content/v1/bootcamp/frontend';

export const postUser = createAsyncThunk<Promise<void>, IUserForm>(
  'userSlice/postUser',
  async (userInfo) => {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    });
  }
);

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postUser.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(postUser.fulfilled, (state) => {
      state.loading = 'succeeded';
    });
    builder.addCase(postUser.rejected, (state) => {
      state.loading = 'failed';
    });
  }
});

export default userSlice.reducer;
