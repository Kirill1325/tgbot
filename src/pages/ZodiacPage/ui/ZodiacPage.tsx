import { useNavigate, useParams } from 'react-router-dom'
import { tg } from '../../../app/main'
import { useEffect } from 'react'

export const ZodiacPage = () => {

    const { zodiac } = useParams<{ zodiac?: string }>()

    const navigate = useNavigate()

    tg.BackButton.onClick(() => navigate('/'))


    useEffect(() => {
        tg.BackButton.show()
    }, [])

    return (
        <div>{zodiac}</div>
    )
}
