import React, {Component} from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import {setPropTypes, pure, withHandlers, compose} from 'recompose'

const enhance = compose(
    setPropTypes({
        innerState: React.PropTypes.object.isRequired
    }),
    withHandlers({
        onFileChange: (props) => {
            return (event) => {
                return props.onChange(event)
            }
        },
        onFileClick:  (props) => {
            return (event) => {
                return props.onChange(null)
            }
        },
    })
)

export default pure(enhance((props) => {
    const inputValue =  (props.innerState.value && props.innerState.value.length)
        ? props.innerState.value.reduce((prevVal, curVal) => prevVal.concat(curVal.name, ', '), [])
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

    const inputProps = _.omit(props, ['placeholder', 'innerState', 'textClassName', 'messages', 'buttonText', 'onChange', 'onFileChange', 'onFileClick'])

    return (
        <div className="file-field input-field">
            <div className={btnClassName}>
                <span>{props.buttonText}</span>
                <input {...inputProps} onChange={props.onFileChange} onClick={props.onFileClick} type="file"/>
            </div>
            <div className="file-path-wrapper">
                <input disabled={props.disabled} value={inputValue.join('')} className={textInputClassName} type="text" placeholder={props.placeholder}/>
            </div>
        </div>
    );
}))