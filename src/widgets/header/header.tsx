"use client";
import Modal from "../../shared/ui/modal/modal";
import {useDispatch, useSelector} from "react-redux";
import {close, open} from "../../store/modalSlice";
import {AppDispatch, RootState} from "../../store/store";
import Form from "../../features/form/form";
import DropDown from "../setBodyColor/setBodyColor";
import clsx from 'clsx';

export const Header = () => {
    const bgColor = useSelector((state) => state.header.bgColor);
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <header
            className={clsx(
  'p-10', 'flex', 'justify-between',
      bgColor)}

        >
            <DropDown/>
            <button
                onClick={() => dispatch(open())}
                className="bg-blue-600  hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-1000"
            >
                Registration
            </button>

            <Modal isOpen={isOpen} onClose={() => dispatch(close())}>
                <Form/>
            </Modal>
        </header>
    );
};
