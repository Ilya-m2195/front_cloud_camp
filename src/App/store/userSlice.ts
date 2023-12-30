import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUserForm, IUserInitialState } from '../types/types';
import { fetchPostData } from '../api/api';

const initialState: IUserInitialState = {
  loading: null
};

enum requestStatus {
  pending = 'pending',
  succeeded = 'succeeded',
  failed = 'failed'
}

const URL = 'https://api.sbercloud.ru/content/v1/bootcamp/frontend';

export const postUser = createAsyncThunk<Promise<void>, IUserForm>(
  'userSlice/postUser',
  async (userInfo) => {
    fetchPostData(URL, userInfo);
  }
);

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postUser.pending, (state) => {
      state.loading = requestStatus.pending;
    });
    builder.addCase(postUser.fulfilled, (state) => {
      state.loading = requestStatus.succeeded;
    });
    builder.addCase(postUser.rejected, (state) => {
      state.loading = requestStatus.failed;
    });
  }
});

export default userSlice.reducer;
