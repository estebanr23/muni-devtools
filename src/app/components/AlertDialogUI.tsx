import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
//   AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
// import { Button } from '@/components/ui/button'
  
interface Props {
  title: string
  description: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  onAction: () => void
}

export const AlertDialogUI = ({ title, description, isOpen, setIsOpen, onAction }: Props) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => console.log('cancel')}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => console.log('continue')}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
  