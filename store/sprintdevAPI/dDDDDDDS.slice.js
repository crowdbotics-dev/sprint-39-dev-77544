import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_ddddddd_list = createAsyncThunk(
  "dDDDDDDS/api_v1_ddddddd_list",
  async payload => {
    const response = await apiService.api_v1_ddddddd_list(payload)
    return response.data
  }
)
export const api_v1_ddddddd_create = createAsyncThunk(
  "dDDDDDDS/api_v1_ddddddd_create",
  async payload => {
    const response = await apiService.api_v1_ddddddd_create(payload)
    return response.data
  }
)
export const api_v1_ddddddd_retrieve = createAsyncThunk(
  "dDDDDDDS/api_v1_ddddddd_retrieve",
  async payload => {
    const response = await apiService.api_v1_ddddddd_retrieve(payload)
    return response.data
  }
)
export const api_v1_ddddddd_update = createAsyncThunk(
  "dDDDDDDS/api_v1_ddddddd_update",
  async payload => {
    const response = await apiService.api_v1_ddddddd_update(payload)
    return response.data
  }
)
export const api_v1_ddddddd_partial_update = createAsyncThunk(
  "dDDDDDDS/api_v1_ddddddd_partial_update",
  async payload => {
    const response = await apiService.api_v1_ddddddd_partial_update(payload)
    return response.data
  }
)
export const api_v1_ddddddd_destroy = createAsyncThunk(
  "dDDDDDDS/api_v1_ddddddd_destroy",
  async payload => {
    const response = await apiService.api_v1_ddddddd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dDDDDDDSSlice = createSlice({
  name: "dDDDDDDS",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_ddddddd_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ddddddd_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ddddddd_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ddddddd_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ddddddd_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ddddddd_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ddddddd_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ddddddd_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ddddddd_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ddddddd_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ddddddd_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ddddddd_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ddddddd_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ddddddd_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ddddddd_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ddddddd_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ddddddd_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ddddddd_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_ddddddd_list,
  api_v1_ddddddd_create,
  api_v1_ddddddd_retrieve,
  api_v1_ddddddd_update,
  api_v1_ddddddd_partial_update,
  api_v1_ddddddd_destroy,
  slice: dDDDDDDSSlice
}
