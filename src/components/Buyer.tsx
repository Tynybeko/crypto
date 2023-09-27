'use client'
import React, { useEffect, useState, SetStateAction } from 'react'
import type { quote } from './Calculator'
import { fetchCryptoBase } from './Calculator'
import MyChangeSelect from './MyChangeSelect'
import { getCurrency } from './Currentcy'
import type { currency } from './MyChangeCurrency'
import MyChangeCurrency from './MyChangeCurrency'

const Buyer = () => {
    const [myCurrency, setMyCurrency] = useState<currency>()
    const [CRP, setCRP] = useState<quote[] | undefined>(undefined)
    const [CUR, setCUR] = useState<currency[] | undefined>(undefined)
    const [setCurrency, setCurrentCurrency] = useState<quote>()
    const [loading, setLoad] = useState<{ load1: boolean, load2: boolean }>({ load1: true, load2: true })
    const [defaultValues, setValues] = useState<{ Input1: number, Input2: number, id: number }>({
        Input1: 0,
        Input2: 0,
        id: 1,
    })
    const [usdCur, setUsdCur] = useState<number>(0)


    useEffect(() => {
        fetchCryptoBase().then(res => {
            setCRP(res)
            setCurrentCurrency(res[0])
            setLoad(prev => ({ ...prev, load1: false }))
        })
        getCurrency().then(res => {
            const { usd, rub } = res
            const newArray = [
                {
                    id: 'usd1',
                    name: 'USD',
                    value: usd
                },
                {
                    id: 'rub2',
                    name: 'RUB',
                    value: rub
                },
                {
                    id: 'kg3',
                    name: 'KGS',
                    value: 1

                }
            ]
            setUsdCur(usd)
            setCUR(newArray)
            setMyCurrency(newArray[2])
            setLoad(prev => ({ ...prev, load2: false }))

        })
    }, [])

    const handleSetCurrency = (e: string, id: number) => {
        if (myCurrency && setCurrency) {
            if (id == 1) {
                let result = (((myCurrency.value / usdCur) / setCurrency?.quote?.USD?.price) * +e).toFixed(7)
                setValues(prev => ({ ...prev, [`Input2`]: +result }))
            } else {
                let result = ((setCurrency?.quote?.USD?.price / (myCurrency.value / usdCur)) * +e).toFixed(7)
                setValues(prev => ({ ...prev, [`Input1`]: +result }))
            }
        }
    }

    if (loading.load1 || loading.load2) {
        return (
            <div className="selects">
                <img className='loading-icon' src='assets/loading-animate.png' alt='Loading...' />
            </div>

        )
    }
    return (
        <div className="selects">
            <MyChangeCurrency useCallChange={handleSetCurrency} currentId={defaultValues.id} setInputValue={setValues} inputValue={defaultValues.Input1} id={1} setQuote={setMyCurrency as React.Dispatch<SetStateAction<currency>>} myQuote={myCurrency as currency} data={CUR as currency[]} />
            <MyChangeSelect useCallChange={handleSetCurrency} currentId={defaultValues.id} setInputValue={setValues} inputValue={defaultValues.Input2} id={2} setQuote={setCurrentCurrency as React.Dispatch<SetStateAction<quote>>} myQuote={setCurrency as quote} data={CRP as quote[]} />
        </div>
    )
}

export default Buyer