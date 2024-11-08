import { useState } from 'react'
import { Link1Icon } from '@radix-ui/react-icons'
import { Image } from 'lucide-react'
import { useLinkPreview } from '../../hooks/useLinkPreview'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertUI } from '../AlertUI'
import { ResourceForm } from '../../forms/ResourceForm'


export const Resource = () => {
  const { url, resource, isLoading, error, fetchData, resetInput } = useLinkPreview()
  const [manual, setManual] = useState<boolean>(false)

  const handleManual =  () => {
    setManual(true)
    resetInput()
  }

  return (
    <div className='max-w-6xl'>
      {
        !manual &&
        <Input
          name='url'
          type='url'
          placeholder="http://www.example.com.ar"
          className="border border-gray-300 rounded-md p-2 mb-6 min-w-[768px]"
          value={url}
          onChange={e => fetchData(e.target.value)}
        />
      }
        
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
            <ResourceForm resource={resource} setManual={setManual} />
          </div>
      }

      { (!resource && isLoading) && <ResourceSkeleton /> }

      {/* Mostrar error */}
      { error && <AlertUI message={error}/> }

      {/* Carga Manual */}
      { manual && <ResourceForm setManual={setManual} manual={manual} /> }

      {
        (!manual && !resource) &&
        <div className='flex justify-end mt-4'>
          <button className='bg-none border-none' onClick={handleManual}>
            <span className='underline underline-offset-4 decoration-solid'>Cargar manual?</span>
          </button>
        </div>
      }
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
  