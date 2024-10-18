import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

export function asiaTokyoDayjs(dayjsInstance?: dayjs.Dayjs) {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  return (dayjsInstance ?? dayjs()).tz('Asia/Tokyo')
}
