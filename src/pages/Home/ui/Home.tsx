import { useEffect } from 'react'
import { ZodiacList } from '../../../widgets/ZodiacList'
import { tg } from '../../../app/main'
// import { useTranslation } from 'react-i18next'



// let ppo = tg.showPopup

export const Home = () => {

    const lang = tg.initDataUnsafe.user?.language_code

    // const { t } = useTranslation()

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
            <ZodiacList />
            <button onClick={handleClose}>Close</button>
        </div>
    )
}
