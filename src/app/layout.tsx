import { Header } from '../widgets/header/header'
import './globals.css'
import ReduxProvider from './provider'
import { ThemeProvider } from '@/shared/theme-context'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ReduxProvider>
            <Header />
            {children}
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
