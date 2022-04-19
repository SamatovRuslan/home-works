import './Button.css'
import React from 'react';

export const Button=(props)=>{
    let title = props.title
    return (
        <button className='btn'>{title}</button>
    )
}