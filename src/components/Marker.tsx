import React from 'react'
import MarkIcon from '../assets/icons/bareMark.svg'

type Props = {
    text: string
}

const Marker = ({ text }: Props) => {
  return (
      <div className='md:mb-5 mb-3 flex items-center'>
          <img src={MarkIcon} alt="" />
          <p className='ml-3 text-[#808080] md:text-xl text-base' >{text}</p>
    </div>
  )
}

export default Marker