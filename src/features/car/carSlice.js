import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Model S", "Model Y", "Model 3", "Model X", "Solar Panels", "Solar Roofs"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCar = state => state.car.cars

export default carSlice.reducer