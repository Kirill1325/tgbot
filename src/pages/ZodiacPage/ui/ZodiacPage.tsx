import { useParams } from 'react-router-dom'

export const ZodiacPage = () => {

    const { zodiac } = useParams<{ zodiac?: string }>()

    return (
        <div>{zodiac}</div>
    )
}
