'use client'
import React, { useState } from 'react'
import '@/styles/banner.scss'
import { EffectFade, Autoplay, A11y, Scrollbar, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import useSendMessage from '@/hooks/useSendMessage';
import Modal from './Modal';
import Link from 'next/link';





const Banner: React.FC = () => {

    const [isOpen, setOpen] = useState<boolean>(false)
    const [submiting, setSubmit] = useState<boolean>(false)
    const bannerInner = [
        {
            id: '1ea',
            title: "Нужна помощь с обменом криптовалюты?",
            desc: "Наши эксперты всегда готовы помочь вам с любыми вопросами и сложностями, связанными с обменом криптовалюты. Свяжитесь с нами прямо сейчас для быстрой поддержки.",
            img: '/assets/wepb/bitBack.webp'
        },
        {
            id: '2eb',
            title: "Быстрый и Безопасный Обмен Криптовалюты",
            desc: "У нас вы найдете наилучшие курсы обмена криптовалюты. Мы гарантируем быстрые и безопасные транзакции, чтобы каждый обмен был комфортным и надежным.",
            img: '/assets/wepb/bitBack2.webp'

        },
        {
            id: '3ec',
            title: "Купля и Продажа Криптовалюты по Лучшим Курсам",
            desc: "Хотите купить или продать криптовалюту? У нас всегда актуальные курсы и выгодные предложения. Сделайте свои сделки быстро и выгодно с нашим криптообменником.",
            img: '/assets/wepb/bitBack3.webp'
        },
    ]
    const [formData, setFormData] = useState<{ name: string, phone: string, option: string }>({
        name: '',
        phone: '',
        option: 'Обмен'
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let key = e.target?.name
        setFormData(prev => ({ ...prev, [key]: e.target.value }))
    }

    const handleSumbit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmit(true)
        const data = new FormData(e.target)
        useSendMessage(data).then(res => {
            setSubmit(false)
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 2000)
            setFormData({ name: '', phone: '', option: '' })
        })
    }
    return (
        <div className='banner'>
            {
                isOpen ? <Modal onClose={setOpen} ><div>
                    <h1>Ваша заявка принята! Скоро с вами свяжемся!<svg className="feather feather-check-circle" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></h1>
                </div></Modal> : ''
            }
            <Swiper
                modules={[EffectFade, Scrollbar, Navigation, Autoplay]}
                effect={'fade'}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true
                }}
                scrollbar={{ draggable: true, }}
            >
                {
                    bannerInner.map(el => (
                        <SwiperSlide>
                            <div key={el.id} style={{ backgroundImage: `url(${el.img})`, width: '100%' }} className="inner">
                                <div className="text">
                                    <h1>{el.title}</h1>
                                    <p>{el.desc}</p>
                                </div>
                                <form onSubmit={handleSumbit} action="post">
                                    <h1>Оставьте свои данные!</h1>
                                    <label htmlFor="name">
                                        <input onChange={handleChange} value={formData?.name} required type="text" name='name' id='name' placeholder='Имя' />
                                        <p>Ваша имя</p>
                                    </label>
                                    <label htmlFor="phone">
                                        <input onChange={handleChange} pattern='^\+996\s?\d{9}$' value={formData?.phone} required type="tel" name='phone' id='phone' placeholder='Телефон' />
                                        <p>Ваш номер телефона</p>
                                    </label>
                                    <label htmlFor="option">
                                        <select value={formData.option} onChange={handleChange} required name="option" id="option">
                                            <option selected value="Обмен">Обмен</option>
                                            <option value="Купля\Продажа">Купля или Продажа</option>
                                            <option value="Консультация">Консультация</option>
                                        </select>
                                        <p>Вид запроса</p>
                                    </label>
                                    <label htmlFor="btn">
                                        <input disabled={submiting} required type="submit" value={'Отправить'} />
                                    </label>
                                </form>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}

export default Banner