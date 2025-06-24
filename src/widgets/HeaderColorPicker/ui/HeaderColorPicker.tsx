'use client'
import { setHeaderColor } from '@/shared/store/headerColorSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { colors } from '../model/colors'
import { useTheme } from '@/shared/context/theme-context'

export const HeaderColorPicker = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <div className="flex items-center justify-center transition-all duration-300">
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={
            theme === 'dark'
              ? 'inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-300'
              : 'inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-green-100 text-sm font-medium text-gray-700 hover:bg-green-300'
          }
        >
          Choose a color
        </button>

        {isOpen && (
          <div className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              {colors.map(({ name, color }) => (
                <button
                  key={name}
                  onClick={() => {
                    dispatch(setHeaderColor(color))
                    setIsOpen(false)
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
  )
}
