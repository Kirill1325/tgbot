import { useNavigate, useParams } from 'react-router-dom'
import { deviceLanguage, tg } from '../../../app/main'
import { useEffect, useState } from 'react'
import { ZodiacApi } from '../../../entities/ZodiacItem'
import { ZodiacQueryType } from '../../../entities/ZodiacItem/model/types'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { useTranslation } from 'react-i18next'
import { switchLanguage } from '../../../features/SwitchLanguage/model/LanguageSlice'
import cl from './ZodiacPage.module.scss'

export const ZodiacPage = () => {

    const { zodiac } = useParams<{ zodiac?: string }>()
    const { t } = useTranslation()


    const { language } = useAppSelector(state => state.LanguageSlice)
    const dispatch = useAppDispatch()

    const [description, setDescription] = useState<ZodiacQueryType | null>(null)

    const navigate = useNavigate()

    tg.BackButton.onClick(() => navigate('/'))

    const [getDescriptionBySign] = ZodiacApi.useGetDescriptionBySignMutation()

    useEffect(() => {
        deviceLanguage && dispatch(switchLanguage(deviceLanguage))
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


    return (
        <div className={cl.zodiacPage}>
            <p>{zodiac && t(zodiac)}</p>
            <p>{description?.horoscope}</p>
        </div>
    )
}
