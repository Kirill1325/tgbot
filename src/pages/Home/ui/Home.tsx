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


    // const { language } = useAppSelector(state => state.LanguageSlice)

    // useEffect(() => {
    //     console.log(language)
    // }, [language])
    
    const dispatch = useAppDispatch()

    const { i18n } = useTranslation()

    useEffect(() => {

        tg.ready()
        tg.BackButton.hide()
        console.log(deviceLanguage)
        dispatch(switchLanguage(deviceLanguage))
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
            <p>{deviceLanguage}</p>
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
