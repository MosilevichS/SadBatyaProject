'use client'
import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface Props {
    isOpen: boolean;
    onClose: ()=> void;
    children: string | ReactNode;

}

export default function Modal({ isOpen, onClose, children } : Props)  {

    const [show, setShow] = useState(false)

    useEffect(()=> {
        if (isOpen) {
            setShow(false)
            requestAnimationFrame(() => {
                setShow(true);
            });
        }
        else {setShow(false)}
    },[isOpen])
    if (!isOpen) return null;


    return ReactDOM.createPortal(
        <div className="fixed rounded-lg inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className={`
          bg-white p-6 rounded-lg shadow-lg w-screen h-screen relative transform transition-all duration-1000
          ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                >
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}
