import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
  
interface Props {
  value: string
}

export const BtnCopy = ({ value }: Props) => {
  const [isCopy, setIsCopy] = useState<boolean>(false)

  const copyUrl = () => {
    navigator.clipboard.writeText(value)
    setIsCopy(true)
    
    setTimeout(() => {
      setIsCopy(false)
    }, 1000)
  }

  return (
    <TooltipProvider>
      <Tooltip open={isCopy}>
        <TooltipTrigger className='absolute right-2 top-2'>
          <Button
            className={`border p-4 shadow-sm text-gray-300 hover:text-gray-200 ${ isCopy ? 'focus:text-gray-300 focus:bg-green-600 focus:border-green-600/20' : 'border-white/20 hover:bg-white/20' }`} 
            variant="ghost" 
            size="icon"
            onClick={copyUrl}
          >
            <Copy />
          </Button>
        </TooltipTrigger>

        <TooltipContent className='flex gap-1 items-center text-gray-300 bg-green-600'>
          <Check className='w-4' /> Copiado
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}
