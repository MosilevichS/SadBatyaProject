import { useState } from 'react'
import { useTheme } from '@/shared/context/theme-context'

export const ToggleButton = () => {
  const [active, setActive] = useState(false)
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={() => {
        setActive(!active)
        toggleTheme()
      }}
      className={`hidden md:flex relative  mt-6  h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
        active ? 'bg-blue-600' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          active ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}
