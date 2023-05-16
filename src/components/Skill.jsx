import React from 'react'
import html from "../assets/images/html-5.png"
import css from "../assets/images/css-3.png"
import js from "../assets/images/js.png"
import react from "../assets/images/react.png"
import nodejs from "../assets/images/nodejs.png"
import php from "../assets/images/php.png"
import java1 from "../assets/images/java (1).png"
import mysql from "../assets/images/mysql.png"
import github from "../assets/images/github.png"
import tailwind from "../assets/images/tailwind.png"
import materialui from "../assets/images/materialui.png"
import Bootsrap from "../assets/images/Bootsrap.png"
import blender from "../assets/images/blender.png"
import substance from "../assets/images/substance-3d-painter.png"
import unity from "../assets/images/unity.png"
import figma from "../assets/images/figma.png"
import photoshop from "../assets/images/photoshop.png"
import illustrator from "../assets/images/illustrator.png"

const Skill = () => {
    const programmings = [
        {
            id: 1,
            src: html,
            title: "html",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "css",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: js,
            title: "javascript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: react,
            title: "react",
            style: "shadow-blue-500"
        },
        {
            id: 5,
            src: nodejs,
            title: "nodejs",
            style: "shadow-green-500"
        },
        {
            id: 6,
            src: php,
            title: "php",
            style: "shadow-purple-500"
        },
        {
            id: 7,
            src: java1,
            title: "java",
            style: "shadow-red-500"
        },
        {
            id: 8,
            src: mysql,
            title: "mysql",
            style: "shadow-sky-500"
        },
        {
            id: 9,
            src: tailwind,
            title: "tailwind",
            style: "shadow-sky-500 pb-5"
        },
        {
            id: 10,
            src: materialui,
            title: "Material-Ui",
            style: "shadow-blue-600"
        },
        {
            id: 11,
            src: Bootsrap,
            title: "Bootsrap",
            style: "shadow-purple-500"
        },
        {
            id: 12,
            src: github,
            title: "Github",
            style: "shadow-gray-500"
        },
    ]
    const ThreeD = [
        {
            id: 1,
            src: blender,
            title: "blender",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: substance,
            title: "substance-painter",
            style: "shadow-green-500"
        },
        {
            id: 3,
            src: unity,
            title: "unity",
            style: "shadow-green-500"
        },
    ]
    const desain = [
        {
            id: 1,
            src: photoshop,
            title: "photoshop",
            style: "shadow-sky-500"
        },
        {
            id: 2,
            src: illustrator,
            title: "adobe illustrator",
            style: "shadow-yellow-500"
        },
        {
            id: 3,
            src: figma,
            title: "figma",
            style: "shadow-green-300"
        },
    ]
    return (
        <div name="skill" className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white'>
                <div className=''>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        Skills
                    </p>
                    <p className='py-6'>Technologies that i used for</p>
                </div>
                <div className='flex justify-center'>
                    <p className='text-3xl font-bold border-b-2 border-gray-400 p-2 inline'>Software Engineering</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {programmings.map(({ id, src, title, style }) => (
                        <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} key={id}>
                            <img src={src} alt="" className='mx-auto w-20' />
                            <p className='mt-4 capitalize'>{title}</p>
                        </div>
                    ))}

                </div>
                <div className='flex justify-center'>
                    <p className='text-3xl font-bold border-b-2 border-gray-400 p-2 inline'>3D Artist</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-20 px-12 sm:px-0'>
                    {ThreeD.map(({ id, src, title, style }) => (
                        <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} key={id}>
                            <img src={src} alt="" className='mx-auto w-20' />
                            <p className='mt-4 capitalize'>{title}</p>
                        </div>
                    ))}

                </div>
                <div className='flex justify-center'>
                    <p className='text-3xl font-bold border-b-2 border-gray-400 p-2 inline'>Graphic Design</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {desain.map(({ id, src, title, style }) => (
                        <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} key={id}>
                            <img src={src} alt="" className='mx-auto w-20' />
                            <p className='mt-4 capitalize'>{title}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Skill
