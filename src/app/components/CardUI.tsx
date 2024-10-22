import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Link1Icon } from '@radix-ui/react-icons'
  
interface Props {
  title: string
  url: string
  description: string
  image: string
}

export const CardUI = ({ title, url, description, image }: Props) => {
  return (
    <a href={url} target='_blank'>
      <Card className='h-full hover:scale-105 transition hover:shadow-lg hover:cursor-pointer'>
        <CardContent className='p-0 '>
          <img className='w-full h-40 object-cover rounded-t-xl' src={image} alt={title} />
        </CardContent>

        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <span className='flex items-center text-blue-600 font-semibold text-sm'><Link1Icon className='mr-1'/>{url}</span>
          <CardDescription className='text-sm text-gray-700 line-clamp-4 text-pretty '>{description}</CardDescription>
        </CardHeader>
      </Card>
    </a>
  )
}