// /src/features/contentLibrary/contentLibrarySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContentItem {
  id: string;
  title: string;
  // Add other properties as needed
}

interface ContentLibraryState {
  items: ContentItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ContentLibraryState = {
  items: [],
  loading: false,
  error: null,
};

const contentLibrarySlice = createSlice({
  name: 'contentLibrary',
  initialState,
  reducers: {
    // Add your reducers here
  },
});

export const { /* your actions */ } = contentLibrarySlice.actions;
export default contentLibrarySlice.reducer;