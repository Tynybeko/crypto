import React from 'react'
import '@/styles/about.scss'
import FormTG from '@/components/FormTG'
import AboutBlock from '@/components/AboutBlock'


const page: React.FC = () => {
    return (
        <div className='about-page'>
            <div className="head">
            </div>
            <div className="inner">
                <div className="inner-about">
                    <h1>О нас</h1>
                    <div>
                        <p>Добро пожаловать в <b>Cryptonit</b> - вашего надежного партнера в мире криптовалютных операций! Мы стремимся предоставить вам наилучший опыт в обмене и торговле криптовалютами, предлагая высококачественные услуги, удобные условия и прозрачные правила.</p>
                        <p> Наши услуги разработаны с целью упростить ваш опыт торговли криптовалютой. Мы предлагаем быстрый и безопасный обмен, поддерживаем широкий спектр криптовалют и гарантируем вашу конфиденциальность. <b>Cryptonit</b> создан для того, чтобы сделать мир криптовалют доступным каждому. </p >
                        <p> Мы ценим каждого клиента и стремимся обеспечить высокий уровень сервиса. Наши правила направлены на обеспечение безопасности и прозрачности в каждой транзакции. <b>Cryptonit</b> - это ваш путь к уверенным и успешным криптовалютным операциям.</p>
                        <p>Выбирайте <b>Cryptonit</b> - выбирайте надежность и качество в мире криптовалютных услуг!</p>
                    </div>
                </div>
                <AboutBlock />
            </div>
        </div >
    )
}


export default page