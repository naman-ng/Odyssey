import React from 'react'
import Image from 'next/image';

function SocialValidation() {

    const Circle = ({ title, children }) => (
        <div className="w-[15vw] h-[15vw] bg-[#B8215A] border border-[#000] p-5 rounded-full flex flex-col justify-evenly items-center text-center text-[white]">
            <h3 className="text-[5vw] mt-[1vw] font-bold">{title}</h3>
            <p className="text-[1.7vw] leading-tight">{children}</p>
        </div>
    );
    return (
        <>
            <div className="w-full bg-[#1C1E56] z-10">
            <div className="w-full mb-[2vmax] grid grid-cols-4">
            <div className="w-full h-full flex items-center justify-end pr-[2vmax]">
                <Circle title="30k">
                Accounts <br />
                reached
                </Circle>
            </div>
            <p className="text-center w-full text-[white] py-[6vmax] col-span-2 text-[1.2vmax] 2xl:tracking-wider 2xl:leading-normal">
                Lorem ipsum dolor sit amet consectetur. Aliquam proin etiam nisi
                egestas ultricies pulvinar cum. Tortor eu adipiscing viverra
                scelerisque scelerisque neque elit. Phasellus sed cras aliquam
                placerat faucibus. Vestibulum eget eget nulla adipiscing. Tincidunt
                nec sed massa lectus tempus. Mauris lorem consequat sit tellus vitae
                nunc auctor.Lorem ipsum dolor sit amet consectetur. Aliquam proin
                etiam nisi egestas ultricies pulvinar cum. Tortor eu adipiscing
                viverra scelerisque scelerisque neque elit. Phasellus sed cras
                aliquam placerat faucibus.
            </p>
            <div className="w-full h-full flex items-center justify-start pl-[2vmax]">
                <Circle title="30k">
                Accounts <br />
                reached
                </Circle>
            </div>
            </div>

            <div className="w-full grid grid-cols-3">
            <div className="w-full h-full flex items-center justify-center pr-[2vmax]">
                <Circle title="30k">
                Accounts <br />
                reached
                </Circle>
            </div>
            <div className="relative h-72">
                <Image src="/lotus.svg" alt="illustration" fill />
            </div>
            <div className="w-full h-full flex items-center justify-center pl-[2vmax]">
                <Circle title="30k">
                Accounts <br />
                reached
                </Circle>
            </div>
            </div>
        </div>
    </>
  )
}

export default SocialValidation