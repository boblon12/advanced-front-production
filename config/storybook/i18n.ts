/* eslint-disable @typescript-eslint/ban-ts-comment */
import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const ns = ['about', 'main', 'translation'];
const supportedLngs = ['en', 'ru'];
const resources = ns.reduce((acc, n) => {
    supportedLngs.forEach((lng) => {
    //@ts-ignore
    if (!acc[lng]) acc[lng] = {};
        //@ts-ignore
        acc[lng] = {
            //@ts-ignore
            ...acc[lng],
            [n]: require(`../../public/locales/${lng}/${n}.json`),
        };
    });
    return acc;
}, {});

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        // debug: true,
        lng: 'en',
        fallbackLng: 'en',
        defaultNS: 'translation',
        ns,
        interpolation: {escapeValue: false},
        react: {useSuspense: false},
        supportedLngs,
        resources,
    });

export default i18n;