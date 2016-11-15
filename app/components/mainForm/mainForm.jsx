import React, {Component} from 'react'
import {Control, Form, actions, getModel} from 'react-redux-form'
import {connect} from 'react-redux'
import {compose, setPropTypes, withHandlers} from 'recompose'
import {injectIntl, intlShape} from 'react-intl'
import CSSModules from 'react-css-modules'

import styles from './mainForm.module.css'
import BasicInput from '../fields/basicInput.jsx'
import TextArea from '../fields/textArea.jsx'
import {submitMainForm, unlockMainForm} from '../../actions/submitFormActions'
import locHelper from '../../helpers/locHelper'

const mapProps = {
    innerState: (props) => props.fieldValue
}

const formPath = 'formState.forms.$form'
const modelPath = 'formState.mainForm'

export const MainForm = setPropTypes({
    intl: intlShape.isRequired,
    handleUnlock: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
})(CSSModules(props => {
    const {
        formState,
        handleUnlock,
        handleSubmit,
        intl: {
            messages
        }
    } = props

    const getLoc = locHelper(messages, 'app.form.')

    return (
        <Form model={modelPath} className="container" onSubmit={handleSubmit}>
            <fieldset styleName="fields">
                <legend styleName="title">{getLoc('title')}</legend>
                <div styleName="row">
                    <div styleName="col">
                        <Control type="text" model=".pin" placeholder={getLoc('pin')} messages={messages}
                                 mapProps={mapProps}
                                 component={BasicInput}/>
                    </div>
                    <div styleName="col">
                        <button className="btn waves-effect waves-light" styleName="unlock-button" title={getLoc('unlock')} onClick={handleUnlock}
                                type="button">{getLoc('unlock')}</button>
                    </div>
                </div>
                <fieldset styleName="select-engine">
                    <legend>{getLoc('select_search_engine')}</legend>
                    <div styleName="row">

                        <div styleName="col">
                            <Control type="checkbox" model=".google" placeholder={getLoc('google')} messages={messages}
                                     mapProps={mapProps} component={BasicInput}/>
                        </div>
                        <div styleName="col">
                            <Control type="checkbox" model=".yandex" placeholder={getLoc('yandex')} messages={messages}
                                     mapProps={mapProps} component={BasicInput}/>
                        </div>
                    </div>
                </fieldset>
                <div styleName="row">
                    <div styleName="col">
                        <p>
                            <input name="wordInput" type="radio" id="wordInput"/>
                            <label htmlFor="wordInput">{getLoc('type_words')}</label>
                        </p>
                        <Control model=".manualWords" messages={messages} placeholder={getLoc('words_for_processing')}
                                 mapProps={mapProps}
                                 component={TextArea}/>
                    </div>
                    <div styleName="col">
                        <p>
                            <input name="wordInput" type="radio" id="fileInput"/>
                            <label htmlFor="wordInput">{getLoc('use_file')}</label>
                        </p>
                    </div>
                </div>
            </fieldset>
        </Form>
    )
}, styles))

export default injectIntl(connect((state, ownProps) => ({
    formState: getModel(state, formPath),
    intl: ownProps.intl
}), (dispatch) => ({
    handleUnlock: (pin) => dispatch(unlockMainForm(pin)),
    handleSubmit: data => dispatch(submitMainForm(data))
}))(MainForm))