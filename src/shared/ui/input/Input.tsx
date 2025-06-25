import { ErrorMessage } from '../error/ErrorMessage'
import { FieldError, UseFormRegister } from 'react-hook-form'
interface IInput {
  name: string
  label?: string
  type?: string
  placeholder?: string
  className?: string
  register: UseFormRegister<any>
  error?: FieldError
}

export const Input = ({
  name,
  type = 'text',
  placeholder,
  className = '',
  register,
  error,
}: IInput) => {
  return (
    <div className={`mb-4 h-[45px] ${className}`}>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register(name)}
      />
      <ErrorMessage error={error} />
    </div>
  )
}
