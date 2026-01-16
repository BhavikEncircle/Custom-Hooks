import React from 'react'
import Likes from './Views/Likes'
import Score from './Views/Score'
import Quantity from './Views/Quantity'

const App = () => {
  return (
    <div className='max-w-4xl mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center'>Custom Hooks Task</h1>
      <Likes />
      <Score />
      <Quantity />
    </div>
  )
}

export default App
