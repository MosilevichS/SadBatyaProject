'use client'
import { MouseEvent, ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'
import ReactDOM from 'react-dom'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: string | ReactNode
}

export default function Modal({ isOpen, onClose, children }: Props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShow(false)
      requestAnimationFrame(() => {
        setShow(true)
      })
    } else {
      setShow(false)
    }
  }, [isOpen])
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-40 bg-black/50  flex items-center justify-center"
      onClick={onClose}
    >
      <div
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        className={`
        bg-white p-6 rounded-lg w-full max-w-[500px] max-h-[90vh]  relative transform transition-all duration-500
        ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3  h-6 flex items-center justify-center hover:bg-gray-200 rounded-full transition"
        >
          <Image width={24} height={24} src="/close.svg" alt="Close" />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
