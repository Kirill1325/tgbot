import { useParams } from 'react-router-dom'
import { tg } from '../../../app/main'
import { useEffect } from 'react'

export const ZodiacPage = () => {

    const { zodiac } = useParams<{ zodiac?: string }>()

    useEffect(() => {
        tg.BackButton.show()
    }, [])

    return (
        <div>{zodiac}</div>
    )
}
