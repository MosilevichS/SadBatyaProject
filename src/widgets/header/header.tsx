'use client'
import { useState } from "react";
import  Modal  from '../../shared/ui/modal/modal'


export const Header = () => {

    const [isModalOpen, setModalOpen] = useState(false);


    return (
        <div>
            <button onClick={()=>setModalOpen(true)} className="bg-blue-600  hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-1000">
                Open Modal
            </button>


            <Modal isOpen={isModalOpen} onClose={()=>setModalOpen(false)}>
                <p>Modal !!</p>
                <button onClick={()=>setModalOpen(false)} className="bg-blue-600  hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
                    Close Modal
                </button>
            </Modal>

        </div>
    );
};


