import { Header } from '@/widgets/header/header'
import './globals.css'
import ReduxProvider from './provaider'
import { ThemeProvider } from '../shared/theme-context'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
