import React from 'react'

const Accordion = () => {
  return (
    <div className='py-2'>
        <button className='flex justify-between w-full'>
            <span>This is the title</span>  
            <span>+</span>
        </button>
        <div>
            <div>
                This is the answer
            </div>
        </div>
    </div>
  )
}

export default Accordion