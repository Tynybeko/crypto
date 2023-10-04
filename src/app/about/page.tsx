import React from 'react'
import '@/styles/about.scss'
import FormTG from '@/components/FormTG'
import AboutBlock from '@/components/AboutBlock'


const page: React.FC = () => {
    return (
        <div className='about-page'>
            <div className="head">
            </div>
            <div className="inner">
                <AboutBlock />
            </div>
        </div>
    )
}


export default page