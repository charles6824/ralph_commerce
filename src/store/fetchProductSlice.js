import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const fetchProductSlice = createSlice({
  name: "fetchProduct",
  initialState: {
    loading: false,
    data: null,
    error: null
  },
  reducers: {
    fetchProductRequest: (state) => {
      state.loading = true
      state.data = null
      state.error = null
    },
    fetchProductSuccess: (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    },
    fetchProductFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    }
  }
})

export const {fetchProductRequest, fetchProductSuccess, fetchProductFailure} = fetchProductSlice.actions

export const fetchProduct = () => async(dispatch) => {
  try {
    dispatch(fetchProductRequest())

    const {data} = await axios.get(`http://localhost:5000/api/products`)

    dispatch(fetchProductSuccess(data.product))
    
  } catch (err) {
    const message = err.response && err.response.data.message ? err.response.data.message : err.message
    dispatch(fetchProductFailure(message))
  }
}

export default fetchProductSlice.reducer