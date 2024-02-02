import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
  likedPhotos: [],
  cards: 15,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.photos = action.payload;
    },
    likePhoto: (state, action) => {
      state.likedPhotos = [...state.likedPhotos, action.payload];
    },
    unlikePhoto: (state, action) => {
      state.likedPhotos = state.likedPhotos.filter(
        (item) => item !== action.payload
      );
    },
    loadCards: (state, action) => {
      state.cards = action.payload;
    },
  },
});

export const { addPhoto, likePhoto, unlikePhoto, loadCards } =
  gallerySlice.actions;

export default gallerySlice.reducer;
