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

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {/* <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription> */}
        </DialogHeader>

        {children}

        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
