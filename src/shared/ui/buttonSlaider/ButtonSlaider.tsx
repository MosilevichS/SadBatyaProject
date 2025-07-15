import { useState } from 'react'
import { useTheme } from '@/shared/context/theme-context'
import moon from '../../../../public/moon.png'
import theSun from '../../../../public/theSun.png'
import Image from 'next/image'

export const ToggleButton = () => {
  const [active, setActive] = useState(false)
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={() => {
        setActive(!active)
        toggleTheme()
      }}
      className={`hidden md:flex relative mt-4  h-9  w-20 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
        active ? 'bg-blue-600' : 'bg-gray-200'
      }`}
    >
      <Image
        className={`inline-block h-7 w-7 transform rounded-full bg-white transition-transform ${
          active ? 'translate-x-12' : 'translate-x-1'
        }`}
        src={theme === 'dark' ? moon : theSun}
        alt={theme === 'dark' ? 'Moon' : 'Sun'}
        width={70}
        height={70}
      />
    </button>
  )
}
