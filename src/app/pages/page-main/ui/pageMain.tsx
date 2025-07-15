'use client'

import { close, open } from '@/shared/store/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/shared/store/store'
import { ChangeEvent, useEffect, useState } from 'react'
import Modal from '@/shared/ui/modal/Modal'
import { string } from 'zod'

const PageMain = () => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen)
  const dispatch = useDispatch<AppDispatch>()
  const [firstTime, setFirstTime] = useState<boolean>()
  const [name, setName] = useState<string>('')
  useEffect(() => {
    const isFirstTime = localStorage.getItem('firstTime')
    if (isFirstTime === null) {
      setTimeout(() => {
        localStorage.setItem('firstTime', 'true')
        setFirstTime(true)
        dispatch(open())
      }, 1000)
    } else {
      setFirstTime(false)
    }
    const savedName = localStorage.getItem('name')
    if (savedName) {
      setName(savedName)
    }
  }, [])
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('name', name)
  }
  return (
    <>
      {firstTime && (
        <Modal isOpen={isOpen} onClose={() => dispatch(close())}>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </form>
        </Modal>
      )}
      {name.length > 0 && (
        <span className="flex justify-center">Privet {name}</span>
      )}
    </>
  )
}

export default PageMain
