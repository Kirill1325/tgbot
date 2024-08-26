import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { tg } from '../../../app/main'
import { useEffect, useState } from 'react'
import { ZodiacApi } from '../../../entities/ZodiacItem'
import { ZodiacQueryType } from '../../../entities/ZodiacItem/model/types'
// import { useAppSelector } from '../../../app/store'
import { useTranslation } from 'react-i18next'
import cl from './ZodiacPage.module.scss'
import { useSwipeable } from 'react-swipeable'

export const ZodiacPage = () => {

    const { zodiac } = useParams<{ zodiac?: string }>()
    const { t } = useTranslation()

    const location = useLocation()
    const language = location.pathname.split('/')[2]

    const [description, setDescription] = useState<ZodiacQueryType | null>(null)

    const navigate = useNavigate()

    tg.BackButton.onClick(() => navigate('/'))

    const [getDescriptionBySign] = ZodiacApi.useGetDescriptionBySignMutation()


    useEffect(() => {

        tg.BackButton.show()
        const fetch = async () => {
            zodiac &&
                await getDescriptionBySign({
                    sign: zodiac.toLocaleLowerCase(),
                    language: language === 'ru' ? 'original' : 'translated',
                    period: 'today'
                })
                    .unwrap()
                    .then(fulfilled => setDescription(fulfilled))
                    .catch(rejected => console.error(rejected))
        }

        fetch()
    }, [])



    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir === 'Right') {
                navigate('/')
            }
        }

    });


    return (
        <div className={cl.zodiacPage} {...handlers}>
            <p>{zodiac && t(zodiac)}</p>
            <p>{description?.horoscope}</p>
        </div>
    )
}
