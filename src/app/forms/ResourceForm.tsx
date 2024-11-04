import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import { Save } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IResource } from '../interfaces'

export const ResourceForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IResource>()

  const onSubmit: SubmitHandler<IResource> = ( data:IResource ) => {
    console.log(data)
  }

  return (
    <form className='flex justify-between flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          {...register('title', { required: true })}
          type='text'
          placeholder="Titulo"
          className="border border-gray-300 rounded-md p-2"
        />
        {errors?.title && <span className='text-red-500 text-sm'>El titulo es requerido</span>}
      </div>

      <div>
        <Input
          {...register('image', { required: true })}
          type='text'
          placeholder="Image"
          className="border border-gray-300 rounded-md p-2"
        />
        {errors?.image && <span className='text-red-500 text-sm'>La imagen es requerida</span>}
      </div>

      <div>
        <Textarea
          {...register('description', { required: true })}
          placeholder="Descripción"
          className="border border-gray-300 rounded-md p-2 overflow-y-clip"
          rows={4}
        />
        {errors?.description && <span className='text-red-500 text-sm'>La descripcion es requerida</span>}
      </div>

      <Select>
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

      <div className='flex justify-end items-end gap-4'>
        <Button type="button" variant='destructive'>Cancelar</Button>
        <Button type="submit"><Save />Guardar</Button>
      </div>
    </form>
  )
}
