
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiSketchfab } from 'react-icons/si'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/athar-mawla-0a53031b2/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/AtharFazle",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:atharfazle202@gmail.com?subject=subject&cc=cc@example.com",
        },
        {
            id: 4,
            child: (
                <>
                    CV <BsFillPersonLinesFill size={30} />
                </>
            ),
            style: "rounded-br-md",
            href: '/Athar Fazle Mawla_CV_Full-Stack-Engineer.pdf',
            download: true,
        },
        {
            id: 5,
            child: (
                <>
                    3DPorto <SiSketchfab size={30} />
                </>
            ),
            href: "https://sketchfab.com/athar_faz",
        },
    ];
    return (
        <div className="hidden flex-col top-[35%] left-0 fixed lg:flex">
            <ul>
                {links.map((link) => (
                    <li
                        key={link.id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                            " " +
                            link.style
                        }
                    >
                        <a
                            href={link.href ? link.href : "/"}
                            className="flex justify-between items-center w-full text-white"
                            download={link.download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;