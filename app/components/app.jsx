import React from 'react'
import Helmet from 'react-helmet'
import MainForm from './mainForm/mainForm'

const bootstrap4Metas = [
    {charset: 'utf-8'},
    {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
    },
    {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge'
    }
]

export default (() => (
    <div>
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            title="Text page"
            meta={[
                   ...bootstrap4Metas
                ]}
        >
        </Helmet>
        <MainForm/>
    </div>
))