import github from "../assets/images/github.png"
import Linkedin from "../assets/images/Linkedin.png"
import Instagram from "../assets/images/Instagram.png"
import cv from "../assets/images/cv.png"
import Sketchfab from "../assets/images/Sketchfab.png"

const SocialBottom = () => {
  const links = [
    {
        id: 1,
        name:"Linkedin",
        src: Linkedin,
        href: "https://www.linkedin.com/in/athar-mawla-0a53031b2/",
        style: "rounded-tr-md shadow-sky-400",
    },
    {
        id: 2,
        name:"Github",
        src: github,
        href: "https://github.com/AtharFazle",
        style: "rounded-tr-md shadow-white",
    },
    {
        id: 3,
        name:"Instagram",
        src:Instagram,
        href: "https://www.instagram.com/athar_faz/",
        style: "rounded-br-md shadow-red-500",
    },
    {
        id: 4,
        name:"CV",
        src: cv,
        style: "rounded-br-md shadow-orange-400",
        href: '/Athar Fazle Mawla_CV_Full-Stack-Engineer.pdf',
        download: true,
    },
    {
        id: 5,
        name:"3D Portofolio",
        src:Sketchfab,
        style: "rounded-br-md shadow-purple-500",
        href: "https://sketchfab.com/athar_faz",
    },
];
  return (
    <div className="flex flex-row lg:hidden bg-gradient-to-b from-black via-gray-800 to-black w-full h-full  text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Social Links
          </p>
          <p className="py-6">Check out my Social Links to get Touch on me</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {links.map((link)=>(
            <a className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${link.style}`} key={link.id} href={link.href ? link.href : "/"} download={link.download}>
            <img src={link.src} alt="" className='mx-auto w-20' />
            <p className='mt-4 capitalize text-center'>{link.name}</p>
        </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialBottom;
