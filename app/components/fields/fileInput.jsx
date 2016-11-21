import React, {Component} from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import {setPropTypes, pure} from 'recompose'

export default pure(setPropTypes({
    innerState: React.PropTypes.object.isRequired
})((props) => {
    const inputValue =  (props.innerState.value && props.innerState.value.length)
        ? props.innerState.value.reduce((prevVal, curVal) => prevVal.concat(curVal, ', '), [])
        : []

    if(inputValue.length) {
        inputValue.pop()
    }

    const btnClassName = classNames('btn', {
        'disabled': props.disabled
    })

    const textInputClassName = classNames('file-path', 'validate', {
        [props.textClassName]: props.textClassName
    })

    const inputProps = _.omit(props, ['placeholder', 'innerState', 'className', 'messages', 'buttonText'])

    return (
        <div className="file-field input-field">
            <div className={btnClassName}>
                <span>{props.buttonText}</span>
                <input {...inputProps} type="file"/>
            </div>
            <div className="file-path-wrapper">
                <input disabled={props.disabled} className={textInputClassName} type="text" placeholder={props.placeholder}/>
            </div>
        </div>
    );
}))