import React from 'react';
interface IButton {
    state:boolean
}
export default function Button ({state}:IButton)  {
    return (
        <button
            type="submit"
            disabled={!state}
            className="rounded-lg bg-blue-600 text-white p-3 font-medium mt-4
          hover:bg-blue-700 transition-colors duration-200
          disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
            Submit
        </button>
    );
};
