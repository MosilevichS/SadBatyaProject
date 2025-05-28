'use client'
import { setHeaderColor } from '@/store/headerColorSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function BackgroundDropdown() {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const colors = [
        { name: 'White', className: 'bg-white' },
        { name: 'Blue', className: 'bg-blue-500' },
        { name: 'Green', className: 'bg-green-500' },
        { name: 'Red', className: 'bg-red-500' },
    ];

    return (
        <div className={'min-h-screen flex items-center justify-center transition-all duration-300'}>
            <div className="relative inline-block text-left">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Choose a color
                </button>

                {isOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                            {colors.map(({name, className}) => (
                                <button
                                    key={name}
                                    onClick={() => {
                                        dispatch(setHeaderColor(className));
                                        setIsOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
