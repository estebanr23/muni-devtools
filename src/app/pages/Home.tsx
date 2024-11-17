import { CardUI } from '@/app/components/CardUI'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { ModalUI } from '../components/ModalUI'
import { ICard } from '../interfaces'
import { cards } from '../constants'
import { Resource } from '../components/resources/Resource'
import { Input } from '@/components/ui/input'
import { AlertDialogUI } from '../components/AlertDialogUI'

export const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false)
  const [activeCard, setActiveCard] = useState<ICard | null>(null)

  const handleResource = (card?: ICard) => {
    if(card) setActiveCard(card)
    setIsOpen(true)
  }

  const handleDelete = (card: ICard) => {
    setActiveCard(card)
    setIsOpenDelete(true)
  }

  const removeResource = () => {
    console.log('remove')
  }

  return (
    <>
      <section className='mb-8'>
        <h1 
          className="text-center text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-400
          via-blue-500 to-gray-900"
        >
          Muni Devtools
        </h1>

        <div className='flex flex-col md:flex-row items-center md:justify-center gap-4 mt-6'>
          <div className='flex-1 w-full md:max-w-2xl relative'>
            <Input 
              type="text" 
              className='w-full rounded-xl p-5 h-12' 
              placeholder='Buscar recurso' 
            />
            
            {/* Descomenta este bloque para la lista de resultados */}
            {/* 
              <ul className='dark:bg-black/90 bg-background max-h-80 absolute z-50 w-full top-11 rounded-b-xl border-x-2 border-b-2'>
                <li className='px-5 py-2 border-b border-input hover:dark:hover:bg-slate-800'>Result 1</li>
                <li className='px-5 py-2 border-y border-input hover:dark:hover:bg-slate-800'>Result 2</li>
                <li className='px-5 py-2 border-y border-input hover:dark:hover:bg-slate-800'>Result 3</li>
                <li className='px-5 py-2 border-y border-input hover:dark:hover:bg-slate-800'>Result 4</li>
                <li className='px-5 py-2 border-y border-input hover:dark:hover:bg-slate-800'>Result 5</li>
                <li className='px-5 py-2 border-t border-input hover:dark:hover:bg-slate-800'>Result 6</li>
              </ul>
            */}
          </div>

          <Button 
            className='w-full md:w-auto rounded-xl h-12' 
            variant="outline" 
            onClick={() => handleResource()}
          >
            <Plus /> Agregar
          </Button>
        </div>
      </section>


      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
        {
          cards.map((card: ICard) => (
            <CardUI key={card.id}
              card={card}
              onEdit={() => handleResource(card)}
              onDelete={() => handleDelete(card)}
            />
          ))
        }
      </section>

      {/* Modal para crear o editar recurso */}
      <ModalUI
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        title={activeCard ? 'Edit resource' : 'Add resource'} 
      >
        <Resource />
      </ModalUI>

      {/* Modal para eliminar recurso */}
      <AlertDialogUI
        isOpen={isOpenDelete} 
        setIsOpen={setIsOpenDelete}
        title='Delete resource' 
        description='Do you want to delete the resource?'
        onAction={removeResource}
      />
    </>
  )
}
