import React from 'react'


const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#0e7490]'>Contact</h1>
        <form action="https://getform.io/f/7689ece3-db15-4f22-bc95-55176578aed6" method='POST' encType='multipart/form-data'>
            <div className='grid w-full gap-4 py-2 md:grid-cols-2'>
                <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase'>Name</label>
                    <input className='flex p-3 border-2 border-gray-300 rounded-lg' 
                    type='text' 
                    name='name' 
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase'>Phone number</label>
                    <input className='flex p-3 border-2 border-gray-300 rounded-lg' 
                    type='text' 
                    name='phone' 
                    />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 text-sm uppercase'>Email</label>
                <input className='flex p-3 border-2 border-gray-300 rounded-lg' 
                type="email" 
                name='email' 
                />
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 text-sm uppercase'>Subject</label>
                <input
                className='flex p-3 border-2 border-gray-300 rounded-lg'
                 type="text" 
                 name='subject' 
                 />
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 text-sm uppercase'>Message</label>
                <textarea 
                className='p-3 border-2 border-gray-300 rounded-lg'
                rows='10' 
                name='message'>

                </textarea>
            </div>
            <button className='bg-[#0e7490] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                Send message
            </button>
        </form>
    </div>
  )
}
  

export default Contact