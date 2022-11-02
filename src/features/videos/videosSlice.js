import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  videos: [],
  totalVideoCount: 0,
  // gotoNextPage: "",
  // gotoPrevPage: "",
}

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async ({tags, search, author, currentPage, totalItemShow}) => {
  return await getVideos({tags, search, author, currentPage, totalItemShow });
});

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload.videos;
        state.totalVideoCount = Number(action.payload.total);
        // state.gotoNextPage = action.payload.gotoNextPage;
        // state.gotoPrevPage = action.payload.gotoPrevPage;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.totalVideoCount = 0;
        state.isError = true;
        state.error = action.error?.message;
      })
  }
});

export default videosSlice.reducer;