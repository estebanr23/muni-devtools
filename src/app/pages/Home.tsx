import { CardUI } from '@/app/components/CardUI'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { ModalUI } from '../components/ModalUI'
import { ICard } from '../interfaces'
import { cards } from '../constants'
import { ResourceForm } from '../forms/ResourceForm'

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
        <h1 className='text-center font-semibold font text-4xl'>DevTools</h1>

        <div className='flex mt-8'>
          <div className='flex justify-center flex-1 mx-auto '>
            <input type="text" className='w-full max-w-4xl border border-gray-300 rounded-xl p-2' placeholder='Buscar'/>
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
