import { useTranslation } from 'react-i18next'
import { Zodiac } from '..'
import cl from './ZodiacItem.module.scss'
import { Link } from 'react-router-dom'

interface ZodiacItemProps {
    zodiac: Zodiac
}

export const ZodiacItem = ({ zodiac }: ZodiacItemProps) => {

    // const [getDescription] = ZodiacApi.useGetDescriptionBySignMutation()

    const { t } = useTranslation()

    return (
        <Link to={`/${zodiac.sign}`}>
            <div className={cl.zodiacItem}>
                <p>{zodiac.symbol}</p>
                {/* <p>{zodiac.sign}</p> */}
                <p>{t(zodiac.sign)}</p>
                <p>{zodiac.period}</p>
            </div>
        </Link>
    )
}
