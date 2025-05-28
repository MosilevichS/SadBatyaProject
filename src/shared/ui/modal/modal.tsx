"use client";
import { ReactNode, useEffect, useState } from "react";
import closeIcon from './assets/close.svg'
import Image from "next/image";

import ReactDOM from "react-dom";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: string | ReactNode;
}

export default function Modal({ isOpen, onClose, children }: Props) {
  const
      CloseIcon = ({ className }: { className?: string }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        opacity="0.7"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14.5 9.5L9.5 14.5M9.5 9.5L14.5 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );


  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(false);
      requestAnimationFrame(() => {
        setShow(true);
      });
    } else {
      setShow(false);
    }
  }, [isOpen]);
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed rounded-lg inset-0 z-50 flex items-center justify-center  bg-opacity-50">
      <div
        className={`
          bg-white p-6 rounded-lg  w-screen h-screen relative transform transition-all duration-500
          ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute flex items-center justify-center top-3 right-3 w-5 h-5 hoover: bg-gray cursor-pointer  "
        >
           {/*/<CloseIcon className="w-5 h-5" />*/}
          <Image width='24' height='24' src='/close.svg' alt=''/>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
