import { useEffect } from 'react'
import { ZodiacList } from '../../../widgets/ZodiacList'
import { tg } from '../../../app/main'



// let ppo = tg.showPopup

export const Home = () => {

    const lang = tg.initDataUnsafe.user?.language_code
    
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
