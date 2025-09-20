import React from 'react'

const LanguageModal = () => {
  return (
    <div className='flex'>
      <div className='flex-grow p-4 text-[#b4b4b4]'>
        <h2 className='text-lg font-semibold'>Select Language</h2>
        <ul className='mt-2'>
          <li className='py-1 hover:bg-[#333333] p-1 rounded cursor-pointer'>C++</li>
          <li className='py-1 hover:bg-[#333333] p-1 rounded cursor-pointer'>Python</li>
          <li className='py-1 hover:bg-[#333333] p-1 rounded cursor-pointer'>JavaScript</li>
          <li className='py-1 hover:bg-[#333333] p-1 rounded cursor-pointer'>Java</li>
        </ul>
      </div>
    </div>
  )
}

export default LanguageModal;