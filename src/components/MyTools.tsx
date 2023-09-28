'use client'

import React from 'react'
import '@/styles/mytools.scss'

const MyTools: React.FC = () => {

    const tools = [
        { id: '1ta', icon: '/assets/tools/security-Icon.png', img: '/assets/tools/security.webp', title: 'Безопасность', desc: 'Мы обеспечиваем высший уровень безопасности для ваших финансов и данных. Все транзакции защищены передовыми шифровальными технологиями, и мы активно следим за обеспечением конфиденциальности ваших средств и информации.' },
        { id: '2ta', icon: '/assets/tools/global-Icon.png', img: '/assets/tools/global.webp', title: 'Глобальное покрытие', desc: 'Наши услуги доступны в любой точке мира. Вы можете отправлять и получать деньги, обменивать валюту и осуществлять финансовые операции в любой стране, где мы представлены.' },
        { id: '3ta', icon: '/assets/tools/speed-Icon.png', img: '/assets/tools/speed.webp', title: 'Низкие комиссии и скорость транзакций', desc: 'Криптовалютные транзакции обычно имеют низкие комиссии по сравнению с банковскими операциями и могут выполняться значительно быстрее, особенно при использовании сетей с высокой пропускной способностью, таких как Ethereum.' },
        { id: '4ta', icon: '/assets/tools/otchet-Icon.png', img: '/assets/tools/otchet.webp', title: 'Прозрачность и отчетность', desc: 'Мы предоставляем детальные отчеты о ваших транзакциях и счетах. Вы всегда будете в курсе движения ваших средств и сможете легко отслеживать финансовую историю.' },
        { id: '5ta', icon: '/assets/tools/swap-Icon.png', img: '/assets/tools/swap.webp', title: 'Выгодные курсы обмена', desc: 'Мы предлагаем конкурентоспособные курсы обмена валюты, что позволяет вам экономить на комиссиях и получать максимальную выгоду при конвертации средств.' },
        { id: '6ta', icon: '/assets/tools/support-Icon.png', img: '/assets/tools/support.webp', title: 'Профессиональная поддержка', desc: ' Наша команда профессиональных консультантов всегда готова помочь вам в решении любых вопросов и в случае возникновения проблем. Мы ценим каждого клиента и стремимся обеспечить наивысший уровень обслуживания.' },
    ]
    return (
        <div className='my_tools'>
            <h1>Наши преимущества</h1>
            <div className="inner">
                {
                    tools.map(el => (
                        <div key={el.id} className="block">
                            <h3><img src={`${el.icon}`} alt="Icon" /> {el.title}</h3>
                            <div>
                                <img src={el.img} alt="Photo" />
                                <p>{el.desc}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default MyTools