import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routess";

import './HW5.css'
function Header() {
    return (
        <div>
            <div className={'dropdown'}>
                <button className={'mainmenubtn'}>Главное меню</button>
                <div className={'dropdownChild'}>
                  <a> <NavLink to={PATH.PRE_JUNIOR} >Pre-Junior</NavLink></a>
                   <a>  <NavLink to={PATH.JUNIOR} >Junior</NavLink></a>
                    <a >  <NavLink  to={PATH.JUNIOR_PLUS} >Junior+++</NavLink></a>
                </div>
            </div>


        </div>
    )
}

export default Header
