import React from 'react'
import useCounter from '../Utils/hooks/useCounter'
const Quantity = () => {
  const { count, increment, decrement } = useCounter(5, 5)
  return (
    <div className='flex flex-col justify-center items-center space-y-4 p-4 border rounded w-100 mx-auto mt-10'>
      <h2 className='font-bold text-2xl'>Quantity Board</h2>
      <br />
      <h3 className='text-xl'>
        Your current quantity is: <span className='font-bold'>{count}</span>
      </h3>
      <button
        className='bg-green-500 text-xl text-white px-4 py-2 rounded '
        onClick={increment}
      >
        Increase Quantity
      </button>
      <button
        className='bg-red-500 text-xl text-white px-4 py-2 rounded '
        onClick={decrement}
      >
        Decrease Quantity
      </button>
      <p className='text-xl'>
        <span className='font-bold'>Note</span> Every quantity increases by 5
        points.
      </p>
    </div>
  )
}

export default Quantity
