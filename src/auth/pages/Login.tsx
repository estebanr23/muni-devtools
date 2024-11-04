import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import logoCapitalDark from '@/assets/images/logo-capital-dark.png'
import logoModo from '@/assets/images/logo-nodo.png'
import { ReactTyped } from 'react-typed'


export const Login = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black">
      <div className='flex flex-col container mx-auto min-h-screen px-10'>

        <div className='w-full py-4'>
          <img src={logoCapitalDark} className='w-40 h-12' alt="Logo Catamarca Capital" />
        </div>

        <div className="flex w-full flex-grow">
          <div className="w-1/2 flex flex-col items-start justify-center border-r-[0.5px] border-slate-300 gap-y-4">
            <h1 
              className="text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-400
               via-blue-500 to-gray-900"
            >
              Muni
              <br />
              <ReactTyped strings={['Devtools']} typeSpeed={100} backSpeed={100} loop />
            </h1>

            <h4 className='pl-1 max-w-xl text-white'>Herramientas de desarrollo de Modernización de la Municipalidad de San Fernando del Valle de Catamarca.</h4>
          </div>

          <motion.div 
            className="flex flex-col justify-center items-center w-1/2 p-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-semibold mb-2 text-white">Sign In</h2>
            <p>Enter your username below to log in</p>

            <form className='flex flex-col gap-2 w-full p-10'>
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <Input
                  // {...register('title', { required: true })}
                    type='text'
                    placeholder="Username"
                    className="border border-gray-300 rounded-md p-2"
                  />
                  {/* {errors?.title && <span className='text-red-500 text-sm'>El titulo es requerido</span>} */}
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
                  // {...register('title', { required: true })}
                    type='text'
                    placeholder="Password"
                    className="border border-gray-300 rounded-md p-2"
                  />
                  {/* {errors?.title && <span className='text-red-500 text-sm'>El titulo es requerido</span>} */}
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  className="w-full" 
                  type="submit"
                >
                Sign In
                </Button>
              </motion.div>
            </form>
          </motion.div>

        </div>

        <footer className='w-full flex items-end justify-between py-4'>
          <p>Municipalidad de San Fernando del Valle de Catamarca ©{new Date().getFullYear()}</p>
          <img src={logoModo} className='w-10 rounded-lg' alt="Logo Catamarca Capital" />
        </footer>

      </div> 
    </div>
  )
}