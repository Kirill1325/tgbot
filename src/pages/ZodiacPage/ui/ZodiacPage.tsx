import { useNavigate, useParams } from 'react-router-dom'
import { tg } from '../../../app/main'
import { useEffect, useState } from 'react'
import { ZodiacApi } from '../../../entities/ZodiacItem'
import { ZodiacQueryType } from '../../../entities/ZodiacItem/model/types'
import { useAppSelector } from '../../../app/store'

export const ZodiacPage = () => {

    const { zodiac } = useParams<{ zodiac?: string }>()

    const { language } = useAppSelector(state => state.LanguageSlice)

    const [description, setDescription] = useState<ZodiacQueryType | null>(null)

    const navigate = useNavigate()

    tg.BackButton.onClick(() => navigate('/'))

    const [getDescriptionBySign] = ZodiacApi.useGetDescriptionBySignMutation()

    useEffect(() => {
        tg.BackButton.show()
        zodiac &&
            getDescriptionBySign({
                sign: zodiac.toLocaleLowerCase(),
                language: language === 'ru' ? 'original' : 'translated',
                period: 'today'
            })
                .unwrap()
                .then(fulfilled => setDescription(fulfilled))
                .catch(rejected => console.error(rejected))
    }, [])


    return (
        <div >
            <p>{zodiac}</p>
            <p>{description?.horoscope}</p>
        </div>
    )
}
