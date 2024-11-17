import { cards } from '../constants'
import { CardUI } from '../components/CardUI'
import { ICard } from '../interfaces'

export const Favorites = () => {
  return (
    <>
      <h4 className='text-center text-6xl mb-12'>Favorites</h4>
      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
        {
          cards.map((card: ICard) => (
            <CardUI key={card.id}
              card={card}
            //   onEdit={() => handleResource(card)}
            //   onDelete={() => handleDelete(card)}
            />
          ))
        }
      </section>
    </>
  )
}
