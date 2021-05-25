import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { MOBILE_SIZE, DESKTOP_SIZE } from '../utils/constants';

export default function useMedia() {    
    
    const [size, setSize] = useState('');

    const matchSize = ()=>{
        let portrait= window.matchMedia("(orientation: portrait)");
        let mobileSize= window.matchMedia("(max-width: 767px)");
        let desktopSize= window.matchMedia("(min-width: 768px)");

        if(mobileSize.matches){
            setSize(MOBILE_SIZE);
        }
        if(desktopSize.matches){
            setSize(DESKTOP_SIZE);
        }
    }

    useEffect(() => {
        matchSize();
        window.onresize = () =>  {
            matchSize();
        }    
        }, [size]);

    return size;
}