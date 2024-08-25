import { useEffect } from 'react'
import { ZodiacList } from '../../../widgets/ZodiacList'
import { tg } from '../../../app/main'
import { useTranslation } from 'react-i18next'

const languages = {
    ru: { nativeName: 'Russian' },
    en: { nativeName: 'English' }
}

export const Home = () => {

    const lang = tg.initDataUnsafe.user?.language_code

    const {  i18n } = useTranslation()

    useEffect(() => {
        tg.ready()
        tg.BackButton.hide()
    }, [])

    const handleClose = () => {
        tg.close()
    }

    return (
        <div className='Home'>
            <p>{lang}</p>
            <div>
                {Object.keys(languages).map((lng) =>
                    <button
                        key={lng}
                        onClick={() => i18n.changeLanguage(lng)}
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
