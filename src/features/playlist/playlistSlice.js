import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [
    {
      id: 0,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      genre: "Rock",
      rating: 5,
    },
  ],
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addSong: (state) => {
      console.log("addSong");
      console.log(state);
    },
    removeSong: (state) => {
      console.log("RemoveSong");
      console.log(state);
    },
  },
});

export const songsList = (state) => state.playlist.songs;

export const { addSong, removeSong } = playlistSlice.actions;

export default playlistSlice.reducer;
