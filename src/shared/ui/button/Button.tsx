import { twMerge } from 'tailwind-merge'
interface IButton {
  state: boolean
  className?: string
  children?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}
export default function Button({
  state,
  className,
  children,
  type,
  onClick,
}: IButton) {
  return (
    <button
      type={type}
      disabled={!state}
      onClick={onClick}
      className={twMerge(
        'rounded-lg bg-blue-600 text-white p-3 font-medium mt-4',
        'hover:bg-blue-700 transition-colors duration-200',
        'disabled:bg-gray-400 disabled:cursor-not-allowed',
        className,
      )}
    >
      {children}
    </button>
  )
}
