'use client'
import { useTheme } from '@/shared/context/theme-context'

export const ClientBody = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme()
  return (
    <body className={theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}>
      {children}
    </body>
  )
}
