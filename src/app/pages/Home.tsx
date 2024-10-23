import { CardUI } from '@/app/components/CardUI'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { ModalUI } from '../components/ModalUI'
import { ICard } from '../interfaces'
import { cards } from '../constants'
import { ResourceForm } from '../forms/ResourceForm'
import { Input } from '@/components/ui/input'

export const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeCard, setActiveCard] = useState<ICard | null>(null)

  const handleCreate = () => {
    setActiveCard(null)
    setIsOpen(true)
  }

  const handleEdit = (card: ICard) => {
    setActiveCard(card)
    setIsOpen(true)
  }

  return (
    <div>
      <section className='mb-8'>
        <h1 className='text-center font-semibold font text-4xl'>Muni DevTools</h1>

        <div className='flex mt-8 sm:gap-x-4'>
          <div className='flex justify-center flex-1 mx-auto'>
            <div className='w-full max-w-4xl relative'>
              <Input type="text" className='rounded-xl p-5' placeholder='Buscar recurso'/>
              <ul className='dark:bg-black/90 bg-background max-h-80 absolute z-50 w-full top-11 rounded-b-xl border-x-2 border-b-2'>
                <li className='px-5 py-2 border-b border-input hover:dark:hover:bg-slate-800'>Result 1</li>
                <li className='px-5 py-2 border-y border-input hover:dark:hover:bg-slate-800'>Result 2</li>
                <li className='px-5 py-2 border-y border-input hover:dark:hover:bg-slate-800'>Result 3</li>
                <li className='px-5 py-2 border-y border-input hover:dark:hover:bg-slate-800'>Result 4</li>
                <li className='px-5 py-2 border-y border-input hover:dark:hover:bg-slate-800'>Result 5</li>
                <li className='px-5 py-2 border-t border-input hover:dark:hover:bg-slate-800'>Result 6</li>
              </ul>
            </div>
          </div>

          <div>
            <Button className='h-full rounded-xl' variant="outline" onClick={handleCreate}><Plus />Agregar</Button>
          </div>
        </div>


      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
        {
          cards.map((card: ICard) => (
            <CardUI key={card.id}
              card={card}
              onEdit={() => handleEdit(card)}
            />
          ))
        }
      </section>

      {/* Modal para crear o editar */}
      <ModalUI
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        title={activeCard ? 'Editar recurso' : 'Agregar recurso'} 
      >
        <ResourceForm />
      </ModalUI>
    </div>
  )
}
