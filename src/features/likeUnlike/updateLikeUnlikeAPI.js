import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

export const updateLikes = createAsyncThunk('video/updateLikes', async ({videoId, likes}) => {
  const response = await axiosInstance.patch(`/videos/${videoId}`, { likes });
  return response.data;
});

export const updateUnlikes = createAsyncThunk('video/updateUnlikes', async ({ videoId, unlikes }) => {
  const response = await axiosInstance.patch(`/videos/${videoId}`, { unlikes });
  return response.data;
});