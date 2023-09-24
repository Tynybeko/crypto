import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '@/styles/currency.scss'



export const getCurrency = async () => {
    const { data } = await axios.get('https://data.fx.kg/api/v1/central', {
        headers: {
            "Authorization": "Bearer pJtjy7UTcWh0aXRLRWuyDmBWqjRxdM5gjw8FIufqc53eec28"
        },
        params: {
            "signature": 'myCrypro_v2API'
        }
    })
    return data
}
const Currentcy = () => {
    const [{ usd, rub }, setCurrency] = useState<{ usd: number, rub: number }>({ usd: 0, rub: 0 })
    useEffect(() => {
        getCurrency().then(res => {
            setCurrency(res)
        })
        setInterval(() => {
            getCurrency().then(res => {
                setCurrency(res)
            })
        }, 15000)
    }, [])



    return (
        <div className='myCurrency'>
            <h3><img src="/assets/currency/swapCurrency.gif" alt="USD" />Курс валют:</h3>
            <div className="block">
                <img src="/assets/currency/usdCurrency.png" alt="USD" />
                <p>{usd ? usd : <img src='/assets/loading.gif' alt='loading...' />}</p>
            </div>
            <div className="block">
                <img src="/assets/currency/rubCurrency.png" alt="USD" />
                <p>{rub ? rub : <img src='/assets/loading.gif' alt='loading...' />}</p>
            </div>
            <p className='foot'>Курс может отличаться!</p>

        </div>
    )
}

export default Currentcy