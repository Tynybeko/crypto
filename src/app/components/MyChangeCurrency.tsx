'use client'
import React, { useState, SetStateAction } from 'react'
import '@/styles/myChangerInput.scss'
import useDebounce from '@/hooks/useDebounce'

export interface currency {
    id: string,
    name: string,
    value: number
}

export interface SetCurrencyParams {
    setQuote: React.Dispatch<SetStateAction<currency>>,
    myQuote: currency,
    data: currency[],
    inputValue: number,
    id: number,
    useCallChange: any,
    currentId: number,
    setInputValue: React.Dispatch<SetStateAction<{ Input1: number, Input2: number, id: number }>>
}


const MyChangeSelect: React.FC<SetCurrencyParams> = ({ data, myQuote, setQuote, currentId, id, inputValue, setInputValue, useCallChange }) => {
    const [changedValue, setValue] = useState<string>('')
    const [myData, setData] = useState<currency[] | undefined>(data)
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
                    <div className={`content-input ${!isOpenSelect ? 'none-actived' : ''}`}>
                        <div className="content-input-field">
                            {myQuote ? <img src={`/assets/${myQuote.name.toLowerCase()}.${myQuote.name != 'USD' ? 'png' : 'webp'}`} alt={myQuote.name} /> : ''}
                            <input onClick={() => {
                                setOpenSelect(prev => !prev)
                                setData(data)
                            }} onChange={(e) => {
                                if (data) {
                                    setData(data?.filter((el: currency) => String(el.name).toLowerCase().includes(e.target.value.toLowerCase())))
                                }
                                setValue(e.target.value)
                            }} value={changedValue} placeholder={myQuote.name} id='changer' type="text" />
                        </div>
                        <input value={currentId == id ? myState : inputValue} onChange={(e) => {
                            setMyState(e.target.value)
                            handleDebounce(e.target.value)
                        }} type="number" placeholder='Введите число' />
                    </div>
                    <div className={`selector ${isOpenSelect ? 'open-selector' : ''}`}>
                        {
                            myData?.map(el => (
                                <div key={el.id} className='option' onClick={() => {
                                    setQuote(el)
                                    setValue(el.name)
                                    setOpenSelect(false)
                                    setMyState('0')
                                    setInputValue(prev => ({ ...prev, Input1: 0, Input2: 0 }))
                                }} ><div className="icons">
                                        <img className={`${el.name == 'KGS' ? 'icon-kgs' : ''}`} src={`/assets/${el.name.toLowerCase()}.${el.name != 'USD' ? 'png' : 'webp'}`} alt={el.name} />
                                    </div> {el.name} </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyChangeSelect