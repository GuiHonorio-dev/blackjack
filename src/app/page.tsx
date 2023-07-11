"use client"

import { createDeck, cardProps } from '@/utils/deck'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [counter, setCounter] = useState(0)
  const [deck, setDeck] = useState<cardProps[]>([])
  
  useEffect(() => {
    const generatedDeck = createDeck()
    setDeck(generatedDeck)
  }, [])

  if(deck.length === 0) {
    return <div>Carregando...</div>
  }

  const card = deck[counter]
 
  return (
    <main className='h-screen bg-slate-950 flex items-center justify-center'>
      <div className='flex flex-col gap-44 items-center'>

        <div className='flex flex-col items-center gap-2'>
          <h2 className='text-white text-lg font-bold'>Dealer Hand</h2>
          <div className='flex gap-2'>
            <Image src={`/../public/cards/${card.number}-${card.symbol}.png`} alt='Cart image' width={100} height={100} />
            <Image src={`/../public/cards/${card.number}-${card.symbol}.png`} alt='Cart image' width={100} height={100} />
          </div>
          
        </div>

        <div className='flex flex-col items-center gap-2'>
          <h2 className='text-white text-lg font-bold'>Player Hand</h2>
          <div className='w-full flex justify-between '>
            <div className='flex gap-2'>
              <Image src={`/../public/cards/${card.number}-${card.symbol}.png`} alt='Cart image' width={100} height={100} />
              <Image src={`/../public/cards/${card.number}-${card.symbol}.png`} alt='Cart image' width={100} height={100} />
            </div>
            <button>Card</button>
            <button>Stop</button>
            
          </div>
          
        </div>
        
        </div>
      
    </main>
  ) 
}