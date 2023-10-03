'use client'
import React, { ChangeEvent, ChangeEventHandler, MutableRefObject, useEffect, useRef, useState } from 'react'
import '@/styles/leftMain.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import axios from 'axios'
import Currentcy from './Currentcy'



const LeftMain: React.FC = () => {
    const path = usePathname()
    const [isBurger, setBurgerState] = useState<boolean>(false)

    useEffect(() => {
        let MyParentElement = document.querySelector('.leftMain')
        if (isBurger && !MyParentElement?.classList.contains('actived-menu')) {
            MyParentElement?.classList.add('actived-menu')
        } else if (!(isBurger || !MyParentElement?.classList.contains('actived-menu'))) {
            MyParentElement?.classList.remove('actived-menu')
        }
    }, [isBurger])

    return (
        <div className='left_main' >
            <div className="logo">
                <Link onClick={() => {
                    setBurgerState(false)
                }} href={'/'}>
                    <img src="/assets/logo.png" alt="Logo" />
                </Link>
            </div>
            <div className="burger-menu">
                <div className="inner">
                    <button className={`menu ${isBurger ? 'opened' : ''}`} onClick={() => {
                        setBurgerState(prev => !prev)
                    }} aria-expanded={isBurger} aria-label="Main Menu">
                        <svg width="40" height="40" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                </div>

            </div>

            <div className="inner">
                <Link onClick={() => {
                    setBurgerState(false)
                }} className={`${path == '/' ? 'active' : ''}`} href={'/'}><svg className={`feather feather-layers `} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>Панель приборов</Link>
                <Link onClick={() => {
                    setBurgerState(false)
                }} className={`${path == '/calculator' ? 'active' : ''}`} href={'/calculator'}><svg className="feather feather-divide-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3" /><line x1="8" x2="16" y1="12" y2="12" /><line x1="12" x2="12" y1="16" y2="16" /><line x1="12" x2="12" y1="8" y2="8" /></svg>Калькулятор</Link>
                <Link onClick={() => {
                    setBurgerState(false)
                }} className={`${path == '/about' ? 'active' : ''}`} href={'/about'}><svg className="feather feather-twitch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" /></svg>О нас</Link>
            </div>
            <div className="currentcy">
                <Currentcy />
            </div>

        </div >
    )
}


export default LeftMain