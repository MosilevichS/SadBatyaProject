import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface Props {
    isOpen: boolean;
    onClose: ()=> void;
    children: string | ReactNode;
    
}

export default function Modal({ isOpen, onClose, children } : Props)  {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
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
