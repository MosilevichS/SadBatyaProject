'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import Modal from '@/shared/ui/modal/Modal'

const PageMain = () => {
  const [firstTime, setFirstTime] = useState<boolean>()
  const [name, setName] = useState<string>('')
  useEffect(() => {
    const isFirstTime = localStorage.getItem('firstTime')
    if (isFirstTime === null) {
      setTimeout(() => {
        localStorage.setItem('firstTime', 'true')
        setFirstTime(true)
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem('name', name)
    setFirstTime(false)
  }
  return (
    <>
      {firstTime && (
        <Modal isOpen={firstTime} onClose={() => setFirstTime(false)}>
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
      {name.length > 0 && firstTime === false && (
        <span className="flex justify-center">Privet {name}</span>
      )}
    </>
  )
}

export default PageMain
