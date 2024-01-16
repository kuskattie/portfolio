import React from 'react'
import HomeItems from './HomeItems'

const data = [
    {
        author: 'Robert Capa',
        quote: 
        'If your photos are not good enough, then you are not close enough.'
    },
    {
        author: 'Ansel Adams',
        quote: 
        'When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.'
    },
    {
        author: 'Alfred Stieglitz',
        quote: 
        'In photography there is a reality so subtle that it becomes more real than reality.'
    },
    {
        author: 'Robert Frank',
        quote: 
        'There is one thing the photograph must contain, the humanity of the moment.'
    },
    {
        author: 'Aaron Siskind',
        quote: 
        'Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.' 
    }
]

export const Home = () => {
  return (
    <div id='home' className='max-w-[1040] m-auto md-pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#0e7490]'>Beauty of photography</h1>
        {data.map((item, idx) => 
            <HomeItems 
            key={idx} 
            author={item.author} 
            quote={item.quote} 
                />
        )}
    </div>
  )
}

export default Home;