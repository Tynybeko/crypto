'use client'
import React, { useState } from 'react'
import type { quote } from './Calculator'
import '@/styles/myChangerInput.scss'
import type { setSelectParams } from './Calculator'
import useDebounce from '@/hooks/useDebounce'

const MyChangeSelect: React.FC<setSelectParams> = ({ data, myQuote, setQuote, currentId, id, inputValue, setInputValue, useCallChange }) => {
    const [changedValue, setValue] = useState<string>('')
    const [myData, setData] = useState<quote[] | undefined>(data)
    const [isOpenSelect, setOpenSelect] = useState<boolean>(false)
    const [myState, setMyState] = useState<string | number>('0')
    const handleChange = (e: string) => {
        setInputValue(prev => ({ ...prev, [`Input${id}`]: e, id: id }))
        useCallChange(e, id)
    }
    const handleDebounce = useDebounce(handleChange, 300)
    return (
        <div className='myChangeInput'>
            <div className="inner">
                <div className='changer-input'>
                    <div className="content-input">
                        <div className="content-input-field">
                            {myQuote ? <img src={`/assets/CRP/${myQuote.symbol.toLowerCase()}-logo.png`} alt={myQuote.symbol} /> : ''}
                            <input onClick={() => {
                                setOpenSelect(prev => !prev)
                                setData(data)
                            }} onChange={(e) => {
                                if (data) {
                                    setData(data?.filter((el: quote) => String(el.name).toLowerCase().includes(e.target.value.toLowerCase())))
                                }
                                setValue(e.target.value)
                            }} value={changedValue} placeholder={myQuote.symbol} id='changer' type="text" />
                        </div>
                        <input value={currentId == id ? myState : inputValue} onChange={(e) => {
                            setMyState(e.target.value)
                            handleDebounce(e.target.value)
                        }} type="number" placeholder='Введите число' />
                    </div>
                    <div className={`selector ${isOpenSelect ? 'open-selector' : ''}`}>
                        {
                            myData?.map(el => (
                                <option onClick={() => {
                                    setQuote(el)
                                    setValue(el.symbol)
                                    setOpenSelect(false)
                                    setMyState('0')
                                    setInputValue(prev => ({ ...prev, Input1: 0, Input2: 0 }))
                                }} value="asdsad"><div className="icons">
                                        <img src={`/assets/CRP/${el.symbol.toLowerCase()}-logo.png`} alt={el.symbol} />
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