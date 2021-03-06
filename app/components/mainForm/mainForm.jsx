import React, {Component} from 'react'
import {Control, Form, actions, getModel} from 'react-redux-form'
import {TextInput, TextArea, CheckedInput, FileInput, mapProps} from 'react-redux-form-materialize'
import {connect} from 'react-redux'
import {compose, setPropTypes, withHandlers} from 'recompose'
import {injectIntl, intlShape} from 'react-intl'
import CSSModules from 'react-css-modules'

import styles from './mainForm.module.css'
import {submitMainForm, unlockMainForm} from '../../actions/submitFormActions'
import locHelper from '../../helpers/locHelper'

const formPath = 'formState.forms.$form'
const modelPath = 'formState.mainForm'

export const MainForm = setPropTypes({
    intl: intlShape.isRequired,
    handleUnlock: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
})(CSSModules(props => {
    const {
        modelState,
        handleUnlock,
        handleSubmit,
        intl: {
            messages
        }
    } = props

    const getLoc = locHelper(messages, 'app.form.')
    const wordInputVal = modelState.wordInput

    return (
        <Form model={modelPath} className="container" onSubmit={handleSubmit}>
            <fieldset styleName="fields">
                <legend styleName="title">{getLoc('title')}</legend>
                <div styleName="row">
                    <div styleName="col">
                        <Control.text type="text" model=".pin" placeholder={getLoc('pin')} messages={messages}
                                 mapProps={mapProps}
                                 component={TextInput}/>
                    </div>
                    <div styleName="col">
                        <button className="btn waves-effect waves-light" styleName="unlock-button"
                                title={getLoc('unlock')} onClick={handleUnlock}
                                type="button">{getLoc('unlock')}</button>
                    </div>
                </div>
                <fieldset styleName="select-engine">
                    <legend>{getLoc('select_search_engine')}</legend>
                    <div styleName="row">
                        <div styleName="col">
                            <Control.checkbox type="checkbox" model=".google" placeholder={getLoc('google')} messages={messages}
                                     component={CheckedInput}/>
                        </div>approvedfi
                        <div styleName="col">
                            <Control.checkbox type="checkbox" model=".yandex" placeholder={getLoc('yandex')} messages={messages}
                                     component={CheckedInput}/>
                        </div>
                    </div>
                </fieldset>
                <div styleName="row">
                    <div styleName="col">
                        <Control.radio type="radio" name="wordInput" model=".wordInput" placeholder={getLoc('type_words')} value="manual" component={CheckedInput}/>
                    </div>
                    <div styleName="col">
                        <Control.radio type="radio" name="wordInput" model=".wordInput" placeholder={getLoc('use_file')} value="file" component={CheckedInput}/>
                    </div>
                </div>
                <div styleName="input-row">
                    <div styleName="col">
                        <Control.text model=".manualWords" messages={messages} placeholder={getLoc('words_for_processing')}
                                      mapProps={mapProps} disabled={wordInputVal !== 'manual'}
                                      component={TextArea}/>
                    </div>
                    <div styleName="file-col">
                        <Control.file model=".fileWords" messages={messages} placeholder={getLoc('input_file')}
                                      mapProps={mapProps} buttonText={getLoc('file')} disabled={wordInputVal !== 'file'}
                                      component={FileInput}/>
                    </div>
                </div>
                <div styleName="last-row">
                    <button className="btn-large waves-effect waves-light" type="submit"
                            name="startProcessing">{getLoc('start_processing')}
                    </button>
                </div>
            </fieldset>
        </Form>
    )
}, styles))

export default injectIntl(connect((state, ownProps) => ({
    formState: getModel(state, formPath),
    modelState: getModel(state, modelPath),
    intl: ownProps.intl
}), (dispatch) => ({
    handleUnlock: (pin) => dispatch(unlockMainForm(pin)),
    handleSubmit: data => dispatch(submitMainForm(data))
}))(MainForm))