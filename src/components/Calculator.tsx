'use client'
import React, { SetStateAction, useEffect, useState } from 'react'
import axios from 'axios'
import MyChangeSelect from './MyChangeSelect'
import 'dotenv'
import TradeView from './TradeView'

export async function fetchCryptoBase() {
  try {
    const { data } = await axios.get('https://test-ss-lrp7.onrender.com/cryptobase')
    return data
  } catch (e) {
    return []
  }
}




export interface quote {
  id: number,
  name: string,
  symbol: string,
  changed: false,
  quote: {
    usd: {
      price: number
    }
  }
}


const Calculator = () => {
  const [myCurrency, setMyCurrency] = useState<quote>()
  const [CRP, setCRP] = useState<quote[] | undefined>(undefined)
  const [setCurrency, setCurrentCurrency] = useState<quote>()
  const [loading, setLoad] = useState<boolean>(true)

  useEffect(() => {
    fetchCryptoBase().then(res => {
      setCRP(res)
      setMyCurrency(res[0])
      setCurrentCurrency(res[1])
      setLoad(false)
    })
  }, [])
  return (
    <div className='calculator-block'>
      <div className="text">
      </div>
      <form action="">
        {loading ? <img src='assets/loading.gif' alt='Loading...' /> :
          <div className="selects">
            <MyChangeSelect setQuote={setMyCurrency as React.Dispatch<SetStateAction<quote>>} myQuote={myCurrency as quote} data={CRP} />
            <img className='swapper' src={`/assets/swapperArrow.png`} alt="swap" />
            <MyChangeSelect setQuote={setCurrentCurrency as React.Dispatch<SetStateAction<quote>>} myQuote={setCurrency as quote} data={CRP} />
          </div>
        }

      </form>
      <TradeView />
    </div>
  )
}

export default Calculator