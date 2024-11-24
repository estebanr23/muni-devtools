import { User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useContext } from 'react'
import { AuthContext } from '@/context/auth/AuthContext'

export const UserProfile = () => {
  const { logoutUser } = useContext(AuthContext)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className='border-none hover:border rounded-full bg-transparent text-white'>
          <User className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => console.log('light')}>
            Reset Password
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logoutUser}>
            Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
