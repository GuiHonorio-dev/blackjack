export interface cardProps {
  symbol: string,
  number: string
}

export function createDeck() {
  const symbols = ['C', 'D', 'H', 'S']
  const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Q', 'J', 'K']

  let deckInSequence: cardProps[] = []

  for(let i = 0; i < symbols.length; i++) {
    for(let j = 0; j < numbers.length; j++) {
      deckInSequence.push({
        symbol: symbols[i],
        number: numbers[j]
      })
    }
  }


  const randomPos = generateRandomPos(deckInSequence.length)
  console.log(randomPos)
  const shuffedDeck: cardProps[] = []
  randomPos.forEach(pos => (
    shuffedDeck.push(deckInSequence[pos])
  ))

  console.log(shuffedDeck)

  return shuffedDeck
}

function generateRandomPos(length: number) {
  let randomPos:number[] = []
  while(randomPos.length < length) {
    const randomNumber = Number((Math.random() * 51).toFixed())
    if(!randomPos.includes(randomNumber)) {
      randomPos.push(randomNumber)
    }
  }

  return randomPos
}