import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ModeToggle } from '@/components/mode-toggle'

export const Layout = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen container m-auto px-28'>
      <header className='flex justify-center w-full'>
        <div className='flex flex-1 justify-center ml-9'>
          <Navbar />
        </div>
        
        <ModeToggle />
      </header>

      <main className='flex-grow w-full m-auto border-y-[1px] py-8'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
