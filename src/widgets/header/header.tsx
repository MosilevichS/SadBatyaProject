'use client'
import { useDispatch, useSelector } from 'react-redux'
import { close, open } from '@/shared/store/modalSlice'
import { AppDispatch, RootState } from '@/shared/store/store'
import Form from '../../features/form/form'
import Modal from '../../shared/ui/modal/modal'
import { HeaderColorPicker } from '../HeaderColorPicker'
import { twMerge } from 'tailwind-merge'

export const Header = () => {
  const bgColor = useSelector((state: RootState) => state.header.color)
  const isOpen = useSelector((state: RootState) => state.modal.isOpen)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <header className={twMerge('p-10', 'flex', 'justify-between', bgColor)}>
      <HeaderColorPicker />
      <button
        onClick={() => dispatch(open())}
        className="bg-blue-600  hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-1000"
      >
        Registration
      </button>

      <Modal isOpen={isOpen} onClose={() => dispatch(close())}>
        <Form />
      </Modal>
    </header>
  )
}
