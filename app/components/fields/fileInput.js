import React, {Component} from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import {setPropTypes, pure} from 'recompose'

import getTruthyProps from '../../helpers/truthyProps'

const filePathStyle = {
    position: 'relative'
}

const labelStyle = {
    left: '10px'
}

export default pure(setPropTypes({
    innerState: React.PropTypes.object.isRequired
})((props) => {
    const errors = props.innerState.touched
        ? Array.from(getTruthyProps(props.innerState.errors || {})).map(val => props.messages[val[1]]).join(', ')
        : ''

    const focus = props.innerState.focus

    const textInputClassName = classNames('validate', {
        'invalid': errors.length,
        [props.textClassName]: props.textClassName
    })

    const labelClassName = classNames({
        'active': focus || props.innerState.value || errors.length
    })

    const inputProps = _.omit(props, ['placeholder', 'innerState', 'className', 'messages'])

    return (
        <div className="file-field input-field">
            <div className="file-field input-field">
                <div className="btn">
                    <span>{props.buttonText}</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper" style={filePathStyle}>
                    <input className="file-path validate" type="text" />
                    <label htmlFor={props.id} className={labelClassName} style={labelStyle} data-error={errors}>{props.placeholder}</label>
                </div>
            </div>
        </div>
    );
}))