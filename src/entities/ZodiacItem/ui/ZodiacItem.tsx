import React from 'react'
import { Zodiac, ZodiacApi } from '..'
import cl from './ZodiacItem.module.scss'
import { Link } from 'react-router-dom'

interface ZodiacItemProps {
    zodiac: Zodiac
}

export const ZodiacItem = ({ zodiac }: ZodiacItemProps) => {

    const [getDescription] = ZodiacApi.useGetDescriptionBySignMutation()

    return (
        <Link to={`/${zodiac.sign}`}>
            <div className={cl.zodiacItem}>
                <p>{zodiac.symbol}</p>
                <p>{zodiac.sign}</p>
                <p>{zodiac.period}</p>
            </div>
        </Link>
    )
}
