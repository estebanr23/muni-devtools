// import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  //   DialogDescription,
  //   DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ReactNode } from 'react'
  
interface Props {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    title: string
    children: ReactNode
}

export const ModalUI = ({ isOpen, setIsOpen, title, children }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='p-8 w-auto max-w-6xl'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  )
}
