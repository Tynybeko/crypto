'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MyChangeSelect from './MyChangeSelect'
import 'dotenv'

export interface CRP {
  currentCRP: string,
  changeCRP: string,
}

export interface currency {
  currentCurrency: number,
  changeCurrency: number,
}
export interface quote {
  id: number,
  name: string,
  symbol: string,
  quote: {
    usd: {
      price: number
    }
  }
}
export async function fetchCurrencyCRP() {
  console.log(process.env.COIN_API);
  const { data } = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000', {
    headers: {
      "X-CMC_PRO_API_KEY": process.env.COIN_API,
      "Content-Type": 'application/json'
    }
  })
  console.log(data.data);
  return data.data
}
const Calculator = () => {
  const [myCurrency, setMyCurrency] = useState<CRP | undefined>()
  const [CRP, setCRP] = useState<quote[] | undefined>(undefined)
  const [{ currentCurrency, changeCurrency }, setCurrentCurrency] = useState<currency>({ currentCurrency: 0, changeCurrency: 0 })
  const [loading, setLoad] = useState<boolean>(false)

  useEffect(() => {
    setLoad(true)
    fetchCurrencyCRP().then(res => {
      setCRP(res)
    })
  }, [])
  return (
    <div className='calculator-block'>
      <div className="text">
      </div>
      <form action="">
        <div className="selects">
          <MyChangeSelect data={CRP} />
          <label htmlFor="current-CRP">
            <select name="current-CRP" id="current-CRP"></select>
            <p></p>
          </label>
          <label htmlFor="change-CRP">
            <select name="change-CRP" id="change-CRP"></select>
            <p></p>
          </label>
        </div>
        <div className="inputs">
          <label htmlFor="current-Currency">
            <input id='current-Currency' name='current-Currency' type="text" />
            <p></p>
          </label>
          <label htmlFor="change-Currency">
            <input id='change-Currency' name='change-Currency' type="text" />
            <p></p>
          </label>
        </div>
      </form>

    </div>
  )
}

export default Calculator