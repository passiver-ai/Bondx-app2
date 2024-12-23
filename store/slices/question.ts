import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface Question {
  id: string;
  category: string;
  title: string;
  description: string;
  status: 'Pending' | 'Answered';
  response?: string;
}

interface QuestionState {
  questions: Question[];
  loading: boolean;
  error: string | null;
}

const initialState: QuestionState = {
  questions: [],
  loading: false,
  error: null,
};

// Async thunk for adding a question
export const addQuestionAsync = createAsyncThunk(
  'question/addQuestionAsync',
  async (newQuestion: Omit<Question, 'id'>, { rejectWithValue }) => {
    try {
      // Simulate an API call with a delay
      const response = await new Promise<Question>((resolve) =>
        setTimeout(
          () =>
            resolve({
              ...newQuestion,
              id: String(Math.floor(Math.random() * 100)),
            }),
          1000,
        ),
      );
      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to add question');
    }
  },
);

// Create the slice
const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    updateQuestionStatus: (
      state,
      action: PayloadAction<{
        id: string;
        status: 'Pending' | 'Answered';
        response?: string;
      }>,
    ) => {
      const question = state.questions.find((q) => q.id === action.payload.id);
      if (question) {
        question.status = action.payload.status;
        if (action.payload.response) {
          question.response = action.payload.response;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addQuestionAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addQuestionAsync.fulfilled,
        (state, action: PayloadAction<Question>) => {
          state.questions.push(action.payload);
          state.loading = false;
        },
      )
      .addCase(addQuestionAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { updateQuestionStatus } = questionSlice.actions;
export default questionSlice.reducer;
