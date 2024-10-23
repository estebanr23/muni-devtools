import { ICard } from '../interfaces'

export const cards: ICard[] = [
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

export const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]