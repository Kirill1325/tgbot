import { useEffect, useState } from 'react'
import { ZodiacList } from '../../../widgets/ZodiacList'
import { tg } from '../../../app/main'
import { useTranslation } from 'react-i18next'

const languages = {
    ru: { nativeName: 'Russian' },
    en: { nativeName: 'English' }
}

export const Home = () => {

    const lang = tg.initDataUnsafe.user?.language_code

    const [_currentlanguage, setCurrentLanguage] = useState(lang)

    const { i18n } = useTranslation()

    useEffect(() => {
        tg.ready()
        tg.BackButton.hide()
    }, [])

    const handleClose = () => {
        tg.close()
    }

    const handleLangChange = (lng: string) => {
        i18n.changeLanguage(lng)
        setCurrentLanguage(lng)
    }

    return (
        <div className='Home'>
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
