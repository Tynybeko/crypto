'use client'
import React, { SetStateAction, useEffect, useState } from 'react'
import useSendMessage from '@/hooks/useSendMessage'
import Modal from './Modal'
import '@/styles/formTG.scss'

const FormTG = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const [submiting, setSubmit] = useState<boolean>(false)
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
            setFormData({ name: '', phone: '', option: 'Обмен' })
        })
    }

    return (
        <form id='formTG' onSubmit={handleSumbit} action="post">
            {
                isOpen ? <Modal onClose={setOpen} ><div>
                    <h1>Ваша заявка принята! Скоро с вами свяжемся!<svg className="feather feather-check-circle" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></h1>
                </div></Modal> : ''
            }
            <h1>Оставьте свои данные!</h1>
            <label htmlFor="name">
                <input onChange={handleChange} value={formData?.name} required type="text" name='name' id='name' placeholder='Имя' />
                <p>ФИО</p>
            </label>
            <label htmlFor="phone">
                <input onChange={handleChange} pattern='^\+996\s?\d{9}$' value={formData?.phone} required type="tel" name='phone' id='phone' placeholder='Телефон' />
                <p>Номер телефона</p>
            </label>
            <label htmlFor="option">
                <select value={formData.option} onChange={handleChange} required name="option" id="option">
                    <option  value="Обмен">Обмен</option>
                    <option value="Купля\Продажа">Купля или Продажа</option>
                    <option value="Консультация">Консультация</option>
                </select>
                <p>Вид запроса</p>
            </label>
            <label htmlFor="btn">
                <input disabled={submiting} required type="submit" value={'Отправить'} />
            </label>
        </form>
    )
}

export default FormTG