import React from 'react'
import { zodiacList } from '../lib/data'
import { ZodiacItem } from '../../../entities/ZodiacItem'
import cl from './ZodiacList.module.scss'

export const ZodiacList = () => {
  return (
    <div className={cl.zodiacList}>
      {zodiacList.map((zodiac) => (
        <ZodiacItem key={zodiac.sign} zodiac={zodiac} />
      ))}
    </div>
  )
}
