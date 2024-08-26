import { zodiacList } from '../lib/data'
import { ZodiacItem } from '../../../entities/ZodiacItem'
import cl from './ZodiacList.module.scss'

interface ZodiacListProps {
  lang: string
}

export const ZodiacList = ({lang}: ZodiacListProps) => {
  return (
    <div className={cl.zodiacList}>
      {zodiacList.map((zodiac) => (
        <ZodiacItem key={zodiac.sign} zodiac={zodiac} lang={lang} />
      ))}
    </div>
  )
}
