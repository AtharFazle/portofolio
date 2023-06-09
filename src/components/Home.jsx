import HeroImage from "../assets/images/AtharHome1.jpg"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
import { TypeAnimation } from "react-type-animation"

function Home() {
    return (
        <div name="home" className=' w-full h-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-3xl sm:text-6xl font-bold text-white'>
                        I'AM A 
                        </h2>
                        <span className='text-2xl sm:text-5xl font-bold text-sky-500'>
                        <TypeAnimation sequence={[
                            'Frontend Dev',
                            2000,
                            'Backend Dev',
                            2000,
                            '3D Artist',
                            2000,
                        ]} speed={50} repeat={Infinity} wrapper='span'/>
                        </span>
                    <p className='text-gray-600 py-4 max-w-md '> I am a programming enthusiast.
                        My focus is on front-end web applications.I Have can be as a Back End developer. and also have 6 Month 3D Artist Experience.
                    </p>

                    <div>
                        <Link to='portofolio'
                            smooth
                            duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portofolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="myProfile" className='rounded-2xl mx-auto  w-full md:w-2/3 ' />
                </div>
            </div>
        </div>
    )
}

export default Home
