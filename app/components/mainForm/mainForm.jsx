import React, {Component} from 'react'
import {Control, Form, actions, getModel} from 'react-redux-form'
import {connect} from 'react-redux'
import {compose, setPropTypes, withHandlers} from 'recompose'
import CSSModules from 'react-css-modules'

import styles from './mainForm.module.css'
import BasicInput from '../fields/basicInput.jsx'
import TextArea from '../fields/textArea.jsx'
import {submitMainForm} from '../../actions/submitFormActions'

const mapProps = {
    innerState: (props) => props.fieldValue
}

const formPath = 'formState.forms.$form'
const modelPath = 'formState.mainForm'

export const MainForm = setPropTypes({
    handleSubmit: React.PropTypes.func.isRequired
})(CSSModules(({handleSubmit}) => {
    return (
        <Form model={modelPath} className="container" onSubmit={handleSubmit}>
            <fieldset styleName="fields">
                <legend styleName="title"></legend>
                <div class="row">
                    <Control type="text" model=".pin" placeholder="Pin" messages={messages}
                             mapProps={mapProps}
                             component={BasicInput}/>
                </div>
            </fieldset>
        </Form>
    )
}, styles))

export default connect((state) => ({
  formState:  getModel(state, formPath)  
}), (dispatch) => ({
    handleSubmit: data => dispatch(submitMainForm(data))
}))