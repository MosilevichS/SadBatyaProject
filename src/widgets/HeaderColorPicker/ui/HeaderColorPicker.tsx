'use client'
import { setHeaderColor } from '@/shared/store/headerColorSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '@/shared/type/colorPicker'
import { useTheme } from '@/shared/context/theme-context'
import Button from '@/shared/ui/button/Button'
import { AppDispatch, RootState } from '@/shared/store/store'
import { closeBurgerMenu } from '@/shared/store/burgerMenuSlice'
import { twMerge } from 'tailwind-merge'

export const HeaderColorPicker = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <div className="flex items-center justify-center transition-all duration-300">
      <div className="relative inline-block text-left">
        <Button
          state={true}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className={twMerge(
            'text-sm font-medium text-gray-700 inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 ',
            theme === 'dark'
              ? 'bg-gray-100  hover:bg-gray-300'
              : ' bg-green-100  hover:bg-green-300',
          )}
          children="Choose a color"
        />

        {isOpen && (
          <div className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              {colors.map(({ name, color }) => (
                <button
                  key={name}
                  onClick={() => {
                    dispatch(setHeaderColor(color))
                    setIsOpen(false)
                    dispatch(closeBurgerMenu())
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
