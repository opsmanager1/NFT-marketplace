// 'use client' позволяет использовать React хуки и состояние в Next.js
'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

// Обернем приложение в ThemeProvider
export function ThemeProvider({
  children,
  ...props
}: React.PropsWithChildren<React.ComponentProps<typeof NextThemesProvider>>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

const HomePage = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Themed Page!</h1>
        <p className="text-xl mb-6">This page supports light and dark modes using next-themes.</p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
          Switch Theme
        </button>
      </div>
    </ThemeProvider>
  )
}

export default HomePage
