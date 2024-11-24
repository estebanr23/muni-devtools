import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import logoCapitalDark from '@/assets/images/logo-capital-dark.png'
import logoModo from '@/assets/images/logo-nodo.png'
import { ReactTyped } from 'react-typed'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTheme } from '@/components/theme-provider'
import { useContext } from 'react'
import { AuthContext } from '@/context/auth/AuthContext'

interface LoginForm {
  username: string
  password: string
}

export const Login = () => {
  const { theme } = useTheme()
  const { loginUser } = useContext(AuthContext)

  const {
    register, 
    formState: { isSubmitting, errors }, 
    handleSubmit 
  } = useForm<LoginForm>()

  const onSubmit: SubmitHandler<LoginForm> = async (form: LoginForm) => {
    console.log(form)
    await loginUser(form)
  }

  return (
    <div className="app-container">
      <div className='flex flex-col container mx-auto min-h-screen px-8 md:px-20'>

        <div className='w-full py-4'>
          <img src={logoCapitalDark} className='w-40 h-12' alt="Logo Catamarca Capital" />
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-center flex-grow">
          <div className="hidden w-3/4 xl:flex flex-col items-start justify-center gap-y-4">
            <h1 
              className="text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-400
               via-blue-500 to-gray-900"
            >
              Muni
              <br />
              <ReactTyped strings={['Devtools']} typeSpeed={100} backSpeed={100} loop />
            </h1>

            <h4 className='pl-1 max-w-xl text-gray-400'>Herramientas de desarrollo de Modernización de la Municipalidad de San Fernando del Valle de Catamarca.</h4>
          </div>

          <div className='flex flex-col justify-center items-center max-w-sm w-full mx-auto xl:mx-10'>
            <motion.div 
              className="flex flex-col justify-center items-center border border-gray-400 rounded-xl px-8 md:px-12 py-20 w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-semibold mb-2 text-gray-300">Sign In</h2>
              <p className='text-center md:text-start text-gray-300'>Enter your username below to log in</p>

              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-full pt-10'>
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <Input
                      {...register('username', { required: true })}
                      type='text'
                      placeholder="Username"
                      className="dark:text-gray-400 border dark:border-gray-400 p-4 rounded-lg h-10 placeholder:text-gray-400"
                    />
                    {errors?.username && <span className='text-red-500 text-sm'>Username is requerid</span>}
                  </div>
                </motion.div>

                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div>
                    <Input
                      {...register('password', { required: true })}
                      type='password'
                      placeholder="Password"
                      className="dark:text-gray-400 border dark:border-gray-400 p-4 rounded-lg h-10 placeholder:text-text-gray-400"
                    />
                    {errors?.password && <span className='text-red-500 text-sm'>Password is requerid</span>}
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button 
                    type="submit"
                    className="w-full rounded-lg h-10 dark:bg-gray-200 bg-gray-800/90 hover:bg-gray-800" 
                    disabled={isSubmitting}
                  >
                    Sign In
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>

        <footer className='w-full flex items-end justify-between py-4'>
          <p className='text-gray-400 text-center md:text-start'>Municipalidad de San Fernando del Valle de Catamarca ©{new Date().getFullYear()}</p>
          <img src={logoModo} className='hidden md:inline-block w-10 rounded-lg' alt="Logo Catamarca Capital" />
        </footer>

      </div> 
    </div>
  )
}