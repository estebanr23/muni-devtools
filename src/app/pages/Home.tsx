import { CardUI } from '@/app/components/CardUI'

interface ICard {
    id: string,
    title: string,
    url: string,
    description: string
    image: string
}

const cards: ICard[] = [
  {
    id: crypto.randomUUID(),
    title: 'Card 1',
    url: 'https://example.com/card1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus dignissim. Vivamus vulputate viverra dolor eu feugiat. Duis at ligula a sapien commodo fringilla. Suspendisse malesuada eget libero a feugiat.',
    image: 'https://www.hubdev.tools/_next/image?url=https%3A%2F%2Fdbueuofxjmmgwozundjk.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fhubtoolsdev%2Fog%2Faws-polly.avif&w=640&q=75'
  },
  {
    id: crypto.randomUUID(),
    title: 'Card 2',
    url: 'https://example.com/card2',
    description: 'Aenean congue ante at commodo volutpat. Donec vehicula sem id dui consequat, sed varius leo ultricies. Sed eros velit, vehicula vitae ullamcorper vel, auctor eget mi. ',
    image: 'https://www.hubdev.tools/_next/image?url=https%3A%2F%2Fdbueuofxjmmgwozundjk.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fhubtoolsdev%2Fog%2Fapplio.avif&w=640&q=75'
  },
  {
    id: crypto.randomUUID(),
    title: 'Card 3',
    url: 'https://example.com/card3',
    description: 'Nullam pellentesque lorem eget convallis posuere. Morbi semper semper sem eget faucibus. Cras varius elit justo, in gravida eros porttitor a. ',
    image: 'https://www.hubdev.tools/_next/image?url=https%3A%2F%2Fdbueuofxjmmgwozundjk.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fhubtoolsdev%2Fog%2Fbolt-ai.avif&w=640&q=75'
  },
  {
    id: crypto.randomUUID(),
    title: 'Card 4',
    url: 'https://example.com/card4',
    description: ' Praesent at sapien massa. In ante nibh, accumsan a faucibus id, mollis vel mi. Suspendisse consectetur dui nisl, a faucibus lectus laoreet ut.',
    image: 'https://www.hubdev.tools/_next/image?url=https%3A%2F%2Fdbueuofxjmmgwozundjk.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fhubtoolsdev%2Fog%2Fpinecone.avif&w=640&q=75'
  },
  {
    id: crypto.randomUUID(),
    title: 'Card 1',
    url: 'https://example.com/card1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus dignissim. Vivamus vulputate viverra dolor eu feugiat. Duis at ligula a sapien commodo fringilla. Suspendisse malesuada eget libero a feugiat.',
    image: 'https://www.hubdev.tools/_next/image?url=https%3A%2F%2Fdbueuofxjmmgwozundjk.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fhubtoolsdev%2Fog%2Faws-polly.avif&w=640&q=75'
  },
  {
    id: crypto.randomUUID(),
    title: 'Card 2',
    url: 'https://example.com/card2',
    description: 'Aenean congue ante at commodo volutpat. Donec vehicula sem id dui consequat, sed varius leo ultricies. Sed eros velit, vehicula vitae ullamcorper vel, auctor eget mi. ',
    image: 'https://www.hubdev.tools/_next/image?url=https%3A%2F%2Fdbueuofxjmmgwozundjk.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fhubtoolsdev%2Fog%2Fapplio.avif&w=640&q=75'
  },
  {
    id: crypto.randomUUID(),
    title: 'Card 3',
    url: 'https://example.com/card3',
    description: 'Nullam pellentesque lorem eget convallis posuere. Morbi semper semper sem eget faucibus. Cras varius elit justo, in gravida eros porttitor a. ',
    image: 'https://www.hubdev.tools/_next/image?url=https%3A%2F%2Fdbueuofxjmmgwozundjk.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fhubtoolsdev%2Fog%2Fbolt-ai.avif&w=640&q=75'
  },
  {
    id: crypto.randomUUID(),
    title: 'Card 4',
    url: 'https://example.com/card4',
    description: ' Praesent at sapien massa. In ante nibh, accumsan a faucibus id, mollis vel mi. Suspendisse consectetur dui nisl, a faucibus lectus laoreet ut.',
    image: 'https://www.hubdev.tools/_next/image?url=https%3A%2F%2Fdbueuofxjmmgwozundjk.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fhubtoolsdev%2Fog%2Fpinecone.avif&w=640&q=75'
  }
]

export const Home = () => {

  return (
    <div>
      <section className='mb-8'>
        <h1 className='text-center font-semibold font text-4xl'>DevTools</h1>

        <div className='mx-auto mt-8 max-w-4xl'>
          <input type="text" className='w-full border border-gray-300 rounded-xl p-2' placeholder='Buscar'/>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
        {
          cards.map((card: ICard) => (
            <CardUI key={card.id}
              title={card.title}
              url={card.url}
              description={card.description}
              image={card.image}
            />
          ))
        }
      </section>
    </div>
  )
}
