import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import dayjs from 'dayjs'
import { useMemo } from 'react'

export function useNowJSTDayjs() {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  return useMemo(() => dayjs().tz('Asia/Tokyo'), [])
}
