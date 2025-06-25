import { FieldError } from 'react-hook-form'

interface ErrorProps {
  error?: FieldError
  className?: string
}

export const ErrorMessage = ({ error, className }: ErrorProps) => {
  if (!error) return null
  return (
    <p className={`text-red-500 text-sm mt-1 ${className}`}>{error.message}</p>
  )
}
