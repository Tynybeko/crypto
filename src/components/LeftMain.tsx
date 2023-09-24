'use client'
import React, { useEffect, useState } from 'react'
import '@/styles/leftMain.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import axios from 'axios'
import Currentcy from './Currentcy'



const LeftMain: React.FC = () => {
    const path = usePathname()

    return (
        <div className='left_main' >
            <div className="logo">
                <Link href={'/'}>
                    <img src="/assets/svg/bitexbook.svg" alt="Logo" />
                    <h1><p>S</p>Cryptonit<span>KG</span></h1>
                </Link>

            </div>
            <div className="inner">
                <Link className={`${path == '/' ? 'active' : ''}`} href={'/'}><svg className={`feather feather-layers `} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>Панель приборов</Link>
                <Link className={`${path == '/calculator' ? 'active' : ''}`} href={'/calculator'}><svg className="feather feather-divide-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3" /><line x1="8" x2="16" y1="12" y2="12" /><line x1="12" x2="12" y1="16" y2="16" /><line x1="12" x2="12" y1="8" y2="8" /></svg>Калькулятор</Link>
                <Link className={`${path == '/about' ? 'active' : ''}`} href={'/about'}><svg className="feather feather-twitch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" /></svg>О нас</Link>
            </div>
            <div className="currentcy">
                <Currentcy />
            </div>

        </div >
    )
}


export default LeftMain