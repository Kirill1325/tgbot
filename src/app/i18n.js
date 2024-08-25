import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";
import { lang } from './main'

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        lng: { lang },
        fallbackLng: { lang },
        resources: {
            ru: {
                translation: {
                    Aries: 'Овен',
                    Taurus: 'Телец',
                    Gemini: 'Близнецы ',
                    Cancer: 'Рак',
                    Leo: 'Лев ',
                    Virgo: 'Дева',
                    Libra: 'Весы',
                    Scorpio: 'Скорпион',
                    Sagittarius: 'Стрелец',
                    Capricorn: 'Козерог',
                    Aquarius: 'Водолей',
                    Pisces: 'Рыбы',
                    "March 21 – April 19": 'Март 21 – Апрель 19',
                    "April 20 – May 20": 'Апрель 20 – Май 20',
                    "May 21 – June 21": 'Май 21 – Июнь 21',
                    "June 22 – July 22": 'Июнь 22 – Июль 22',
                    "July 23 – August 22": 'Июль 23 – Август 22',
                    "August 23 – September 22": 'Август 23 – Сентябрь 22',
                    "September 23 – October 23": 'Сентябрь 23 – Октябрь 23',
                    "October 24 – November 21": 'Октябрь 24 – Ноябрь 21',
                    "November 22 – December 21": 'Ноябрь 22 – Декабрь 21',
                    "December 22 – January 19": 'Декабрь 22 – Январь 19',
                    "January 20 – February 18": 'Январь 20 – Февраль 18',
                    "February 19 – March 20": 'Февраль 19 – Март 20',
                }
            },
            en: {
                translation: {
                    Aries: 'Aries',
                    Taurus: 'Taurus',
                    Gemini: 'Gemini',
                    Cancer: 'Cancer',
                    Leo: 'Leo',
                    Virgo: 'Virgo',
                    Libra: 'Libra',
                    Scorpio: 'Scorpio',
                    Sagittarius: 'Sagittarius',
                    Capricorn: 'Capricorn',
                    Aquarius: 'Aquarius',
                    Pisces: 'Pisces',
                    "March 21 – April 19": 'March 21 – April 19',
                    "April 20 – May 20": 'April 20 – May 20',
                    "May 21 – June 21": 'May 21 – June 21',
                    "June 22 – July 22": 'June 22 – July 22',
                    "July 23 – August 22": 'July 23 – August 22',
                    "August 23 – September 22": 'August 23 – September 22',
                    "September 23 – October 23": 'September 23 – October 23',
                    "October 24 – November 21": 'October 24 – November 21',
                    "November 22 – December 21": 'November 22 – December 21',
                    "December 22 – January 19": 'December 22 – January 19',
                    "January 20 – February 18": 'January 20 – February 18',
                    "February 19 – March 20": 'February 19 – March 20',
                }
            },
        }
    });