import React, {Component} from 'react'
import {pure} from 'recompose'

export default pure((props) => {
    return (
        <div className="input-field">
            <input id={props.id} type={props.type} name={props.name} checked={props.checked} readOnly={true}/>
            <label htmlFor={props.id} className={props.className} onClick={props.onChange}>{props.placeholder}</label>
        </div>
    )
})