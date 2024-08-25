import { useEffect } from 'react'
import { ZodiacList } from '../../../widgets/ZodiacList'
import { deviceLanguage, tg } from '../../../app/main'
import { useTranslation } from 'react-i18next'
import cl from './Home.module.scss'
import { useAppDispatch } from '../../../app/store'
import { switchLanguage } from '../../../features/SwitchLanguage/model/LanguageSlice'

const languages = {
    ru: { nativeName: 'Russian' },
    en: { nativeName: 'English' }
}

export const Home = () => {

    const dispatch = useAppDispatch()

    const { t, i18n } = useTranslation()

    useEffect(() => {
        const firedOnce = window.sessionStorage.getItem("firedOnce");
        tg.ready()
        tg.BackButton.hide()
        console.log(deviceLanguage)
        !firedOnce && dispatch(switchLanguage(deviceLanguage))
        window.sessionStorage.setItem("firedOnce", "true");
    }, [])

    const handleLangChange = (lng: string | undefined) => {
        i18n.changeLanguage(lng)
        dispatch(switchLanguage(lng))
    }

    return (
        <div className={cl.home}>
            <p>{t('selectLanguage')}</p>
            <div className={cl.buttons}>
                {Object.keys(languages).map((lng) =>
                    <div className={cl.button} key={lng}>
                        <input
                            type='radio'
                            id={lng}
                            name={lng}
                            onChange={() => handleLangChange(lng)}
                            checked={i18n.resolvedLanguage === lng}
                        />
                        <label htmlFor={lng}>{lng}</label>
                    </div>
                )}
            </div>
            <ZodiacList />
        </div>
    )
}
