import { Link1Icon } from '@radix-ui/react-icons'
import { Image, Save } from 'lucide-react'
import { useLinkPreview } from '../hooks/useLinkPreview'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertUI } from '../components/AlertUI'

export const ResourceForm = () => {
  const { url, resource, isLoading, error, fetchData } = useLinkPreview()

  return (
    <form className=''>
      <div className="flex flex-col gap-4 mb-6">
        <Input
          name='url'
          type='url'
          placeholder="http://www.example.com.ar"
          className="border border-gray-300 rounded-md p-2"
          value={url}
          onChange={e => fetchData(e.target.value)}
        />
      </div>

      {
        (resource && !isLoading) &&
          <Card>
            <CardContent className='p-0'>
              <img className='w-full h-40 object-cover rounded-t-xl' src={resource.image} alt={resource.title} />
            </CardContent>

            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <span className='flex items-center text-blue-600 font-semibold text-sm'><Link1Icon className='mr-1'/>{resource.url}</span>
              <CardDescription className='text-sm text-gray-700 line-clamp-4 text-pretty '>{resource.description}</CardDescription>
            </CardHeader>
          </Card>
      }

      {
        (!resource && isLoading) && <CardSkeleton />
      }

      {
        error && <AlertUI message={error}/>
      }

      <div className='flex justify-end mt-6'>
        <Button type="submit"><Save />Guardar</Button>
      </div>
    </form>
  )
}


const CardSkeleton = () => {
  return (
    <Card>
      <CardContent className='p-0'>
        <Skeleton className="flex justify-center items-center h-40 rounded-t-xl"
          children={<Image size={80} strokeWidth={0.8}/>}
        />
      </CardContent>

      <CardHeader>
        <CardTitle><Skeleton className="h-4 w-full" /></CardTitle>
        <CardDescription>
          <Skeleton className="h-16 w-full" />
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
  