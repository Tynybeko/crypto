'use client'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import type { quote } from './Calculator'
import '@/styles/myChangerInput.scss'


const MyChangeSelect = ({ data }: { data: quote[] | undefined }) => {
    const [myQuote, setQuote] = useState<quote | undefined>()
    const [changedValue, setValue] = useState<string>('')
    const [myData, setData] = useState<quote[] | undefined>(data)
    const [isOpenSelect, setOpenSelect] = useState<boolean>(false)
  
    return (
        <div  className='myChangeInput'>
            <div className="inner">
                <div className='changer-input'>
                    <div className="content-input">
                        <input onClick={() => {
                            setOpenSelect(prev => !prev)
                            setData(data)
                        }} onChange={(e) => {
                            if (data) {
                                setData(data?.filter((el: quote) => String(el.name).toLowerCase().includes(e.target.value.toLowerCase())))
                            }
                            setValue(e.target.value)
                        }} value={changedValue} placeholder='Пары' id='changer' type="text" />

                        <div className="content-input-field">
                            {myQuote ? <img src={`/assets/CRP/${myQuote.symbol}-logo.png`} alt={myQuote.symbol} /> : ''}
                            <input type="number" placeholder='Введите число' />
                        </div>
                    </div>
                    <div className={`selector ${isOpenSelect ? 'open-selector' : ''}`}>
                        {
                            myData?.map(el => (
                                <option onClick={() => {
                                    setQuote(el)
                                    setValue(el.name)
                                    setOpenSelect(false)
                                }} value="asdsad"><div className="icons">
                                        <img src={`/assets/CRP/${el.symbol}-logo.png`} alt={el.symbol} />
                                    </div> {el.name} </option>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyChangeSelect