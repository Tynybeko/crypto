import React from 'react'
import { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import '@/styles/calculatorPage.scss'
import TradeView from '@/components/TradeView';



export const metadata: Metadata = {
    title: 'Калькулятор Cryptonit.kg: Посчитай легко и быстро',
    description: 'Обменивайте, покупайте и продавайте свою крипту по стабильным и выгодным ценам!',
}


const page: React.FC = () => {
    return (
        <div className='calculator-page'>
            <div className="inner">
                <Calculator />
                <TradeView />
            </div>
        </div>
    )
}

export default page