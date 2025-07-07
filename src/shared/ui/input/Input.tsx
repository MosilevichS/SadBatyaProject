import { ErrorMessage } from '../error/ErrorMessage'
import { UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
interface IInput {
  name: string
  label?: string
  type?: string
  placeholder?: string
  className?: string
  register: UseFormRegister<any>
}

export const Input = ({
  name,
  type = 'text',
  placeholder,
  className = '',
  register,
}: IInput) => {
  return (
    <div className={twMerge('mb-4 h-[45px]', className)}>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register(name)}
      />
    </div>
  )
}
