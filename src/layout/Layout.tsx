import { Link, Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ModeToggle } from '@/components/mode-toggle'
import logoCapitalDark from '@/assets/images/logo-capital-dark.png'
import { UserProfile } from '@/components/user-profile'
import { useTheme } from '@/components/theme-provider'

export const Layout = () => {
  const { theme } = useTheme()

  return (
    <div className='app-container'>
      <div className='flex flex-col items-center justify-center min-h-screen container m-auto px-28 '>
        <header className='flex justify-between w-full'>
          <div className='my-2 w-40 h-12'>
            <Link to='/'>
              <img src={logoCapitalDark} className='w-40 h-12' alt="Logo Catamarca Capital" />
            </Link>
          </div>

          <div className='lg:flex flex-1 justify-center hidden'>
            <Navbar />
          </div>
        
          <div className='flex justify-end gap-1 my-auto w-40'>
            <ModeToggle />
            <UserProfile />
          </div>
        </header>

        <main className='flex-grow w-full m-auto border-b-[1px] py-8'>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}
