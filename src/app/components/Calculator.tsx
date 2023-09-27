'use client'
import React, { SetStateAction, useState } from 'react'
import axios from 'axios'
import FormTG from './FormTG'
import Swapper from './Swapper'
import Buyer from './Buyer'


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
    USD: {
      price: number
    }
  }
}

export interface setSelectParams {
  setQuote: React.Dispatch<SetStateAction<quote>>,
  myQuote: quote,
  data: quote[],
  inputValue: number,
  id: number,
  useCallChange: any,
  currentId: number,
  setInputValue: React.Dispatch<SetStateAction<{ Input1: number, Input2: number, id: number }>>
}






const Calculator = () => {
  const [isSwap, setSwap] = useState<boolean>(true)


  return (
    <div className='calculator-block'>
      <div className='calc-form'>
        <div className="text">
          <button onClick={() => setSwap(true)} className={`${isSwap ? 'btn-active' : ''}`}>Обмен</button>
          <button onClick={() => setSwap(false)} className={`${!isSwap ? 'btn-active' : ''}`}>Купля/Продажа</button>
        </div>
        {
          isSwap ? <Swapper /> : <Buyer />
        }
        <div className="foot-text">
          <ul>
            <li>Пожалуйста, имейте в виду, что цены и графики, отображаемые на этом сайте, могут отличаться от фактических рыночных данных.</li>
            <li>Рынок криптовалют крайне волатилен, и цены могут изменяться очень быстро.</li>
            <li>Информация, представленная на этом сайте, может содержать задержки и не всегда соответствовать текущему положению на рынке.</li>
            <li>Мы рекомендуем использовать этот сайт только в информационных целях и не принимать решения о покупке или продаже криптовалюты исключительно на основе данных, представленных здесь.</li>
            <li>Для получения наиболее точной информации о текущих ценах и графиках рынка, пожалуйста, обращайтесь к надежным источникам или биржам.</li>
            <li>Мы не несем ответственности за возможные потери, связанные с торговлей на основе данных, представленных на этом сайте.</li>
            <li>Торговля криптовалютой представляет собой рискованное мероприятие, и вы должны быть осторожными и оценивать свои риски перед принятием решения.</li>
            <li>Если у вас есть вопросы или сомнения, всегда лучше проконсультироваться с финансовым консультантом или экспертом в области инвестиций.</li>
            <li>Запомните, что прошлое движение цен не всегда предсказывает будущее, и рынок криптовалют может быть подвержен влиянию различных факторов.</li>
            <li>Мы стремимся предоставить максимально точную информацию, однако нельзя гарантировать ее абсолютную точность, и данные могут изменяться.</li>
            <li>Будьте внимательны и осторожны при принятии решений о торговле и инвестировании в криптовалюту.</li>
          </ul>
        </div>
      </div>
      <FormTG />
    </div>
  )
}

export default Calculator