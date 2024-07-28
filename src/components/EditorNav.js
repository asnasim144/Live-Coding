import React from 'react'

export default function EditorNav({ setOpenEditor}) {
  return (
    <div className='flex gap-10 pl-10 mb-4'>
      <button className='px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700' onClick={() =>handleOpenEditor('Meta')}>Meta</button>
      <button className='px-4 py-2 font-bold text-white rounded bg-sky-500 hover:bg-sky-700' onClick={() =>handleOpenEditor('CSS')}>CSS</button>
      <button className='px-4 py-2 font-bold text-white bg-orange-600 rounded hover:bg-orange-700' onClick={() =>handleOpenEditor('HTML')}>HTML</button>
      <button className='px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700' onClick={() =>handleOpenEditor('JS')}>JavaScript</button>
    </div>
  )
  
  function handleOpenEditor(value) {
    setOpenEditor(value)
  }
}
