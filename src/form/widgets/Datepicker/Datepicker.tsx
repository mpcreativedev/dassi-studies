import { WidgetProps } from '@rjsf/core'
import { DateUtils } from 'react-day-picker'
import ReactDayPicker from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import './Datepicker.scss'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DayPicker = ReactDayPicker as any
const DayPickerInput = DayPicker.__esModule ? DayPicker.default : DayPicker

const Datepicker: React.FC<WidgetProps> = (props: WidgetProps) => {
  const { onChange } = props
  const parseDate = (day: Date) => {
    if (DateUtils.isDate(day)) {
      return new Date(day).toISOString().split('T')[0]
    }

    return undefined
  }

  return <DayPickerInput onDayChange={(day: Date) => onChange(parseDate(day))} />
}

export default Datepicker
