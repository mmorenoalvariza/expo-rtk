import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CommentsState {
  comments: { id: number; text: string }[];
}
const initialState: CommentsState = {
  comments: [{ id: 0, text: "foo" }],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.comments.push({ text: action.payload, id: state.comments.length });
    },
    remove: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter((c) => c.id != action.payload);
    },
  },
});

export const { add, remove } = commentsSlice.actions;
export default commentsSlice.reducer;
