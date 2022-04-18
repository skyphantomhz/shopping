import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const rocketSlice = createSlice({
    name: 'rocket',
    initialState: {
        status: 'idle'
    },
    reducers: {
        loading: (state, payload) => {
            state.status = 'loading'
        },
        fetchRocketSuccess: (state, payload) => {
            state.status = 'success'
            state.rockets = payload.payload
        },
        fetchRocketFail: (state, error) => {
            state.status = 'fail'
            state.error = error
        }
    },
})

export const { loading, fetchRocketSuccess, fetchRocketFail } = rocketSlice.actions

export const fetchRocket = () => (dispatch) => {
    dispatch(loading())
    axios.get('https://api.spacexdata.com/v3/rockets')
        .then((response) => {
            dispatch(fetchRocketSuccess(response.data))
        })
        .catch((error) => {
            dispatch(fetchRocketFail(error.message))
        })
}

export const rocketSelector = (state) => state.rocket

export default rocketSlice.reducer