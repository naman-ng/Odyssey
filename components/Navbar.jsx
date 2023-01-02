import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='absolute w-full z-40 font-mulish text-[white] text-xl p-[1vmax] flex justify-between'>
      <div className='flex justify-between w-[30%] 2xl:w-[28%] text-[0.8vmax] md:text-[1.2vw]'>
        <Link href='/Home'>Home</Link>
        <Link href='/About'>About</Link>
        <Link href='/Events'>Events</Link>
        <Link href='/Sponsors'>Sponsors</Link>
        <Link href='/Team'>Team</Link>
      </div>

      <div className='flex justify-end w-1/6 space-x-4'>
        <Link target='_blank'
              className='transform transition duration-500 hover:scale-125 '
              href='https://www.facebook.com/odyssey.iiitd'>
            <Image alt='facebook'
                  src='/Facebook.svg'
                  width={0}
                  height={0}
                  style={{
                    width:"2.35vmax",
                  }}/>
        </Link>
        <Link target='_blank'
              className='transform transition duration-500 hover:scale-125 '
              href='https://www.instagram.com/iiitdodyssey/'>
          <Image alt='instagram'
                  src='/Instagram.svg'
                  width={0}
                  height={0}
                  style={{
                    width:"2.5vmax",
                  }}/>
        </Link>
        <Link target='_blank'
              className='transform transition duration-500 hover:scale-125 '
              href='https://twitter.com/IIITDOdyssey'>
          <Image alt='twitter'
                  src='/Twitter.svg'
                  width={0}
                  height={0}
                  style={{
                    width:"2.5vmax",
                  }}/>
        </Link>
        <Link target='_blank'
              className='transform transition duration-500 hover:scale-125 '
              href='https://www.linkedin.com/company/iiitdodyssey/mycompany/'>
          <Image alt='linkedin'
                  src='/LinkedIn.svg'
                  width={0}
                  height={0}
                  style={{
                    width:"2.5vmax",
                  }}/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar