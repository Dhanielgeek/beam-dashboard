import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: {
    id: number;
    fullName: string;
    wallet: {
      balance: number;
      accountNumber: string;
    };
  }[];
  token: string;
}

const initialState: UserState = {
  user: [],
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<
        {
          id: number;
          fullName: string;
          wallet: { balance: number; accountNumber: string };
        }[]
      >
    ) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearUser: (state) => {
      state.user = [];
      state.token = "";
    },
  },
});

export const { setUser, setToken, clearUser } = userSlice.actions;

export default userSlice.reducer;
