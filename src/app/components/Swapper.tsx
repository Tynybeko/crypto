'use client'
import React, { useEffect, useState, SetStateAction } from 'react'
import type { quote } from './Calculator'
import { fetchCryptoBase } from './Calculator'
import MyChangeSelect from './MyChangeSelect'

const Swapper = () => {
    const [myCurrency, setMyCurrency] = useState<quote>()
    const [CRP, setCRP] = useState<quote[] | undefined>(undefined)
    const [setCurrency, setCurrentCurrency] = useState<quote>()
    const [loading, setLoad] = useState<boolean>(true)
    const [defaultValues, setValues] = useState<{ Input1: number, Input2: number, id: number }>({
        Input1: 0,
        Input2: 0,
        id: 1,
    })

    useEffect(() => {
        fetchCryptoBase().then(res => {
            setCRP(res)
            setMyCurrency(res[0])
            setCurrentCurrency(res[1])
            setLoad(false)
        })
    }, [])

    const handleSetCurrency = (e: string, id: number) => {
        if (myCurrency && setCurrency) {
            if (id == 1) {
                let result = ((myCurrency?.quote?.USD?.price / setCurrency?.quote?.USD?.price) * +e).toFixed(7)
                setValues(prev => ({ ...prev, [`Input2`]: +result }))
            } else {
                let result = ((setCurrency?.quote?.USD?.price / myCurrency?.quote?.USD?.price) * +e).toFixed(7)
                setValues(prev => ({ ...prev, [`Input1`]: +result }))
            }
        }
    }

    if (loading) {
        return (
            <div className="selects">
                <img className='loading-icon' src='assets/loading-animate.png' alt='Loading...' />
            </div>

        )
    }
    return (
        <div className="selects">
            <MyChangeSelect useCallChange={handleSetCurrency} currentId={defaultValues.id} setInputValue={setValues} inputValue={defaultValues.Input1} id={1} setQuote={setMyCurrency as React.Dispatch<SetStateAction<quote>>} myQuote={myCurrency as quote} data={CRP as quote[]} />
            <MyChangeSelect useCallChange={handleSetCurrency} currentId={defaultValues.id} setInputValue={setValues} inputValue={defaultValues.Input2} id={2} setQuote={setCurrentCurrency as React.Dispatch<SetStateAction<quote>>} myQuote={setCurrency as quote} data={CRP as quote[]} />
        </div>
    )
}

export default Swapper