'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MyChangeSelect from './MyChangeSelect'
import 'dotenv'

export async function fetchCryptoBase() {
  try {
    const { data } = await axios.get('https://test-ss-lrp7.onrender.com/cryptobase')
    return data
  } catch (e) {
    return []
  }
}

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
  changed: false,
  quote: {
    usd: {
      price: number
    }
  }
}


const Calculator = () => {
  const [myCurrency, setMyCurrency] = useState<CRP | undefined>()
  const [CRP, setCRP] = useState<quote[] | undefined>(undefined)
  const [{ currentCurrency, changeCurrency }, setCurrentCurrency] = useState<currency>({ currentCurrency: 0, changeCurrency: 0 })
  const [loading, setLoad] = useState<boolean>(false)

  useEffect(() => {
    setLoad(true)
    fetchCryptoBase().then(res => {
      setCRP(res)
      setLoad(false)
    })
  }, [])
  return (
    <div className='calculator-block'>
      <div className="text">
      </div>
      <form action="">
        <div className="selects">
          <MyChangeSelect data={CRP} />
          <MyChangeSelect data={CRP} />
        </div>
      </form>

    </div>
  )
}

export default Calculator