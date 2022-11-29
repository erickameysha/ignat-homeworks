import React, {useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState, saveState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {Slider} from "@mui/material";
import {isNumber} from "util";

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const change = (event: Event, value: number | number[] ) => {
        console.log(value)
        if (Array.isArray(value) && value[0] !== value1) {
            saveState<number>('hw11-value1', value[0]);
            setValue1(value[0]);
        }
        if (Array.isArray(value) && value[1] !== value2) {
            saveState<number>('hw11-value2', value[1]);
            setValue2(value[1]);
        }
        else if (!Array.isArray(value) && value !== value1){
            saveState<number>('hw11-value1', value);
            setValue1(value)
        }

    }


    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>


                        <SuperRange
                            id={'hw11-single-slider'}
                            value={value1}
                            onChange={change}
                            // defaultValue={value1}
                            // сделать так чтоб value1 изменялось // пишет студент

                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            // сделать так чтоб value1/2 изменялось // пишет студент
                            value={[value1, value2]}
                            onChange={change}
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
