import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetectore from 'i18next-browser-languagedetector';

const config = {
    fallbackLng: 'en',
    load: 'languageOnly',
    ns: ['common'],
    defaultNS: 'common',
    debug: process.env.NODE_END !== 'production',
    saveMissing: true,
    interpolation: {
        excapevalue: false,
        formatSeparator: ',',
        format: (value, format, lng) => {
            if (format === 'uppercase') return value.toUpperCase()
            return value
        }
    }
}

const i18nInstance = i18next;

if (process.browser) {
    i18nInstance.use(XHR).use(LanguageDetectore)
}

if (!i18nInstance.isInitialized) i18nInstance.init(config)

export const getInitialProps = (req, namespaces) => {
    if (!namespaces) namespaces = i18nInstance.config.defaultNS
    if (typeof namespaces === 'string') namespaces = [namespaces]

    req.i18n.toJSON = () => null

    const initialI18nStore = {}
    req.i18n.languages.forEach((l) => {
        initialI18nStore[l] = {}
        namespaces.forEach((ns) => {
            initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {}
        })
    })

    return {
        i18n: req.i18n,
        initialI18nStore,
        initialLanguage: req.i18n.language
    }
}

export const I18n = i18next.defaultNS;
export const i18nInstance;


// module.exports = {
//     getInitialProps,
//     i18nInstance,
//     I18n: i18next.default
// }
