import React from 'react'
import {Slider} from '@mui/material'

type PropsType = {
    id: string
    value:  number | number[]
    onChange: (event: Event, value: number | number[]) => void
}

const SuperRange: React.FC<PropsType> = (props) => {

    return (
        <Slider

            sx={{ // стили для слайдера // пишет студент
width:'147px'
            }}
            valueLabelDisplay="auto"
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
