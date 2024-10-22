import { Button } from '@/components/ui/button'

export const ResourceForm = () => {
  return (
    <form >
      <div className="flex flex-col gap-4">
        <input
        //   {...register('title')}
          placeholder="Title"
          className="border border-gray-300 rounded-md p-2"
        />
        <input
        //   {...register('url')}
          placeholder="URL"
          className="border border-gray-300 rounded-md p-2"
        />
        <textarea
        //   {...register('description')}
          placeholder="Description"
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className='flex justify-end mt-4'>
        <Button type="submit">Save changes</Button>
      </div>
    </form>
  )
}
