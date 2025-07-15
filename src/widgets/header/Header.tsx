'use client'
import { useDispatch, useSelector } from 'react-redux'
import { close, open } from '@/shared/store/modalSlice'
import { AppDispatch, RootState } from '@/shared/store/store'
import Form from '../../features/form/Form'
import Modal from '../../shared/ui/modal/Modal'
import { HeaderColorPicker } from '../HeaderColorPicker'
import { twMerge } from 'tailwind-merge'
import { useTheme } from '@/shared/context/theme-context'
import Image from 'next/image'
import Button from '@/shared/ui/button/Button'
import { ToggleButton } from '@/shared/ui/buttonSlaider/ButtonSlaider'
import { useBodyScrollLock } from '@/shared/hooks/useBodyScrollLock'
import { useState } from 'react'
import { BurgerMenu } from '@/shared/store/burgerMenuSlice'

export const Header = () => {
  const bgColor = useSelector((state: RootState) => state.header.color)
  const isOpen = useSelector((state: RootState) => state.modal.isOpen)
  const isBurgerMenuOpen = useSelector(
    (state: RootState) => state.burgerMenu.isBurgerMenuOpen,
  )
  const dispatch = useDispatch<AppDispatch>()
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  useBodyScrollLock(menuOpen)

  return (
    <header className={twMerge('p-10', 'flex', 'justify-between', bgColor)}>
      <div className="flex items-center justify-between md:hidden ">
        <button
          onClick={() => dispatch(BurgerMenu())}
          className={`${!isBurgerMenuOpen ? 'flex' : 'hidden'} relative z-50 h-8 w-8 focus:outline-none`}
        >
          <Image
            src="burger-menu.svg"
            alt={'burger menu'}
            width={44}
            height={44}
          />
        </button>
      </div>
      <div className="hidden md:flex">
        <HeaderColorPicker />
      </div>

      <Button
        className="hidden md:flex bg-blue-600 h-9 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-lg shadow-md transition duration-1000"
        state={true}
        type="button"
        onClick={() => dispatch(open())}
      >
        Registration
      </Button>
      <ToggleButton />
      <div
        className={twMerge(
          'fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-all duration-300',
          'md:hidden',
          isBurgerMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
        )}
      >
        <button
          onClick={() => dispatch(BurgerMenu())}
          className={`${!isBurgerMenuOpen ? 'hidden' : 'flex'} absolute right-4 top-4  z-50 h-8 w-8 justify-end focus:outline-none`}
        >
          <Image src="close.svg" alt={'burger menu'} width={44} height={44} />
        </button>
        <nav
          className={twMerge(
            'absolute right-0 top-0 h-full w-full bg-white shadow-lg',
            'transition-transform duration-300 ease-in-out',
            'flex flex-col items-center justify-center gap-8',
            isBurgerMenuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          {' '}
          <div>
            <HeaderColorPicker />
            <Button
              className="text-center p-2 w-33 h-90"
              state={true}
              onClick={() => {
                dispatch(open())
                dispatch(BurgerMenu())
              }}
            >
              Registration
            </Button>
          </div>
        </nav>
      </div>

      <Modal isOpen={isOpen} onClose={() => dispatch(close())}>
        <Form />
      </Modal>
    </header>
  )
}
