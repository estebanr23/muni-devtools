import { TriangleAlert } from 'lucide-react'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'

export function AlertUI({ message }: {message: string}) {
  return (
    <Alert variant="destructive">
      <TriangleAlert className="mr-8" />
      <div className='ml-2'>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          { message }
        </AlertDescription>
      </div>
    </Alert>
  )
}
