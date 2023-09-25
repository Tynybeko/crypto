'use client'
import React, { useState } from 'react'
import type { quote } from './Calculator'
import '@/styles/myChangerInput.scss'


const MyChangeSelect = ({ data }: { data: quote[] | undefined }) => {
    const [myQuote, setQuote] = useState<quote | undefined>()
    const [changedValue, setValue] = useState<string>('')
    const [myData, setData] = useState<quote[] | undefined>(data)


    return (
        <div className='myChangeInput'>
            <div className="inner">
                <label htmlFor="changer">
                    <input onChange={(e) => {
                        if (data) {
                            setData(data?.filter((el: quote) => String(el.name).toLowerCase().includes(e.target.value.toLowerCase())))
                        }
                        setValue(e.target.value)
                    }} value={changedValue} placeholder='Пары' id='changer' type="text" />
                    <div className='selector'>
                        {
                            myData?.map(el => (
                                <option onClick={() => {
                                    setQuote(el)
                                    setValue(el.name)
                                }} value="asdsad"><div className="icons">
                                        <img src={`/assets/CRP/${el.symbol}-logo.png`} alt={el.symbol} />
                                    </div> {el.name} </option>
                            ))
                        }
                    </div>
                </label>
            </div>
        </div>
    )
}

export default MyChangeSelect