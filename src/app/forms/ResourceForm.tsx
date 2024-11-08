import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import { Save } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IResource, IResourceForm } from '../interfaces'

interface Props {
  resource?: IResource
  manual?: boolean
  setManual: (value: boolean) => void
}

export const ResourceForm = ({ resource, manual, setManual }: Props) => {
  const { 
    register, 
    reset,
    handleSubmit, 
    formState: { errors } 
  } = useForm<IResourceForm>({
    defaultValues: {
      title: resource?.title || '',
      image: resource?.image || '',
      description: resource?.description || '',
      category_id: null
    }
  })

  const closeModal = () => {
    console.log('reset')
    reset()
    setManual(false)
  }

  const onSubmit: SubmitHandler<IResourceForm> = ( data: IResourceForm ) => {
    console.log(data)
  }

  return (
    <form className={`flex justify-between flex-col gap-4 ${manual && 'w-[768px]'}`} onSubmit={handleSubmit(onSubmit)}>
      {
        manual && 
        <div>
          <Input
            {...register('url', { required: true })}
            type='url'
            placeholder="Url"
            className="border border-gray-300 rounded-md p-2"
          />
          {errors?.url && <span className='text-red-500 text-sm'>Url is required</span>}
        </div>
      }

      <div>
        <Input
          {...register('title', { required: true })}
          type='text'
          placeholder="Titulo"
          className="border border-gray-300 rounded-md p-2"
        />
        {errors?.title && <span className='text-red-500 text-sm'>Title is required</span>}
      </div>

      <div>
        <Input
          {...register('image', { required: true })}
          type='text'
          placeholder="Image"
          className="border border-gray-300 rounded-md p-2"
        />
        {errors?.image && <span className='text-red-500 text-sm'>Image is required</span>}
      </div>

      <div>
        <Textarea
          {...register('description', { required: true })}
          placeholder="Descripción"
          className="border border-gray-300 rounded-md p-2 overflow-y-clip"
          rows={4}
        />
        {errors?.description && <span className='text-red-500 text-sm'>Description is required</span>}
      </div>

      <Select {...register('category_id', { required: true,valueAsNumber: true })}>
        <SelectTrigger className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Etiquetas</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {errors?.category_id && <span className='text-red-500 text-sm'>Category is required</span>}

      <div className='flex justify-end items-end gap-4'>
        <Button type="button" variant='destructive' onClick={closeModal}>Cancelar</Button>
        <Button type="submit"><Save />Guardar</Button>
      </div>
    </form>
  )
}
