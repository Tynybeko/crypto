import React, { SetStateAction } from 'react'
import '@/styles/modal.scss'

const Modal = ({ children, onClose }: { children: React.ReactNode, onClose: React.Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div onClick={(e) => {
            e.stopPropagation()
            onClose(prev => !prev)
        }} className='myModal'>
            <div className="inner">
                {children}
            </div>
        </div>
    )
}

export default Modal