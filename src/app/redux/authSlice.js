import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Replace this with your actual login API call
      const response = await fakeApiLogin(email, password);
      if (response.error) {
        return rejectWithValue(response.error);
      }
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Replace this with your actual register API call
      const response = await fakeApiRegister(email, password);
      if (response.error) {
        return rejectWithValue(response.error);
      }
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

// Fake API login function for illustration purposes
async function fakeApiLogin(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === 'test@test.com' && password === '123') {
        resolve({ user: { email }, token: 'fakeToken123' });
      } else {
        resolve({ error: 'Invalid credentials' });
      }
    }, 1000);
  });
}

// Fake API register function for illustration purposes
async function fakeApiRegister(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email && password) {
        resolve({ user: { email }, token: 'fakeToken123' });
      } else {
        resolve({ error: 'Registration failed' });
      }
    }, 1000);
  });
}
