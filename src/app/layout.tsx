import { Header } from '../widgets/header/Header'
import './globals.css'
import ReduxProvider from './provider'
import { ThemeProvider } from '@/shared/context/theme-context'
import { ClientBody } from '@/shared/context/ClientBody'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <ClientBody>
          <ReduxProvider>
            <Header />
            {children}
          </ReduxProvider>
        </ClientBody>
      </ThemeProvider>
    </html>
  )
}
