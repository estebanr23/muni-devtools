import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Link1Icon } from '@radix-ui/react-icons'
import { ICard } from '../interfaces'
import { Button } from '@/components/ui/button'
import { Heart, Pencil, Trash } from 'lucide-react'
import { BtnCopy } from '@/app/components/BtnCopy'
  
interface Props {
  card: ICard
  onEdit: (card: ICard) => void
}

export const CardUI = ({ card, onEdit }: Props) => {
  return (
    <Card className='h-full hover:scale-105 transition hover:shadow-lg hover:cursor-pointer relative'>
      <BtnCopy value={card.url}/>
      
      <a href={card.url} target='_blank'>
        <CardContent className='p-0 '>
          <img className='w-full h-40 object-cover rounded-t-xl' src={card.image} alt={card.title} />
        </CardContent>

        <CardHeader>
          <CardTitle>{card.title}</CardTitle>
          <span className='flex items-center text-blue-600 font-semibold text-sm'><Link1Icon className='mr-1'/>{card.url}</span>
          <CardDescription className='text-sm text-gray-700 line-clamp-4 text-pretty '>{card.description}</CardDescription>
        </CardHeader>
      </a>

      <CardFooter className='flex justify-between'> 
        <Button 
          type="button" 
          className='border shadow-sm bg-transparent hover:bg-transparent hover:border-slate-300 hover:scale-90 dark:text-input rounded-md size-10'
        >
          <Heart className='text-slate-900 dark:text-primary'/>
        </Button>

        <div className='flex justify-end gap-x-2'>
          <Button 
            type="button" 
            className='border shadow-sm bg-transparent hover:bg-transparent hover:border-slate-300 hover:scale-90 dark:text-input rounded-md size-10'
            onClick={() => onEdit(card)}
          >
            <Pencil className='text-slate-900 dark:text-primary'/>
          </Button>
          <Button 
            type="button" 
            className='border shadow-sm bg-transparent hover:bg-transparent hover:border-slate-300 hover:scale-90 dark:text-input rounded-md size-10'>
            <Trash className='text-red-500'/>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}