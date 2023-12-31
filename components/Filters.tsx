'use client'
import { formUrlQuery } from '@/sanity/utils';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const links = ['all', 'next 13', 'frontend', 'backend', 'fullstack'];

const Filters = () => {
  const [active, setActive] = useState('')
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = '';
    let value = null;
    if (active === link) {
      setActive('');
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
        value: null
      })
    } else {
      setActive(link);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: link.toLowerCase()
      })
    }
    
    
    console.log(newUrl)
    router.push(newUrl, { scroll: false })
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