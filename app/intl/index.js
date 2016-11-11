import { addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import ruLocaleData from 'react-intl/locale-data/ru'

import enMessages from './en.json'
import ruMessages from './ru.json'

addLocaleData(enLocaleData)
addLocaleData(ruLocaleData)

export const appLocales = [
  'en',
  'ru'
]

export default {
  'en': enMessages,
  'ru': ruMessages
}
