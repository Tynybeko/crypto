'use client'

import React, { ChangeEvent, MouseEventHandler, MutableRefObject, useRef, useState } from 'react'
import '@/styles/about-block.scss'

export interface AboutBlockType {
    id: string,
    title: string,
    isOpen: boolean | undefined,
    desc: {
        id: string,
        value: string
    }[]
}
import { data } from '@/about-block'

const AboutBlock = () => {
    const [myBlocks, setBlocks] = useState<AboutBlockType[]>(data.map((el: any) => ({ ...el, isOpen: false })))
    const handleOpen = () => {

    }

    return (
        <div className='about-block'>
            {
                myBlocks.map((el: AboutBlockType) => (
                    <div key={el.id} onClick={() => {
                        setBlocks([...myBlocks.map((element: AboutBlockType) => element.id == el.id ? { ...element, isOpen: !element.isOpen } : element)])
                    }} className={`block ${el.isOpen ? 'actived' : ''}`}>
                        <h1>{el.title}<svg className="feather feather-arrow-down-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="7" y2="17" /><polyline points="17 7 17 17 7 17" /></svg> </h1>
                        <div className='block-inner'>
                            <ul>
                                {
                                    el.desc.map((item: any) => (
                                        <li key={item.id}>{item.value}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AboutBlock