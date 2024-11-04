import { Link1Icon } from '@radix-ui/react-icons'
import { Image, Save } from 'lucide-react'
import { useLinkPreview } from '../../hooks/useLinkPreview'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertUI } from '../AlertUI'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import { ResourceForm } from '../../forms/ResourceForm'

export const Resource = () => {
  const { url, resource, isLoading, error, fetchData } = useLinkPreview()

  return (
    <div className='max-w-6xl'>
      <Input
        name='url'
        type='url'
        placeholder="http://www.example.com.ar"
        className="border border-gray-300 rounded-md p-2 mb-6 min-w-[768px]"
        value={url}
        onChange={e => fetchData(e.target.value)}
      />
        
      {
        (resource && !isLoading) &&
          <div className='grid grid-cols-2 gap-4'>
            {/* Link Preview */}
            <div className='flex flex-col flex-1'>
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
            </div>
              
            {/* Formulario */}
            <ResourceForm />
          </div>
      }

      { (!resource && isLoading) && <ResourceSkeleton /> }

      { error && <AlertUI message={error}/> }
    </div>
  )
}


const ResourceSkeleton = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='flex flex-col flex-1'>
        <Card>
          <CardContent className='p-0'>
            <Skeleton className="flex justify-center items-center h-44 rounded-t-xl"
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
      </div>
              
      <div className='flex justify-between flex-col gap-4'>
        <Skeleton className="h-8 w-full" />

        <Skeleton className="h-8 w-full" />

        <Skeleton className="h-24 w-full" />

        <Skeleton className="h-8 w-full" />
        
        <Skeleton className="h-8 w-full" />
      </div>
    </div>

    
  )
}
  