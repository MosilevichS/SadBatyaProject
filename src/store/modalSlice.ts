import {createSlice} from '@reduxjs/toolkit';

interface ModalState {
    isOpen: boolean;
}

const initialState: ModalState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        open: (state: ModalState) => {
            state.isOpen = true
        },
        close: (state: ModalState) => {
            state.isOpen = false
        }
    }
})

export const {open, close} = modalSlice.actions
export default modalSlice.reducer
