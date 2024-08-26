import { useTranslation } from 'react-i18next'
import { Zodiac } from '..'
import cl from './ZodiacItem.module.scss'
import { Link } from 'react-router-dom'

interface ZodiacItemProps {
    zodiac: Zodiac,
    lang: string
}

export const ZodiacItem = ({ zodiac, lang }: ZodiacItemProps) => {

    // const [getDescription] = ZodiacApi.useGetDescriptionBySignMutation()

    const { t } = useTranslation()

    return (
        <Link to={`/${zodiac.sign}/${lang}`}>
            <div className={cl.zodiacItem}>
                <p>{zodiac.symbol}</p>
                <p>{t(zodiac.sign)}</p>
                <p>{t(zodiac.period)}</p>
            </div>
        </Link>
    )
}
