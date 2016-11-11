import React from 'react'
import {connect} from 'react-redux'
import {IntlProvider} from 'react-intl'

import App from '../components/app.jsx'
import locData from '../intl'

export default connect((state, ownProps) => ({
    locale: ownProps.params && ownProps.params.locale
}))(({locale}) => {
    const myLocale = locale ? locale : 'en'
    const messages = locData[myLocale]

    return (
        <IntlProvider locale={myLocale} messages={messages}>
            <App />
        </IntlProvider>
    )
})
