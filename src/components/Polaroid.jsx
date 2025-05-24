import React from 'react'

const Polaroid = ({imagenSrc, description}) => {
  return (
    <div>
      {/* contenedor */}
      <div className='bg-white rounded-sm shadow-2xl shadow-black p-2 flex flex-col items-center justify-between h-96 w-96 border-2 border-black'>
      {/* imagen */}
      <div className="w-full aspect-[3/4] bg-gray-200 overflow-hidden rounded-sm">
        <img
          src={imagenSrc}
          alt="Polaroid"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="pt-3 text-center text-xl text-gray-700 w-full px-2 py-4">
        <p>{description}</p>
      </div>
      </div>

    </div>
  )
}

export default Polaroid
