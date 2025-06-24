import type { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../shared/ui/button/Button'

interface IForm {
  className?: string
  children?: ReactNode
}

type FormData = {
  name: string
  email: string
  phone: string
}

export default function Form({ children, className }: IForm) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'onChange' })

  const onSubmit = (data: FormData) => {
    alert(`Form is successful submitted, ${data.name}!`)
    reset()
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 flex flex-col gap-4"
      >
        <div>
          <input
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Length should be more than 2 ',
              },
            })}
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Wrong mail',
              },
            })}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            {...register('phone', {
              required: 'Phone is required',
              pattern: {
                value: /^[0-9+]{10,15}$/,
                message: 'Digits only (10-15 digits)',
              },
            })}
            placeholder="Phone"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <Button state={isValid} />

        {children}
      </form>
    </div>
  )
}
