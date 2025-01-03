
import React from 'react'
import sports from '../app/Data/sport.json'
import Image from 'next/image'
import Link from 'next/link'

const FeaturesSports = () => {
  return (
    <div className='my-10 px-5'>
      <h2 className='text-center font-bold text-4xl mt-20'>Features Sports </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 '>
        {sports.map((sport) => (
          <div
          key={sport.id}
          className='rounded-lg shadow-2xl p-6 border border-black'
          > 
          <Image

          src={sport.image}
          alt='sport-img'
          className=' rounded-lg '
          width={600}
          height={300}
          />
          <h3 className='text-center font-bold text-gray-800 text-2xl mt-5'>{sport.name}</h3>
          <p className='text-center mt-2'>{sport.description}</p>
          <Link href={`/sports/${sport.sport}`}>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-black font-medium text-lg py-2 px-20 ml-12 rounded">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesSports
