'use client'
import { Modal } from '../../shared/ui/modal/modal'
import { useDispatch, useSelector } from 'react-redux'
import { close, open } from '@/shared/store/modalSlice'
import { AppDispatch, RootState } from '@/shared/store/store'
import Form from '../../features/form/form'
import DropDown from '../setBodyColor/setBodyColor'
import clsx from 'clsx'
import { useTheme } from '@/shared/theme-context'

export const Header = () => {
  const bgColor = useSelector((state: RootState) => state.header.bgColor)
  const isOpen = useSelector((state: RootState) => state.modal.isOpen)
  const dispatch = useDispatch<AppDispatch>()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={clsx('p-10', 'flex', 'justify-between', bgColor)}>
      <DropDown />
      <button
        onClick={() => dispatch(open())}
        className="bg-blue-600  hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-1000"
      >
        Registration
      </button>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-colors"
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>

      <Modal isOpen={isOpen} onClose={() => dispatch(close())}>
        <Form />
      </Modal>
    </header>
  )
}
