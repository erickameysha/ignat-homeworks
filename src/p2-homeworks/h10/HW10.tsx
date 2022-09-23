import React, {useEffect} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import loadingIMG from './../h10/bll/b4d657e7ef262b88eb5f7ac021edda87.gif'
function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading)
const dispatch = useDispatch()
    const setLoading = (newLoad: boolean) => {
        dispatch(loadingAC(newLoad))
        // setTimeout
        console.log(loading)
        console.log('loading...')
        setTimeout(() => {
            dispatch(loadingAC(true))
        }, 2000);
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={loadingIMG} alt=""/></div>
                ) : (
                    <div>
                        <SuperButton onClick={()=> setLoading(loading)}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
