function Player({player,win}) {
  return (
    <header className='w-1/2 mx-auto text-white text-lg'>
        <div className='m-3 p-2 rounded-lg bg-violet-200 text-black font-semibold'>Win: {win}</div>
        <div className='m-3 p-2 rounded-lg bg-violet-200 text-black font-semibold'>Player: {player}</div>
    </header>
  )
}

export default Player
