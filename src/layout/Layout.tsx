import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen container m-auto px-28'>
      <Navbar />

      <main className='flex-grow w-full m-auto border-y-[1px] py-8'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
