import { useState } from 'react'
import LuffyFront from './assets/Legends/LuffyFront.webp'
import Luffy from './assets/Legends/Luffy.webp'
import LuffyBack from './assets/Legends/LuffyBack.webp'
import Sanemi from './assets/Legends/Sanemi.webp'
import SanemiBack from './assets/Legends/SanemiBack.webp'
import Senjuro from './assets/Legends/Senjuro.webp'
import SenjuroBack from './assets/Legends/SenjuroBack.webp'
import NezukoBack from './assets/Legends/NezukoBack.webp'
import Nezuko from './assets/Legends/Nezuko.webp'
import Levi0 from './assets/Legends/Levi0.webp'
import Levi1 from './assets/Legends/Levi1.webp'
import Luffy0 from './assets/Legends/Luffy0.webp'
import Luffy1 from './assets/Legends/Luffy1.webp'
import SanemiFront from './assets/Legends/SanemiFront.webp'
import NezukoFront from './assets/Legends/NezukoFront.webp'
import SenjuroFront from './assets/Legends/SenjuroFront.webp'

const ImageSlider = () => {
  const Characters = [
    {
      name: 'Sanemi Shinazugawa - ',
      title: 'Kimetsu No Yaiba Vol. 14 by Banpresto 18cm',
      price: '$100',
      images: [SanemiFront, Sanemi, SanemiBack],
      alt: 'Sanemi Shinazugawa',
    },
    {
      name: 'Senjuro Rengoku - ',
      title: 'Kimetsu No Yaiba Vol. 26 by Banpresto 18cm',
      price: '$100',
      images: [SenjuroFront, Senjuro, SenjuroBack],
      alt: 'Senjuro Rengoku',
    },
    {
      name: 'Levi Ackerman - ',
      title: 'Shingeki No Kyojin Final Season by Banpresto 18cm',
      price: '$100',
      images: [Levi0, Levi1],
      alt: 'Levi Ackerman',
    },
    {
      name: 'Monkey D. Luffy - ',
      title: 'One Piece Bandai Ichiban Kuji by Banpresto 16cm',
      price: '$100',
      images: [Luffy0, Luffy1],
      alt: 'Monkey D. Luffy',
    },
    {
      name: 'Monkey D. Luffy - ',
      title:
        'One Piece Film Red DFX The Grandline Men Vol. 1 by Banpresto 16cm',
      price: '$100',
      images: [LuffyBack, LuffyFront, Luffy],
      alt: 'Monkey D. Luffy',
    },
    {
      name: 'Nezuko Kamado - ',
      title: 'Kimetsu No Yaiba World Collectible Figure by Banpresto 8cm',
      price: '$100',
      images: [NezukoFront, Nezuko, NezukoBack],
      alt: 'Nezuko Kamado',
    },
  ]

  const CharacterSlider = ({ character }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Function to handle image switching
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === character.images.length - 1 ? 0 : prevIndex + 1
      )
    }

    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? character.images.length - 1 : prevIndex - 1
      )
    }

    return (
      <div>
        <div className='relative w-full max-w-md mx-auto mb-4'>
          {/* Image Container */}
          <div className='relative'>
            <img
              src={character.images[currentImageIndex]}
              alt={character.alt}
              className='w-full h-[550px] object-contain rounded-md'
              loading='lazy'
            />
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevImage}
              className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-zinc-300 bg-opacity-50 p-3 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'>
                <path d='M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z' />
              </svg>
            </button>
            <button
              onClick={handleNextImage}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-zinc-300 bg-opacity-50 p-3 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'>
                <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
              </svg>
            </button>
          </div>
          {/* Text Overlay */}
          <div className='relative mt-2'>
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 backdrop-blur-md text-teal-50 p-4 rounded-b-md'>
              <h1 className='text-lg font-bold'>
                <span className='italic'>{character.name}</span>
                {character.title}
              </h1>
              <span className='text-xl pt-2 font-robotoo'>
                <span>Price:</span> {character.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className='bg-gradient-to-r from-[#fcf4f4] to-[#f9ffef]'>
      <div className='md:max-w-[935px] max-w-sm mx-auto pb-4'>
        <h1 className='text-lg md:text-xl py-4 text-left tracking-[1.05px] font-bold'>
          Legends
        </h1>
        {/* Render each character with its own slider */}
        <div className='grid grid-cols-2'>
          {Characters.map((character, index) => (
            <CharacterSlider
              key={index}
              character={character}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageSlider
