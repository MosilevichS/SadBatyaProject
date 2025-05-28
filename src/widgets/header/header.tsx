'use client'
import { useState } from "react";
import  Modal  from '../../shared/ui/modal/modal'
import { useDispatch, useSelector } from 'react-redux'
import { open, close } from '../../store/modalSlice'
import { RootState, AppDispatch } from '../../store/store'
import Form from '../../shared/ui/form/form'
import DropDown from '../../shared/ui/dropdown/dropdown'

export const Header = () => {
    const bgColor = useSelector((state) => state.header.bgColor);
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
    const dispatch = useDispatch<AppDispatch>();

    return (

        <div className="p-10 flex
        justify-center items-center bg-white
        h-screen" >
            <DropDown />
            <button onClick={() => dispatch(open())} className="bg-blue-600  hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-1000">
                Registration
            </button>


            <Modal isOpen={isOpen} onClose={() => dispatch(close())}>
                <Form />
            </Modal>

        </div>
    );
};


