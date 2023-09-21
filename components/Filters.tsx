'use client'
import React, { useState } from 'react'

const links = ['all', 'next 13', 'frontend', 'backend', 'fullstack'];

const Filters = () => {
  const [active, setActive] = useState('')

  const handleFilter = (link: string) => {
    setActive(link)
  }

  return (
    <ul className='flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl text-white-800 body-text no-scrollbar'>
      {links.map((link) => (
        <button
          title='Filter by'
          type='button'
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ?
            "gradient_blue-purple": ""
          } px-8 py-2.5 rounded-lg whitespace-nowrap capitalize`}
        >{link}</button>
      ))}
    </ul>
  )
}

export default Filters