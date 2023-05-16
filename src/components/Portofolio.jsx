import React from 'react'

import WhatsappClone from '../assets/images/Whatsapp Clone.png'
import RealEstate from '../assets/images/Real-estate.png'
import LandingPageVR from '../assets/images/Landing-Page-VR.png'
import CashierApps from '../assets/images/Cashier-Apps.jpg'

function Portofolio() {

    const portofolios = [
        {
            id: 1,
            src: CashierApps,
            name: "CashierApps (OnGoing)",
            codelink: "https://github.com/AtharFazle/Frontend-Cashier",
            demolink: "1"
        },
        {
            id: 2,
            src: WhatsappClone,
            name: "WhatsappClone",
            codelink: "https://github.com/AtharFazle/Whatsapp-clone",
            demolink: "https://whatsapp-clone-athar.netlify.app/"
        },
        {
            id: 3,
            src: RealEstate,
            name: "Real-Estate Web",
            codelink: "https://github.com/AtharFazle/Real-Estate",
            demolink: "https://real-estate-athar.netlify.app"
        },
        {
            id: 4,
            src: LandingPageVR,
            name: "Landing-Page-VR",
            codelink: "https://github.com/AtharFazle/LANDING-PAGE-VR",
            demolink: "https://landing-page-vr.netlify.app"
        }

    ]
    return (
        <div name="portofolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-8'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portofolio</p>
                    <p className='py-6'>Check out some of my work Latest right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
                    {portofolios.map(({ id, src, name, demolink, codelink }) => (
                        <div className='shadow-md shadow-gray-600 rounded-lg' key={id}>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='pt-2 flex items-center justify-center'>
                                <p className='font-bold text-xl inline border-b-2 border-gray-500 duration-100 hover:border-blue-800 '>{name}</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <a className='w-1/2 flex justify-center py-3' href={demolink}>Demo</a>
                                <a className='w-1/2 flex justify-center py-3' href={codelink}>Code</a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Portofolio
