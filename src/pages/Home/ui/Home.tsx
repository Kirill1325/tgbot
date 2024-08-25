import { useEffect } from 'react'
import { ZodiacList } from '../../../widgets/ZodiacList'
import { lang, tg } from '../../../app/main'
import { useTranslation } from 'react-i18next'
import cl from './Home.module.scss'
import { useAppDispatch } from '../../../app/store'
import { switchLanguage } from '../../../features/SwitchLanguage/model/LanguageSlice'

const languages = {
    ru: { nativeName: 'Russian' },
    en: { nativeName: 'English' }
}

export const Home = () => {


    // const { language } = useAppSelector(state => state.LanguageSlice)
    const dispatch = useAppDispatch()

    const { i18n } = useTranslation()

    useEffect(() => {
        tg.ready()
        tg.BackButton.hide()
        console.log(lang)
        dispatch(switchLanguage(lang))
    }, [])

    const handleClose = () => {
        tg.close()
    }

    const handleLangChange = (lng: string | undefined) => {
        i18n.changeLanguage(lng)
        dispatch(switchLanguage(lng))
    }

    return (
        <div className={cl.home}>
            <p>{lang}</p>
            <div>
                {Object.keys(languages).map((lng) =>
                    <button
                        key={lng}
                        onClick={() => handleLangChange(lng)}
                        disabled={i18n.resolvedLanguage === lng}
                    >
                        {lng}
                    </button>
                )}
            </div>
            <ZodiacList />
            <button onClick={handleClose}>Close</button>
        </div>
    )
}
