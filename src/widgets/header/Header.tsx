'use client'
import { useDispatch, useSelector } from 'react-redux'
import { close, open } from '@/shared/store/modalSlice'
import { AppDispatch, RootState } from '@/shared/store/store'
import Form from '../../features/form/Form'
import Modal from '../../shared/ui/modal/Modal'
import { HeaderColorPicker } from '../HeaderColorPicker'
import { twMerge } from 'tailwind-merge'
import { useTheme } from '@/shared/context/theme-context'
import moon from './assets/moon.png'
import theSun from './assets/theSun.png'
import Image from 'next/image'
import Button from '@/shared/ui/button/Button'
import { ToggleButton } from '@/shared/ui/buttonSlaider/ButtonSlaider'

export const Header = () => {
  const bgColor = useSelector((state: RootState) => state.header.color)
  const isOpen = useSelector((state: RootState) => state.modal.isOpen)
  const dispatch = useDispatch<AppDispatch>()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={twMerge('p-10', 'flex', 'justify-between', bgColor)}>
      <HeaderColorPicker />
      <Button
        className="bg-blue-600  hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-1000"
        children="Registration"
        state={true}
        type="button"
        onClick={() => dispatch(open())}
      />
      <ToggleButton />
      <button onClick={() => toggleTheme()}>
        <div className={twMerge('p-1.5 rounded-full', bgColor)}>
          <Image
            src={theme === 'dark' ? moon : theSun}
            alt={theme === 'dark' ? 'Moon' : 'Sun'}
            width={44}
            height={44}
          />
        </div>
      </button>

      <Modal isOpen={isOpen} onClose={() => dispatch(close())}>
        <Form />
      </Modal>
    </header>
  )
}
