import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const socials = [
  {
    name: "Facebook",
    url: "https://facebook.com/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/",
  },
];
function Footer() {
  return (
    <div className='mt-[5vmax]'>
      <footer className=" relative h-[44vw] flex flex-col justify-center w-full bg-[url('/footer.svg')] bg-[#1C1E56] bg-no-repeat bg-center bg-contain ">
        <div className="w-full relative flex justify-center">
          <div className="w-full flex justify-center">
            <Image src="/Logo.svg" alt="logo" width={0} height={0} className='w-[45vw] lg:w-[50vw] pt-[15vw] pb-[0] md:pb-[1.5vw]' />
          </div>
        </div>

        <div className=" px-[2.5vmax] flex justify-around ">
          <div className="md:my-[2.5vmax] flex flex-col order-2  md:w-[60%] w-[60%]">
            <h5 className="text-[white] text-[1.2vmax]">
              Indian Institute of Information Technology,
              <br /> Delhi Okhla Industrial Estate, <br />
              Phase III Near Govind Puri Metro Station
              <br /> New Delhi, Delhi 110020
            </h5>

            <div className="md:mt-[4vw] flex  items-center">
              {socials.map((social,i) => (
                <Link href={social.url} target="_blank" key={i}>
                  <Image
                    src={`/${social.name}.svg`}
                    alt={social.name}
                    className="hover:scale-110 transition-all mx-1"
                    width={0}
                    height={0}
                    style={{
                      width: "3vmax",
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-end mr-[2vmax] text-[1vmax] order-2 text-[white]">
            
            <div className=" pl-[2.5vmax] flex flex-col">
              <Link href="/teams" className="my-[1.2vw] hover:underline">
                TEAMS
              </Link>
              <Link href="/sponsors" className="my-[1.2vw] hover:underline">
                SPONSORS
              </Link>
              <Link href="/events" className="my-[1.2vw] hover:underline">
                EVENTS
              </Link>
              <Link href="/contact" className="mt-[1.2vw] mb-0 hover:underline">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
        
      </footer>
      <div className="w-full">
        <Image src="/footerStrip.svg" alt="footer" width={0} height={0} style={{
          width: "100%",
        }} />
      </div>
    </div>
  )
}

export default Footer