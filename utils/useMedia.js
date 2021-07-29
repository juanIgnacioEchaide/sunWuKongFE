import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { size } from '../utils/constants';

export default function useMedia() {    
    
    const [viewportSize, setViewportSize] = useState('');

    const matchSize = ()=>{
        let portrait= window.matchMedia("(orientation: portrait)");
        let mobileSize= window.matchMedia("(max-width: 767px)");
        let desktopSize= window.matchMedia("(min-width: 768px)");

        if(mobileSize.matches){
            setViewportSize(size.MOBILE_SIZE);
        }
        if(desktopSize.matches){
            setViewportSize(size.DESKTOP_SIZE);
        }
    }

    useEffect(() => {
        matchSize();
        window.onresize = () =>  {
            matchSize();
        }    
        }, [viewportSize]);

    return viewportSize;
}