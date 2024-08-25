import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        lng: "ru",
        fallbackLng: "ru",
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
                    Pisces: 'Рыбы'
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
                    Pisces: 'Pisces'
                }
            },
        }
    });