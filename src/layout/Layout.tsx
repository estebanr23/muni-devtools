import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

interface Props { children: ReactNode }

export const Layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 min-h-screen max-w-7xl m-auto'>
      <Navbar />

      <main className='flex-grow m-auto'>
        { children }
      </main>

      <Footer />
    </div>
  )
}
