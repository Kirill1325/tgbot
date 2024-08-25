import { useEffect } from 'react'
import { ZodiacList } from '../../../widgets/ZodiacList'

const tg = window.Telegram.WebApp
let lang = tg.initDataUnsafe.user?.language_code
let ppo = tg.showPopup

export const Home = () => {
    useEffect(() => {
        tg.ready()
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
