import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_gsegsg_list = createAsyncThunk(
  "gSEGSGS/api_v1_gsegsg_list",
  async payload => {
    const response = await apiService.api_v1_gsegsg_list(payload)
    return response.data
  }
)
export const api_v1_gsegsg_create = createAsyncThunk(
  "gSEGSGS/api_v1_gsegsg_create",
  async payload => {
    const response = await apiService.api_v1_gsegsg_create(payload)
    return response.data
  }
)
export const api_v1_gsegsg_retrieve = createAsyncThunk(
  "gSEGSGS/api_v1_gsegsg_retrieve",
  async payload => {
    const response = await apiService.api_v1_gsegsg_retrieve(payload)
    return response.data
  }
)
export const api_v1_gsegsg_update = createAsyncThunk(
  "gSEGSGS/api_v1_gsegsg_update",
  async payload => {
    const response = await apiService.api_v1_gsegsg_update(payload)
    return response.data
  }
)
export const api_v1_gsegsg_partial_update = createAsyncThunk(
  "gSEGSGS/api_v1_gsegsg_partial_update",
  async payload => {
    const response = await apiService.api_v1_gsegsg_partial_update(payload)
    return response.data
  }
)
export const api_v1_gsegsg_destroy = createAsyncThunk(
  "gSEGSGS/api_v1_gsegsg_destroy",
  async payload => {
    const response = await apiService.api_v1_gsegsg_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const gSEGSGSSlice = createSlice({
  name: "gSEGSGS",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_gsegsg_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gsegsg_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gsegsg_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gsegsg_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gsegsg_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gsegsg_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gsegsg_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gsegsg_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gsegsg_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gsegsg_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gsegsg_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gsegsg_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gsegsg_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gsegsg_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gsegsg_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gsegsg_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_gsegsg_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_gsegsg_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_gsegsg_list,
  api_v1_gsegsg_create,
  api_v1_gsegsg_retrieve,
  api_v1_gsegsg_update,
  api_v1_gsegsg_partial_update,
  api_v1_gsegsg_destroy,
  slice: gSEGSGSSlice
}
