'use client'
import React from 'react'
import '../styles/header.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { usePathname } from 'next/navigation'


const Header: React.FC = () => {
    const path = usePathname()
    const router = useRouter()

    return (
        <header>
            <nav>
                <h1>{path == '/' ? 'Панель приборов' : (path == '/calculator') ? 'Калькулятор' : (path == '/news') ? 'Новости' : ''}</h1>
            </nav>
            <div className="tools">
              
            </div>

        </header>
    )
}

export default Header


export const ControlledOpenSelect: React.FC = () => {
    const [current, setCurrent] = React.useState<string | number>('USD');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: SelectChangeEvent<typeof current>) => {
        setCurrent(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>

            <FormControl sx={{ m: 1, minWidth: 110, userSelect: 'none' }}>
                <InputLabel sx={{
                    left: -10,
                    zIndex: 4
                }} id="demo-controlled-open-select-label">Курс</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    sx={{
                        borderRadius: 20,
                    }}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={current}
                    label="Курс"
                    onChange={handleChange}
                >
                    <MenuItem value={"USD"}> <p className='curs'><img src="/assets/png/usd.png" alt="" /> USD</p></MenuItem>
                    <MenuItem value={"KGS"}>  <p className='curs'><img src="/assets/png/kgs.png" alt="" /> KGS</p></MenuItem>
                    <MenuItem value={"RUB"}> <p className='curs'><img src="/assets/png/rub.png" alt="" /> RUB</p></MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
