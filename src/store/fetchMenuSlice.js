import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const fetchMenuSlice = createSlice({
  name: "fetchMenu",
  initialState: {
    loading: false,
    data: null,
    error: null
  },
  reducers: {
    fetchMenuRequest: (state) => {
      state.loading = true
      state.data = null
      state.error = null
    },
    fetchMenuSuccess: (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    },
    fetchMenuFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    }
  }
})

export const {fetchMenuRequest, fetchMenuSuccess, fetchMenuFailure} = fetchMenuSlice.actions

export const fetchMenu = () => async(dispatch) => {
  try {
    dispatch(fetchMenuRequest())

    const {data} = await axios.get(`https://betadisney.onrender.com/api/products`)

      dispatch(fetchMenuSuccess(data.products))
    // if(data.status){
    //   dispatch(fetchMenuSuccess(data))

    // }else{
    //   dispatch(fetchMenuFailure(data.message))
    // }

    
  } catch (err) {
    const message = err.response && err.response.data.message ? err.response.data.message : err.message
    dispatch(fetchMenuFailure(message))
  }
}



export default fetchMenuSlice.reducer